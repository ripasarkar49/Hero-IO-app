"use client";

import { useEffect, useState } from "react";
// Import recharts components dynamically to avoid SSR issues
import dynamic from 'next/dynamic';
import Image from "next/image";
import { Download, Star, ThumbsUp, Check } from "lucide-react";
import { useApp } from "@/hooks/use-app";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Dynamic import for Recharts
const BarChart = dynamic(() => import('recharts').then(mod => mod.BarChart), { ssr: false });
const Bar = dynamic(() => import('recharts').then(mod => mod.Bar), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(mod => mod.CartesianGrid), { ssr: false });
const ResponsiveContainer = dynamic(() => import('recharts').then(mod => mod.ResponsiveContainer), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => mod.Tooltip), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => mod.YAxis), { ssr: false });

export default function AppDetailsPage({ params }) {
  const { id } = params;
  const { apps, loading } = useApp();
  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (apps.length > 0) {
      const foundApp = apps.find((a) => String(a.id) === id);
      setApp(foundApp);

      if (foundApp) {
        const existingList = JSON.parse(localStorage.getItem("installation")) || [];
        const alreadyInstalled = existingList.some((a) => a.id === foundApp.id);
        setIsInstalled(alreadyInstalled);
      }
    }
  }, [apps, id]);

  const handleAppInstall = () => {
    if (!app) return;
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];
    const isDuplicate = existingList.some((a) => a.id === app.id);

    if (isDuplicate) {
      toast.warning("App already installed!");
      return;
    }

    existingList.push(app);
    localStorage.setItem("installation", JSON.stringify(existingList));
    setIsInstalled(true);
    toast.success("App installed successfully!");
  };

  const formatCount = (num) => {
    if (!num) return "0";
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  if (loading || !mounted) return <div className="min-h-screen pt-20"><Loading /></div>;
  if (!app) return <div className="min-h-screen pt-20 text-center">App not found</div>;

  const {
     image, title, downloads, ratingAvg: rating, companyName, 
     size = 50, reviews, ratings, description 
  } = app;

  return (
    <div className="container mx-auto px-4 pt-24 pb-10 min-h-screen space-y-12">
      <ToastContainer position="top-right" theme="dark" />
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="relative w-full max-w-[200px] aspect-square mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div className="flex-1 space-y-6 w-full text-center md:text-left">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Developed by <span className="text-primary font-medium">{companyName}</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
            <div className="flex flex-col items-center md:items-start p-3 bg-card/30 rounded-lg border border-white/5">
              <Download className="w-6 h-6 text-green-500 mb-1" />
              <span className="text-2xl font-bold">{formatCount(downloads)}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Downloads</span>
            </div>
            <div className="flex flex-col items-center md:items-start p-3 bg-card/30 rounded-lg border border-white/5">
              <Star className="w-6 h-6 text-yellow-500 mb-1 fill-current" />
              <span className="text-2xl font-bold">{rating?.toFixed(1)}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Rating</span>
            </div>
            <div className="flex flex-col items-center md:items-start p-3 bg-card/30 rounded-lg border border-white/5">
              <ThumbsUp className="w-6 h-6 text-purple-500 mb-1" />
              <span className="text-2xl font-bold">{formatCount(reviews)}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Reviews</span>
            </div>
          </div>

          <Button 
            size="lg" 
            onClick={handleAppInstall}
            disabled={isInstalled}
            className={`w-full md:w-auto min-w-[200px] text-lg font-semibold shadow-lg ${
              isInstalled 
                ? "bg-green-600/20 text-green-500 hover:bg-green-600/30" 
                : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
            }`}
          >
            {isInstalled ? (
              <span className="flex items-center gap-2"><Check className="w-5 h-5" /> Installed</span>
            ) : (
              `Install Now (${size.toFixed(0)} MB)`
            )}
          </Button>
        </div>
      </div>

      {/* Analytics & Description Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-white/10 pt-10">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold">About this App</h2>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>

        <div className="p-6 bg-card/30 rounded-xl border border-white/5">
          <h2 className="text-xl font-bold mb-6">Rating Distribution</h2>
          <div className="h-[250px] w-full">
            {ratings && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={ratings}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                   <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#333" />
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    stroke="#888" 
                    width={20}
                    tick={{fill: '#888', fontSize: 12}}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }}
                    itemStyle={{ color: '#fff' }}
                    cursor={{fill: 'transparent'}}
                  />
                  <Bar dataKey="count" fill="#f59e0b" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
