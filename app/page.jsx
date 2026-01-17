import Hero from "@/components/Hero";
import TrendingApps from "@/components/TrendingApps";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <TrendingApps />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </main>
  );
}
