import React from "react";
import { Link } from "react-router-dom";

const PageNotFound: React.FC = () => {
  const headerHeight = 60;
  const footerHeight = 60;

  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8"
      style={{ height: `calc(100vh - ${headerHeight}px - ${footerHeight}px)` }}
    >
      <h1 className="text-6xl sm:text-8xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-600 mb-4 text-center">
        Page Not Found
      </h2>
      <p className="text-md sm:text-lg text-gray-500 mb-8 text-center">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-600 transition duration-200"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
