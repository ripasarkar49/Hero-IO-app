import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import UseApp from "../hooks/UseApp";
import { FaDownload, FaStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDeatails = () => {
  const { id } = useParams();
  const { apps, loading, error } = UseApp();
  const app = apps.find((a) => String(a.id) === id);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];
    const alreadyInstalled = existingList.some((a) => a.id === app?.id);
    setIsInstalled(alreadyInstalled);
  }, [app?.id]);

  if (loading) return <p>Loading...</p>;
  if (!app) return <p>No data found!</p>;

  const {
    image,
    title,
    downloads,
    ratingAvg: rating,
    companyName,
    size = 50,
    reviews,
    ratings,
    description,
  } = app;

  const formatCount = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  const formattedDownloads = formatCount(downloads);
  const formattedReviews = formatCount(reviews);
  const formattedSize = size ? ` (${size.toFixed(0)} MB)` : "";

  const handleAppInstall = () => {
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];

    const isDuplicate = existingList.some((a) => a.id === app.id);

    if (isDuplicate) {
      toast.warning("App already installed!", {
        position: "top-right",
      });
      return;
    }

    existingList.push(app);
    localStorage.setItem("installation", JSON.stringify(existingList));
    setIsInstalled(true);
    toast.success("App installed!", { position: "top-right" });
  };

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        <div className="shrink-0 w-full md:w-auto">
          <figure className="w-full max-w-[200px] mx-auto md:mx-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-xl"
            />
          </figure>
        </div>

        <div className="card-body p-0 grow">
          <h2 className="card-title font-bold text-xl md:text-3xl">{title}</h2>
          <p className="text-sm md:text-base">
            <span>Developed by</span>
            <span className="text-purple-400"> {companyName}</span>
          </p>

          <div className="w-full h-px bg-gray-400 my-2"></div>

          <div className="grid grid-cols-3 gap-4 md:flex md:gap-16 text-sm md:text-base">
            <div className="flex flex-col items-center text-center">
              <FaDownload size={28} className="text-green-900" />
              <p className="text-gray-600">Downloads</p>
              <h2 className="text-xl md:text-3xl font-bold">
                {formattedDownloads}
              </h2>
            </div>

            <div className="flex flex-col items-center text-center">
              <FaStar size={28} className="text-yellow-600" />
              <p className="text-gray-600">Average Ratings</p>
              <h2 className="text-xl md:text-3xl font-bold">
                {rating.toFixed(1)}
              </h2>
            </div>

            <div className="flex flex-col items-center text-center">
              <AiFillLike size={28} className="text-purple-600" />
              <p className="text-gray-600">Total Reviews</p>
              <h2 className="text-xl md:text-3xl font-bold">
                {formattedReviews}
              </h2>
            </div>
          </div>

          <div className="mt-4">
            <button
              onClick={handleAppInstall}
              className="btn btn-success w-full md:w-auto"
            >
              {isInstalled ? "Installed" : "Install Now"} {formattedSize}
            </button>

            <ToastContainer />
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-400 my-10"></div>

    
<div className="flex flex-col gap-10"> 

  <div className="w-full">
    <h2 className="text-2xl font-bold pb-5">Description</h2>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>

  <div className="w-full h-px bg-gray-700 my-4"></div> 

 
<div className="w-full bg-gray-900/50 p-6 rounded-2xl border border-white/5">
  <h2 className="text-2xl font-bold mb-6 text-white">Rating Distribution</h2>
  
  <div className="h-64 w-full"> 
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={ratings || []}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid 
          strokeDasharray="3 3" 
          horizontal={true} 
          vertical={false} 
          stroke="#4b5563" 
        />
        <XAxis type="number" hide />
        <YAxis 
          dataKey="name" 
          type="category" 
          fontSize={13} 
          stroke="#9ca3af"
          tickLine={false}
          axisLine={false}
          width={70}
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
          itemStyle={{ color: '#fff' }}
          cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }} 
        />
        <Bar 
          dataKey="count" 
          fill="#F59E0B"  
          barSize={18} 
          radius={[0, 4, 4, 0]} 
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>

</div>
    </div>
  );
};

export default AppDeatails;
