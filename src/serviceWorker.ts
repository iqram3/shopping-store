export {}; // Ensure this is treated as a module

// Type declarations
declare const self: ServiceWorkerGlobalScope;

// Basic Worker Global Scope
interface ServiceWorkerGlobalScope {
  addEventListener(
    type: "install" | "activate" | "fetch",
    listener: (event: Event) => void
  ): void;
}

interface ExtendableEvent extends Event {
  waitUntil(fn: Promise<any>): void;
}

interface FetchEvent extends ExtendableEvent {
  request: Request;
  respondWith(response: Promise<Response> | Response): void;
}

const CACHE_NAME = "product-cache-v1";
const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/static/js/bundle.js",
  "/manifest.json",
  "https://fakestoreapi.com/products", // Add more URLs as needed
];

// Installation Event: Cache assets
self.addEventListener("install", (event: Event) => {
  const installEvent = event as ExtendableEvent;
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Fetch Event: Serve cached assets if available
self.addEventListener("fetch", (event: Event) => {
  const fetchEvent = event as FetchEvent;
  if (fetchEvent.request.url.includes("fakestoreapi.com")) {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then((response) => {
        return (
          response ||
          fetch(fetchEvent.request).then((networkResponse) => {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(fetchEvent.request, networkResponse.clone());
              return networkResponse;
            });
          })
        );
      })
    );
  }
});
// Register function to register the service worker
export function register() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/shopping-store/serviceWorker.ts")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    });
  }
}

// Add unregister function for cleanup if needed
export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister().then(() => {
        console.log("Service Worker unregistered");
      });
    });
  }
}
