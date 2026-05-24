// Design: Dark background contact section with three contact cards
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(61) 98150-8483",
    href: "https://wa.me/5561981508483",
    color: "text-green-400",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@agendaja7.com",
    href: "mailto:contato@agendaja7.com",
    color: "text-blue-400",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Brasília - DF",
    href: "https://maps.app.goo.gl/vMSgs7Kq6Mfw81JRA",
    color: "text-yellow-400",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Entre em Contato
          </h2>
          <p className="text-gray-400">
            Nossa equipe está pronta para ajudar sua empresa
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all block"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center flex-shrink-0">
                    <Icon className={`w-5 h-5 ${contact.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                    <p className="font-semibold text-white">{contact.value}</p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <button
            className="px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all text-lg"
            onClick={() => window.open("https://app.agendaja7.com/register", "_blank")}
          >
            Comece Agora - Teste Grátis
          </button>
        </motion.div>
      </div>
    </section>
  );
}
