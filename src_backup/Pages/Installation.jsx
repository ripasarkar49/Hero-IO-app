import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaDownload, FaStar } from "react-icons/fa";
import AppDataNotFount from "./AppDataNotFount";

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("installation"));
    if (saveList) setInstallation(saveList);
  }, []);

  const formatCount = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installation"));
    const updatedList = existingList.filter((a) => a.id !== id);
    setInstallation(updatedList);
    localStorage.setItem("installation", JSON.stringify(updatedList));
  };

  // 🔄 Sort by Downloads only
  const sortedItem = (() => {
    if (sortOrder === "downloads-asc") return [...installation].sort((x, y) => x.downloads - y.downloads);
    if (sortOrder === "downloads-desc") return [...installation].sort((x, y) => y.downloads - x.downloads);
    return installation;
  })();

  return (
    <div className="py-6 w-11/12 mx-auto">
      <div className="flex justify-between py-5 items-center">
        <h2 className="text-xl md:text-2xl font-semibold">
          {sortedItem.length} Apps Found
        </h2>

        <select
          className="select select-bordered text-base"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Sort by Downloads</option>
          <option value="downloads-asc">Low → High</option>
          <option value="downloads-desc">High → Low</option>
        </select>
      </div>

      {sortedItem.length === 0 && <AppDataNotFount />}

      <div className="space-y-4">
        {sortedItem.map((a) => {
          const formattedDownloads = formatCount(a.downloads);
          const formattedReviews = formatCount(a.reviews);
          const formattedSize = a.size ? ` (${a.size.toFixed(0)} MB)` : "";

          return (
            <div
              key={a.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-center md:items-start gap-4"
            >
              <img className="w-24 h-24 object-cover rounded-md" src={a.image} alt={a.title} />

              <div className="flex-1 text-center md:text-left">
                <h3 className="font-bold text-lg md:text-xl">
                  {a.title} {formattedSize}
                </h3>

                <div className="flex justify-center md:justify-start gap-6 text-sm mt-2">
                  <div className="flex items-center gap-1 text-green-600">
                    <FaDownload /> {formattedDownloads}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar /> {a.ratingAvg}
                  </div>
                  <div className="flex items-center gap-1 text-purple-600">
                    <AiFillLike /> {formattedReviews}
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleRemove(a.id)}
                className="btn btn-success w-full md:w-auto"
              >
                Uninstall
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Installation;
