"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Compass, Image as ImageIcon, MapPin, MessageCircle, CalendarCheck, Crown } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { EDITORIAL_EASE } from "./MotionPrimitives";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EDITORIAL_EASE }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#090706]/85 backdrop-blur-xl border-b border-[#D4AF37]/15 shadow-[0_12px_36px_-10px_rgba(0,0,0,0.9)]"
            : "bg-gradient-to-b from-[#090706]/88 via-[#090706]/45 to-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10 h-20 flex items-center justify-between gap-3">
          {/* Brand Crest (56x56 Tightly Cropped Original Emblem + High-Contrast Title) */}
          <a
            href="#top"
            className="flex items-center gap-3.5 group min-h-[56px] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-xl pr-1"
          >
            <div className="relative h-14 w-14 rounded-xl overflow-hidden bg-[#C7A683] border border-[#D4AF37]/40 shadow-[0_0_24px_-4px_rgba(212,175,55,0.42),inset_0_1px_0_rgba(255,255,255,0.25)] flex items-center justify-center shrink-0">
              <img
                src="/images/logo-emblem.webp"
                alt="DR Snooker & Gaming Zone Cafe Emblem"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className="font-display text-lg font-bold tracking-wider text-[#FAF7F2] leading-tight">
                DR SNOOKER
              </span>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D4AF37] mt-0.5">
                GAMING ZONE CAFÉ • AJMAN
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0" aria-label="Primary Navigation">
            {siteConfig.navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-[11px] uppercase tracking-[0.14em] text-[#B8AFA6] hover:text-[#FAF7F2] transition-colors py-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:h-px after:w-0 after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Status Pill + CTA */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="hidden xl:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#0F5132]/30 border border-[#D4AF37]/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] whitespace-nowrap">
              <span className="h-2 w-2 rounded-full bg-[#198754] ring-4 ring-[#198754]/25 animate-pulse shrink-0" />
              <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#F3D06B]">
                {siteConfig.grandOpeningLabel}
              </span>
            </div>

            <motion.a
              href="#reserve"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.985 }}
              className="gold-cta whitespace-nowrap inline-flex items-center justify-center gap-2 px-4 sm:px-5 min-h-[44px] rounded-full text-xs font-semibold tracking-[0.08em] uppercase transition-all"
            >
              <Crown className="w-3.5 h-3.5 shrink-0" />
              <span>Reserve for Launch</span>
            </motion.a>
          </div>
        </div>
      </motion.header>

      {/* Mobile-First Thumb-Friendly Bottom Dock */}
      <nav
        aria-label="Mobile Quick Navigation"
        className="md:hidden fixed bottom-3 inset-x-3 z-50 luxury-glass-bar rounded-2xl px-2 py-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom))]"
      >
        <div className="grid grid-cols-5 gap-2 items-center">
          <a
            href="#arenas"
            className="flex flex-col items-center justify-center min-h-[48px] rounded-xl text-[#B8AFA6] active:text-[#FAF7F2] hover:bg-white/5 transition-colors"
          >
            <Compass className="w-4 h-4 mb-0.5 text-[#D4AF37]" />
            <span className="text-[10px] tracking-wider uppercase">Arenas</span>
          </a>
          <a
            href="#gallery"
            className="flex flex-col items-center justify-center min-h-[48px] rounded-xl text-[#B8AFA6] active:text-[#FAF7F2] hover:bg-white/5 transition-colors"
          >
            <ImageIcon className="w-4 h-4 mb-0.5 text-[#D4AF37]" />
            <span className="text-[10px] tracking-wider uppercase">Gallery</span>
          </a>
          <a
            href="#reserve"
            className="flex flex-col items-center justify-center min-h-[48px] rounded-xl gold-cta font-semibold"
          >
            <CalendarCheck className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] tracking-wider uppercase">Reserve</span>
          </a>
          <a
            href="#location"
            className="flex flex-col items-center justify-center min-h-[48px] rounded-xl text-[#B8AFA6] active:text-[#FAF7F2] hover:bg-white/5 transition-colors"
          >
            <MapPin className="w-4 h-4 mb-0.5 text-[#D4AF37]" />
            <span className="text-[10px] tracking-wider uppercase">Map</span>
          </a>
          <a
            href={siteConfig.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center min-h-[48px] rounded-xl bg-[#0F5132]/50 border border-[#198754]/40 text-[#FAF7F2]"
          >
            <MessageCircle className="w-4 h-4 mb-0.5 text-[#198754]" />
            <span className="text-[10px] tracking-wider uppercase">Chat</span>
          </a>
        </div>
      </nav>
    </>
  );
}
