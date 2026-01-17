import React from "react";
import PageError from "../assets/error-404.png";
import { Link } from "react-router";
const PageNotFound = () => {
  return (
    <div className="w-11/12 mx-auto min-h-screen space-y-5 flex flex-col items-center text-center p-10">
      <figure>
        <img src={PageError} alt="" />
      </figure>
      <h2 className="text-2xl font-bold">Oops, page not found!</h2>
      <p className="text-xl">The page you are looking for is not available.</p>
      <Link
        to="/"
        className="btn text-white font-medium 
                       p-4 rounded-md
                       bg-linear-to-r from-purple-800 to-indigo-500
                       hover:from-purple-600 hover:to-indigo-900
                       transition duration-300 shadow-md"
      >
        Go Back
      </Link>
    </div>
  );
};

export default PageNotFound;
