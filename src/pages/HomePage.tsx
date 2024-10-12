import React from "react";
import ProductList from "../components/ProductList";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <h1 className="text-2xl md:text-3xl font-bold text-center my-4">
        Products page
      </h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
