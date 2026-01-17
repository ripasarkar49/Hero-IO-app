"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "@/components/Loading";
import AppCard from "@/components/AppCard";

export default function AppsPage() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/user-apps")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch apps:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="pt-24"><Loading /></div>;

  return (
    <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">My Apps</h1>
        <p className="text-muted-foreground">Manage your collection of applications.</p>
      </div>

      {apps.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">No apps found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}
