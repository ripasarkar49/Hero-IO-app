import React from "react";
import { FaDownload, FaRegStar } from "react-icons/fa";

const AppCards = ({ app }) => {
  const { image, title, downloads, ratingAvg: rating } = app;
  const formatCount = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  const formattedDownloads = formatCount(downloads);
  //   const formattedReviews = formatCount(reviews);
  return (
    <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out">
      <figure className="h-48  overflow-hidden">
        <img className="w-full object-cover" src={image} alt="" />
      </figure>
      <div className="p-2">
        <h2 className="card-title py-2">{title}</h2>
        <div className="flex justify-between text-sm">
          <span className="flex bg-gray-100 p-1 text-green-800 gap-1 rounded">
            {" "}
            <FaDownload />
            {formattedDownloads}
          </span>
          <span className="flex bg-yellow-50 p-1 text-yellow-700 gap-1 rounded">
            <FaRegStar /> {rating.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCards;
