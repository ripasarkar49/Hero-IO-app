"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AddAppPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    downloads: "",
    ratingAvg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/user-apps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("App added successfully!");
        setTimeout(() => {
          router.push("/my-apps");
          router.refresh();
        }, 1500);
      } else {
        toast.error("Failed to add app.");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred.");
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen flex justify-center">
      <ToastContainer position="top-right" theme="dark" />
      
      <Card className="w-full max-w-lg bg-card/50 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Add New App</CardTitle>
          <CardDescription>Create a new app to add to your collection.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">App Name</Label>
              <Input
                id="title"
                name="title"
                placeholder="App Name"
                value={formData.title}
                onChange={handleChange}
                required
                className="bg-background/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                placeholder="Brief description"
                value={formData.description}
                onChange={handleChange}
                required
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                name="image"
                placeholder="https://example.com/image.jpg"
                value={formData.image}
                onChange={handleChange}
                required
                className="bg-background/50"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="downloads">Downloads (Count)</Label>
                <Input
                  id="downloads"
                  name="downloads"
                  type="number"
                  placeholder="e.g. 1000"
                  value={formData.downloads}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ratingAvg">Rating (0-5)</Label>
                <Input
                  id="ratingAvg"
                  name="ratingAvg"
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  placeholder="e.g. 4.5"
                  value={formData.ratingAvg}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700" disabled={loading}>
              {loading ? "Creating..." : "Create App"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
