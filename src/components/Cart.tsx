import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (id: number, title: string) => {
    dispatch(removeFromCart(id));
    toast.success(`${title} removed from cart!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handleBack = () => {
    navigate(-1);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={handleBack}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200 mb-4"
        aria-label="Go back to previous page"
      >
        Back
      </button>

      <h2 className="text-3xl font-bold text-center my-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-lg">
          Your cart is empty! Please add some items.
        </p>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border-b py-4 flex flex-col md:flex-row justify-between items-center"
            >
              <div className="flex flex-col md:flex-row items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg"
                />
                <div className="mt-4 md:mt-0 md:ml-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id, item.title)}
                className="bg-red-500 text-white px-4 py-2 rounded mt-4 md:mt-0 hover:bg-red-600 transition duration-200"
                aria-label={`Remove ${item.title} from cart`}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h3>
            <button
              onClick={handleCheckout}
              className="bg-blue-500 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-600 transition duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
