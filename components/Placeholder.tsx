"use client";

import React, { useState } from "react";
import Image from "next/image";

interface PlaceholderImageProps {
  id: string;
  alt: string;
  className?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1" | "21:9" | "3:2" | "16:10" | "3:4" | "auto";
  label?: string;
  priority?: boolean;
}

// Pre-mapped high-quality Unsplash assets corresponding to each placeholder ID
const unsplashMapping: Record<string, string> = {
  "home-hero-01": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80", // Logistics container port
  "group-intro-01": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80", // Premium retail supermarket shelves
  "group-intro-02": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", // Logistics boxes / shipping
  "division-imaxtel-01": "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80", // Freight logistics
  "division-malabar-01": "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80", // Wholesale grain / food raw materials
  "division-karak-spanish-cafe-01": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80", // Karak & Spanish Cafe
  "division-manila-01": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80", // Supermarket aisles B2C
  "division-imaxclean-01": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80", // Clean hygiene surface
  "product-food-beverages": "https://images.unsplash.com/photo-1610832958506-ee5633619144?auto=format&fit=crop&w=800&q=80", // Fresh food & beverages
  "product-personal-care": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=800&q=80", // Skincare / cosmetics
  "product-household": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80", // House cleaning liquids
  "product-health-wellness": "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80", // Nutritional supplements
  "warehouse-01": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", // Large scale storage
  "delivery-fleet-01": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80", // Fleet delivery vans
  "regional-operations-01": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", // GCC regional operations meeting
  "cta-background-01": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80", // Modern skyscraper office
  "about-hero-01": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80", // Editorial team meeting
  "about-story-01": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80", // Sourcing negotiation
  "about-global-01": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80", // Sourcing network cargo
  "brands-hero-01": "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1600&q=80", // Retail brands mockup
  "brands-cta-01": "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80", // Partners handshake
  "contact-hero-01": "https://images.unsplash.com/photo-1521791136368-1a46827d0adf?auto=format&fit=crop&w=1600&q=80", // B2B advisory desk
  "logistics-hero-01": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80", // Logistics ports
  "warehouse-logistics-01": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", // Logistics warehouse
  "fleet-logistics-01": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80", // Fleet trucks
  "logistics-operations-01": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80", // Customs operations
  "imaxtel-hero-01": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80", // Import logistics hero
  "imaxtel-operations-01": "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80", // Customs air logistics
  "imaxtel-logistics-01": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", // Forklift
  "imaxtel-product-01": "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80", // Grain supply
  "malabar-hero-01": "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=1600&q=80", // Wholesale hero
  "malabar-products-01": "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80", // Wholesale products sacks
  "malabar-fleet-01": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80", // Wholesale delivery van
  "malabar-operations-01": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", // Wholesale supply system
  "manila-hero-01": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1600&q=80", // Manila retail hero
  "manila-store-01": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80", // Checkout storefront
  "manila-products-01": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80", // Asian groceries display
  "manila-community-01": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", // Retail customers community
  "imaxclean-hero-01": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80", // IMAXCLEAN homecare hero
  "imaxclean-products-01": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80", // Detergents bottles
  "imaxclean-hygiene-01": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80", // Disinfection test
  "imaxclean-lifestyle-01": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80" // Lifestyle home hygiene
};

// Set of verified local image IDs present in /public/assets/images/
const LOCAL_IMAGES = new Set([
  "home-hero-01",
  "group-intro-01",
  "group-intro-02"
]);

// Set of verified local logo IDs present in /public/assets/logos/
const LOCAL_LOGOS = new Set<string>([
  "imaxtel-import-distribution",
  "malabar-food-stuff",
  "karak-spanish-cafe",
  "manila-supermarket",
  "imaxclean"
]);

