import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { AppDispatch, RootState } from "../redux/store";
import { toast } from "react-toastify";
import { fetchProductById } from "../redux/productSlice";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { product, isLoading, isError, errorMessage } = useSelector(
    (state: RootState) => state.products
  );
  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (product) {
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
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <div className="text-center m-32">Product is Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center m-32 text-red-500">Error: {errorMessage}</div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={handleBack}
        className="bg-gray-500 text-white px-4 py-2 rounded mb-4 hover:bg-gray-600 transition duration-200"
      >
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product?.image}
          alt={product?.title}
          loading="lazy"
          className="w-72 h-72 object-cover rounded-lg shadow-md mx-auto"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {product?.title}
            </h1>
            <p className="text-lg md:text-xl font-semibold mb-2">
              ${product?.price.toFixed(2)}
            </p>
            <p className="text-gray-700 mb-4">{product?.description}</p>
          </div>
          <button
            onClick={handleAddToCart}
            aria-label={`Add ${product?.title} to cart`}
            className="bg-blue-500 text-white px-6 py-3 rounded mt-4 hover:bg-blue-600 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
