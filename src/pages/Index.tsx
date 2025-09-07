import { useEffect } from "react";
import HeroSection from "@/components/ui/hero-section";
import ImpactSection from "@/components/ui/impact-section";
import ProcessSection from "@/components/ui/process-section";
import PartnersSection from "@/components/ui/partners-section";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, observerOptions);

    // Observe all fade-in-up elements
    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <ImpactSection />
      <ProcessSection />
      <PartnersSection />
    </main>
  );
};

export default Index;
