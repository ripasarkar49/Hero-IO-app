"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { useApp } from "@/hooks/use-app";
import AppCard from "@/components/AppCard";
import Loading from "@/components/Loading";
import AppDataNotFound from "@/components/AppDataNotFound";
import { Input } from "@/components/ui/input";

export default function AppsPage() {
  const { apps, loading, error } = useApp();
  const [search, setSearch] = useState("");

  const filteredApps = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return apps;
    return apps.filter((app) => app.title.toLowerCase().includes(term));
  }, [apps, search]);

  return (
    <div className="container mx-auto px-4 pt-24 pb-6 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight">All Applications</h1>
          <p className="text-muted-foreground">
            Explore our complete catalog of applications.
          </p>
        </div>

        <div className="w-full md:w-auto flex items-center gap-4">
           <div className="relative w-full md:min-w-[300px]">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
             <Input 
               placeholder="Search apps..." 
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="pl-9 bg-background/50 backdrop-blur-sm"
             />
           </div>
           <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
             {filteredApps.length} Found
           </div>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : error ? (
         <div className="text-center text-red-500 py-10">Error loading applications</div>
      ) : filteredApps.length === 0 ? (
        <AppDataNotFound />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}
