// Design: Dark footer with logo, contact info, and links
// Logo: Official AJ monogram - h-16 size in footer
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/manus-storage/agendaja-logo-new_3a9f46b0.png"
                alt="AgendaJá Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Gestão empresarial inteligente para negócios que crescem.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="font-semibold text-white text-sm mb-3">Contato</h3>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="text-yellow-400" size={14} />
              <span>(61) 98150-8483</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="text-yellow-400" size={14} />
              <span>contato@agendaja7.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="text-yellow-400" size={14} />
              <span>Brasília - DF</span>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="font-semibold text-white text-sm mb-3">Links</h3>
            <div className="space-y-1 text-sm">
              <a href="#features" className="hover:text-white transition-colors block">
                Recursos
              </a>
              <a href="#contact" className="hover:text-white transition-colors block">
                Contato
              </a>
              <a
                href="https://app.agendaja7.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors block"
              >
                Entrar
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2026 AgendaJa. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
