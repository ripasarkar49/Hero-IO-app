"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Digital Nomad",
    image: "https://i.pravatar.cc/150?u=alex",
    text: "HERO.IO transformed the way I manage my workflow on the go. AuraFlow is a literal lifesaver for focus!",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Project Manager",
    image: "https://i.pravatar.cc/150?u=sarah",
    text: "The attention to detail and performance of these apps is unmatched. Quantum Task Manager is essential for my team.",
    rating: 5,
  },
  {
    name: "Marcus Thorne",
    role: "Freelance Designer",
    image: "https://i.pravatar.cc/150?u=marcus",
    text: "Innovative, beautiful, and incredibly functional. HERO.IO apps are always one step ahead of the curve.",
    rating: 4,
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".testimonial-card", {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Voices of Our Community</h2>
          <p className="text-muted-foreground text-lg italic">
            Joined by thousands of users worldwide who trust HERO.IO for their digital needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="testimonial-card relative p-8 rounded-3xl bg-card border border-white/5 hover:border-white/10 transition-colors shadow-xl"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-white/5" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed italic">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
