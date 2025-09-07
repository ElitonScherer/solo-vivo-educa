import { Building2, GraduationCap } from "lucide-react";

const PartnersSection = ({id,...props}) => {
  return (
    <section id={id} className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-lg text-primary mb-6">
            Realização e Parceria
          </h2>
          <p className="body-base text-muted-foreground max-w-3xl mx-auto">
            Uma iniciativa que une a expertise do governo federal com a excelência 
            acadêmica para transformar a educação em agricultura sustentável.
          </p>
        </div>
        
        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* MAPA */}
          <div className="text-center fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-hero rounded-3xl flex items-center justify-center mx-auto shadow-medium hover-lift">
                <Building2 className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            <h3 className="heading-sm text-primary mb-4">
              Ministério da Agricultura
            </h3>
            <p className="body-base text-muted-foreground leading-relaxed">
              <strong>MAPA</strong> - Órgão responsável pelas políticas públicas de desenvolvimento 
              sustentável da agropecuária brasileira, garantindo a segurança alimentar e a 
              preservação dos recursos naturais.
            </p>
          </div>
          
          {/* IFMT */}
          <div className="text-center fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-accent rounded-3xl flex items-center justify-center mx-auto shadow-medium hover-lift">
                <GraduationCap className="w-12 h-12 text-accent-foreground" />
              </div>
            </div>
            <h3 className="heading-sm text-primary mb-4">
              Instituto Federal de Mato Grosso
            </h3>
            <p className="body-base text-muted-foreground leading-relaxed">
              <strong>IFMT</strong> - Instituição de excelência em educação profissional e tecnológica, 
              comprometida com a formação de profissionais qualificados e o desenvolvimento 
              científico e tecnológico do país.
            </p>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="inline-flex items-center justify-center space-x-8 bg-card/50 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-soft border border-border/50">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-sm font-medium text-muted-foreground">MAPA</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-sm font-medium text-muted-foreground">IFMT</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm font-medium text-muted-foreground">Sociedade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;