import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6 px-4">
      <h1 className="text-9xl font-extrabold tracking-tighter text-muted/20">404</h1>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Page Not Found</h2>
        <p className="text-muted-foreground max-w-[500px]">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
      </div>
      <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
