"use client";

import { motion, type Variants } from "framer-motion";

import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Leaf,
  Network,
  MapPin,
  Building2,
  BatteryCharging,
  ChevronDown,
} from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.3,
      },
    },
  };

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

  return (
    <section  id="hero" className="relative h-screen overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div
className="
absolute
top-0
left-0
right-0
h-48
bg-linear-to-b
from-black/30
to-transparent
"
/>

   <div
  className="
  absolute
  inset-0
  bg-cover
  bg-no-repeat
  scale-[1.08]
  "
  style={{
    backgroundImage: "url('/images/hero_image.png')",
    backgroundPosition: "72% center",
  }}
/>

      {/* Dark Overlay */}

<div className="absolute inset-0 bg-black/30" />



<div
className="
absolute
inset-0
"
/>

<div
className="
absolute
top-0
left-1/2
-translate-x-1/2
w-225
h-87.5
bg-white/5
blur-[120px]
rounded-full
"
/>
      {/* Left Gradient */}

      <div
className="
absolute
inset-0
bg-linear-to-r
from-[#08111d]/88
via-[#08111d]/45
to-transparent
"
/>

      {/* ================= CONTENT ================= */}
      <div
  className="
  absolute
  left-0
  top-0
  bottom-0
  w-[55%]
  bg-linear-to-r
  from-[#08111d]/35
  to-transparent
  backdrop-blur-[2px]
  "
/>

      <div className="relative z-20 max-w-[1750px] mx-auto h-full px-8 lg:px-16">

        <div className="flex h-full items-center">

          {/* LEFT CONTENT */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-190"
          >

            {/* Badge */}

            <motion.div variants={itemVariants}>

              <div
                className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/10
                backdrop-blur-xl
                px-6
                py-3
                shadow-xl
                "
              >

                <span className="relative flex h-3 w-3">

                  <span className="absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75 animate-ping" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-lime-400" />

                </span>

                <span className="text-white text-base font-medium tracking-wide">

                  Driving India's EV Revolution

                </span>

              </div>

            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={itemVariants}
              className="
              mt-8
              text-white
              text-5xl
              lg:text-6xl
              xl:text-6xl
              font-black
              leading-[0.99]
              tracking-tight
              "
            >

             Powering India’s 


              <span className="block bg-linear-to-r from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-transparent">

                Electric Future

              </span>

            </motion.h1>

            {/* Description */}

            <motion.p
              variants={itemVariants}
              className="
              mt-8
              max-w-155
              text-base
              md:text-lg
              leading-9
              text-gray-300
              "
            >
              Smart, Reliable & Scalable EV Charging Solutions for Homes, Businesses, Hotels, Fleets and Public Infrastructure.

            </motion.p>

            {/* Buttons */}

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-5"
            >

              {/* Primary */}

              <button
                className="
                group
                h-11
                rounded-2xl
                bg-lime-500
                px-6
                font-semibold
                text-white
                shadow-lg
                shadow-lime-500/20
                transition-all
                duration-300
                hover:scale-105
                hover:bg-lime-400
                cursor-pointer
                "
              >

                <span className="flex items-center gap-3">

                   Request a Quote

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </span>

              </button>

              {/* Secondary */}

              <button
                className="
                h-11
                rounded-2xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-xl
                px-6
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-white/20
                hover:border-white/40
                cursor-pointer
                "
              >
                Become a Charging Partner

              </button>

            </motion.div>

                        {/* ================= RIGHT FEATURE CARDS ================= */}

            <div
              className="
              absolute
              right-4
              xl:right-12
              2xl:right-8
              top-[54%]
              -translate-y-1/2
              hidden
              lg:flex
              flex-col
              gap-5
              "
            >
              {[
                {
                  icon: <Zap size={24} />,
                  title: "Ultra Fast Charging",
                  description: "0–80% in just 15 minutes",
                },
                {
                  icon: <ShieldCheck size={24} />,
                  title: "Safe & Reliable",
                  description: "Advanced protection at every step",
                },
                {
                  icon: <Leaf size={24} />,
                  title: "Sustainable Energy",
                  description: "100% green and renewable solutions",
                },
                {
                  icon: <Network size={24} />,
                  title: "Smart Network",
                  description: "AI powered monitoring & uptime",
                },
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{
                    opacity: 0,
                    x: 60,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.8 + index * 0.15,
                    duration: 0.7,
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -4,
                  }}
                  className="
                  group
                  w-77.5
                  rounded-[28px]
                  border
                  border-white/15
                  bg-white/10
                  backdrop-blur-xl
                  shadow-[0_15px_45px_rgba(0,0,0,.18)]
                  p-4
                  transition-all
                  duration-300
                  hover:border-lime-400/40
                  hover:bg-white/15
                  "
                >
                  <div className="flex items-start gap-3">

                    {/* Icon */}

                    <div
                      className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-2xl
                      bg-lime-400/10
                      text-lime-400
                      transition-all
                      duration-300
                      group-hover:bg-lime-400
                      group-hover:text-black
                      "
                    >
                      {card.icon}
                    </div>

                    {/* Content */}

                    <div className="flex-1">

                      <h3
                        className="
                        text-base
                        font-semibold
                        text-white
                        "
                      >
                        {card.title}
                      </h3>

                      <p
                        className="
                        leading-5
                        text-sm
                        text-gray-300
                        "
                      >
                        {card.description}
                      </p>

                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

                        {/* ================= BOTTOM STATS ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
             className="
absolute
bottom-12
left-8
lg:left-14
xl:left-16
w-225

              "
            >
             <div
  className="
  grid
  grid-cols-2
  md:grid-cols-4
  rounded-[30px]
  border
  border-white/15
  bg-black/20
  backdrop-blur-[30px]
  shadow-[0_20px_60px_rgba(0,0,0,.20)]
"
>
                {[
                  {
                    icon: <BatteryCharging size={18} />,
                    value: "50K+",
                    label: "Charging Points",
                  },
                  {
                    icon: <Building2 size={18} />,
                    value: "120+",
                    label: "Enterprise Clients",
                  },
                  {
                    icon: <MapPin size={18} />,
                    value: "1014+",
                    label: "Cities Covered",
                  },
                  {
                    icon: <ShieldCheck size={18} />,
                    value: "99%",
                    label: "Network Uptime",
                  },
                ].map((item, index) => (
                 <div
  key={item.label}
  className="
  relative
  flex
  items-center
  gap-4
  px-6
  py-4
  transition-all
  duration-300
  hover:bg-white/10
  "
>

  {index !== 3 && (
    <div
      className="
      absolute
      right-0
      top-1/2
      -translate-y-1/2
      w-px
      h-12
      bg-white/15
      "
    />
  )}
                    {/* Icon */}

                    <div
                      className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-2xl
                      bg-lime-400/10
                      text-lime-400
                      "
                    >
                      {item.icon}
                    </div>

                    {/* Text */}

                    <div>

                      <h3
                        className="
                        text-lg
                        font-bold
                        text-white
                        "
                      >
                        {item.value}
                      </h3>

                      <p
                        className="
                        mt-1
                        text-gray-300
                        text-xs
                        "
                      >
                        {item.label}
                      </p>

                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ================= SCROLL INDICATOR ================= */}

         

          </motion.div>

        </div>

      </div>

      <div
className="
absolute
left-1/2
bottom-0
-translate-x-1/2
w-[900px]
h-[220px]
bg-lime-400/10
blur-[140px]
rounded-full
pointer-events-none
"
/>

    </section>

  );
}