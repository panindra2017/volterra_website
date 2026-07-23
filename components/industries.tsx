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
  Hospital,
} from "lucide-react";
import { useRouter } from "next/navigation";

const industries = [
  {
    title: "Residential",
    icon: Home,
    image: "/industries/residential.png",
    description:
      "Reliable EV charging solutions for apartments, gated communities, villas, and individual homes.",
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
    image: "/industries/corporate.png",
    description:
      "Smart workplace charging infrastructure for offices, business parks, and employee parking facilities.",
    sectors: [
      "Corporate Offices",
      "Technology Parks",
      "Business Campuses",
      "Employee Parking",
    ],
  },

  {
    title: "Destination Charging",
    icon: Hotel,
     image: "/industries/destinationcharging.png",
    description:
      "Enhance guest experiences with convenient EV charging at hotels, resorts, restaurants, and cafés.",
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
     image: "/industries/highway.png",
    description:
      "High-speed DC fast charging designed for intercity travel, highways, and long-distance EV journeys.",
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
      image: "/industries/fleetlogistics.png",
    description:
      "Scalable charging infrastructure for fleet operators, logistics hubs, delivery services, and commercial EVs.",
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
       image: "/industries/retail&commercial.png",
    description:
      "Attract more visitors with seamless EV charging at shopping malls, retail stores, supermarkets, and commercial centers.",
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
     image: "/industries/realestate.png",
    description:
      "Future-ready EV charging solutions that increase property value across residential and commercial developments.",
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
       image: "/industries/publicinfrastructure.png",
    description:
      "Reliable public charging networks for parking facilities, government projects, institutions, and urban mobility.",
    sectors: [
      "Public Parking",
      "Government Projects",
      "Institutions",
      "Public Charging",
    ],
  },

  {
    title: "Healthcare ",
    icon: Hospital,
    image: "/industries/healthcare.png",
    description:
      "Reliable EV charging infrastructure for hospitals and healthcare facilities, ensuring convenient access for staff, patients, and visitors.",
    sectors: [
      "Hospitals",
      "Clinics",
      " Medical Centres",
    ],
  },
];

export default function Industries() {
    const router = useRouter()

  const [active, setActive] = useState(0);

  const current = industries[active];
  const Icon = current.icon;

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-34"
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
              bg-lime-500
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-white
              shadow-[0_20px_50px_rgba(132,204,22,.35)]

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
                  designed for residential communities, workplaces, destination charging,
                  highways, fleet operators and public spaces.
                  </p>
        
                </motion.div>
        

        {/* Main Layout */}

        <div className="-mt-6 grid gap-16 lg:grid-cols-[340px_1fr]">

          {/* ================= LEFT SIDE ================= */}

          {/* <div>

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

          </div> */}

          <div className="sticky top-28">

  {/* Header */}
  <div className="mb-8">

    <span className="text-sm font-semibold uppercase tracking-[4px] text-lime-600">
      Explore
    </span>

    <h3 className="mt-2 text-3xl font-black text-slate-900">
      Industries
    </h3>

    <div className="mt-4 h-1 w-16 rounded-full bg-lime-500" />

  </div>

  <div className="space-y-4">

    {industries.map((industry, index) => (

      <button
        key={industry.title}
        onClick={() => setActive(index)}
        className={`
          group
          relative
          w-full
          overflow-hidden
          rounded-2xl
          border
          transition-all
          duration-300

          ${
            active === index
              ? "border-lime-500 bg-lime-500 shadow-2xl"
              : "border-slate-200 bg-white hover:border-lime-300 hover:-translate-y-1 hover:shadow-xl"
          }
        `}
      >

        {/* Left Accent */}
        <div
          className={`
            absolute
            left-0
            top-0
            h-full
            w-1
            transition-all

            ${
              active === index
                ? "bg-white"
                : "bg-transparent group-hover:bg-lime-500"
            }
          `}
        />

        <div className="flex items-center justify-between px-6 py-3">

          {/* Left */}
          <div className="flex items-center gap-3">

            {/* Number */}
            <div
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                text-sm
                font-black
                transition-all

                ${
                  active === index
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-500 group-hover:bg-lime-100 group-hover:text-lime-700"
                }
              `}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Title */}
            <div>

              <h4
                className={`
                  text-lg
                  font-bold

                  ${
                    active === index
                      ? "text-white"
                      : "text-slate-800"
                  }
                `}
              >
                {industry.title}
              </h4>

            </div>

          </div>

          {/* Arrow */}
           <div
            className={`
              flex
              ${
                active === index
                  ? " text-white"
                  : " text-slate-500"
              }
            `}
          >
            <ArrowRight
                      className={`h-5 w-5 transition-transform duration-300

                      ${
                        active === index
                          ? "translate-x-1"
                          : "group-hover:translate-x-1"
                      }`}
                    />
          </div>

        </div>

      </button>

    ))}

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

           <div className="relative overflow-hidden min-h-105">

  {/* Background Image */}
  <motion.img
    key={current.image}
    src={current.image}
    alt={current.title}
    initial={{ scale: 1.08, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-slate-900/35" />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-800/70 to-transparent" />

  {/* Decorative Glow */}
  <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-lime-500/20 blur-[120px]" />

  {/* Content */}
  <div className="relative z-10 flex min-h-105 flex-col justify-center p-12">

    <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

      <div className="max-w-2xl">

        {/* <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-lime-500/90 backdrop-blur-xl text-white shadow-2xl">

          <Icon className="h-12 w-12" />

        </div> */}
          <div
      className="
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-2xl
      border
      border-white/20
      bg-white/10
      backdrop-blur-xl
      shadow-2xl
      "
    >
      <Icon className="h-8 w-8 text-lime-400" />
    </div>

           <h2
      className="
      mt-6
      text-4xl
      lg:text-5xl
      font-extrabold
      tracking-tight
      text-white
      drop-shadow-xl
      "
    >
      {current.title}
    </h2>

          {/* Green Line */}
    <div className="mt-4 h-1 w-14 rounded-full bg-lime-400" />

    {/* Description */}
    <p
      className="
      mt-5
      max-w-lg
      text-lg
      leading-8
      text-slate-200
      "
    >
      {current.description}
    </p>

      </div>

      {/* Industry Number */}
  <div className="absolute right-10 top-8 hidden lg:block">

    <span
      className="
      text-[140px]
      font-black
      leading-none
      text-white/8
      select-none
      "
    >
      {String(active + 1).padStart(2, "0")}
    </span>

  </div>

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

              <div className="rounded-[30px] bg-linear-to-br from-lime-500 to-green-600 p-8 text-white">

                <h3 className="text-2xl font-bold">
                  Ready to Electrify?
                </h3>

                <p className="mt-3 leading-7 text-white/90">
                  Build a reliable charging ecosystem tailored to your
                  organization with Volterra Energy.
                </p>

                <button
                  onClick={() => router.push('/contact')}
                  className="
                    mt-7
                    w-full
                    rounded-2xl
                    bg-white
                    px-6
                    py-4
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

                <div className="mt-8 space-y-4 border-t border-white/20 pt-8">

                  {/* <div className="-mt-4">
                    <p className="text-2xl font-black">500+</p>
                    <span className="text-sm text-white/80">
                      Charging Points
                    </span>
                  </div> */}

                  <div>
                    <p className="text-2xl font-black">96%</p>
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