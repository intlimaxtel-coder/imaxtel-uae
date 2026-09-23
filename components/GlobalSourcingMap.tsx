"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NodeData {
  id: string;
  name: string;
  code: string;
  x: number;
  y: number;
  controlX: number;
  controlY: number;
  labelDx: number;
  labelDy: number;
  textAnchor: "start" | "middle" | "end";
  category: string;
  detail: string;
  established: string;
  isHub?: boolean;
}

const sourcingNodes: NodeData[] = [
  {
    id: "poland",
    name: "Poland",
    code: "PL",
    x: 175,
    y: 75,
    controlX: 195,
    controlY: 120,
    labelDx: 0,
    labelDy: -14,
    textAnchor: "middle",
    category: "European Sourcing Hub",
    detail: "Dairy, Confectionery & Premium European Goods",
    established: "Active Partner Node"
  },
  {
    id: "kuwait",
    name: "Kuwait",
    code: "KW",
    x: 250,
    y: 155,
    controlX: 265,
    controlY: 162,
    labelDx: -10,
    labelDy: 16,
    textAnchor: "end",
    category: "GCC Regional Trade Node",
    detail: "Regional Sourcing & Trade Channel",
    established: "Active Regional Partner"
  },
  {
    id: "india",
    name: "India",
    code: "IN",
    x: 360,
    y: 165,
    controlX: 310,
    controlY: 155,
    labelDx: 0,
    labelDy: 18,
    textAnchor: "middle",
    category: "Agricultural & Rice Sourcing",
    detail: "Basmati Rice, Spices & Wholesale Provisions",
    established: "Core Commodity Stream"
  },
  {
    id: "thailand",
    name: "Thailand",
    code: "TH",
    x: 440,
    y: 195,
    controlX: 350,
    controlY: 180,
    labelDx: -8,
    labelDy: 18,
    textAnchor: "end",
    category: "SE Asia Food & Beverages",
    detail: "Jasmine Rice, Sauces & Beverage Sourcing",
    established: "Direct Import Route"
  },
  {
    id: "vietnam",
    name: "Vietnam",
    code: "VN",
    x: 470,
    y: 165,
    controlX: 370,
    controlY: 150,
    labelDx: 0,
    labelDy: -14,
    textAnchor: "middle",
    category: "Agricultural Sourcing Network",
    detail: "Coffee, Rice & Specialty Food Products",
    established: "Direct Trade Channel"
  },
  {
    id: "philippines",
    name: "Philippines",
    code: "PH",
    x: 510,
    y: 185,
    controlX: 400,
    controlY: 160,
    labelDx: 10,
    labelDy: 4,
    textAnchor: "start",
    category: "Specialty FMCG Imports",
    detail: "Authentic Specialty Grocery & Homecare Goods",
    established: "Key Retail Supplier"
  }
];

const hubNode: NodeData = {
  id: "uae",
  name: "UAE (HQ)",
  code: "AE",
  x: 280,
  y: 172,
  controlX: 280,
  controlY: 172,
  labelDx: 0,
  labelDy: -18,
  textAnchor: "middle",
  category: "Primary Corporate HQ & Import Hub",
  detail: "Burj Nahar Mall, Office No. A30, Dubai & GCC Trade Operations",
  established: "Primary Headquarters",
  isHub: true
};

