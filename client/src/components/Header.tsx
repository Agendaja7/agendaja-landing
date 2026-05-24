// Design: Clean white header with the official AgendaJá logo
// Logo: Official AJ monogram - dark background with gold lettering
// Logo size: h-12 (48px) - compact enough to not overlap hero text
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo - tamanho reduzido para não cobrir o conteúdo hero */}
        <div className="flex items-center gap-2 flex-1">
          <motion.img
            src="/manus-storage/agendaja-logo-new_3a9f46b0.png"
            alt="AgendaJá Logo"
            className="h-12 w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Recursos", href: "#features" },
            { label: "Contato", href: "#contact" },
          ].map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <motion.div
          className="hidden md:flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <button
            className="px-4 py-2 text-gray-700 font-medium hover:text-gray-900 transition-colors text-sm"
            onClick={() => window.open("https://app.agendaja7.com/login", "_blank")}
          >
            Entrar
          </button>
          <button
            className="px-4 py-2 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 transition-all text-sm"
            onClick={() => window.open("https://app.agendaja7.com/register", "_blank")}
          >
            Teste Grátis
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition-all flex items-center gap-1 text-sm"
            onClick={() => window.open("https://wa.me/5561981508483", "_blank")}
          >
            <MessageCircle size={16} />
            Chat
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#features" className="block text-gray-700 font-medium py-2" onClick={() => setMobileOpen(false)}>Recursos</a>
            <a href="#contact" className="block text-gray-700 font-medium py-2" onClick={() => setMobileOpen(false)}>Contato</a>
            <div className="flex flex-col gap-2 pt-2">
              <button
                className="w-full px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded text-sm"
                onClick={() => window.open("https://app.agendaja7.com/login", "_blank")}
              >
                Entrar
              </button>
              <button
                className="w-full px-4 py-2 bg-gray-900 text-white font-medium rounded text-sm"
                onClick={() => window.open("https://app.agendaja7.com/register", "_blank")}
              >
                Teste Grátis
              </button>
              <button
                className="w-full px-4 py-2 bg-green-500 text-white font-medium rounded flex items-center justify-center gap-2 text-sm"
                onClick={() => window.open("https://wa.me/5561981508483", "_blank")}
              >
                <MessageCircle size={16} />
                Chat WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
