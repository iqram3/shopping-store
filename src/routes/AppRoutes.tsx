import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "../components/Checkout";
import PageNotFound from "../pages/PageNotFound";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = lazy(() => import("../pages/HomePage"));
const CartPage = lazy(() => import("../pages/CartPage"));
const ProductDetailsPage = lazy(() => import("../pages/ProductDetailsPage"));

const AppRoutes = () => {
  return (
    <Router basename="/shopping-store">
      <Suspense fallback={<div className="text-center m-32">Component Loading...</div>}>
        <ToastContainer />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
