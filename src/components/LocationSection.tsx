"use client";

import { Clock, Compass, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { RevealBlock } from "./MotionPrimitives";

export function LocationSection() {
  return (
    <section
      id="location"
      className="relative py-24 sm:py-32 bg-[#0E0B09] border-t border-white/5 pb-32 md:pb-32"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12 space-y-12">
        <RevealBlock className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left 5 Columns: Ajman 24/7 Details & Direct Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F5132]/40 border border-[#198754]/50 text-[11px] uppercase tracking-[0.18em] text-[#FAF7F2]">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>24/7 Flagship Venue</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-[-0.02em] leading-[1.08] text-[#FAF7F2]">
                Visit {siteConfig.brandName} in Ajman
              </h2>
              <p className="text-base text-[#B8AFA6] leading-relaxed">
                <strong className="text-[#F3D06B] font-medium">
                  Opening November 28, 2026 — Open 24 Hours, 7 Days a Week.
                </strong>{" "}
                Step inside for late-night championship frames, private VIP hosting,
                esports sessions, or artisanal sheesha &amp; coffee.
              </p>
            </div>

            <div className="space-y-4">
              {/* Coordinates & Hours Card */}
              <div className="luxury-surface rounded-2xl p-6 space-y-4">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-[#FAF7F2]">
                      {siteConfig.city}
                    </div>
                    <div className="text-xs text-[#B8AFA6] tabular-nums mt-1">
                      GPS: {siteConfig.coordinates.lat.toFixed(6)},{" "}
                      {siteConfig.coordinates.lng.toFixed(6)} ({siteConfig.coordinates.dms})
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-white/10">
                  <Clock className="w-5 h-5 text-[#198754] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-[#FAF7F2]">
                      {siteConfig.hours}
                    </div>
                    <div className="text-xs text-[#B8AFA6] mt-0.5">
                      Round-the-clock tables, kitchen, specialty coffee &amp; sheesha service
                    </div>
                  </div>
                </div>
              </div>

              {/* Click-to-WhatsApp / Call & Google Maps Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-cta min-h-[52px] px-5 rounded-2xl inline-flex items-center justify-center gap-2.5 text-xs uppercase tracking-[0.12em] font-semibold"
                >
                  <Compass className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>

                <a
                  href={siteConfig.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-surface min-h-[52px] px-5 rounded-2xl inline-flex items-center justify-center gap-2.5 text-xs uppercase tracking-[0.1em] font-semibold text-[#FAF7F2] hover:border-[#198754]/60"
                >
                  <MessageCircle className="w-4 h-4 text-[#198754]" />
                  <span>{siteConfig.whatsappDisplay}</span>
                </a>
              </div>

              <a
                href={`tel:+${siteConfig.whatsappNumber}`}
                className="inline-flex items-center gap-2 text-xs text-[#B8AFA6] hover:text-[#F3D06B] transition-colors py-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Direct Club Line: {siteConfig.whatsappDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right 7 Columns: Embedded Google Map centered strictly on 25.398750, 55.443139 */}
          <div className="lg:col-span-7 luxury-surface rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[460px] relative">
            <iframe
              title={`${siteConfig.brandName} Ajman Location Map`}
              src={siteConfig.googleMapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px] sm:min-h-[460px] border-0 grayscale-[20%] contrast-[1.06]"
              allowFullScreen
            />
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 sm:right-auto luxury-glass-bar rounded-2xl px-4 py-3 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D4AF37] shrink-0" />
              <div className="text-xs">
                <div className="font-semibold text-[#FAF7F2]">{siteConfig.brandName} • Ajman</div>
                <div className="text-[#B8AFA6] tabular-nums">
                  {siteConfig.coordinates.lat}, {siteConfig.coordinates.lng}
                </div>
              </div>
            </div>
          </div>
        </RevealBlock>

        {/* Luxury Footer */}
        <footer className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#B8AFA6]">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-xl overflow-hidden bg-[#C7A683] border border-[#D4AF37]/40 shadow-[0_0_24px_-4px_rgba(212,175,55,0.38),0_4px_12px_rgba(0,0,0,0.5)] shrink-0">
              <img
                src="/images/logo-emblem.webp"
                alt="DR Snooker & Gaming Zone Cafe Emblem"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="font-display text-lg font-bold tracking-wider text-[#FAF7F2] block leading-tight">
                DR SNOOKER
              </span>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D4AF37] mt-0.5">
                GAMING ZONE CAFÉ • AJMAN • OPEN 24/7
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#arenas" className="hover:text-[#F3D06B] transition-colors">
              Arenas
            </a>
            <a href="#vip-suite" className="hover:text-[#F3D06B] transition-colors">
              VIP Suite
            </a>
            <a href="#cafe-gaming" className="hover:text-[#F3D06B] transition-colors">
              Café &amp; Gaming
            </a>
            <a href="#reserve" className="hover:text-[#F3D06B] transition-colors">
              Reserve
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
