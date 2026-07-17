"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Hotel,
  Zap,
  Truck,
  ShoppingBag,
  Building,
  Landmark,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    title: "Residential",
    icon: Home,
    description:
      "Reliable EV charging solutions designed for homes and residential communities.",
    sectors: [
      "Apartments",
      "RWAs",
      "Gated Communities",
      "Individual Homes",
    ],
  },

  {
    title: "Corporate",
    icon: Building2,
    description:
      "Smart workplace charging infrastructure for employees and visitors.",
    sectors: [
      "Corporate Offices",
      "Technology Parks",
      "Business Campuses",
      "Employee Parking",
    ],
  },

  {
    title: "Hospitality",
    icon: Hotel,
    description:
      "Destination charging that enhances guest experience for EV travelers.",
    sectors: [
      "Hotels",
      "Resorts",
      "Restaurants",
      "Cafés",
    ],
  },

  {
    title: "Highways",
    icon: Zap,
    description:
      "Ultra-fast charging infrastructure for long-distance travel.",
    sectors: [
      "Expressways",
      "National Highways",
      "Travel Corridors",
      "Charging Hubs",
    ],
  },

  {
    title: "Fleet & Logistics",
    icon: Truck,
    description:
      "Dedicated charging infrastructure for commercial fleet operators.",
    sectors: [
      "Fleet Operators",
      "Logistics",
      "Delivery Services",
      "Commercial EVs",
    ],
  },

  {
    title: "Retail & Commercial",
    icon: ShoppingBag,
    description:
      "Charging solutions that increase customer engagement and dwell time.",
    sectors: [
      "Shopping Malls",
      "Retail Stores",
      "Supermarkets",
      "Commercial Centers",
    ],
  },

  {
    title: "Real Estate",
    icon: Building,
    description:
      "Helping developers build EV-ready communities.",
    sectors: [
      "Builders",
      "Developers",
      "Townships",
      "Commercial Projects",
    ],
  },

  {
    title: "Public Infrastructure",
    icon: Landmark,
    description:
      "Scalable charging solutions for public mobility.",
    sectors: [
      "Public Parking",
      "Government Projects",
      "Institutions",
      "Public Charging",
    ],
  },
];

