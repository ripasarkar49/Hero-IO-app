"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial Reveal
    tl.from(textRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
    })
    .from(imageRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      ease: "power4.out",
    }, "-=0.8")
    .from(titleRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8
    }, "-=0.5")
    .from(statsRef.current.children, {
       y: 40,
       opacity: 0,
       duration: 0.8,
       stagger: 0.1,
     }, "-=0.4");

    // Parallax Effect on Image
    gsap.to(imageRef.current, {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full relative overflow-hidden pt-24 pb-12">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background" />

      <div className="container mx-auto px-4">
        {/* Main Hero Content */}
        <div className="flex flex-col items-center text-center space-y-10 mb-20">
          
          <div ref={textRef} className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-11">
              We Build <br className="md:hidden" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-gradient-x">
                 Productive Apps
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              At HERO.IO, we craft innovative apps designed to make everyday life
              simpler, smarter, and more exciting. Turn your ideas into digital
              experiences that truly make an impact.
            </p>
            
            <div className="flex flex-wrap justify-center gap-5 pt-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg bg-black hover:bg-gray-900 text-white border border-gray-800 rounded-full shadow-lg shadow-purple-900/20 transition-transform hover:scale-105">
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Apple className="w-6 h-6" /> App Store
                </a>
              </Button>
              <Button asChild size="lg" className="h-14 px-8 text-lg bg-green-600 hover:bg-green-700 text-white border-none rounded-full shadow-lg shadow-green-900/20 transition-transform hover:scale-105">
                <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Play className="w-6 h-6 fill-current" /> Google Play
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Section Divider / Title */}
         <div className="text-center mb-12">
            <h2 ref={titleRef} className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Trusted By Millions, Built For You
            </h2>
          </div>

        {/* Image Showcase */}
        <div ref={imageRef} className="relative w-full max-w-5xl mx-auto mb-[-100px] z-10 pointer-events-none">
           <div className="relative aspect-[16/9] md:aspect-[21/9]">
             {/* Glow Effect */}
             <div className="absolute inset-x-20 top-10 bottom-0 bg-indigo-500/20 blur-[100px] rounded-full" />
             <Image
               src="/assets/hero.png"
               alt="App Preview"
               fill
               className="object-contain drop-shadow-2xl"
               priority
             />
           </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-20 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 border-y border-white/10 pt-32 pb-20">
        <div ref={statsRef} className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
            <div className="space-y-2 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-indigo-300">Total Downloads</h3>
              <p className="text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-indigo-200">29.6M</p>
              <p className="text-sm text-indigo-200/60 font-medium">21% Increase</p>
            </div>
            <div className="space-y-2 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-purple-300">Total Reviews</h3>
              <p className="text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-200">906K</p>
              <p className="text-sm text-purple-200/60 font-medium">4.9 Star Rating</p>
            </div>
            <div className="space-y-2 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-pink-300">Active Apps</h3>
              <p className="text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-pink-200">132+</p>
              <p className="text-sm text-pink-200/60 font-medium">Global Reach</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

