"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import AppCard from "@/components/AppCard";
import Loading from "@/components/Loading";
import { useApp } from "@/hooks/use-app";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { apps, loading, error } = useApp();
  const featureApp = apps.slice(0, 8);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      <section className="container mx-auto px-4 py-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Trending Apps</h2>
          <p className="text-muted-foreground">
            Explore the most popular applications hitting the market this week.
          </p>
        </div>

        {loading ? (
          <Loading />
        ) : error ? (
           <div className="text-center text-red-500">Failed to load apps</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureApp.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}

        <div className="flex justify-center pt-8">
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-xl shadow-purple-900/20">
            <Link href="/app" className="gap-2">
              Explore All Apps <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
