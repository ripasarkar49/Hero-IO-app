import React, { useState, useEffect } from "react";
import UseApp from "../hooks/UseApp";
import AppCards from "../components/AppCards";
import Loading from "../components/Loading";
import AppDataNotFount from "./AppDataNotFount";

const App = () => {
  const { apps, loading, error } = UseApp();

  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const term = search.trim().toLowerCase();

  useEffect(() => {
    if (term) {
      setIsSearching(true);

      const timer = setTimeout(() => {
        setIsSearching(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [term]);

  const searchedApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  return (
    <div className="pt-24 pb-6 w-11/12 mx-auto">
      <div className="text-center py-6">
        <h2 className="font-bold text-3xl">Our All Applications</h2>
        <p className="text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between py-5 items-center">
        <h2 className="text-xl md:text-2xl font-semibold">
          ({searchedApps.length}) App Found
        </h2>
        <label className="input text-base">
          <input
            value={search}
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search App"
          />
        </label>
      </div>

      {loading || isSearching ? (
        <Loading count={28} />
      ) : searchedApps.length === 0 ? (
        <AppDataNotFount></AppDataNotFount>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 pb-6 lg:grid-cols-4 gap-5">
          {searchedApps.map((app) => (
            <AppCards key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
