"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6 px-4">
      <div className="p-4 bg-red-500/10 rounded-full">
        <AlertCircle className="w-12 h-12 text-red-500" />
      </div>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Something went wrong!</h2>
        <p className="text-muted-foreground max-w-[500px]">
          We encountered an unexpected error. Our team has been notified.
        </p>
      </div>
      <Button onClick={() => reset()} variant="outline">
        Try again
      </Button>
    </div>
  );
}
