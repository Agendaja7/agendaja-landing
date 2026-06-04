// Design: Clean FAQ section with accordion-style questions and answers
// Layout: Centered content with expandable Q&A items
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "O AgendaJa funciona para qual tipo de negócio?",
    answer: "O AgendaJa foi desenvolvido para empresas que trabalham com atendimento por horário agendado, como: Salões de Beleza, Barbearias, Clínicas de Estética, Espaços de Manicure e Nail Design, Clínicas Odontológicas, Consultórios Médicos, Clínicas de Fisioterapia, Clínicas de Psicologia, Pet Shops, Centros de Terapias, Studios de Tatuagem, Escolas e Cursos com agendamento de aulas, e Empresas de prestação de serviços que trabalham com horários marcados. Se sua empresa agenda clientes, consultas, atendimentos ou serviços, o AgendaJa pode ajudar a organizar toda a operação em um único lugar.",
  },
  {
    question: "Preciso instalar algum programa?",
    answer: "Não. O sistema funciona online.",
  },
  {
    question: "Posso testar antes de contratar?",
    answer: "Sim. O AgendaJa oferece 14 dias de teste gratuito.",
  },
  {
    question: "Preciso informar cartão de crédito?",
    answer: "Não.",
  },
  {
    question: "O cliente consegue agendar sozinho?",
    answer: "Sim. O cliente pode realizar agendamentos online.",
  },
  {
    question: "O AgendaJa envia lembretes automáticos?",
    answer: "Sim.",
  },
  {
    question: "Posso usar no celular?",
    answer: "Sim. O sistema funciona em computadores, tablets e celulares.",
  },
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-3xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600">
            Encontre respostas para as dúvidas mais comuns sobre o AgendaJa
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <span className="text-left font-semibold text-gray-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{
                    rotate: expandedIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedIndex === index ? "auto" : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
          <a
            href="https://wa.me/5561981508483"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-all"
          >
            Conversar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
