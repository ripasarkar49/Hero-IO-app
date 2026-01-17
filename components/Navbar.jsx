"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Github, LogIn, LogOut, PackagePlus, List } from "lucide-react";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/app", label: "App" },
    { path: "/installation", label: "Installation" },
  ];

  if (session) {
    navItems.push({ path: "/my-apps", label: "My Apps" });
    navItems.push({ path: "/my-apps/addapp", label: "Add App" });
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 transition-transform group-hover:scale-110">
            <Image
              src="/assets/logo.png"
              alt="Hero.IO Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            HERO.IO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            variant="ghost"
            className="flex items-center gap-2"
          >
            <a
              href="https://github.com/ripasarkar49"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              Contribute
            </a>
          </Button>

          {session ? (
            <Button
              onClick={() => signOut()}
              variant="outline"
              className="border-red-500/20 text-red-500 hover:text-red-400 hover:bg-red-500/10"
            >
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          ) : (
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/20"
            >
              <Link href="/login">
                <LogIn className="w-4 h-4 mr-2" /> Login
              </Link>
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <div className="relative w-8 h-8">
                    <Image
                      src="/assets/logo.png"
                      alt="Hero.IO Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-bold text-lg">HERO.IO</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname === item.path
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-4 space-y-3">
                   {session ? (
                    <Button
                      onClick={() => signOut()}
                      variant="destructive"
                      className="w-full"
                    >
                      <LogOut className="w-4 h-4 mr-2" /> Logout
                    </Button>
                  ) : (
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600"
                    >
                      <Link href="/login">
                        <LogIn className="w-4 h-4 mr-2" /> Login
                      </Link>
                    </Button>
                  )}
                  
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                  >
                    <a
                      href="https://github.com/ripasarkar49"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Contribute
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
