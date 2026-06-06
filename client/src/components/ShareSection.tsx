// Layout: Bloco de compartilhamento com múltiplas opções
// Design: Elegante, com ícones e botões para Web Share API, WhatsApp, E-mail e Copiar Link
// Objetivo: Transformar visitantes em divulgadores espontâneos da plataforma

import { motion } from "framer-motion";
import { Share2, MessageCircle, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function ShareSection() {
  const [copied, setCopied] = useState(false);
  const shareUrl = "https://agendaja7.com";
  const shareTitle = "AgendaJá - Gestão Empresarial Inteligente";
  const shareText = "Descubra como organizar sua agenda, clientes e financeiro em um único lugar. Teste grátis por 14 dias!";

  const handleWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.log("Share cancelled or failed");
      }
    }
  };

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(`${shareText}\n\n${shareUrl}`);
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent(shareTitle);
    const body = encodeURIComponent(`${shareText}\n\n${shareUrl}`);
    window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
              <Share2 size={24} className="text-blue-600" />
              Conhece alguém que precisa organizar os agendamentos?
            </h3>
            <p className="text-gray-700">
              Compartilhe o AgendaJá com um amigo, parceiro ou profissional que também possa se beneficiar da plataforma.
            </p>
          </div>

          {/* Share Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Web Share API Button */}
            {typeof navigator !== "undefined" && typeof navigator.share === "function" && (
              <motion.button
                onClick={handleWebShare}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 size={18} />
                Compartilhar
              </motion.button>
            )}

            {/* WhatsApp Button */}
            <motion.button
              onClick={handleWhatsAppShare}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={18} />
              WhatsApp
            </motion.button>

            {/* Email Button */}
            <motion.button
              onClick={handleEmailShare}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              E-mail
            </motion.button>

            {/* Copy Link Button */}
            <motion.button
              onClick={handleCopyLink}
              className={`flex items-center justify-center gap-2 px-4 py-3 font-semibold rounded-lg transition-all ${
                copied
                  ? "bg-green-600 text-white"
                  : "bg-gray-700 text-white hover:bg-gray-800"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {copied ? (
                <>
                  <Check size={18} />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copiar Link
                </>
              )}
            </motion.button>
          </div>

          {/* Link Display */}
          <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-xs text-gray-600 mb-2">Link para compartilhar:</p>
            <p className="text-sm font-mono text-gray-800 break-all">{shareUrl}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
