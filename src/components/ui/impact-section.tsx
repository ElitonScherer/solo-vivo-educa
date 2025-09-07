import { Sprout, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ImpactSection = ({id,...props}) => {
  return (
    <section id={id} className="py-20 lg:py-32 bg-gradient-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-lg text-primary mb-6">
            Um Projeto de Impacto Real
          </h2>
          <p className="body-base text-muted-foreground max-w-3xl mx-auto">
            Conectamos educação de qualidade com sustentabilidade, criando uma ponte entre 
            o conhecimento acadêmico e a transformação real do campo brasileiro.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Missão Social Card */}
          <Card className="hover-lift shadow-soft hover:shadow-medium transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm fade-in-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-soft">
                    <Sprout className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="heading-sm text-primary mb-4">
                    Recuperando Solos, Transformando Vidas
                  </h3>
                  <p className="body-base text-muted-foreground leading-relaxed">
                    O Solo Vivo faz parte de uma iniciativa do MAPA que oferece 
                    recuperação de solos para assentados rurais, fortalecendo a agricultura familiar 
                    e a sustentabilidade no campo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Oportunidade Acadêmica Card */}
          <Card className="hover-lift shadow-soft hover:shadow-medium transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm fade-in-up" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-soft">
                    <GraduationCap className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="heading-sm text-primary mb-4">
                    Sua Chance de Atuar na Prática
                  </h3>
                  <p className="body-base text-muted-foreground leading-relaxed">
                    Oferecemos a você, estudante, a mesma tecnologia e expertise para realizar 
                    uma análise de solo completa, enriquecendo sua formação.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;