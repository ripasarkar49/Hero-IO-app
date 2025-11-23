import React from "react";
import AppCards from "../components/AppCards";
import UseApp from "../hooks/UseApp";
import { Link } from "react-router";
import Loading from "../components/Loading";
import Banner from "../components/Banner";

const Home = () => {
  const { apps, loading, error } = UseApp();
  const featureApp = apps.slice(0, 8);
  return (
    <div>
        <Banner></Banner>
      <div className="text-center w-11/12 mx-auto py-6">
        <h2 className="font-bold text-2xl">Trending Apps</h2>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

     {
        loading?<Loading></Loading>:
         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto">
        {featureApp.map((app) => (
          <AppCards key={app.id} app={app}></AppCards>
        ))}
      </div>
     }
      <div className="text-center py-6 w-11/12 mx-auto">
        <Link
          to="/app"
          className="btn text-white font-medium 
                       p-4 rounded-md
                       bg-linear-to-r from-purple-800 to-indigo-500
                       hover:from-purple-600 hover:to-indigo-900
                       transition duration-300 shadow-md"
        >
          Show All App
        </Link>
      </div>
    </div>
  );
};

export default Home;
