"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { siteConfig, type GalleryItem } from "@/config/siteConfig";
import { RevealBlock, TACTILE_SPRING, EDITORIAL_EASE } from "./MotionPrimitives";

const CATEGORIES = [
  "All",
  "Snooker Hall",
  "Pool & VIP",
  "Gaming Arena",
  "Emerald Café & Sheesha",
] as const;

export function ClubGallery() {
  const [activeCat, setActiveCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered: GalleryItem[] =
    activeCat === "All"
      ? siteConfig.gallery
      : siteConfig.gallery.filter((item) => item.category === activeCat);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight")
        setLightboxIdx((prev) => (prev === null ? null : (prev + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setLightboxIdx((prev) =>
          prev === null ? null : (prev - 1 + filtered.length) % filtered.length
        );
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIdx, filtered.length]);

  const activeItem = lightboxIdx !== null ? filtered[lightboxIdx] : null;

  return (
    <section id="gallery" className="py-24 sm:py-32 lg:py-36 bg-[#090706]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Masthead + Filter Pills */}
        <RevealBlock className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">
              Inside Dr. Snooker Ajman
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-[-0.02em] text-[#FAF7F2]">
              Club Craftsmanship &amp; Architectural Vision
            </h2>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Gallery Categories"
          >
            {CATEGORIES.map((cat) => {
              const selected = activeCat === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => {
                    setActiveCat(cat);
                    setLightboxIdx(null);
                  }}
                  className={`relative px-4 min-h-[44px] rounded-full text-xs uppercase tracking-[0.14em] font-medium transition-colors cursor-pointer ${
                    selected ? "text-[#090706]" : "text-[#B8AFA6] hover:text-[#FAF7F2] bg-white/5 border border-white/10"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="galleryFilterPill"
                      transition={TACTILE_SPRING}
                      className="absolute inset-0 rounded-full gold-cta"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </RevealBlock>

        {/* Asymmetric Editorial Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {filtered.map((item, idx) => {
            const spanClass =
              idx === 0
                ? "md:col-span-7 aspect-[16/10]"
                : idx === 1
                ? "md:col-span-5 aspect-[16/10] md:aspect-auto md:min-h-[340px]"
                : idx % 4 === 2
                ? "md:col-span-4 aspect-[4/3]"
                : idx % 4 === 3
                ? "md:col-span-8 aspect-[16/9]"
                : "md:col-span-6 aspect-[16/10]";

            return (
              <motion.button
                key={item.id}
                layout
                type="button"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
                onClick={() => setLightboxIdx(idx)}
                className={`group relative rounded-3xl overflow-hidden luxury-surface text-left cursor-pointer ${spanClass}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090706]/90 via-[#090706]/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-[#090706]/70 border border-white/15 backdrop-blur-md flex items-center justify-center text-[#FAF7F2] opacity-80 group-hover:opacity-100 group-hover:border-[#D4AF37]/50 transition-all">
                  <Expand className="w-4 h-4" />
                </div>

                <div className="absolute bottom-5 inset-x-6 space-y-1.5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#F3D06B]">
                    {item.category}
                  </div>
                  <div className="font-display text-lg sm:text-xl font-semibold text-[#FAF7F2]">
                    {item.title}
                  </div>
                  <p className="text-xs text-[#B8AFA6] line-clamp-2 max-w-xl">
                    {item.caption}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] bg-[#090706]/94 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: EDITORIAL_EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl luxury-surface rounded-3xl overflow-hidden"
            >
              <button
                type="button"
                aria-label="Close Lightbox"
                onClick={() => setLightboxIdx(null)}
                className="absolute top-4 right-4 z-20 h-11 w-11 rounded-full bg-[#090706]/80 border border-white/20 flex items-center justify-center text-[#FAF7F2] hover:border-[#D4AF37] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative bg-[#090706] flex items-center justify-center max-h-[72vh]">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[72vh] w-full object-contain"
                />
              </div>

              <div className="p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]">
                    {activeItem.category}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-[#FAF7F2] mt-1">
                    {activeItem.title}
                  </h3>
                  <p className="text-sm text-[#B8AFA6] mt-1">{activeItem.caption}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() =>
                      setLightboxIdx((lightboxIdx - 1 + filtered.length) % filtered.length)
                    }
                    className="h-11 w-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-[#FAF7F2] hover:border-[#D4AF37] cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() => setLightboxIdx((lightboxIdx + 1) % filtered.length)}
                    className="h-11 w-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-[#FAF7F2] hover:border-[#D4AF37] cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
