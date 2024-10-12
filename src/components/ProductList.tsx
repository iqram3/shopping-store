import React, { useEffect, useState, useMemo } from "react";
import ProductItem from "./ProductItem";
import ProductFilter from "./ProductFilter";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchProducts } from "../redux/productSlice";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const ProductList: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const { products, isLoading, isError, errorMessage } = useSelector(
    (state: RootState) => state.products
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      setFilteredProducts(products);
    }
  }, [products]);

  const handleFilterChange = (filters: any) => {
    let updatedProducts = [...products];

    if (filters.category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === filters.category
      );
    }
    setFilteredProducts(updatedProducts);
    setCurrentPage(1);
  };

  const memoizedFilteredProducts = useMemo(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [filteredProducts, currentPage, productsPerPage]);

  if (isLoading) {
    return <div className="text-center m-32">Products are Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">Error: {errorMessage}</div>
    );
  }

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="p-4">
      <ProductFilter onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {memoizedFilteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default ProductList;
