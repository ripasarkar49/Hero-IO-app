import Link from "next/link";
import Image from "next/image";
import { Download, Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AppCard({ app }) {
  const { image, title, downloads, ratingAvg: rating, id } = app;

  const formatCount = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  const formattedDownloads = formatCount(downloads);

  return (
    <Link href={`/app/${id}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-white/10">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
        </div>
        <CardHeader className="p-4 pb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="flex justify-between items-center gap-2">
            <Badge variant="secondary" className="gap-1 bg-green-900/30 text-green-400 hover:bg-green-900/50">
              <Download className="w-3 h-3" />
              {formattedDownloads}
            </Badge>
            <Badge variant="secondary" className="gap-1 bg-yellow-900/30 text-yellow-400 hover:bg-yellow-900/50">
              <Star className="w-3 h-3 fill-current" />
              {rating.toFixed(1)}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
