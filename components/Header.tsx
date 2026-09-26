"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/data/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState<string>("/imaxtellogo.png");
  const [activeSection, setActiveSection] = useState("home");

  // Scroll Spy logic to highlight active link
  useEffect(() => {
    const handleScrollSpy = () => {
      // Offset scroll target detection slightly below navbar height (100px)
      const scrollPos = window.scrollY + 100;
      const sections = ["home", "about", "brands", "contact"];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      // scrolled state monitor
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // Trigger once on mount

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Fall back to text-based logo immediately on error
  const handleLogoError = () => {
    setLogoSrc("");
  };

  const navTextColor = scrolled ? "text-deep-charcoal" : "text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 pt-[env(safe-area-inset-top,0px)] ${
          scrolled
            ? "bg-white backdrop-blur-md border-b border-primary/10 py-2.5 shadow-sm"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo Group */}
          <Link href="/" className="flex items-center gap-3 group">
            {logoSrc ? (
              <div className="flex items-center justify-center">
                <Image
                  src={scrolled ? "/imaxtellogo.png" : "/imaxtellogo-white.png"}
                  alt="Imaxtel Logo"
                  width={180}
                  height={50}
                  priority
                  unoptimized
                  style={{ width: "auto" }}
                  onError={handleLogoError}
                  className="h-10 xs:h-11 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ) : (
              // Premium Text Fallback if image doesn't exist yet
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary flex items-center justify-center border border-sky-blue/20 relative overflow-hidden transition-transform duration-300 group-hover:rotate-6">
                  <span className="text-white font-bold text-lg font-poppins">IM</span>
                </div>
                <div className="flex flex-col">
                  <span className={`font-semibold text-base tracking-widest leading-none font-poppins ${scrolled ? "text-deep-charcoal" : "text-white"}`}>
                    IMAXTEL
                  </span>
                  <span className="text-[8px] text-primary tracking-widest uppercase font-mono mt-0.5">
                    International Group
                  </span>
                </div>
              </div>
            )}
          </Link>

          {/* Desktop Navigation (Home, About, Brands, Contact) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = item.href === "#" + activeSection;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-poppins font-medium tracking-[0.18em] transition-colors uppercase relative py-1.5 ${
                    isActive
                      ? "text-primary font-semibold"
                      : `${navTextColor} hover:text-primary`
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span 
                      layoutId="navActiveLine"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 cursor-pointer transition-colors active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            <Menu size={26} className={navTextColor} />
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-deep-charcoal/95 backdrop-blur-xl flex flex-col p-6 font-poppins overflow-y-auto max-h-screen"
          >
            {/* Mobile Header bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
              <div className="flex items-center gap-3">
                {logoSrc ? (
                  <Image
                    src="/imaxtellogo-white.png"
                    alt="Imaxtel Logo"
                    width={150}
                    height={40}
                    unoptimized
                    style={{ width: "auto" }}
                    onError={handleLogoError}
                    className="h-9 w-auto object-contain"
                  />
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
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-primary p-2 cursor-pointer"
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Nav list */}
            <div className="flex-1 flex flex-col gap-6 justify-center">
              {navItems.map((item, index) => {
                const isActive = item.href === "#" + activeSection;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-3xl font-bold tracking-widest uppercase transition-colors block ${
                        isActive ? "text-primary" : "text-white hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Footer Area */}
            <div className="border-t border-white/10 pt-6 mt-8 flex flex-col gap-6">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-4 bg-primary text-white text-xs font-semibold tracking-widest uppercase hover:bg-dark-green transition-colors"
              >
                Contact Us
              </Link>
              <div className="flex flex-col gap-1 text-[10px] text-white/50 font-poppins tracking-tight">
                <span>EMAIL: info@imaxtelintl.ae</span>
                <span>WEBSITE: www.imaxtelintl.ae</span>
                <span>© {new Date().getFullYear()} Imaxtel Goods Wholesalers Co. LLC. All rights reserved.</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
