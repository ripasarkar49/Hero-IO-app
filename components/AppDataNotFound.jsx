import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AppDataNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
        No Data Found
      </h2>
      <p className="text-muted-foreground max-w-md">
        We couldn't find any applications matching your criteria. Try adjusting your search or check back later.
      </p>
      <Button asChild variant="outline">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
