// Design: Clean white header with large, prominent AgendaJá logo and text
// Logo: Official AJ monogram + text "AgendaJá" - must be immediately legible
// Layout: Logo + text on left (large), nav items on right, CTAs on far right
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMetaPixel } from "@/hooks/useMetaPixel";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { trackLead } = useMetaPixel();

  const handleCTAClick = (ctaName: string) => {
    trackLead({ cta_name: ctaName, section: 'header' });
    if (ctaName === 'Entrar') {
      window.open("https://sistema.agendaja7.com/login", "_blank");
    } else if (ctaName === 'Teste Grátis') {
      window.open("https://sistema.agendaja7.com/cadastro", "_blank");
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand Name - Large and Prominent */}
        <motion.div
          className="flex items-center gap-3 flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src="/manus-storage/agendaja-logo-new_3a9f46b0.png"
            alt="AgendaJá"
            className="h-32 w-auto"
          />
          <div className="hidden sm:block">
            <h1 className="text-2xl font-bold text-gray-900">AgendaJá</h1>
            <p className="text-xs text-gray-600">Gestão Empresarial</p>
          </div>
        </motion.div>

        {/* Desktop Nav - Right side */}
        <nav className="hidden lg:flex items-center gap-6 flex-1 justify-end mr-6">
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

        {/* Desktop Actions - Far right */}
        <motion.div
          className="hidden lg:flex items-center gap-2 flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <button
            className="px-3 py-2 text-gray-700 font-medium hover:text-gray-900 transition-colors text-sm"
            onClick={() => handleCTAClick('Entrar')}
          >
            Entrar
          </button>
          <button
            className="px-4 py-2 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 transition-all text-sm"
            onClick={() => handleCTAClick('Teste Grátis')}
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
          className="lg:hidden text-gray-700 flex-shrink-0"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3"
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
                onClick={() => handleCTAClick('Entrar')}
              >
                Entrar
              </button>
              <button
                className="w-full px-4 py-2 bg-gray-900 text-white font-medium rounded text-sm"
                onClick={() => handleCTAClick('Teste Grátis')}
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
