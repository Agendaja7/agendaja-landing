// Design: Clean white section with 12 module cards in a responsive grid
// Cards: hover effect with dark background transition
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Package,
  UserCog,
  DollarSign,
  BarChart2,
  FileText,
  ShoppingCart,
  TrendingUp,
  UserCircle,
  Shield,
} from "lucide-react";

const modules = [
  { icon: LayoutDashboard, title: "Dashboard", desc: "Visão operacional do dia" },
  { icon: Calendar, title: "Agenda", desc: "Agendamento e calendário" },
  { icon: Users, title: "CRM de Clientes", desc: "Ficha, prontuário, anamnese e LGPD" },
  { icon: Package, title: "Serviços", desc: "Catálogo de serviços" },
  { icon: UserCog, title: "Colaboradores", desc: "Gestão da equipe" },
  { icon: DollarSign, title: "Financeiro", desc: "Receitas, despesas e fluxo de caixa" },
  { icon: BarChart2, title: "Relatórios", desc: "Análises e exportações" },
  { icon: FileText, title: "Contratos", desc: "Planos trial e billing" },
  { icon: ShoppingCart, title: "Estoque", desc: "Produtos e movimentações" },
  { icon: TrendingUp, title: "Analítico", desc: "Métricas avançadas" },
  { icon: UserCircle, title: "Perfil do Usuário", desc: "Configurações e gerenciamento" },
  { icon: Shield, title: "Gerente", desc: "Função administrativa" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Tudo que sua empresa precisa em um único sistema
          </h2>
          <p className="text-gray-600">
            Uma plataforma completa para organizar sua operação e facilitar o dia a dia do seu negócio
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={mod.title}
                className="group p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center mb-2 group-hover:bg-gray-900 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {mod.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-snug">
                    {mod.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-gray-900 via-gray-900 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
