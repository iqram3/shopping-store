import React, { useState } from "react";

interface FilterProps {
  onFilterChange: (filters: any) => void;
}

const ProductFilter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [category, setCategory] = useState<string>("");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    onFilterChange({ category: selectedCategory });
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Filter by</h2>
        <label className="block mb-1">Category:</label>
        <select
          className="border border-gray-300 p-2 rounded w-full md:w-auto"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
