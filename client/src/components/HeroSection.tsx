// Design: Clean white hero with bold typography and green accent
// Layout: Two-column grid (text left, image right)
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663624859445/oKMEiRXW9N8tvtjHqdRJY3/agendaja-hero-professional-Go29vu43UKLJ9Xj4e6sbir.webp";

const features = [
  "Agenda online inteligente",
  "Gestão de clientes e contatos",
  "Controle financeiro em tempo real",
];

export default function HeroSection() {
  return (
    <section className="pt-48 pb-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-3">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Gestão Empresarial{" "}
                <span className="text-green-500">Inteligente</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Controle sua agenda, clientes, serviços e financeiro em um único
                lugar. Automação inteligente para empresas que crescem.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-2">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <button
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-all flex items-center justify-center gap-2"
                onClick={() => window.open("https://app.agendaja7.com/register", "_blank")}
              >
                Teste Grátis por 14 Dias
                <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/5561981508483"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-green-500 text-green-600 font-semibold rounded hover:bg-green-50 transition-all flex items-center justify-center gap-2"
              >
                Conversar no WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={HERO_IMAGE}
              alt="Profissional usando AgendaJa"
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
