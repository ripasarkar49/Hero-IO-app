"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Download, Star, ThumbsUp, Trash2, Filter } from "lucide-react";
import AppDataNotFound from "@/components/AppDataNotFound";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function InstallationPage() {
  const [installation, setInstallation] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("installation")) || [];
    setInstallation(saveList);
    setMounted(true);
  }, []);

  const handleRemove = (id) => {
    const updatedList = installation.filter((a) => a.id !== id);
    setInstallation(updatedList);
    localStorage.setItem("installation", JSON.stringify(updatedList));
  };

  const sortedItem = useMemo(() => {
    if (sortOrder === "downloads-asc") return [...installation].sort((x, y) => x.downloads - y.downloads);
    if (sortOrder === "downloads-desc") return [...installation].sort((x, y) => y.downloads - x.downloads);
    return installation;
  }, [installation, sortOrder]);

  const formatCount = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  if (!mounted) return null;

  return (
    <div className="container mx-auto px-4 pt-24 pb-10 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 sticky top-16 z-40 bg-background/95 backdrop-blur py-4 border-b border-border/40">
        <h1 className="text-3xl font-bold tracking-tight">
          Installed Apps <span className="text-muted-foreground text-lg font-normal">({sortedItem.length})</span>
        </h1>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Default</SelectItem>
              <SelectItem value="downloads-asc">Downloads (Low-High)</SelectItem>
              <SelectItem value="downloads-desc">Downloads (High-Low)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {sortedItem.length === 0 ? (
        <AppDataNotFound />
      ) : (
        <div className="grid gap-4">
          {sortedItem.map((a) => (
            <Card key={a.id} className="overflow-hidden bg-card/50 backdrop-blur-sm border-white/5 hover:border-white/10 transition-colors">
              <CardContent className="p-4 flex flex-col md:flex-row items-center gap-6">
                <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-xl border border-white/10">
                  <Image 
                    src={a.image} 
                    alt={a.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>

                <div className="flex-1 text-center md:text-left space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-bold text-xl">{a.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Size: {a.size ? `${a.size.toFixed(0)} MB` : "N/A"}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <Badge variant="secondary" className="gap-1 bg-green-500/10 text-green-500 border-green-500/20">
                      <Download className="w-3 h-3" /> {formatCount(a.downloads)}
                    </Badge>
                    <Badge variant="secondary" className="gap-1 bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                      <Star className="w-3 h-3 fill-current" /> {a.ratingAvg}
                    </Badge>
                    <Badge variant="secondary" className="gap-1 bg-purple-500/10 text-purple-500 border-purple-500/20">
                      <ThumbsUp className="w-3 h-3" /> {formatCount(a.reviews)}
                    </Badge>
                  </div>
                </div>

                <Button 
                  variant="destructive" 
                  onClick={() => handleRemove(a.id)}
                  className="w-full md:w-auto gap-2"
                >
                  <Trash2 className="w-4 h-4" /> Uninstall
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
