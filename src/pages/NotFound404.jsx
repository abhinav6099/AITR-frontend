import React from "react";
import { Link } from "react-router-dom";
import { Ghost } from "lucide-react"; // Optional icon

const NotFound404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center max-w-md bg-white shadow-xl rounded-2xl p-10">
        <div className="text-indigo-500 mb-4">
          <Ghost className="w-16 h-16 mx-auto" />
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>
        <p className="text-xl text-gray-600 font-semibold mb-4">
          Page Not Found
        </p>
        <p className="text-gray-500 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound404;
