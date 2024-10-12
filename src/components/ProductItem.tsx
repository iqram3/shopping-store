import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { RootState } from "../redux/store";
import { toast } from "react-toastify";

interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  };
}

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleAddToCart = () => {
    const existsInCart = cartItems.some((item) => item.id === product.id);

    if (existsInCart) {
      toast.warn(`${product.title} is already in your cart!`, {
        autoClose: 3000,
        position: "top-center",
      });
    } else {
      dispatch(addToCart(product));
      toast.success(`${product.title} has been added to your cart!`, {
        autoClose: 3000,
        position: "top-center",
      });
    }
  };

  return (
    <div className="border p-4 rounded shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <Link
        to={`/product/${product.id}`}
        aria-label={`View details of ${product.title}`}
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3
          className="text-lg font-bold mt-4 overflow-hidden whitespace-nowrap text-ellipsis"
          title={product.title}
        >
          {product.title}
        </h3>
        <p className="text-gray-700 mt-2">${product.price.toFixed(2)}</p>
      </Link>
      <button
        onClick={handleAddToCart}
        aria-label={`Add ${product.title} to cart`}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-700 transition-colors duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
