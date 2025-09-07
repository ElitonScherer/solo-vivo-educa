import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-soil.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Solo sustentável com plantas crescendo" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pre-header */}
        <div className="animate-fade-in">
          <p className="text-primary-foreground opacity-90 text-sm md:text-base font-medium mb-6 tracking-wide">
            Um programa do Ministério da Agricultura (MAPA) em parceria com o IFMT
          </p>
        </div>
        
        {/* Main Title */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="heading-xl text-primary-foreground mb-8 leading-tight">
            Solo Vivo <span className="text-secondary">Educa</span>
          </h1>
        </div>
        
        {/* Subtitle */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <p className="body-lg text-primary-foreground opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Conectando o conhecimento acadêmico à missão de recuperar os solos do Brasil. 
            Participe de um programa nacional de análise de solos e comece com sua amostra gratuita.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="animate-scale-in" style={{ animationDelay: "0.6s" }}>
          <Button 
            size="lg" 
            variant="secondary"
            className="px-8 py-4 text-lg font-semibold hover-lift shadow-medium hover:shadow-strong transition-all duration-300"
          >
            Faça Parte do Programa
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground opacity-60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground opacity-60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;