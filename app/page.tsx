"use client";

import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { partnerBrands } from "@/data/brands";
import { PlaceholderImage } from "@/components/Placeholder";
import { InteractiveEcosystem } from "@/components/InteractiveEcosystem";
import { GlobalSourcingMap } from "@/components/GlobalSourcingMap";
import { InHouseBrandsShowcase } from "@/components/InHouseBrandsShowcase";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Globe, Layers, MapPin, Phone, Mail, Clock, Truck, ShoppingBag, Building2 } from "lucide-react";

const Counter = ({ 
  end, 
  duration = 1.5, 
  suffix = "", 
  prefix = "",
  formatCommas = false 
}: { 
  end: number; 
  duration?: number; 
  suffix?: string; 
  prefix?: string;
  formatCommas?: boolean 
}) => {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let active = true;
    const currentElement = elementRef.current;

    const startCounter = () => {
      let start = 0;
      const stepTime = 12; // ms
      const totalSteps = (duration * 1000) / stepTime;
      const increment = end / totalSteps;
      
      const timer = setInterval(() => {
        if (!active) {
          clearInterval(timer);
          return;
        }
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);
    };

    if (currentElement) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startCounter();
            if (observer && currentElement) {
              observer.unobserve(currentElement);
            }
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(currentElement);
    }

    return () => {
      active = false;
      if (observer && currentElement) {
        observer.unobserve(currentElement);
        observer.disconnect();
      }
    };
  }, [end, duration]);

  const formattedCount = formatCommas ? count.toLocaleString() : count;
  return <span ref={elementRef}>{prefix}{formattedCount}{suffix}</span>;
};

const profileItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }
  })
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }
  })
};

const introContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const introItemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const featureListContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const featureItemVariants: Variants = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function HomePage() {
  const heroStaggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const contactCardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1
      }
    })
  };

  return (
    <div className="flex flex-col w-full bg-white overflow-x-hidden">
      
      {/* SECTION 01 - CINEMATIC HERO */}
      <section id="home" className="relative w-full min-h-[85dvh] xs:min-h-[88dvh] sm:min-h-screen lg:min-h-[110vh] flex items-center bg-deep-charcoal pt-28 pb-20 xs:pt-32 xs:pb-24 sm:py-28 lg:py-32 overflow-hidden">
        {/* Cinematic Blur overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none z-0" />
        
        {/* Subtle world map shipping route background lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 150 C 300 200, 500 50, 900 300 S 1400 100, 2000 400" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M100 450 C 600 300, 800 600, 1200 350 S 1700 500, 2100 250" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="5 5" />
          <path d="M300 100 C 500 250, 900 150, 1100 450" fill="none" stroke="#FFFFFF" strokeWidth="1" />
        </svg>
        
        {/* Background Image Container - Clearer port & crane background imagery */}
        <div className="absolute inset-0 z-0 opacity-[0.45] sm:opacity-[0.35]">
          <PlaceholderImage
            id="home-hero-01"
            alt="Global FMCG Logistics"
            aspectRatio="auto"
            priority={true}
            className="w-full h-full object-cover object-[65%_center] sm:object-center"
          />
        </div>

        {/* Balanced Gradient Scrim for high image clarity + legible text */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-deep-charcoal/80 via-deep-charcoal/45 to-deep-charcoal/90 sm:from-deep-charcoal/60 sm:via-deep-charcoal/30 sm:to-deep-charcoal/85 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 lg:px-12 w-full grid grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={heroStaggerContainer}
            className="col-span-12 lg:col-span-8 flex flex-col items-start"
          >
            {/* <motion.h1 
              className="text-[2.1rem] xs:text-[2.35rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.28] xs:leading-[1.24] sm:leading-[1.12] mb-7 xs:mb-9 sm:mb-10 max-w-4xl font-poppins"
            >
              <motion.span variants={itemVariants} className="block">
                Connecting Global Products
              </motion.span>
              <motion.span 
                variants={itemVariants}
                className="text-primary font-semibold relative block sm:inline-block mt-3.5 xs:mt-4 sm:mt-2"
              >
                with Regional Markets.
                <span className="absolute -bottom-1 sm:bottom-1 left-0 right-0 h-[2.5px] sm:h-[3px] bg-primary/40 rounded-full" />
              </motion.span>
            </motion.h1> */}

            <motion.h1
  className="text-[2.1rem] xs:text-[2.35rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.28] xs:leading-[1.24] sm:leading-[1.12] mb-8 xs:mb-10 sm:mb-10 max-w-4xl font-poppins"
>
  {/* Line 1 — word-by-word reveal, triggers on mount (hero is above the fold) */}
  <span className="flex flex-wrap">
    {"Connecting Global Products".split(" ").map((word, i) => (
      <span key={word} className="overflow-hidden inline-block mr-[0.28em] pb-1">
        <motion.span
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.15 + i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      </span>
    ))}
  </span>

  {/* Line 2 — shimmering gradient highlight + animated underline */}
  <motion.span
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="relative block sm:inline-block mt-3.5 xs:mt-4 sm:mt-2 pb-2.5 sm:pb-1 font-semibold"
  >
    <motion.span
      className="bg-clip-text text-transparent bg-[length:200%_auto]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, #009fe3 0%, #6fd0ff 25%, #009fe3 50%, #6fd0ff 75%, #009fe3 100%)",
      }}
      animate={{ backgroundPosition: ["0% center", "200% center"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    >
      with Regional Markets.
    </motion.span>

    <motion.span
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
      style={{ originX: 0 }}
      className="absolute bottom-0 sm:bottom-0.5 left-0 right-0 h-[2.5px] sm:h-[3px] rounded-full bg-gradient-to-r from-primary via-[#6fd0ff] to-primary"
    />
  </motion.span>
</motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-[0.95rem] xs:text-base md:text-lg text-white/85 max-w-xl sm:max-w-2xl leading-[1.75] sm:leading-relaxed mb-10 xs:mb-12 sm:mb-12 font-normal font-poppins"
            >
              Imaxtel International specializes in global sourcing and logistics infrastructure, importing premium food and household products from global hubs to distribution networks across the region.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-2 sm:mt-0"
            >
              {/* <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.25, ease: "easeOut" }} className="w-full sm:w-auto">
                <Link
                  href="#contact"
                  className="group w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center text-center gap-3 px-8 py-3.5 sm:py-4 bg-primary hover:bg-[#008CC9] active:bg-[#0077B3] text-white text-xs font-poppins font-semibold tracking-[0.2em] uppercase transition-all duration-300 border border-primary shadow-lg shadow-primary/10 hover:shadow-primary/25 cursor-pointer rounded-none"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div> */}

              <motion.div
  whileHover={{ y: -3 }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
  className="w-full sm:w-auto relative"
>
  <Link
    href="#contact"
    className="group relative w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-3 px-9 py-4 bg-primary text-white text-xs font-poppins font-semibold tracking-[0.2em] uppercase overflow-hidden rounded-full border border-primary/80 shadow-[0_8px_24px_-8px_rgba(0,150,214,0.55)] transition-shadow duration-300 hover:shadow-[0_10px_32px_-6px_rgba(0,150,214,0.7)] cursor-pointer"
  >
    {/* Sweep highlight on hover */}
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />

    {/* Fill shift on hover/active */}
    <span className="absolute inset-0 bg-[#008CC9] scale-x-0 origin-left group-hover:scale-x-100 group-active:bg-[#0077B3] transition-transform duration-300 ease-out -z-10" />

    <span className="relative z-10">Contact Us</span>
    <ArrowRight
      className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
    />
  </Link>
</motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 02 - GROUP EDITORIAL INTRO */}
      <section id="about" className="py-12 sm:py-20 lg:py-24 bg-white relative border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 lg:px-12 grid grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={introContainerVariants}
            className="col-span-12 lg:col-span-5 flex flex-col justify-center"
          >
            <motion.span 
              variants={introItemVariants}
              className="text-xs font-poppins text-primary font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3 sm:mb-4 block"
            >
              | Who We Are 
            </motion.span>
            <motion.h2 
              variants={introItemVariants}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-deep-charcoal mb-4 sm:mb-6 leading-[1.15] font-poppins"
            >
              One Group.<br className="hidden xs:inline" /> Multiple Strengths.
            </motion.h2>
            <motion.p 
              variants={introItemVariants}
              className="text-xs sm:text-sm text-deep-charcoal/80 leading-[1.65] mb-6 sm:mb-8 font-normal font-poppins"
            >
              Imaxtel oversees a cohesive business structure that bridges the gap between international FMCG suppliers and regional consumers. By integrating global import capabilities, wholesale channels, retail operations, and specialized hygiene lines, we deliver absolute reliability at scale.
            </motion.p>

            {/* Editorial flow steps */}
            <motion.div 
              variants={featureListContainer}
              className="flex flex-col gap-4 sm:gap-6 mt-2 font-poppins"
            >
              {[
                { 
                  step: "Global Sourcing", 
                  desc: "Accessing premium networks in Poland, UAE, Thailand, India, and more.",
                  icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                },
                { 
                  step: "Import & Distribution", 
                  desc: "Handling custom clearance and supply logistics securely.",
                  icon: <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
                },
                { 
                  step: "Wholesale & Bulk", 
                  desc: "Supplying over 4,000+ clients via Malabar Food Stuff.",
                  icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
                },
                { 
                  step: "Retail Operations", 
                  desc: "Connecting directly to consumers via Manila Supermarket.",
                  icon: <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                }
              ].map((flow, i) => (
                <motion.div 
                  key={i} 
                  variants={featureItemVariants}
                  className="flex items-start gap-3 sm:gap-4 pl-3.5 sm:pl-4 border-l-[3px] border-primary relative group hover:border-l-[4px] transition-all duration-300"
                >
                  <div className="p-1.5 sm:p-2 bg-primary/5 rounded-lg text-primary group-hover:bg-primary/10 transition-colors duration-300 mt-0.5 shrink-0">
                    {flow.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] sm:text-xs font-semibold tracking-[0.12em] sm:tracking-[0.15em] text-primary uppercase font-poppins">{flow.step}</span>
                    <span className="text-xs sm:text-sm text-deep-charcoal/70 leading-[1.55] sm:leading-[1.6] mt-0.5 sm:mt-1 font-poppins font-normal">{flow.desc}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="col-span-12 lg:col-span-7 flex flex-col items-center lg:items-end justify-center">
            {/* Image Composition Container - Reserves proper height for primary & offset secondary images */}
            <div className="relative w-full max-w-[500px] aspect-[4/5] xs:aspect-[4/5] sm:aspect-[3/4] mx-auto">
              {/* Primary Image: Logistics Storage (group-intro-02) */}
              <motion.div
                className="absolute top-0 left-0 w-[72%] aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-slate-100/50 z-10"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  ease: [0.16, 1, 0.3, 1],
                  scale: { duration: 0.4, ease: "easeOut" }
                }}
                whileHover={{ scale: 1.03 }}
              >
                <PlaceholderImage 
                  id="group-intro-02" 
                  alt="Logistics storage" 
                  aspectRatio="auto" 
                  className="w-full h-full object-cover" 
                />
              </motion.div>

              {/* Secondary Image: Sourcing Operations (group-intro-01), overlapping bottom right */}
              <motion.div
                className="absolute bottom-0 right-0 w-[52%] aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-3 xs:border-4 sm:border-[6px] border-white z-20"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.15, 
                  ease: [0.16, 1, 0.3, 1],
                  scale: { duration: 0.4, ease: "easeOut" }
                }}
                whileHover={{ scale: 1.03 }}
              >
                <PlaceholderImage 
                  id="group-intro-01" 
                  alt="Sourcing operations" 
                  aspectRatio="auto" 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
            </div>

            {/* Column Balance Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-[500px] mt-8 sm:mt-10 lg:mt-8 bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center justify-around font-poppins relative overflow-hidden mx-auto"
            >
              {/* Subtle background glow */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary tracking-tight">
                  <Counter end={4000} suffix="+" />
                </div>
                <div className="text-[10px] xs:text-[11px] md:text-xs font-semibold uppercase tracking-wider text-deep-charcoal/60 mt-1 font-poppins">
                  Clients Supplied
                </div>
              </div>
              
              <div className="w-px h-8 sm:h-10 bg-slate-200" />
              
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-green tracking-tight">
                  <Counter end={7} suffix="+" />
                </div>
                <div className="text-[10px] xs:text-[11px] md:text-xs font-semibold uppercase tracking-wider text-deep-charcoal/60 mt-1 font-poppins">
                  Sourcing Hubs
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Corporate Profile Details Row */}
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 lg:px-12 grid grid-cols-12 gap-8 sm:gap-12 lg:gap-24 mt-12 sm:mt-20 lg:mt-24 pt-12 sm:pt-20 lg:pt-24 border-t border-slate-100 relative">
          
          <div className="relative col-span-12 lg:col-span-6 flex flex-col items-start pr-0 lg:pr-12">
            {/* Muted background grid pattern to prevent plain white void */}
            <div 
              className="absolute -left-8 -top-8 w-[120%] h-[120%] opacity-[0.03] pointer-events-none z-0"
              style={{ backgroundImage: "radial-gradient(#0F172A 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }}
            />
            
            <motion.span 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={profileItemVariants}
              className="text-xs font-poppins font-medium tracking-[0.18em] sm:tracking-[0.2em] text-primary uppercase mb-3 sm:mb-4 block relative z-10"
            >
              | Corporate Profile 
            </motion.span>
            
            <motion.h3 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={profileItemVariants}
              className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold tracking-tight text-deep-charcoal leading-[1.18] sm:leading-[1.15] mb-3 sm:mb-4 relative z-10"
            >
              UAE&apos;s Premier FMCG &amp; Sourcing Gateway
            </motion.h3>

            {/* Subtle brand-colored line / rule under the heading */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              variants={profileItemVariants}
              className="w-12 sm:w-16 h-[2px] bg-primary mb-6 sm:mb-8 relative z-10"
            />
            
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              variants={profileItemVariants}
              className="text-xs sm:text-sm font-poppins font-normal text-deep-charcoal/80 leading-[1.65] mb-4 sm:mb-6 relative z-10"
            >
              IMAxtel Goods Wholesalers Co. L.L.C is a premier FMCG business group based in Dubai, United Arab Emirates, established in 2010. We specialize in the import, global sourcing, and regional distribution of high-quality consumer goods from around the globe. Our mission is to bring premium products to consumers and businesses, ensuring satisfaction and reliability at every stage.
            </motion.p>
            
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
              variants={profileItemVariants}
              className="text-xs sm:text-sm font-poppins font-normal text-deep-charcoal/80 leading-[1.65] relative z-10"
            >
              With extensive industry experience, IMAxtel has grown to become a trusted leader in the FMCG sector across the UAE and GCC region. We have built a robust supply chain and an extensive portfolio of products. Our commitment to quality and customer satisfaction drives everything we do.
            </motion.p>

            {/* Micro-animated stats callouts */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.4}
              variants={profileItemVariants}
              className="grid grid-cols-2 gap-4 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-100 w-full relative z-10 font-poppins"
            >
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-charcoal tracking-tight font-poppins">
                  <Counter end={2010} duration={1.2} />
                </span>
                <span className="text-[9px] sm:text-[10px] font-poppins font-medium tracking-widest text-gold uppercase mt-1">
                  Established In
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-charcoal tracking-tight font-poppins">
                  <Counter end={14} duration={1.5} suffix="+" />
                </span>
                <span className="text-[9px] sm:text-[10px] font-poppins font-medium tracking-widest text-gold uppercase mt-1">
                  Years FMCG Experience
                </span>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-6 flex flex-col gap-4 sm:gap-6 justify-center">
            {/* Vision Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-4 sm:p-6 md:p-8 bg-white border border-slate-200/50 border-l-4 border-l-primary rounded-sm relative overflow-hidden transition-all duration-300 shadow-none hover:shadow-[0_12px_30px_-10px_rgba(15,23,42,0.08)] cursor-default"
            >
              <div className="flex gap-3.5 sm:gap-6 items-start">
                <span className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-brand-green leading-none select-none shrink-0 mt-0.5">
                  01
                </span>
                <div className="flex flex-col">
                  <h4 className="text-sm sm:text-base font-poppins font-semibold text-deep-charcoal mb-1.5 sm:mb-2 uppercase tracking-wide">
                    Our Vision
                  </h4>
                  <p className="text-xs font-poppins font-normal text-deep-charcoal/70 leading-[1.6]">
                    We aspire to be a global leader in the general trading industry, recognized for our highest-quality products, exceptional customer service, and innovative solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-4 sm:p-6 md:p-8 bg-white border border-slate-200/50 border-l-4 border-l-primary rounded-sm relative overflow-hidden transition-all duration-300 shadow-none hover:shadow-[0_12px_30px_-10px_rgba(15,23,42,0.08)] cursor-default"
            >
              <div className="flex gap-3.5 sm:gap-6 items-start">
                <span className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-brand-green leading-none select-none shrink-0 mt-0.5">
                  02
                </span>
                <div className="flex flex-col">
                  <h4 className="text-sm sm:text-base font-poppins font-semibold text-deep-charcoal mb-1.5 sm:mb-2 uppercase tracking-wide">
                    Our Mission
                  </h4>
                  <p className="text-xs font-poppins font-normal text-deep-charcoal/70 leading-[1.6]">
                    We are committed to source the best products from international markets, ensuring they meet the highest standards of quality and efficient distribution through our state-of-the-art logistics infrastructure. We aim to exceed customer expectations in quality and service, fostering long-term relationships.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 03 - OUR BUSINESS ECOSYSTEM SHOWCASE */}
      <section className="py-20 sm:py-24 bg-deep-charcoal relative">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 lg:px-12 mb-12">
          {/* <span className="text-xs font-mono text-primary font-semibold tracking-widest uppercase mb-4 block">
            [  ]
          </span> */}
<motion.span 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={profileItemVariants}
              className="text-xs font-poppins font-medium tracking-[0.2em] text-primary uppercase mb-4 block relative z-10"
            >
              | Group Operations
            </motion.span>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-xl font-poppins">
            Interactive Business Ecosystem
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 lg:px-12">
          <InteractiveEcosystem />
        </div>
      </section>

      {/* SECTION 04 - PRODUCTS ACROSS OUR NETWORK */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              {/* <span className="text-xs font-mono text-primary font-semibold tracking-widest uppercase mb-4 block">
                [ Curated Portfolio ]
              </span> */}
<motion.span 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={profileItemVariants}
              className="text-xs font-poppins font-medium tracking-[0.2em] text-primary uppercase mb-4 block relative z-10"
            >
              | Curated Portfolio
            </motion.span>
              
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-charcoal max-w-xl font-poppins">
                Products Across Our Network
              </h2>
            </div>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { 
                id: "product-food-beverages", 
                name: "Food & Beverages", 
                category: "FMCG Import",
                desc: "Snacks, grains, and specialty imports.", 
                image: "/assets/images/products/food-beverages.jpeg" 
              },
              { 
                id: "product-personal-care", 
                name: "Personal Care", 
                category: "Beauty & Care",
                desc: "Premium skincare and hygiene items.", 
                image: "/assets/images/products/personal-care.jpeg" 
              },
              { 
                id: "product-household", 
                name: "Household Products", 
                category: "Home Care",
                desc: "Dedicated cleaning supplies and homecare.", 
                image: "/assets/images/products/household-products.jpeg" 
              },
              { 
                id: "product-health-wellness", 
                name: "Rice and Beverages", 
                category: "Rice & Beverages",
                desc: "Nutritional products and wellness items.", 
                image: "/assets/images/products/health-wellness.jpeg" 
              }
            ].map((prod, index) => (
              <motion.div
                key={prod.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="group flex flex-col bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 cursor-pointer"
              >
                {/* 4:3 Image Container with Category Badge Overlay */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  
                  {/* Category Pill Badge Overlay */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[9px] sm:text-[10px] font-poppins font-medium tracking-widest uppercase px-2.5 py-1 rounded-full bg-slate-900/75 backdrop-blur-md text-white border border-white/20">
                      {prod.category}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white font-poppins">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-deep-charcoal tracking-wide mb-1.5 group-hover:text-primary transition-colors font-poppins">
                      {prod.name}
                    </h3>
                    <p className="text-xs font-poppins text-deep-charcoal/70 leading-relaxed line-clamp-2">
                      {prod.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 - GLOBAL SOURCING & INFRASRUCTURE */}
      <section className="py-16 sm:py-24 bg-deep-charcoal text-white relative overflow-hidden w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-full h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 lg:px-12 grid grid-cols-12 gap-8 sm:gap-12 items-center relative z-10 w-full min-w-0 overflow-hidden">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={introContainerVariants}
            className="col-span-12 lg:col-span-5 flex flex-col justify-center w-full min-w-0 max-w-full overflow-hidden"
          >
            <motion.span 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={profileItemVariants}
              className="text-xs font-poppins font-medium tracking-[0.2em] text-primary uppercase mb-3 sm:mb-4 block relative z-10"
            >
              | SCM Scale 
            </motion.span>
            <motion.h2 
              variants={introItemVariants}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight font-poppins break-words max-w-full"
            >
              International Sourcing & Logistics Scale
            </motion.h2>
            <motion.p 
              variants={introItemVariants}
              className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal mb-6 sm:mb-8 font-poppins max-w-xl break-words"
            >
              We establish long-term trade relations directly with major FMCG manufacturers across key international export zones. By pairing this with temperature-controlled storage and a dedicated shipping fleet, we safeguard supply consistency.
            </motion.p>

            <motion.div 
              variants={featureListContainer}
              className="grid grid-cols-2 border border-white/10 rounded-xl overflow-hidden bg-white/[0.02] w-full max-w-full"
            >
              {[
                { value: 2250, suffix: "SQ. M", formatCommas: true, desc: "Central Storage Facility" },
                { value: 20, suffix: "+ VEHICLES", formatCommas: false, desc: "Active Logistics Fleet" },
                { value: 7, suffix: "+ NATIONS", formatCommas: false, desc: "Sourcing Pipelines" },
                { value: 4000, suffix: "+ CLIENTS", formatCommas: true, desc: "Wholesale Connections" }
              ].map((hub, i) => (
                <motion.div 
                  key={i} 
                  variants={featureItemVariants}
                  className={`p-2.5 xs:p-3 sm:p-6 flex flex-col justify-center min-w-0 overflow-hidden ${
                    i === 0 ? "border-r border-b border-white/10" : ""
                  } ${
                    i === 1 ? "border-b border-white/10" : ""
                  } ${
                    i === 2 ? "border-r border-white/10" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-baseline gap-x-1 font-poppins min-w-0 max-w-full overflow-hidden">
                    <span className="text-sm xs:text-base sm:text-xl md:text-2xl font-extrabold text-primary tracking-tight font-poppins shrink-0">
                      <Counter end={hub.value} formatCommas={hub.formatCommas} />
                    </span>
                    <span className="text-[11px] xs:text-xs sm:text-base font-bold text-primary tracking-tight font-poppins whitespace-normal break-words shrink-0">
                      {hub.suffix}
                    </span>
                  </div>
                  <span className="text-[8.5px] xs:text-[10px] sm:text-xs text-white/60 font-poppins tracking-wider sm:tracking-widest uppercase mt-1 sm:mt-1.5 font-medium leading-snug break-words max-w-full">
                    {hub.desc}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={introContainerVariants}
            className="col-span-12 lg:col-span-7 flex justify-end items-stretch w-full min-w-0 max-w-full overflow-hidden"
          >
            <GlobalSourcingMap />
          </motion.div>
        </div>
      </section>

      {/* SECTION 06 - BRANDS PORTFOLIO (In-house & Distributed) */}
      <section id="brands" className="py-20 sm:py-24 bg-white overflow-hidden border-b border-slate-100 w-full">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 lg:px-12 mb-10 sm:mb-12 w-full">
          <motion.span 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={profileItemVariants}
            className="text-xs font-poppins font-medium tracking-[0.2em] text-primary uppercase mb-3 sm:mb-4 block relative z-10"
          >
            | In-House Portfolio
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-deep-charcoal font-poppins mb-3 break-words max-w-full">
            Brands We&apos;ve Built
          </h2>
          <p className="text-xs sm:text-sm font-poppins text-deep-charcoal/70 max-w-2xl leading-relaxed break-words">
            IMAxtel-owned proprietary brands spanning authentic food, dairy, beverages, and premium regional rice varieties.
          </p>
        </div>

        {/* In-House Brands Grid Showcase */}
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 lg:px-12 mb-20 sm:mb-24 w-full">
          <InHouseBrandsShowcase />
        </div>

        {/* Infinite Horizontal Logo Marquee for Partner Brands */}
        <div className="w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 lg:px-12 mb-8 w-full">
            <motion.span 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={profileItemVariants}
              className="text-xs font-poppins font-medium tracking-[0.2em] text-primary uppercase mb-4 block relative z-10"
            >
              | Partner Brands
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-deep-charcoal font-poppins break-words max-w-full">
              Brands We Distribute
            </h2>
          </div>

          <div className="relative w-full overflow-hidden py-8 border-y border-slate-100 bg-slate-50/40 max-w-full">
            <div className="animate-marquee flex items-center gap-5 sm:gap-8">
              {/* First block iteration */}
              {partnerBrands.map((partner) => (
                <div key={partner.id} className="h-12 sm:h-16 w-24 sm:w-32 shrink-0 flex items-center justify-center p-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full w-auto h-auto object-contain transition-all duration-300 hover:scale-110 opacity-85 hover:opacity-100"
                  />
                </div>
              ))}
              {/* Second duplicated block iteration to allow seamless horizontal loop */}
              {partnerBrands.map((partner) => (
                <div key={`${partner.id}-dup`} className="h-12 sm:h-16 w-24 sm:w-32 shrink-0 flex items-center justify-center p-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full w-auto h-auto object-contain transition-all duration-300 hover:scale-110 opacity-85 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 - CONTACT DETAILS (Clean B2B block with no forms) */}
      <section id="contact" className="py-20 sm:py-24 bg-white relative border-t border-slate-100 overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 lg:px-12 mb-10 sm:mb-12 w-full">
          <motion.span 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={profileItemVariants}
            className="text-xs font-poppins font-medium tracking-[0.2em] text-primary uppercase mb-3 sm:mb-4 block relative z-10"
          >
            | CONNECT
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-deep-charcoal font-poppins mb-3 break-words max-w-full">
            Direct Corporate Inquiries
          </h2>
          <p className="text-xs sm:text-sm font-poppins text-deep-charcoal/70 max-w-2xl leading-relaxed break-words">
            IMAxtel Goods Wholesalers Co. L.L.C welcomes inquiries from global suppliers, UAE retail networks, and bulk wholesale partners. Connect directly with our administration and trade desk at Burj Nahar Mall, Dubai.
          </p>
        </div>

        {/* Structured 4-Column Contact Details Grid */}
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12 w-full font-poppins">
          
          {/* Card 1: UAE Corporate Headquarters */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={contactCardVariants}
            whileHover={{ y: -3, scale: 1.015 }}
            className="group flex gap-3.5 sm:gap-4 items-start p-5 sm:p-6 bg-white border border-slate-200/80 border-l-4 border-l-primary rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl hover:border-primary/40 cursor-default w-full min-w-0 max-w-full overflow-hidden"
          >
            <div className="flex items-center justify-center w-10 h-10 border border-primary/20 bg-primary/5 text-primary shrink-0 rounded-xl transition-all duration-300 group-hover:scale-105">
              <MapPin size={18} strokeWidth={2} />
            </div>
            <div className="flex flex-col min-w-0 max-w-full overflow-hidden">
              <span className="font-poppins font-medium uppercase tracking-[0.15em] text-[11px] text-primary mb-1.5 truncate">UAE Corporate HQ</span>
              <a 
                href="https://maps.google.com/?q=Burj+Nahar+Mall+Muteena+Street+Dubai+UAE" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors duration-300 group/link min-w-0 max-w-full overflow-hidden"
              >
                <address className="text-xs sm:text-sm text-deep-charcoal/80 not-italic font-normal leading-relaxed group-hover/link:underline break-words min-w-0 max-w-full">
                  {companyData.contact.address.map((line, idx) => (
                    <span key={idx} className="block break-words">{line}</span>
                  ))}
                </address>
              </a>
            </div>
          </motion.div>

          {/* Card 2: Kuwait Regional Office */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={contactCardVariants}
            whileHover={{ y: -3, scale: 1.015 }}
            className="group flex gap-3.5 sm:gap-4 items-start p-5 sm:p-6 bg-white border border-slate-200/80 border-l-4 border-l-primary rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl hover:border-primary/40 cursor-default w-full min-w-0 max-w-full overflow-hidden"
          >
            <div className="flex items-center justify-center w-10 h-10 border border-primary/20 bg-primary/5 text-primary shrink-0 rounded-xl transition-all duration-300 group-hover:scale-105">
              <Building2 size={18} strokeWidth={2} />
            </div>
            <div className="flex flex-col min-w-0 max-w-full overflow-hidden">
              <span className="font-poppins font-medium uppercase tracking-[0.15em] text-[11px] text-primary mb-1.5 truncate">Kuwait Office</span>
              <a 
                href="https://maps.google.com/?q=Al+Zibin+Complex+Salem+Al+Mubarak+Street+Salmiya+Kuwait" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors duration-300 group/link min-w-0 max-w-full overflow-hidden"
              >
                <address className="text-xs sm:text-sm text-deep-charcoal/80 not-italic font-normal leading-relaxed group-hover/link:underline break-words min-w-0 max-w-full">
                  {companyData.contact.kuwaitAddress.map((line, idx) => (
                    <span key={idx} className="block break-words">{line}</span>
                  ))}
                </address>
              </a>
            </div>
          </motion.div>

          {/* Card 3: Trade & Phone Desk */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={contactCardVariants}
            whileHover={{ y: -3, scale: 1.015 }}
            className="group flex gap-3.5 sm:gap-4 items-start p-5 sm:p-6 bg-white border border-slate-200/80 border-l-4 border-l-primary rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl hover:border-primary/40 cursor-default w-full min-w-0 max-w-full overflow-hidden"
          >
            <div className="flex items-center justify-center w-10 h-10 border border-primary/20 bg-primary/5 text-primary shrink-0 rounded-xl transition-all duration-300 group-hover:scale-105">
              <Phone size={18} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-medium uppercase tracking-[0.15em] text-[11px] text-primary mb-1.5">Trade & Phone Desk</span>
              <div className="flex flex-col gap-1.5 font-poppins text-xs sm:text-sm text-deep-charcoal/80 font-normal leading-relaxed">
                {companyData.contact.phones.map((phone, idx) => (
                  <a 
                    key={idx} 
                    href={`tel:${phone.replace(/\s+/g, '')}`} 
                    className="hover:text-primary transition-colors hover:underline block"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4: Emails (General & Careers) */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={contactCardVariants}
            whileHover={{ y: -3, scale: 1.015 }}
            className="group flex gap-3.5 sm:gap-4 items-start p-5 sm:p-6 bg-white border border-slate-200/80 border-l-4 border-l-primary rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl hover:border-primary/40 cursor-default w-full min-w-0 max-w-full overflow-hidden"
          >
            <div className="flex items-center justify-center w-10 h-10 border border-primary/20 bg-primary/5 text-primary shrink-0 rounded-xl transition-all duration-300 group-hover:scale-105">
              <Mail size={18} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-medium uppercase tracking-[0.15em] text-[11px] text-primary mb-1.5">Corporate & Careers</span>
              <div className="flex flex-col gap-2 text-xs sm:text-sm text-deep-charcoal/80 font-normal leading-relaxed">
                <div>
                  <span className="text-[10px] text-deep-charcoal/50 uppercase block">General Inquiries</span>
                  <a 
                    href={`mailto:${companyData.contact.infoEmail}`} 
                    className="hover:text-primary transition-colors hover:underline block break-all font-medium"
                  >
                    {companyData.contact.infoEmail}
                  </a>
                </div>
                <div>
                  <span className="text-[10px] text-deep-charcoal/50 uppercase block">Careers & HR</span>
                  <a 
                    href={`mailto:${companyData.contact.careersEmail}`} 
                    className="hover:text-primary transition-colors hover:underline block break-all font-medium text-primary"
                  >
                    {companyData.contact.careersEmail}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Visual Map Embed Full-Width Container matching 7xl Grid */}
        {/* <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 lg:px-12 w-full">
          <div className="relative w-full h-[220px] sm:h-[280px] overflow-hidden border border-slate-200/80 rounded-2xl shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2838159858737!2d55.3125219!3d25.2694119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cd1a0a520e5%3A0x6b876bb062a4d334!2sBurj%20Nahar%20Mall%2C%20Deira%2C%20Dubai%2C%20UAE!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(100%) contrast(1.1) opacity(0.85)" }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              className="absolute inset-0 w-full h-full max-w-full"
            />
            <div className="absolute inset-0 pointer-events-none border border-primary/10" />
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-sm border border-slate-200/80 px-4 py-2.5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 shadow-md max-w-full">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shrink-0" />
                <span className="text-xs font-semibold text-deep-charcoal tracking-wide uppercase font-poppins">Dubai HQ: Burj Nahar Mall, Muteena St</span>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green shrink-0" />
                <span className="text-xs font-semibold text-deep-charcoal tracking-wide uppercase font-poppins">Kuwait Office: Al Zibin Complex, Salmiya</span>
              </div>
            </div>
          </div>
        </div> */}
      </section>

    </div>
  );
}