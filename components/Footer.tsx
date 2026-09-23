"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navItems } from "@/data/navigation";
import { companyData } from "@/data/company";
import { ArrowUp } from "lucide-react";
import { motion, Variants } from "framer-motion";

export const Footer: React.FC = () => {
  const [logoSrc, setLogoSrc] = useState<string>("/imaxtellogo-white.png");

  const handleLogoError = () => {
    setLogoSrc("");
  };

  const footerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const footerColumnVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const bottomBarVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 }
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-deep-charcoal border-t border-primary/20 text-white py-20 md:py-24 relative overflow-hidden font-poppins">
      {/* Decorative vector background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={footerContainerVariants}
        className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 lg:px-12 grid grid-cols-12 gap-8 md:gap-12 relative z-10"
      >
        {/* Left Info Column */}
        <motion.div 
          variants={footerColumnVariants}
          className="col-span-12 lg:col-span-5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              {logoSrc ? (
                <div className="flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/imaxtellogo-white.png"
                    alt="IMAxtel Logo"
                    onError={handleLogoError}
                    className="h-8 md:h-15 w-auto object-contain"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-3 font-poppins">
                  <div className="w-9 h-9 bg-primary flex items-center justify-center border border-sky-blue/20">
                    <span className="text-white font-bold text-base font-poppins">IM</span>
                  </div>
                  <span className="text-white font-semibold text-sm tracking-widest font-poppins">
                    IMAXTEL GROUP
                  </span>
                </div>
              )}
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm mb-6 font-poppins font-normal">
              A diversified FMCG ecosystem connecting premium global products with regional markets. Sourcing directly, distributing reliably.
            </p>
          </div>
          
          {/* Credibility Pill Badge */}
          {/* <div className="mb-6 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-mono tracking-wider uppercase">
              <MapPin size={12} className="text-primary shrink-0" />
              <span>Kuwait-Based Operational Presence</span>
            </div>
          </div> */}
        </motion.div>

        {/* Navigation Column */}
        <motion.div 
          variants={footerColumnVariants}
          className="col-span-6 md:col-span-3 lg:col-span-3"
        >
          <h4 className="text-xs font-poppins font-medium tracking-[0.2em] text-primary uppercase mb-6">
            Navigation
          </h4>
          <ul className="flex flex-col gap-2.5">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-primary transition-all duration-300 uppercase tracking-widest font-poppins font-medium hover:translate-x-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Connect Column */}
        <motion.div 
          variants={footerColumnVariants}
          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4"
        >
          <h4 className="text-xs font-poppins font-medium tracking-[0.2em] text-primary uppercase mb-6">
            Connect
          </h4>
          <div className="flex flex-col gap-5">
            <div>
              <span className="text-[10px] text-primary font-poppins uppercase block mb-1">
                Office & Operations
              </span>
              <p className="text-xs text-white/70 leading-relaxed font-poppins">
                {companyData.contact.address.join(", ")}
              </p>
            </div>
            <div>
              <span className="text-[10px] text-primary font-poppins uppercase block mb-1">
                Inquiries
              </span>
              <a
                href={`mailto:${companyData.contact.emails[0]}`}
                className="text-xs text-white/70 hover:text-primary transition-colors font-poppins inline-block"
              >
                {companyData.contact.emails[0]}
              </a>
            </div>
            <div>
              <span className="text-[10px] text-primary font-poppins uppercase block mb-1">
                Call Us
              </span>
              <a
                href={`tel:${companyData.contact.phones[0]}`}
                className="text-xs text-white/70 hover:text-primary transition-colors font-poppins inline-block"
              >
                {companyData.contact.phones[0]}
              </a>
            </div>
          </div>
        </motion.div>

      </motion.div>

      {/* Bottom Bar */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={bottomBarVariants}
        className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 lg:px-12 border-t border-white/10 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 relative z-10 font-poppins"
      >
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-xs font-poppins font-medium text-white/60 hover:text-primary transition-colors cursor-pointer group"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>

        <div className="text-center md:text-right font-poppins text-xs text-white/50">
          © {new Date().getFullYear()} {companyData.name}. All Rights Reserved.
        </div>
      </motion.div>
    </footer>
  );
};
