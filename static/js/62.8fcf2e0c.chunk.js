"use strict";(self.webpackChunkecommerce_app=self.webpackChunkecommerce_app||[]).push([[62],{62:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var r=s(43),l=s(475),a=s(3),o=s(267),n=s(401),c=s(579);const i=e=>{let{product:t}=e;const s=(0,a.wA)(),r=(0,a.d4)((e=>e.cart.items));return(0,c.jsxs)("div",{className:"border p-4 rounded shadow-lg hover:shadow-2xl transition-shadow duration-300",children:[(0,c.jsxs)(l.N_,{to:`/product/${t.id}`,"aria-label":`View details of ${t.title}`,children:[(0,c.jsx)("img",{src:t.image,alt:t.title,loading:"lazy",className:"w-full h-48 object-cover rounded-lg"}),(0,c.jsx)("h3",{className:"text-lg font-bold mt-4 overflow-hidden whitespace-nowrap text-ellipsis",title:t.title,children:t.title}),(0,c.jsxs)("p",{className:"text-gray-700 mt-2",children:["$",t.price.toFixed(2)]})]}),(0,c.jsx)("button",{onClick:()=>{r.some((e=>e.id===t.id))?n.oR.warn(`${t.title} is already in your cart!`,{autoClose:3e3,position:"top-center"}):(s((0,o.bE)(t)),n.oR.success(`${t.title} has been added to your cart!`,{autoClose:3e3,position:"top-center"}))},"aria-label":`Add ${t.title} to cart`,className:"bg-blue-600 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-700 transition-colors duration-300",children:"Add to Cart"})]})},d=e=>{let{onFilterChange:t}=e;const[s,l]=(0,r.useState)("");return(0,c.jsx)("div",{className:"bg-gray-100 p-4 rounded-lg shadow-md",children:(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("h2",{className:"text-lg font-bold",children:"Filter by"}),(0,c.jsx)("label",{className:"block mb-1",children:"Category:"}),(0,c.jsxs)("select",{className:"border border-gray-300 p-2 rounded w-full md:w-auto",value:s,onChange:e=>{const s=e.target.value;l(s),t({category:s})},children:[(0,c.jsx)("option",{value:"",children:"All Categories"}),(0,c.jsx)("option",{value:"electronics",children:"Electronics"}),(0,c.jsx)("option",{value:"jewelery",children:"Jewelery"}),(0,c.jsx)("option",{value:"men's clothing",children:"Men's Clothing"}),(0,c.jsx)("option",{value:"women's clothing",children:"Women's Clothing"})]})]})})},u=e=>{let{currentPage:t,totalPages:s,onPageChange:r}=e;const l=Array.from({length:s},((e,t)=>t+1));return(0,c.jsx)("div",{className:"flex justify-center my-4",children:l.map((e=>(0,c.jsx)("button",{onClick:()=>r(e),className:"mx-2 px-4 py-2 rounded "+(t===e?"bg-blue-600 text-white":"bg-gray-200"),children:e},e)))})};var h=s(726);const g=()=>{const[e,t]=(0,r.useState)([]),s=(0,a.wA)(),{products:l,isLoading:o,isError:n,errorMessage:g}=(0,a.d4)((e=>e.products)),[x,m]=(0,r.useState)(1),[p]=(0,r.useState)(10);(0,r.useEffect)((()=>{s((0,h.j0)())}),[s]),(0,r.useEffect)((()=>{l.length>0&&t(l)}),[l]);const j=(0,r.useMemo)((()=>{const t=x*p,s=t-p;return e.slice(s,t)}),[e,x,p]);if(o)return(0,c.jsx)("div",{className:"text-center m-32",children:"Products are Loading..."});if(n)return(0,c.jsxs)("div",{className:"text-center text-red-500",children:["Error: ",g]});const b=Math.ceil(e.length/p);return(0,c.jsxs)("div",{className:"p-4",children:[(0,c.jsx)(d,{onFilterChange:e=>{let s=[...l];e.category&&(s=s.filter((t=>t.category===e.category))),t(s),m(1)}}),(0,c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6",children:j.map((e=>(0,c.jsx)(i,{product:e},e.id)))}),(0,c.jsx)(u,{currentPage:x,totalPages:b,onPageChange:e=>m(e)})]})},x=()=>(0,c.jsxs)("div",{className:"container mx-auto px-4 md:px-8 lg:px-12",children:[(0,c.jsx)("h1",{className:"text-2xl md:text-3xl font-bold text-center my-4",children:"Our Products"}),(0,c.jsx)(g,{})]})}}]);
//# sourceMappingURL=62.8fcf2e0c.chunk.js.map