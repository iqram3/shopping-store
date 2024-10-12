import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

const Checkout: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      `Order Successfully placed for ${name}! Total: $${totalPrice.toFixed(2)}`,
      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    dispatch(clearCart());
    navigate("/");
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center my-8">
          Your Cart is Empty!
        </h2>
        <p className="text-center text-lg">
          Please add items to your cart before checking out.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center my-8">Checkout</h2>
      <form
        onSubmit={handlePlaceOrder}
        className="bg-white shadow-lg rounded-lg p-6"
      >
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border rounded w-full py-2 px-3"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="border rounded w-full py-2 px-3"
            placeholder="Enter your address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="payment">
            Payment Method
          </label>
          <select
            id="payment"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="border rounded w-full py-2 px-3"
          >
            <option value="credit">COD</option>
            <option value="credit">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <h3 className="text-xl font-bold mb-4">
          Total: ${totalPrice.toFixed(2)}
        </h3>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-600 transition duration-200 mr-4"
        >
          Place Order
        </button>
        <button
          type="button"
          onClick={handleBack}
          className="bg-gray-500 text-white px-4 py-2 rounded mb-4 hover:bg-gray-600 transition duration-200"
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default Checkout;
