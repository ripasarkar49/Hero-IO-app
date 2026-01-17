import { NextResponse } from "next/server";

// Simulating database with in-memory storage + initially some data
// In a real app, this would be a DB call.
let apps = [
  {
    id: "1",
    title: "Project Management Tool",
    description: "A comprehensive tool to manage your projects efficiently.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    createdAt: new Date().toISOString(),
  },
   {
    id: "2",
    title: "Analytics Dashboard",
    description: "Visualize your data with powerful analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    createdAt: new Date().toISOString(),
  },
];

export async function GET() {
  return NextResponse.json(apps);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, description, image, downloads, ratingAvg } = body;

    if (!title || !description || !image) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newApp = {
      id: Date.now().toString(),
      title,
      description,
      image,
      downloads: Number(downloads) || 0,
       ratingAvg: Number(ratingAvg) || 0,
      createdAt: new Date().toISOString(),
    };

    apps.push(newApp);

    return NextResponse.json(newApp, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
