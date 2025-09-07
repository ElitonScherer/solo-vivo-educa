import { UserPlus, Smartphone, Send, FileCheck } from "lucide-react";

const ProcessSection = ({id,...props}) => {
  const steps = [
    {
      icon: UserPlus,
      title: "Faça sua Inscrição",
      description: "Cadastre-se no programa e receba acesso às ferramentas necessárias para iniciar sua jornada.",
      color: "bg-gradient-hero"
    },
    {
      icon: Smartphone,
      title: "Use o App Solif Mobile",
      description: "Baixe nosso aplicativo exclusivo e siga o protocolo científico para coleta precisa da amostra.",
      color: "bg-gradient-accent"
    },
    {
      icon: Send,
      title: "Envie sua Amostra",
      description: "Embale e envie sua amostra seguindo as instruções. O frete é por nossa conta.",
      color: "bg-secondary"
    },
    {
      icon: FileCheck,
      title: "Receba o Resultado",
      description: "Obtenha um laudo técnico completo com análises detalhadas e recomendações profissionais.",
      color: "bg-accent"
    }
  ];

  return (
    <section id={id} className="py-20 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-lg text-primary mb-6">
            Como Funciona ?
          </h2>
          <p className="body-base text-muted-foreground max-w-3xl mx-auto">
            Um processo simples e científico que conecta você diretamente com a tecnologia 
            utilizada em programas nacionais de recuperação de solos.
          </p>
        </div>
        
        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="text-center fade-in-up hover-lift"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-medium`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-soft">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="heading-sm text-primary mb-4">
                  {step.title}
                </h3>
                <p className="body-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connector Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-border to-transparent transform translate-x-10 -translate-y-1/2"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;