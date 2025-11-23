import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaDownload, FaStar } from "react-icons/fa";

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("installation"));
    if (saveList) setInstallation(saveList);
  }, []);

  // Format Function
  const formatCount = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  if (!installation.length) return <p>No Data Available</p>;

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...installation].sort((x, y) => x.size - y.size);
    } else if (sortOrder === "size-desc") {
      return [...installation].sort((x, y) => y.size - x.size);
    } else {
      return installation;
    }
  })();

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installation"));
    let updatedList = existingList.filter((a) => a.id !== id);
    setInstallation(updatedList);
    localStorage.setItem("installation", JSON.stringify(updatedList));
  };
  return (
    <div className="py-6 w-11/12 mx-auto">
      <div className="flex justify-between py-5 items-center">
        <h2 className="text-3xl font-semibold">
          {sortedItem.length} App Found
        </h2>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Size</option>
            <option value="size-asc">Low-&gt;High</option>
            <option value="size-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-3">
        {sortedItem.map((a) => {
          const formattedDownloads = formatCount(a.downloads);
          const formattedReviews = formatCount(a.reviews);
          const formattedSize = a.size ? ` (${a.size.toFixed(0)} MB)` : "";

          return (
            <div key={a.id} className="card card-side bg-base-100 shadow">
              <div>
                <figure>
                  <img
                    className="w-40 h-28 object-cover rounded-l-selector"
                    src={a.image}
                    alt={a.title}
                  />
                </figure>
              </div>

              <div className="card-body">
                <h3 className="card-title text-xl font-bold">
                  {a.title} {formattedSize}
                </h3>

                <div className="grid grid-cols-3 gap-2 md:flex md:gap-5 text-sm md:text-base">
                  <div className="flex items-center text-center">
                    <FaDownload size={14} className="text-green-900" />
                    <h2 className="text-sm font-bold">{formattedDownloads}</h2>
                  </div>

                  <div className="flex items-center text-center">
                    <FaStar size={14} className="text-yellow-600" />
                    <h2 className="text-sm font-bold">{a.ratingAvg}</h2>
                  </div>

                  <div className="flex items-center text-center">
                    <AiFillLike size={14} className="text-purple-600" />
                    <h2 className="text-sm font-bold">{formattedReviews}</h2>
                  </div>
                </div>
              </div>

              <div className="pr-4 flex items-center gap-3">
                <button onClick={()=>handleRemove(a.id)} className="btn btn-success">
                  Uninstall
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Installation;
