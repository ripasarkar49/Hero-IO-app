import React, { useState } from "react";
import UseApp from "../hooks/UseApp";
import AppCards from "../components/AppCards";

const App = () => {
  const { apps, loading, error } = UseApp();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) =>
        app.title.toLocaleLowerCase().includes(term)
      )
    : apps;
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center  py-6">
        <h2 className="font-bold text-3xl">Our All Applications</h2>
        <p className="text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between py-5 items-center">
        <h2 className="text-2xl font-semibold">({searchedApps.length}) App Found</h2>
        <label className="input">
          <input value={search} type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search App" />
        </label>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 pb-6 lg:grid-cols-4 gap-5 ">
        {searchedApps.map((app) => (
          <AppCards key={app.id} app={app}></AppCards>
        ))}
      </div>
    </div>
  );
};

export default App;
