"use client";

import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

interface FloatingCalculatorProps {
  onClick: () => void;
}

export default function FloatingCalculator({
  onClick,
}: FloatingCalculatorProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      whileHover={{
        scale: 1.08,
        y: -4,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        fixed
        bottom-8
        right-8
        z-999
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-lime-500
        text-white
        shadow-[0_20px_60px_rgba(132,204,22,.45)]
        transition-all
        hover:bg-lime-600
        focus:outline-none
        focus:ring-4
        focus:ring-lime-300
      "
      aria-label="Open Revenue Calculator"
    >
      <Calculator className="h-7 w-7" />

      {/* Pulse Animation */}
      <span
        className="
          absolute
          inset-0
          rounded-full
          border-2
          border-lime-400
          animate-ping
          opacity-20
        "
      />

      {/* Tooltip */}
      <div
        className="
          absolute
          right-20
          whitespace-nowrap
          rounded-xl
          bg-slate-900
          px-4
          py-2
          text-sm
          font-medium
          text-white
          opacity-0
          transition-opacity
          duration-200
          pointer-events-none
          group-hover:opacity-100
        "
      >
        Revenue Calculator
      </div>
    </motion.button>
  );
}