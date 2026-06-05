// Layout: Grid de ícones + nomes dos nichos atendidos
// Design: Elegante, compacto, fácil de escanear
// Objetivo: Visitante identifica rapidamente se seu negócio se encaixa

import {
  Scissors,
  Stethoscope,
  Smile,
  Sparkles,
  Dumbbell,
  Heart,
  Brain,
  PawPrint,
  Wand2,
  BookOpen,
  Briefcase,
  Clock,
} from "lucide-react";

const industries = [
  { name: "Salões de Beleza", icon: Scissors },
  { name: "Barbearias", icon: Scissors },
  { name: "Clínicas Odontológicas", icon: Smile },
  { name: "Consultórios Médicos", icon: Stethoscope },
  { name: "Clínicas de Estética", icon: Sparkles },
  { name: "Clínicas de Fisioterapia", icon: Dumbbell },
  { name: "Clínicas de Psicologia", icon: Brain },
  { name: "Pet Shops", icon: PawPrint },
  { name: "Studios de Tatuagem", icon: Wand2 },
  { name: "Escolas e Cursos", icon: BookOpen },
  { name: "Espaços de Manicure", icon: Sparkles },
  { name: "Centros de Terapias", icon: Heart },
];

export default function IndustriesSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Para Qual Tipo de Negócio?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O AgendaJá foi desenvolvido para empresas que trabalham com agendamentos. Veja se seu negócio se encaixa.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-lg border border-border bg-card hover:bg-accent/5 transition-all duration-200 hover:border-primary/50 hover:shadow-sm"
              >
                <IconComponent className="w-8 h-8 text-primary mb-3" />
                <p className="text-center text-sm font-medium text-foreground">
                  {industry.name}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Text */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Sua empresa trabalha com agendamentos? O AgendaJá pode ajudar!
          </p>
          <a
            href="https://www.agendaja7.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Comece seu Teste Grátis
          </a>
        </div>
      </div>
    </section>
  );
}
