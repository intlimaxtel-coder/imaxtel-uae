"use client";

import React from "react";
import { motion } from "framer-motion";

export const GlobalSourcingMapBackup: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] lg:aspect-[1.15] bg-white/[0.01] border border-primary/20 relative flex flex-col justify-start items-center p-4 sm:p-8 overflow-hidden rounded-xl">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/50" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/50" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/50" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/50" />
      
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 opacity-[0.05]"
           style={{ backgroundImage: "radial-gradient(#FFFFFF 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
      
      {/* SVG Map Illustration */}
      <svg 
        viewBox="0 0 600 350" 
        className="w-full h-auto max-h-[300px] lg:max-h-[340px] relative z-10 mt-6"
      >
        {/* stylized landmasses */}
        {/* Europe & Asia (Eurasia) */}
        <polygon 
          points="90,70 260,50 380,40 480,60 560,90 580,180 500,240 410,210 320,180 260,200 180,180 120,120" 
          fill="rgba(255,255,255,0.015)" 
          stroke="rgba(255,255,255,0.03)" 
          strokeWidth="1.5" 
        />
        {/* Africa */}
        <polygon 
          points="120,170 190,175 230,220 220,290 170,300 120,230" 
          fill="rgba(255,255,255,0.015)" 
          stroke="rgba(255,255,255,0.03)" 
          strokeWidth="1.5" 
        />
        {/* Australia */}
        <polygon 
          points="470,250 530,250 550,290 490,300" 
          fill="rgba(255,255,255,0.015)" 
          stroke="rgba(255,255,255,0.03)" 
          strokeWidth="1.5" 
        />

        {/* SCM Logistics Route Lines */}
        {[
          { name: "Poland", from: { x: 170, y: 85 }, to: { x: 245, y: 168 }, control: { x: 190, y: 130 } },
          { name: "Kuwait", from: { x: 230, y: 160 }, to: { x: 245, y: 168 }, control: { x: 235, y: 164 } },
          { name: "India", from: { x: 330, y: 165 }, to: { x: 245, y: 168 }, control: { x: 280, y: 155 } },
          { name: "Thailand", from: { x: 400, y: 190 }, to: { x: 245, y: 168 }, control: { x: 310, y: 165 } },
          { name: "Vietnam", from: { x: 430, y: 180 }, to: { x: 245, y: 168 }, control: { x: 320, y: 160 } },
          { name: "Philippines", from: { x: 470, y: 185 }, to: { x: 245, y: 168 }, control: { x: 340, y: 155 } }
        ].map((route, i) => (
          <motion.path
            key={route.name}
            d={`M ${route.from.x} ${route.from.y} Q ${route.control.x} ${route.control.y} ${route.to.x} ${route.to.y}`}
            stroke="rgba(0, 158, 226, 0.45)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.15 + 0.3 }}
          />
        ))}

        {/* Active Sourcing Nodes (Pins) */}
        {[
          { name: "Poland", x: 170, y: 85, delay: 0.3 },
          { name: "Kuwait", x: 230, y: 160, delay: 0.45 },
          { name: "UAE (HQ)", x: 245, y: 168, delay: 1.2, isHub: true },
          { name: "India", x: 330, y: 165, delay: 0.6 },
          { name: "Thailand", x: 400, y: 190, delay: 0.75 },
          { name: "Vietnam", x: 430, y: 180, delay: 0.9 },
          { name: "Philippines", x: 470, y: 185, delay: 1.05 }
        ].map((node) => (
          <g key={node.name}>
            {/* Pulsing ring animation under node */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.isHub ? 12 : 7}
              className={`${node.isHub ? "fill-brand-green/20" : "fill-primary/20"} animate-pulse`}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
            
            {/* Glowing outer ring */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.isHub ? 8 : 4.5}
              className={`${node.isHub ? "fill-brand-green/30" : "fill-primary/30"}`}
            />

            {/* Core node dot */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.isHub ? 5 : 2.5}
              className={node.isHub ? "fill-brand-green" : "fill-primary"}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: node.delay 
              }}
            />
          </g>
        ))}
      </svg>

      {/* Caption details at bottom */}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 z-20 flex flex-col items-start border-t border-white/10 pt-3 sm:pt-4 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] font-mono">
        <span className="text-[10px] font-poppins text-primary uppercase tracking-widest font-semibold">
           Global Sourcing Infrastructure 
        </span>
        <span className="text-[9px] font-mono text-white/50 mt-1 uppercase tracking-wider leading-relaxed">
          Active Countries: UAE / Poland / Philippines / India / Thailand / Vietnam
        </span>
      </div>
    </div>
  );
};
