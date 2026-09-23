"use client";

import React, { useState } from "react";
import Link from "next/link";
import { divisionsData, Division } from "@/data/divisions";
import { PlaceholderImage, PlaceholderLogo } from "./Placeholder";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const InteractiveEcosystem: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(divisionsData[0].id);

  return (
    <div
      className="w-full flex flex-col lg:flex-row min-h-fit lg:h-[600px] border border-primary/10 overflow-hidden bg-deep-charcoal font-poppins"
      role="tablist"
      aria-label="Business divisions"
    >
      {divisionsData.map((div: Division) => {
        const isActive = activeId === div.id;

        return (
          <motion.div
            key={div.id}
            role="tab"
            tabIndex={0}
            aria-selected={isActive}
            aria-controls={`division-panel-${div.id}`}
            onMouseEnter={() => setActiveId(div.id)}
            onFocus={() => setActiveId(div.id)}
            onClick={() => setActiveId(div.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveId(div.id);
              }
            }}
            animate={{
              flex: isActive ? "4 1 0%" : "1 1 0%",
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`relative flex flex-col justify-between p-5 md:p-8 overflow-hidden cursor-pointer group border-b lg:border-b-0 lg:border-r border-warm-ivory/10 last:border-0 outline-none focus-visible:ring-2 focus-visible:ring-primary/60 lg:min-h-0 ${
              isActive
                ? "min-h-[300px] bg-deep-charcoal/30"
                : "min-h-[92px] bg-deep-charcoal"
            }`}
            style={{
              boxShadow: isActive
                ? `inset 4px 0 0 0 ${div.accentColor}`
                : "inset 0 0 0 0 transparent",
              transition: "box-shadow 0.4s ease",
            }}
          >
            {/* Background Image with overlay */}
            <div className="absolute inset-0 z-0">
              <PlaceholderImage
                id={div.imagePlaceholder}
                alt={div.name}
                aspectRatio="auto"
                className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                  isActive ? "opacity-80 scale-105" : "opacity-25"
                }`}
              />
              <div
                className="absolute inset-0 transition-opacity duration-700"
                style={{
                  background: isActive
                    ? "linear-gradient(to bottom, rgba(15,23,42,0.2) 0%, rgba(15,23,42,0.92) 100%)"
                    : "linear-gradient(to bottom, rgba(15,23,42,0.75) 0%, rgba(15,23,42,0.98) 100%)",
                }}
              />
            </div>

            {/* Top row: index + logo, both always visible */}
            <div className="relative z-10 flex justify-between items-center w-full">
              <span
                className="text-sm font-poppins font-semibold tracking-wider transition-colors duration-300"
                style={{ color: isActive ? div.accentColor : "#7A8783" }}
              >
                {div.number}
              </span>
              <PlaceholderLogo
                id={div.logoPlaceholder}
                name={div.name.split(" ")[0]}
                className="h-8 md:h-10 w-auto border-none bg-transparent"
                dark
              />
            </div>

            {/* Content Container */}
            <div className="relative z-10 mt-auto flex flex-col">
              <span
                className="text-[10px] font-poppins tracking-widest uppercase mb-2 font-semibold transition-colors duration-300"
                style={{ color: isActive ? div.accentColor : "#B89A62" }}
              >
                {div.role}
              </span>

              <h3 className="text-xl md:text-2xl font-poppins font-semibold text-warm-ivory tracking-wide leading-tight group-hover:text-gold transition-colors duration-300">
                {div.name}
              </h3>

              {/* Seamless Grid Accordion Expansion + GPU Accelerated Fade/Slide */}
              <div
                id={`division-panel-${div.id}`}
                className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 10,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                    delay: isActive ? 0.12 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-sm font-poppins text-soft-stone mt-4 leading-relaxed max-w-md">
                    {div.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 mb-6">
                    {div.focusAreas.slice(0, 3).map((area) => (
                      <span
                        key={area}
                        className="text-[9px] font-poppins font-medium text-warm-ivory bg-warm-ivory/5 px-2.5 py-1 border border-warm-ivory/10 uppercase tracking-wide rounded-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* Explore Division Link using div.href */}
                  {div.href?.startsWith("http") ? (
                    <a              
                      href={div.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-poppins font-semibold uppercase tracking-wider group/link"
                      style={{ color: div.accentColor }}
                    >
                      Explore Division
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                        style={{ color: div.accentColor }}
                      />
                    </a>
                  ) : (
                    <Link
                      href={div.href || `/group/${div.id}`}
                      className="inline-flex items-center gap-2 text-xs font-poppins font-semibold uppercase tracking-wider group/link"
                      style={{ color: div.accentColor }}
                    >
                      Explore Division
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                        style={{ color: div.accentColor }}
                      />
                    </Link>
                  )}
                </motion.div>
              </div>

              {/* Compact hint when collapsed */}
              {!isActive && (
                <span className="text-[11px] font-poppins text-soft-stone/70 mt-1 hidden lg:block">
                  Tap to explore
                </span>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};