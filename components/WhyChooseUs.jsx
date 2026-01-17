"use client";

import { Shield, Zap, Globe, HeartHandshake } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your data privacy and security are our top priorities. We use industry-leading encryption to keep your information safe.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built with cutting-edge technology to ensure instant load times and a seamless user experience across all devices.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Accessible from anywhere in the world. Our apps are localized and optimized for diverse communities and regions.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: HeartHandshake,
    title: "Expert Support",
    description: "Our dedicated team of experts is available 24/7 to assist you with any questions or technical challenges.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export default function WhyChooseUs() {
  const containerRef = useRef(null);

  useGSAP(() => {
    
    gsap.from(".feature-card", {
      opacity: 0,
      y: 50,
      stagger: 0.1, 
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%", 
        toggleActions: "play none none none",  
        once: true, 
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-6 relative overflow-hidden"> 
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/10 via-background to-background" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Choose HERO.IO?</h2>
          <p className="text-muted-foreground text-lg italic">
            Delivering excellence through innovation and a commitment to our users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group p-8 rounded-3xl bg-card/30 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/5 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}