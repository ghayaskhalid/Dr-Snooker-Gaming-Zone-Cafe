"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { siteConfig, type ClubZone } from "@/config/siteConfig";
import { RevealBlock, EDITORIAL_EASE } from "./MotionPrimitives";

interface FacilitiesSectionProps {
  onSelectZoneForBooking?: (zoneLabel: string) => void;
}

const zoneBookingMap: Record<string, string> = {
  "snooker-hall": "Championship Snooker",
  "pool-arena": "Pro Pool",
  "vip-suite": "Private VIP Room",
  "gaming-arena": "Gaming Arena",
  "cafe-sheesha": "Restaurant & Sheesha Café",
};

function accentBadgeStyle(accent: ClubZone["accent"]) {
  if (accent === "emerald") {
    return "bg-[#0F5132]/50 border-[#198754]/50 text-[#FAF7F2]";
  }
  if (accent === "walnut") {
    return "bg-[#6F4528]/45 border-[#9C6644]/50 text-[#FAF7F2]";
  }
  return "bg-[#D4AF37]/15 border-[#D4AF37]/45 text-[#F3D06B]";
}

export function FacilitiesSection({ onSelectZoneForBooking }: FacilitiesSectionProps) {
  const [snooker, pool, vip, gaming, cafe] = siteConfig.zones;

  const handleBookZone = (zoneId: string) => {
    const mapped = zoneBookingMap[zoneId];
    if (mapped && onSelectZoneForBooking) {
      onSelectZoneForBooking(mapped);
    }
    const el = document.getElementById("reserve");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="arenas"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#090706] overflow-hidden"
    >
      {/* Subtle architectural ambient glow */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full pointer-events-none opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(15, 81, 50, 0.26) 0%, rgba(111, 69, 40, 0.16) 50%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12 space-y-20 lg:space-y-28">
        {/* Asymmetric Section Masthead */}
        <RevealBlock className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">
              Five Distinct Worlds Under One Roof
            </p>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.02em] leading-[1.08] text-[#FAF7F2]">
              Crafted for Serious Cueists, Gamers & Late-Night Connoisseurs
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm sm:text-base text-[#B8AFA6] leading-relaxed">
              From hand-tensioned tournament snooker beds and cognac leather VIP lounges
              to plush emerald velvet sheesha booths — every zone balances precision play
              with warm nocturnal hospitality.
            </p>
          </div>
        </RevealBlock>

        {/* ZONE 1: Championship Snooker Hall — Asymmetric 7/5 Split with Overlapping Real Inset */}
        <RevealBlock className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 relative group">
            <div className="luxury-surface rounded-3xl overflow-hidden aspect-[16/10] relative">
              <img
                src={snooker.image}
                alt={snooker.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090706]/80 via-transparent to-transparent" />
              <div className="absolute top-5 left-5">
                <span className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.16em] uppercase border backdrop-blur-md ${accentBadgeStyle(snooker.accent)}`}>
                  {snooker.badge}
                </span>
              </div>
            </div>

            {/* Secondary Real Club Photo Inset (Desktop) */}
            <div className="hidden sm:block absolute -bottom-8 -right-4 lg:-right-8 w-48 lg:w-56 rounded-2xl overflow-hidden luxury-surface p-1.5">
              <img
                src="/images/snooker-hall-players.webp"
                alt="Live players inside Dr. Snooker Ajman"
                className="w-full h-36 lg:h-44 object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-6 space-y-6 pt-4 sm:pt-8 lg:pt-0">
            <div className="text-xs tracking-[0.22em] uppercase text-[#9C6644] font-medium">
              {snooker.code}
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-semibold text-[#FAF7F2]">
              {snooker.title}
            </h3>
            <p className="text-sm uppercase tracking-[0.14em] text-[#D4AF37]">
              {snooker.subtitle}
            </p>
            <p className="text-base text-[#B8AFA6] leading-relaxed">
              {snooker.description}
            </p>
            <ul className="space-y-3 pt-1">
              {snooker.highlights.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-sm text-[#FAF7F2]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#198754] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <motion.button
                type="button"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => handleBookZone(snooker.id)}
                className="inline-flex items-center gap-2 min-h-[44px] text-xs uppercase tracking-[0.18em] font-semibold text-[#F3D06B] hover:text-[#FAF7F2] transition-colors cursor-pointer"
              >
                <span>Reserve Snooker Table</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </RevealBlock>

        {/* ZONES 2 & 3: Pro Pool Arena (5 cols) + Private VIP Snooker Suite (7 cols, offset down) */}
        <div id="vip-suite" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start pt-4">
          {/* Pro Pool Arena */}
          <RevealBlock className="lg:col-span-5 luxury-surface rounded-3xl overflow-hidden flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden group">
              <img
                src={pool.image}
                alt={pool.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100E] via-transparent to-transparent" />
              <div className="absolute top-5 left-5">
                <span className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.16em] uppercase border backdrop-blur-md ${accentBadgeStyle(pool.accent)}`}>
                  {pool.badge}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-[11px] tracking-[0.22em] uppercase text-[#9C6644]">
                  {pool.code}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#FAF7F2]">
                  {pool.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.15em] text-[#D4AF37]">
                  {pool.subtitle}
                </p>
                <p className="text-sm sm:text-base text-[#B8AFA6] leading-relaxed">
                  {pool.description}
                </p>
              </div>

              <div className="space-y-4 pt-3 border-t border-white/10">
                <ul className="space-y-2.5">
                  {pool.highlights.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-[#FAF7F2]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#9C6644] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => handleBookZone(pool.id)}
                  className="inline-flex items-center gap-2 min-h-[44px] text-xs uppercase tracking-[0.18em] font-semibold text-[#F3D06B] hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  <span>Reserve Pool Table</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </RevealBlock>

          {/* Private VIP Snooker Room (Asymmetric Staggered Offset) */}
          <RevealBlock delay={0.1} className="lg:col-span-7 lg:mt-14 luxury-surface rounded-3xl overflow-hidden">
            <div className="relative aspect-[16/9] overflow-hidden group">
              <img
                src={vip.image}
                alt={vip.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100E] via-[#14100E]/20 to-transparent" />
              <div className="absolute top-5 left-5 flex items-center gap-2.5">
                <span className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.16em] uppercase border backdrop-blur-md ${accentBadgeStyle(vip.accent)}`}>
                  {vip.badge}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              <div className="sm:col-span-7 space-y-3">
                <div className="text-[11px] tracking-[0.22em] uppercase text-[#D4AF37]">
                  {vip.code}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#FAF7F2]">
                  {vip.title}
                </h3>
                <p className="text-sm text-[#B8AFA6] leading-relaxed">
                  {vip.description}
                </p>
              </div>
              <div className="sm:col-span-5 space-y-4 sm:border-l sm:border-white/10 sm:pl-6">
                <ul className="space-y-2.5">
                  {vip.highlights.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FAF7F2]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => handleBookZone(vip.id)}
                  className="gold-cta w-full sm:w-auto px-5 min-h-[44px] rounded-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold cursor-pointer"
                >
                  <span>Book Private VIP Suite</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </RevealBlock>
        </div>

        {/* ZONES 4 & 5: Emerald Restaurant & Sheesha Café (7 cols) + Next-Gen Gaming Arena (5 cols) */}
        <div id="cafe-gaming" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Restaurant & Sheesha Café (Emerald Velvet Signature) */}
          <RevealBlock className="lg:col-span-7 luxury-surface rounded-3xl overflow-hidden border-[#198754]/25">
            <div className="relative aspect-[16/9] overflow-hidden group">
              <img
                src={cafe.image}
                alt={cafe.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100E] via-transparent to-transparent" />
              <div className="absolute top-5 left-5">
                <span className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.16em] uppercase border backdrop-blur-md ${accentBadgeStyle(cafe.accent)}`}>
                  {cafe.badge}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-2">
                  <div className="text-[11px] tracking-[0.22em] uppercase text-[#198754] font-semibold">
                    {cafe.code}
                  </div>
                  <h3 className="font-display text-2xl sm:text-4xl font-semibold text-[#FAF7F2]">
                    {cafe.title}
                  </h3>
                </div>
                <span className="text-xs uppercase tracking-[0.14em] text-[#F3D06B]">
                  {cafe.subtitle}
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#B8AFA6] leading-relaxed max-w-2xl">
                {cafe.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {cafe.highlights.map((pt) => (
                  <div
                    key={pt}
                    className="rounded-2xl bg-[#0F5132]/20 border border-[#198754]/30 p-4 text-xs sm:text-sm text-[#FAF7F2]/90 leading-snug"
                  >
                    {pt}
                  </div>
                ))}
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleBookZone(cafe.id)}
                  className="inline-flex items-center gap-2 min-h-[44px] text-xs uppercase tracking-[0.18em] font-semibold text-[#F3D06B] hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  <span>Reserve Emerald Lounge Booth</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </RevealBlock>

          {/* Next-Gen Gaming Arena */}
          <RevealBlock delay={0.12} className="lg:col-span-5 lg:mt-16 luxury-surface rounded-3xl overflow-hidden">
            <div className="relative aspect-[16/10] overflow-hidden group">
              <img
                src={gaming.image}
                alt={gaming.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100E] via-transparent to-transparent" />
              <div className="absolute top-5 left-5">
                <span className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.16em] uppercase border backdrop-blur-md ${accentBadgeStyle(gaming.accent)}`}>
                  {gaming.badge}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div className="space-y-2.5">
                <div className="text-[11px] tracking-[0.22em] uppercase text-[#9C6644]">
                  {gaming.code}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#FAF7F2]">
                  {gaming.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.15em] text-[#D4AF37]">
                  {gaming.subtitle}
                </p>
                <p className="text-sm sm:text-base text-[#B8AFA6] leading-relaxed">
                  {gaming.description}
                </p>
              </div>

              <ul className="space-y-2.5 pt-2 border-t border-white/10">
                {gaming.highlights.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-[#FAF7F2]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#198754] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                type="button"
                whileHover={{ x: 4 }}
                transition={{ ease: EDITORIAL_EASE }}
                onClick={() => handleBookZone(gaming.id)}
                className="inline-flex items-center gap-2 min-h-[44px] text-xs uppercase tracking-[0.18em] font-semibold text-[#F3D06B] hover:text-[#FAF7F2] transition-colors cursor-pointer"
              >
                <span>Reserve Gaming Station</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