// Set of local image IDs that use PNG format
const PNG_IMAGES = new Set([
  "group-intro-01",
  "group-intro-02"
]);

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  id,
  alt,
  className = "",
  aspectRatio = "16:9",
  label,
  priority = false
}) => {
  const [imgError, setImgError] = useState(false);
  const [unsplashError, setUnsplashError] = useState(false);

  // Aspect ratio Tailwind classes
  const ratioClasses = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
    "21:9": "aspect-[21/9]",
    "3:2": "aspect-[3/2]",
    "16:10": "aspect-[16/10]",
    "3:4": "aspect-[3/4]",
    "auto": "h-full w-full"
  };

  const selectedRatio = ratioClasses[aspectRatio];
  const hasLocalImage = LOCAL_IMAGES.has(id);
  const imageExt = PNG_IMAGES.has(id) ? "png" : "jpg";
  const localImageSrc = `/assets/images/${id}.${imageExt}`;
  const unsplashSrc = unsplashMapping[id] || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80";

  // Load local image if it exists and hasn't failed
  if (hasLocalImage && !imgError) {
    return (
      <div className={`relative overflow-hidden w-full ${selectedRatio} ${className}`}>
        <Image
          src={localImageSrc}
          alt={alt}
          fill
          unoptimized
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImgError(true)}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
    );
  }

  // Load Unsplash curated image as direct fallback (0ms delay, no 404 errors)
  if (!unsplashError) {
    return (
      <div className={`relative overflow-hidden w-full ${selectedRatio} ${className}`}>
        <Image
          src={unsplashSrc}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setUnsplashError(true)}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
    );
  }

  // Final fallback (premium abstract gradient panel) if Unsplash fails or user is offline
  return (
    <div
      className={`relative w-full ${selectedRatio} bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-950 border border-white/10 flex flex-col justify-between p-8 overflow-hidden select-none ${className}`}
    >
      {/* Premium glowing background gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-45">
        <div className="absolute top-[-20%] left-[-20%] w-[90%] h-[90%] rounded-full bg-primary/25 blur-[70px]" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[90%] h-[90%] rounded-full bg-brand-green/20 blur-[70px]" />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      </div>

      <div className="flex justify-between items-start z-10">
        <span className="text-[9px] font-mono tracking-widest text-brand-green bg-brand-green/10 px-2.5 py-1 border border-brand-green/10 uppercase">
          {label || "Imaxtel SCM Asset"}
        </span>
        <span className="text-[9px] font-mono tracking-widest text-primary bg-primary/10 px-2.5 py-1 border border-primary/10 uppercase">
          {aspectRatio}
        </span>
      </div>

      <div className="flex flex-col gap-2 z-10">
        <h4 className="text-base font-bold tracking-wide text-white uppercase font-poppins leading-tight">
          {alt}
        </h4>
        <p className="text-[9px] text-white/40 font-mono tracking-wider uppercase">
          Asset Node Ref: {id}
        </p>
      </div>

      <div className="flex justify-between items-end z-10 text-[9px] text-white/50 font-mono pt-4 border-t border-white/5">
        <span>IMAxtel INTL General Trading Co.</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

interface PlaceholderLogoProps {
  id: string;
  name: string;
  className?: string;
  dark?: boolean;
}

export const PlaceholderLogo: React.FC<PlaceholderLogoProps> = ({
  id = "",
  name = "Logo",
  className = "",
  dark = false
}) => {
  const [imgError, setImgError] = useState(false);
  const safeId = id || "";
  const hasLocalLogo = safeId ? LOCAL_LOGOS.has(safeId) : false;
  const logoSrc = `/assets/logos/${safeId}.png`;

  if (hasLocalLogo && !imgError) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <Image
          src={logoSrc}
          alt={`${name} Logo`}
          width={160}
          height={60}
          style={{ width: "auto", height: "auto" }}
          onError={() => setImgError(true)}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    );
  }

  // Elegant Vector UI Logo representation matching Sky Blue & White theme
  const isBrand = safeId ? safeId.startsWith("brand-") : false;
  const isPartner = safeId ? safeId.startsWith("partner-") : false;
  
  let themeStyles = "";
  if (dark) {
    themeStyles = "bg-deep-charcoal border-white/10 text-white";
  } else if (isBrand) {
    themeStyles = "bg-primary/5 border-primary/20 text-primary";
  } else if (isPartner) {
    themeStyles = "bg-slate-50 border-slate-100 text-deep-charcoal/70";
  } else {
    themeStyles = "bg-white border-slate-200 text-deep-charcoal";
  }

  const getInitials = (str: string) => {
    return str
      .split(" ")
      .map((w) => w[0])
      .join("")
      .substring(0, 3)
      .toUpperCase();
  };

  return (
    <div
      className={`flex flex-col items-center justify-center p-3 border transition-all duration-300 font-poppins relative overflow-hidden select-none hover:border-primary/40 ${themeStyles} ${className}`}
    >
      <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/5 rounded-full blur-xl pointer-events-none" />
      <span className="text-xs font-semibold tracking-widest text-center uppercase z-10 leading-none">
        {name}
      </span>
      <span className="text-[8px] font-mono text-center tracking-tight opacity-50 mt-1 uppercase z-10">
        {getInitials(name)}
      </span>
    </div>
  );
};
