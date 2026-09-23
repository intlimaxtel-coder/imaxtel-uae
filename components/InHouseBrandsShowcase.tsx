"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { inHouseBrandsData, InHouseBrand } from "@/data/inhouseBrands";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const tileVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const categoryBadgeColors: Record<string, string> = {
  RICE: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  DAIRY: "bg-sky-500/10 text-sky-700 border-sky-500/20",
  BEVERAGES: "bg-rose-500/10 text-rose-700 border-rose-500/20",
  FOOD: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
};

export const InHouseBrandsShowcase: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="w-full font-poppins">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-sm"
      >
        {inHouseBrandsData.map((brand: InHouseBrand, index: number) => {
          const isActive = activeId === brand.id;
          const isOtherActive = activeId !== null && !isActive;

          // Gallery border logic to create clean hairline grid lines
          const borderClasses = `
            ${index % 3 !== 2 ? "lg:border-r" : ""}
            ${index % 2 !== 1 ? "sm:border-r lg:border-r-0" : ""}
            ${index < 3 ? "lg:border-b" : ""}
            ${index < 4 ? "sm:border-b lg:border-b-0" : ""}
            border-b sm:border-b-0 border-slate-200/60
          `;

          return (
            <motion.div
              key={brand.id}
              variants={tileVariants}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
              aria-label={`${brand.name} - ${brand.category}`}
              onMouseEnter={() => setActiveId(brand.id)}
              onMouseLeave={() => setActiveId(null)}
              onClick={() => setActiveId(activeId === brand.id ? null : brand.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveId(activeId === brand.id ? null : brand.id);
                }
              }}
              className={`relative flex flex-col items-center justify-center p-6 xs:p-8 min-h-[220px] xs:min-h-[240px] sm:min-h-[260px] bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:z-30 cursor-pointer ${borderClasses} ${
                isOtherActive ? "opacity-45 grayscale-[30%] scale-[0.98]" : "opacity-100 scale-100"
              } ${isActive ? "bg-slate-50/90 shadow-inner z-20" : "hover:bg-slate-50/40"}`}
            >
              {/* Logo Display Container */}
              <div className="relative w-full h-24 xs:h-28 sm:h-32 flex items-center justify-center p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  className={`max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] drop-shadow-sm ${
                    isActive ? "scale-108" : "scale-100"
                  }`}
                />
              </div>

              {/* Reveal Detail Panel on Hover / Tap */}
              <motion.div
                initial={false}
                animate={{
                  height: isActive ? "auto" : 0,
                  opacity: isActive ? 1 : 0,
                  marginTop: isActive ? 16 : 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="overflow-hidden w-full flex flex-col items-center text-center"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-[9px] xs:text-[10px] font-poppins font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full border ${
                      categoryBadgeColors[brand.category] || "bg-primary/10 text-primary border-primary/20"
                    }`}
                  >
                    {brand.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-poppins font-semibold text-deep-charcoal mb-1">
                  {brand.name}
                </h3>

                <p className="text-xs font-poppins text-deep-charcoal/70 leading-[1.65] line-clamp-3 max-w-xs">
                  {brand.description}
                </p>
              </motion.div>

              {/* Subtle Bottom Accent Indicator when Active */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[3px] bg-primary transition-transform duration-400 ease-out origin-left ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
