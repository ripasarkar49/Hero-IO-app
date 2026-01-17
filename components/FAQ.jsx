"use client";

import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Are these apps free to use?",
    answer: "Most of our apps offer a robust free version with essential features. Premium versions are available for users seeking advanced functionality and cloud synchronization.",
  },
  {
    question: "How do I install apps from HERO.IO?",
    answer: "Simply navigate to the app details page and click the 'Install Now' button. Our platform handles the secure download and setup process automatically.",
  },
  {
    question: "Are my personal details secure?",
    answer: "Yes, we prioritize security by implementing end-to-end encryption and following strict data privacy protocols. We never share your data with third parties.",
  },
  {
    question: "Can I use HERO.IO apps on multiple devices?",
    answer: "Absolutely! With a HERO.IO account, your data and preferences sync seamlessly across all your connected devices.",
  },
  {
    question: "How often are the apps updated?",
    answer: "We release regular updates for all our apps, usually once a week, to introduce new features, performance improvements, and security patches.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".faq-item", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="pb-6 bg-card/10">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none mb-2 px-4 py-1">Support</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Common Questions</h2>
          <p className="text-muted-foreground text-lg italic">
            Find answers to frequently asked questions about our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="faq-item group overflow-hidden rounded-2xl border border-white/5 bg-background/40 transition-all hover:bg-background/60"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
