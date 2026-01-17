"use client";

import { Search, Download, Sparkles } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Browse our extensive collection of innovative apps tailored for your specific needs.",
    color: "bg-indigo-600",
  },
  {
    icon: Download,
    title: "Install",
    description: "One-click installation directly from our secure platform to your preferred device.",
    color: "bg-purple-600",
  },
  {
    icon: Sparkles,
    title: "Transform",
    description: "Experience the impact of high-quality digital tools that simplify and boost your daily life.",
    color: "bg-pink-600",
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".step-item", {
      opacity: 0,
      x: -50,
      stagger: 0.3,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
    });

    gsap.from(".step-line", {
      scaleX: 0,
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-6 bg-card/20 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">How It Works</h2>
          <p className="text-muted-foreground text-lg">
            Getting started with HERO.IO is simple and intuitive.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 step-line origin-left" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="step-item flex flex-col items-center text-center space-y-6">
                <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center shadow-lg shadow-black/20 relative`}>
                  <step.icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center text-sm border-4 border-background">
                    {index + 1}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed px-4">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
