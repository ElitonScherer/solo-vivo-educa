import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-soil.jpg";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Trigger transition when user scrolls down 20% of viewport height
      setIsScrolled(scrollPosition > heroHeight * 0.2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Initial Green Background */}
      <div 
        className={`absolute inset-0 bg-primary transition-opacity duration-1000 ease-out ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Final Background with Image and Overlay */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-out ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img 
          src={heroImage} 
          alt="Solo sustentável com plantas crescendo" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title - Always visible */}
        <div className="animate-fade-in animate-scale-in">
          <h1 className="heading-xl text-primary-foreground mb-8 leading-tight">
            Solo Vivo <span className="text-secondary">Educa</span>
          </h1>
        </div>
        
        {/* Additional content - Shows after scroll */}
        <div className={`transition-all duration-1000 ease-out ${
          isScrolled 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8 pointer-events-none'
        }`}>
          {/* Pre-header */}
          <div className="animate-fade-in" style={{ animationDelay: isScrolled ? "0.2s" : "0s" }}>
            <p className="text-primary-foreground opacity-90 text-sm md:text-base font-medium mb-6 tracking-wide">
              Um programa do Ministério da Agricultura (MAPA) em parceria com o IFMT
            </p>
          </div>
          
          {/* Subtitle */}
          <div className="animate-fade-in-up" style={{ animationDelay: isScrolled ? "0.4s" : "0s" }}>
            <p className="body-lg text-primary-foreground opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Conectando o conhecimento acadêmico à missão de recuperar os solos do Brasil. 
              Participe de um programa nacional de análise de solos e comece com sua amostra gratuita.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="animate-scale-in" style={{ animationDelay: isScrolled ? "0.6s" : "0s" }}>
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-4 text-lg font-semibold hover-lift shadow-medium hover:shadow-strong transition-all duration-300"
            >
              Faça Parte do Programa
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator - Always visible */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground opacity-60 rounded-full flex justify-center cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-1 h-3 bg-primary-foreground opacity-60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;