export default function Industries() {
  const [active, setActive] = useState(0);

  const current = industries[active];
  const Icon = current.icon;

  return (
    <section    className="relative overflow-hidden bg-[#F8FAFC] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-125 w-125 rounded-full bg-lime-400/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-125 w-125 rounded-full bg-slate-300/20 blur-[150px]" />

      <div className="relative mx-auto max-w-375 px-6 lg:px-12">

                {/* Header */}

         <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: .8 }}
                  className="mb-20 text-center"
                >
        
                  <div
                    className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-lime-500/20
                    bg-lime-500/10
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    tracking-widest
                    uppercase
                    text-lime-600
                    "
                  >
        
                      WHO WE SERVE
        
                  </div>
        
                  <h2
                    className="
                    mt-4
                    text-4xl
                    lg:text-5xl
                    font-black
                    leading-tight
                    text-slate-900
                    "
                  >
                     Charging Solutions <span className=" text-lime-600"> for Every Ecosystem</span>
                  </h2>
        
                  <p
                    className="
                    mx-auto
                    mt-3
                    max-w-4xl
                    text-lg
                    leading-7
                    text-slate-600
                    "
                  >
                  Volterra Energy delivers intelligent EV charging infrastructure
                  designed for residential communities, workplaces, hospitality,
                  highways, fleet operators and public spaces.
                  </p>
        
                </motion.div>
        

        {/* Main Layout */}

        <div className="-mt-6 grid gap-16 lg:grid-cols-[340px_1fr]">

          {/* ================= LEFT SIDE ================= */}

          <div>

            <div className="sticky top-28">

              <h3 className="mb-8 text-xl font-bold text-slate-900">
                Industries
              </h3>

              <div className="space-y-3">

                {industries.map((industry, index) => (

                  <button
                    key={industry.title}
                    onClick={() => setActive(index)}
                    className={`group flex w-full items-center justify-between rounded-2xl border px-6 py-5 text-left transition-all duration-300

                    ${
                      active === index
                        ? "border-lime-500 bg-lime-500 text-white shadow-xl"
                        : "border-slate-200 bg-white hover:border-lime-400 hover:shadow-md"
                    }`}
                  >

                    <span
                      className={`font-semibold text-lg

                      ${
                        active === index
                          ? "text-white"
                          : "text-slate-700"
                      }`}
                    >
                      {industry.title}
                    </span>

                    <ArrowRight
                      className={`h-5 w-5 transition-transform duration-300

                      ${
                        active === index
                          ? "translate-x-1"
                          : "group-hover:translate-x-1"
                      }`}
                    />

                  </button>

                ))}

              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            key={current.title}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .45 }}
            className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.06)]"
          >

            {/* Hero */}

            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10">

              <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-lime-500/20 blur-[120px]" />

              <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between -mb-6">

                <div>

                  <div className="flex h-18 w-18 items-center justify-center rounded-3xl bg-gradient-to-br from-lime-500 to-green-600 text-white shadow-2xl">

                    <Icon className="h-12 w-12" />

                  </div>

                  <h2 className="mt-6 text-5xl font-black text-white">

                    {current.title}

                  </h2>

                  <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-300">

                    {current.description}

                  </p>

                </div>

                <div className="hidden lg:block">

                  <span className="text-[160px] font-black text-white/5">
                    {String(active + 1).padStart(2, "0")}
                  </span>

                </div>

              </div>

            </div>
                        {/* Content */}

            <div className="grid gap-12 p-12 lg:grid-cols-[1fr_280px]">

              {/* Left */}

              <div>

                <div>

                  <p className="text-sm font-bold uppercase tracking-[3px] text-lime-600">
                    Ideal For
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4">

                    {current.sectors.map((sector) => (
                      <div
                        key={sector}
                        className="rounded-full border border-lime-200 bg-lime-50 px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-lime-500 hover:bg-lime-500 hover:text-white"
                      >
                        ✓ {sector}
                      </div>
                    ))}

                  </div>

                </div>

                {/* Features */}

                <div className="mt-12 grid gap-5 md:grid-cols-2">

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <h4 className="font-bold text-slate-900">
                      Smart Charging
                    </h4>

                    <p className="mt-3 leading-7 text-slate-600">
                      Intelligent AC & DC charging with remote monitoring and
                      energy optimization.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <h4 className="font-bold text-slate-900">
                      Future Ready
                    </h4>

                    <p className="mt-3 leading-7 text-slate-600">
                      Modular infrastructure that grows as your EV adoption
                      increases.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <h4 className="font-bold text-slate-900">
                      Reliable Support
                    </h4>

                    <p className="mt-3 leading-7 text-slate-600">
                      Professional installation, maintenance and 24×7 technical
                      assistance.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <h4 className="font-bold text-slate-900">
                      Scalable Network
                    </h4>

                    <p className="mt-3 leading-7 text-slate-600">
                      Easily expand charging capacity as your infrastructure
                      grows.
                    </p>
                  </div>

                </div>

              </div>

              {/* Right Sidebar */}

              <div className="rounded-[30px] bg-gradient-to-br from-lime-500 to-green-600 p-8 text-white">

                <h3 className="text-2xl font-bold">
                  Ready to Electrify?
                </h3>

                <p className="mt-3 leading-6 text-white/90">
                  Build a reliable charging ecosystem tailored to your
                  organization with Volterra Energy.
                </p>

                <button
                  className="
                    mt-6
                    w-full
                    rounded-2xl
                    bg-white
                    px-6
                    py-3
                    font-semibold
                    text-slate-900
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    cursor-pointer
                  "
                >
                  Request Consultation
                </button>

                <div className="mt-7 space-y-4 border-t border-white/20 pt-8">

                  <div className="-mt-4">
                    <p className="text-2xl font-black">500+</p>
                    <span className="text-sm text-white/80">
                      Charging Points
                    </span>
                  </div>

                  <div>
                    <p className="text-2xl font-black">99.9%</p>
                    <span className="text-sm text-white/80">
                      Network Reliability
                    </span>
                  </div>

                  <div>
                    <p className="text-2xl font-black">24×7</p>
                    <span className="text-sm text-white/80">
                      Technical Support
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );
}