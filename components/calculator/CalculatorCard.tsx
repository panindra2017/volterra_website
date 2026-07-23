"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface CalculatorCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  color?: "lime" | "emerald" | "blue" | "amber";
}

const colorClasses = {
  lime: {
    bg: "bg-lime-100",
    icon: "text-lime-600",
    border: "border-lime-200",
    badge: "bg-lime-500/10 text-lime-700",
  },

  emerald: {
    bg: "bg-emerald-100",
    icon: "text-emerald-600",
    border: "border-emerald-200",
    badge: "bg-emerald-500/10 text-emerald-700",
  },

  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
    border: "border-blue-200",
    badge: "bg-blue-500/10 text-blue-700",
  },

  amber: {
    bg: "bg-amber-100",
    icon: "text-amber-600",
    border: "border-amber-200",
    badge: "bg-amber-500/10 text-amber-700",
  },
};

export default function CalculatorCard({
  title,
  value,
  subtitle,
  icon,
  color = "lime",
}: CalculatorCardProps) {
  const theme = colorClasses[color];

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[30px]
        border
        ${theme.border}
        bg-white
        p-6
        shadow-sm
        transition-all
      `}
    >
      {/* Decorative Glow */}

      <div
        className={`
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          ${theme.bg}
          opacity-40
          blur-3xl
        `}
      />

      {/* Top */}

      <div className="relative flex items-start justify-between">
        <div
          className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            ${theme.bg}
            ${theme.icon}
          `}
        >
          {icon}
        </div>

        <div
          className={`
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            ${theme.badge}
          `}
        >
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>

      {/* Content */}

      <div className="relative mt-8">

        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <h3 className="mt-3 break-words text-3xl font-black text-slate-900">
          {value}
        </h3>

        <p className="mt-3 leading-6 text-slate-500">
          {subtitle}
        </p>

      </div>

      {/* Bottom Accent */}

      <div
        className={`
          mt-8
          h-1.5
          w-20
          rounded-full
          ${theme.bg}
        `}
      />
    </motion.div>
  );
}