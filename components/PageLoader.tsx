"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const PageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial compilation/load time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 w-full h-full bg-deep-charcoal z-[9999] flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Background overlay blueprint grid */}
          <div className="absolute inset-0 opacity-[0.02]"
               style={{ backgroundImage: "linear-gradient(to right, #009EE2 1px, transparent 1px), linear-gradient(to bottom, #009EE2 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          
          <div className="relative flex flex-col items-center">
            {/* Spinning ring */}
            <div className="w-20 h-20 border-2 border-primary/20 border-t-primary rounded-full animate-spin-slow mb-6" />

            {/* Logo Inner Circle */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute top-5 w-10 h-10 bg-primary flex items-center justify-center border border-sky-blue/20"
            >
              <span className="text-white font-bold text-base font-poppins">IM</span>
            </motion.div>

            {/* Loading text details */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center mt-2"
            >
              <span className="text-sm font-semibold tracking-widest text-white font-poppins uppercase">
                IMAXTEL GROUP
              </span>
              <span className="text-[9px] font-mono text-primary uppercase tracking-widest mt-1">
                Sourcing & SCM System
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
