"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, CalendarClock, MessageCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { EDITORIAL_EASE } from "./MotionPrimitives";

interface TimeRemaining {
  isOpen: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getCountdown(targetIso: string): TimeRemaining {
  const target = new Date(targetIso).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { isOpen: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    isOpen: false,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining | null>(null);

  useEffect(() => {
    setTimeLeft(getCountdown(siteConfig.grandOpeningDate));
    const timer = setInterval(() => {
      setTimeLeft(getCountdown(siteConfig.grandOpeningDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const launchWhatsappUrl = `${siteConfig.whatsappBaseUrl}?text=${encodeURIComponent(
    `Hello ${siteConfig.brandName} (Ajman)! I would like to reserve for Opening Week (Nov 28, 2026).`
  )}`;

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-end lg:items-center pt-28 pb-24 lg:pb-20 overflow-hidden bg-[#090706]"
    >
      {/* Looping Muted Cinema Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={siteConfig.hero.posterSrc}
          className="h-full w-full object-cover object-center scale-[1.03]"
        >
          <source src={siteConfig.hero.videoSrc} type="video/mp4" />
        </video>

        {/* Layered Espresso-Obsidian Vignette + Warm Walnut & Emerald Atmospheric Wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090706] via-[#090706]/82 to-[#090706]/52" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090706] via-[#090706]/35 to-[#090706]/80" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 75% 32%, rgba(15, 81, 50, 0.24) 0%, transparent 52%), radial-gradient(circle at 20% 75%, rgba(111, 69, 40, 0.22) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Editorial 12-Column Asymmetric Hero Grid */}
      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Left 8 Columns: Full Brand Emblem, Editorial Headline & Primary Actions */}
          <div className="lg:col-span-8 space-y-6">
            {/* Prominent Full Logo Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EDITORIAL_EASE }}
              className="flex flex-wrap items-center gap-4"
            >
              <div className="relative w-[148px] sm:w-[158px] rounded-2xl overflow-hidden border border-[#D4AF37]/45 bg-[#C7A683] shadow-[0_0_42px_-8px_rgba(243,208,107,0.45),0_18px_36px_-12px_rgba(0,0,0,0.85)]">
                <img
                  src="/images/logo-full.webp"
                  alt="DR Snooker & Gaming Zone Cafe Official Backlit Logo"
                  className="w-full h-auto block"
                />
              </div>

              <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full bg-[#14100E]/85 backdrop-blur-md border border-[#D4AF37]/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F3D06B]">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {timeLeft?.isOpen ? "NOW OPEN 24/7 IN AJMAN" : "GRAND OPENING • NOVEMBER 28, 2026"}
                </span>
                <span className="h-3 w-px bg-[#D4AF37]/30 hidden sm:inline-block" />
                <span className="text-[11px] tracking-[0.16em] uppercase text-[#B8AFA6]">
                  Ajman, UAE
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: EDITORIAL_EASE }}
              className="font-display text-3xl sm:text-5xl lg:text-[3.65rem] xl:text-[4.15rem] font-semibold tracking-[-0.02em] leading-[1.06] text-[#FAF7F2] max-w-4xl"
            >
              {siteConfig.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16, ease: EDITORIAL_EASE }}
              className="text-base sm:text-lg lg:text-xl text-[#B8AFA6] leading-relaxed max-w-3xl font-light"
            >
              {siteConfig.hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: EDITORIAL_EASE }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <motion.a
                href={launchWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.985 }}
                className="gold-cta inline-flex items-center justify-center gap-3 px-7 min-h-[52px] rounded-full text-sm font-semibold tracking-[0.06em] uppercase transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{siteConfig.hero.primaryCta}</span>
              </motion.a>

              <motion.a
                href="#arenas"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.985 }}
                className="luxury-glass-bar inline-flex items-center justify-center gap-2.5 px-7 min-h-[52px] rounded-full text-sm font-medium tracking-[0.08em] uppercase text-[#FAF7F2] hover:border-[#D4AF37]/40 transition-colors"
              >
                <span>{siteConfig.hero.secondaryCta}</span>
                <ArrowDownRight className="w-4 h-4 text-[#D4AF37]" />
              </motion.a>
            </motion.div>

            {/* Asymmetric Signature Specification Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.34, ease: EDITORIAL_EASE }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 max-w-3xl"
            >
              {[
                { val: "07", label: "Championship Snooker" },
                { val: "04", label: "Pro 9ft Pool Tables" },
                { val: "01", label: "Private VIP Suite" },
                { val: "24/7", label: "Café, Sheesha & Gaming" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="font-display text-2xl sm:text-3xl text-[#F3D06B] tabular-nums">
                    {stat.val}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-[#B8AFA6]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right 4 Columns: Live Launch Countdown & Crest Card */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: EDITORIAL_EASE }}
            className="lg:col-span-4"
          >
            <div className="luxury-surface rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#0F5132]/30 blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#F3D06B]">
                    <CalendarClock className="w-4 h-4 text-[#D4AF37]" />
                    <span>Launch Countdown</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-[0.16em] uppercase bg-[#0F5132]/45 border border-[#198754]/50 text-[#FAF7F2]">
                    Ajman, UAE
                  </span>
                </div>

                {timeLeft?.isOpen ? (
                  <div className="py-4 px-5 rounded-2xl bg-[#0F5132]/35 border border-[#198754]/50 text-center space-y-1.5">
                    <div className="font-display text-2xl text-[#F3D06B] tracking-wider">
                      NOW OPEN 24/7 IN AJMAN
                    </div>
                    <p className="text-xs text-[#B8AFA6]">
                      Walk in anytime or reserve your table on WhatsApp.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-4 gap-2.5">
                    {[
                      { label: "Days", value: timeLeft ? String(timeLeft.days).padStart(2, "0") : "--" },
                      { label: "Hours", value: timeLeft ? String(timeLeft.hours).padStart(2, "0") : "--" },
                      { label: "Min", value: timeLeft ? String(timeLeft.minutes).padStart(2, "0") : "--" },
                      { label: "Sec", value: timeLeft ? String(timeLeft.seconds).padStart(2, "0") : "--" },
                    ].map((unit) => (
                      <div
                        key={unit.label}
                        className="rounded-2xl bg-[#090706]/85 border border-white/10 py-3.5 px-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                      >
                        <div className="font-display text-2xl sm:text-[1.75rem] font-semibold text-[#FAF7F2] tabular-nums leading-none">
                          {unit.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.16em] text-[#B8AFA6] mt-2">
                          {unit.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#B8AFA6]">
                  <span>Opening Date</span>
                  <span className="text-[#FAF7F2] font-medium">November 28, 2026 • 24/7</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
