// Layout: Seção com título, descrição completa e lista de nichos com checkmarks
// Design: Profissional, informativo, fácil de ler
// Objetivo: Comunicar claramente para qual tipo de negócio o AgendaJá funciona

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
} from "lucide-react";

const industries = [
  { name: "Salões de Beleza", icon: Scissors },
  { name: "Barbearias", icon: Scissors },
  { name: "Clínicas de Estética", icon: Sparkles },
  { name: "Espaços de Manicure e Nail Design", icon: Sparkles },
  { name: "Clínicas Odontológicas", icon: Smile },
  { name: "Consultórios Médicos", icon: Stethoscope },
  { name: "Clínicas de Fisioterapia", icon: Dumbbell },
  { name: "Clínicas de Psicologia", icon: Brain },
  { name: "Pet Shops", icon: PawPrint },
  { name: "Centros Terapêuticos", icon: Heart },
  { name: "Studios de Tatuagem", icon: Wand2 },
  { name: "Escolas e Cursos com agendamento de aulas", icon: BookOpen },
  { name: "Empresas de prestação de serviços com horários marcados", icon: Briefcase },
];

export default function IndustriesSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Para quais tipos de negócio o AgendaJá funciona?
          </h2>
          
          {/* Description */}
          <p className="text-lg text-foreground mb-6 leading-relaxed">
            O AgendaJá foi desenvolvido para empresas e profissionais que trabalham com atendimentos agendados e precisam organizar sua agenda, equipe e clientes de forma simples e profissional.
          </p>

          <p className="text-base text-muted-foreground mb-8">
            O sistema atende perfeitamente negócios como:
          </p>
        </div>

        {/* Industries Grid with Checkmarks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <span className="text-primary font-bold text-lg mt-0.5">✅</span>
              <span className="text-foreground font-medium">{industry.name}</span>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-10">
          <p className="text-foreground mb-4 leading-relaxed">
            E muitos outros segmentos que dependem de agendamentos para operar.
          </p>
          
          <p className="text-foreground mb-4 leading-relaxed">
            Se sua empresa agenda consultas, clientes, atendimentos, aulas ou serviços, o AgendaJá pode centralizar toda a operação em um único lugar, ajudando a reduzir faltas, evitar conflitos de horários, melhorar o atendimento e aumentar a produtividade da equipe.
          </p>

          <p className="text-foreground leading-relaxed">
            Tudo isso com acesso online, painel administrativo, gestão de colaboradores, controle de clientes e uma experiência moderna para o seu negócio.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://sistema.agendaja7.com/cadastro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-lg"
          >
            Comece seu Teste Grátis
          </a>
        </div>
      </div>
    </section>
  );
}
