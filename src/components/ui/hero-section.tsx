import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-soil.jpg";
import solovivo from "@/assets/solovivo.png";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    let scrollBlocked = true;
    let animationInProgress = false;

    const blockScroll = (e) => {
      if (scrollBlocked) {
        e.preventDefault();
        e.stopPropagation();

        if (!animationInProgress) {
          animationInProgress = true;
          setAnimationTriggered(true);

          // Liberar scroll e cursor após 1 segundo
          setTimeout(() => {
            scrollBlocked = false;
            setIntroComplete(true);
            document.body.style.overflow = 'auto';
            document.body.classList.add('cursor-hidden');
          }, 1000);
        }

        return false;
      }
    };

    // Bloquear scroll e mostrar o cursor inicialmente
    document.body.style.overflow = 'hidden';
    document.body.classList.remove('cursor-hidden');

    // Escutar eventos de scroll
    window.addEventListener('wheel', blockScroll, { passive: false });
    window.addEventListener('touchmove', blockScroll, { passive: false });
    window.addEventListener('scroll', blockScroll, { passive: false });

    return () => {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('cursor-hidden');
      window.removeEventListener('wheel', blockScroll);
      window.removeEventListener('touchmove', blockScroll);
      window.removeEventListener('scroll', blockScroll);
    };
  }, []);

  return (
    <section className={`hero-section ${animationTriggered ? 'animation-triggered' : ''} ${introComplete ? 'intro-complete' : ''}`}>
      {/* Background - Verde Sólido Inicial */}
      <div className="hero-bg-solid"></div>

      {/* Background - Definitivo (imagem + gradiente) */}
      <div className="hero-bg-final">
        <img 
          src={heroImage} 
          alt="Solo sustentável com plantas crescendo" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Logo Solo Vivo - Sempre Visível no Topo */}
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 z-20">
        <img 
          src={solovivo} 
          alt="Logo Solo Vivo" 
          className="h-48 md:h-52 lg:h-56 w-auto object-contain"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-28 lg:pt-32">
        {/* Main Title - Sempre Visível */}
        <div className="hero-title">
          <h1 className="heading-xl text-primary-foreground mb-8 leading-tight">
            Solo Vivo <span className="text-secondary">Educa</span>
          </h1>
        </div>
        
        {/* Elementos Adicionais - Aparecem na Animação */}
        <div className="hero-additional-content">
          {/* Pre-header */}
          <div className="hero-element" style={{ animationDelay: "0.2s" }}>
            <p className="text-primary-foreground opacity-90 text-sm md:text-base font-medium mb-6 tracking-wide">
              Um programa do Ministério da Agricultura (MAPA) em parceria com o IFMT
            </p>
          </div>
          
          {/* Subtitle */}
          <div className="hero-element" style={{ animationDelay: "0.6s" }}>
            <p className="body-lg text-primary-foreground opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Conectando o conhecimento acadêmico à missão de recuperar os solos do Brasil. 
              Participe de um programa estadual de análise de solos.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="hero-element" style={{ animationDelay: "1.0s" }}>
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-4 text-lg font-semibold hover-lift shadow-medium hover:shadow-strong transition-all duration-300"
            >
              Faça Parte do Programa
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Sempre Visível */}
      <div className={`hero-scroll-indicator flex flex-col items-center space-y-3 mt-16 ${introComplete ? 'hidden' : ''}`}>
        <p className="text-primary-foreground opacity-70 text-sm font-medium">
          Deslize para explorar
        </p>
        <div className="w-6 h-10 border-2 border-primary-foreground opacity-60 rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-primary-foreground opacity-60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;