export const GlobalSourcingMap: React.FC = () => {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  const activeNode = activeHoverId
    ? sourcingNodes.find((n) => n.id === activeHoverId) || (activeHoverId === "uae" ? hubNode : null)
    : null;

  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[400px] bg-[#0B132B] border border-primary relative flex flex-col justify-between p-3.5 xs:p-5 sm:p-8 overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl select-none font-poppins">
      {/* Refined Data Console Corner Brackets */}
      {/* <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-primary/70 z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-primary/70 z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-primary/70 z-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-primary/70 z-20 pointer-events-none" /> */}

      {/* Background Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(#FFFFFF 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Top Header Console Bar */}
      <div className="relative z-20 flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 w-full  pb-3 border-b border-white/10">
        <div className="flex items-center gap-2 shrink-0">
          
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-white uppercase font-poppins">
            Active SCM Network Nodes
          </span>
        </div>
        
      </div>

      {/* Main Interactive Map SVG */}
      <div className="relative w-full h-full flex items-center justify-center my-2 max-w-full overflow-hidden">
        <svg
          viewBox="0 0 600 320"
          className="w-full h-auto max-h-[300px] xs:max-h-[340px] sm:max-h-[380px] lg:max-h-[420px] relative z-10 overflow-hidden max-w-full"
        >
          <defs>
            {/* Gradient for Supply Route Lines */}
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#009EE2" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0C805B" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="activeRouteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="1" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
            </linearGradient>

            {/* Hub Radial Glow Filter */}
            <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0C805B" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0C805B" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Stylized World Continent Silhouette Polygons */}
          {/* Europe & Asia (Eurasia) */}
          <polygon
            points="90,65 240,45 380,35 480,55 570,85 580,175 500,230 410,205 320,175 260,195 180,175 120,115"
            fill="rgba(255, 255, 255, 0.02)"
            stroke="rgba(0, 158, 226, 0.15)"
            strokeWidth="1.2"
          />
          {/* Africa */}
          <polygon
            points="120,165 190,170 230,215 220,285 170,295 120,225"
            fill="rgba(255, 255, 255, 0.015)"
            stroke="rgba(0, 158, 226, 0.12)"
            strokeWidth="1.2"
          />
          {/* Australia / Oceania */}
          <polygon
            points="470,240 530,240 550,280 490,290"
            fill="rgba(255, 255, 255, 0.015)"
            stroke="rgba(0, 158, 226, 0.12)"
            strokeWidth="1.2"
          />

          {/* Ambient Glow Aura under Kuwait HQ Hub */}
          <circle cx={hubNode.x} cy={hubNode.y} r="28" fill="url(#hubGlow)" className="animate-pulse" />

          {/* Curved Supply Connection Route Lines */}
          {sourcingNodes.map((node, i) => {
            const isHovered = activeHoverId === node.id;
            const pathD = `M ${node.x} ${node.y} Q ${node.controlX} ${node.controlY} ${hubNode.x} ${hubNode.y}`;

            return (
              <g key={`path-${node.id}`}>
                {/* Background path glow */}
                <motion.path
                  d={pathD}
                  stroke={isHovered ? "#38BDF8" : "url(#routeGradient)"}
                  strokeWidth={isHovered ? "2.5" : "1.5"}
                  strokeOpacity={isHovered ? 1 : 0.45}
                  strokeDasharray={isHovered ? "none" : "5 5"}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.12 }}
                />

                {/* Continuous Traveling Supply Pulse Dot */}
                <circle r={isHovered ? "3.5" : "2.5"} fill={isHovered ? "#38BDF8" : "#009EE2"}>
                  <animateMotion
                    path={pathD}
                    dur={`${2.8 + i * 0.4}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}

          {/* Sourcing Country Nodes + Persistent Readable Labels */}
          {sourcingNodes.map((node, i) => {
            const isHovered = activeHoverId === node.id;

            return (
              <g
                key={`node-${node.id}`}
                className="cursor-pointer group"
                onMouseEnter={() => setActiveHoverId(node.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                onClick={() => setActiveHoverId(activeHoverId === node.id ? null : node.id)}
              >
                {/* Node Outer Pulsing Aura */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isHovered ? 12 : 7}
                  className="fill-primary/20 group-hover:fill-primary/40 transition-all duration-300"
                />

                {/* Node Core Dot */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={isHovered ? 4.5 : 3}
                  className="fill-primary group-hover:fill-sky-400 transition-all duration-300 shadow-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 280, damping: 20, delay: i * 0.1 + 0.2 }}
                />

                {/* Persistent Scannable Country Label */}
                <g transform={`translate(${node.x + node.labelDx}, ${node.y + node.labelDy})`}>
                  {/* Label Backdrop Pill for high contrast readability */}
                  <rect
                    x={
                      node.textAnchor === "middle"
                        ? - (node.name.length * 3 + 4)
                        : node.textAnchor === "end"
                        ? - (node.name.length * 6 + 6)
                        : -2
                    }
                    y="-9"
                    width={node.name.length * 6 + 8}
                    height="13"
                    rx="3"
                    className={`transition-all duration-300 ${
                      isHovered
                        ? "fill-primary/90 stroke-primary/50"
                        : "fill-[#0B132B]/85 stroke-white/10"
                    }`}
                  />
                  {/* Label Text */}
                  <text
                    x="0"
                    y="0"
                    textAnchor={node.textAnchor}
                    className={`text-[9px] sm:text-[10px] font-poppins font-semibold tracking-wider transition-colors duration-300 ${
                      isHovered ? "fill-white font-bold" : "fill-slate-200"
                    }`}
                  >
                    {node.name.toUpperCase()}
                  </text>
                </g>
              </g>
            );
          })}

          {/* UAE HQ Dominant Hub Node */}
          <g
            className="cursor-pointer group"
            onMouseEnter={() => setActiveHoverId("uae")}
            onMouseLeave={() => setActiveHoverId(null)}
            onClick={() => setActiveHoverId(activeHoverId === "uae" ? null : "uae")}
          >
            {/* Hub Outer Ring */}
            <circle cx={hubNode.x} cy={hubNode.y} r="14" className="fill-brand-green/25 animate-pulse" />
            <circle cx={hubNode.x} cy={hubNode.y} r="9" className="fill-brand-green/40" />

            {/* Hub Core Dot */}
            <motion.circle
              cx={hubNode.x}
              cy={hubNode.y}
              r="5.5"
              className="fill-brand-green group-hover:fill-emerald-400 transition-colors duration-300"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.9 }}
            />

            {/* Persistent UAE HQ Badge */}
            <g transform={`translate(${hubNode.x}, ${hubNode.y - 18})`}>
              <rect
                x="-38"
                y="-11"
                width="76"
                height="16"
                rx="4"
                className="fill-brand-green/90 stroke-emerald-300/40 shadow-lg"
              />
              <text
                x="0"
                y="1"
                textAnchor="middle"
                className="text-[10px] font-poppins font-bold tracking-widest fill-white uppercase"
              >
                ★ UAE (HQ)
              </text>
            </g>
          </g>
        </svg>

        {/* Glassmorphism Interactive Tooltip Card on Hover */}
        <AnimatePresence>
          {activeNode && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-4 right-4 z-30 max-w-[240px] sm:max-w-[280px] bg-slate-900/90 backdrop-blur-md border border-primary/40 rounded-xl p-3.5 shadow-2xl pointer-events-none"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5 pb-1.5 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-poppins font-bold text-white tracking-wider uppercase">
                    {activeNode.name}
                  </span>
                </div>
                <span className="text-[9px] font-mono font-semibold text-primary bg-primary/10 px-2 py-0.5 border border-primary/20 rounded">
                  {activeNode.code}
                </span>
              </div>
              <p className="text-[10px] font-poppins text-slate-300 font-medium leading-snug">
                {activeNode.category}
              </p>
              <p className="text-[9px] font-poppins text-slate-400 mt-1 leading-normal">
                {activeNode.detail}
              </p>
              <div className="mt-2 text-[8px] font-mono text-emerald-400 flex items-center gap-1">
                <span>✓</span> {activeNode.established}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Caption Bar */}
      <div className="relative z-20 flex flex-col items-start border-t border-white/10 pt-3 w-full max-w-full overflow-hidden font-poppins">
        <span className="text-[10px] font-poppins text-primary uppercase tracking-[0.2em] font-semibold">
          Global Sourcing Infrastructure
        </span>
        <span className="text-[9px] font-mono text-white/50 mt-1 uppercase tracking-wider leading-relaxed whitespace-normal break-words max-w-full">
          Active Countries: UAE / Poland / Philippines / India / Thailand / Vietnam
        </span>
      </div>
    </div>
  );
};
