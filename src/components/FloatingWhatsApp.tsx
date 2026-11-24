"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function FloatingWhatsApp() {
  const url = `${siteConfig.whatsappBaseUrl}?text=${encodeURIComponent(
    `Hello ${siteConfig.brandName} (Ajman)! I have a question about Opening Week reservations.`
  )}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp with ${siteConfig.brandName} Concierge`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="fixed right-4 bottom-24 md:right-7 md:bottom-7 z-40 inline-flex items-center gap-2.5 px-4 min-h-[48px] rounded-full bg-[#0F5132]/90 hover:bg-[#198754] backdrop-blur-xl border border-[#D4AF37]/40 text-[#FAF7F2] shadow-[0_14px_34px_-8px_rgba(0,0,0,0.85)] transition-colors"
    >
      <MessageCircle className="w-5 h-5 text-[#F3D06B]" />
      <span className="hidden sm:inline text-xs font-semibold uppercase tracking-[0.12em]">
        WhatsApp Concierge
      </span>
    </motion.a>
  );
}
