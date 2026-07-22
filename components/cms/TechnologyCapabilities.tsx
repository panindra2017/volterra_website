"use client";

import { motion } from "framer-motion";
import {
  Eye,
  MonitorSmartphone,
  BrainCircuit,
  ShieldAlert,
  BarChart3,
  TrendingUp,
  BadgeDollarSign,
  Truck,
  Gauge,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const capabilities = [
  {
    title: "Real-Time Network Visibility",
    description:
      "Monitor every charging station across your network with live operational insights and performance tracking.",
    icon: Eye,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Remote Charger Management",
    description:
      "Start, stop, reboot and configure charging stations remotely from a centralized dashboard.",
    icon: MonitorSmartphone,
    color: "from-lime-500 to-green-600",
  },
  {
    title: "Predictive Maintenance",
    description:
      "AI-powered maintenance forecasting reduces downtime and increases charger reliability.",
    icon: BrainCircuit,
    color: "from-violet-500 to-indigo-500",
  },
  {
    title: "Intelligent Fault Detection",
    description:
      "Automatically detect charger faults, diagnose issues and trigger proactive service alerts.",
    icon: ShieldAlert,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Utilization Analytics",
    description:
      "Understand charger usage patterns, peak demand and customer behavior through analytics.",
    icon: BarChart3,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Demand Forecasting",
    description:
      "Predict future charging demand using AI models for improved infrastructure planning.",
    icon: TrendingUp,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Dynamic Pricing",
    description:
      "Implement intelligent pricing strategies based on utilization, demand and time-of-day.",
    icon: BadgeDollarSign,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Fleet Energy Optimization",
    description:
      "Optimize charging schedules and energy usage for commercial EV fleet operations.",
    icon: Truck,
    color: "from-sky-500 to-cyan-500",
  },
  {
    title: "Smart Load Management",
    description:
      "Balance electrical loads across multiple chargers to maximize infrastructure efficiency.",
    icon: Gauge,
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Renewable Energy Integration",
    description:
      "Integrate solar, battery storage and renewable energy sources into your charging ecosystem.",
    icon: Leaf,
    color: "from-green-500 to-lime-500",
  },
];

export default function TechnologyCapabilities() {
   const router = useRouter()

  return (
    <section className="relative py-26">

      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

           <div
              className="
              inline-flex
              items-center
              rounded-full
              border
              border-lime-500/20
              bg-lime-500/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-lime-600
              "
            >
            Intelligent Capabilities
          </div>

           <h2
              className="
              mt-3
              text-4xl
              font-black
              leading-tight
              text-slate-900
              lg:text-5xl
              "
            >
            Technology Designed

            <span className="block text-lime-600">
              For The Future Of EV Charging
            </span>

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

            Combining Artificial Intelligence, IoT connectivity,
            cloud infrastructure and advanced analytics,
            VOLTERRA CMS transforms EV charging stations into
            intelligent, connected and future-ready energy assets.

          </p>

        </motion.div>

        {/* Feature Grid */}

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {capabilities.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * .05,
                  duration: .55,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-[0_20px_60px_rgba(15,23,42,.06)]
                "
              >

                {/* Glow */}

                <div
                  className={`
                    absolute
                    -right-20
                    -top-20
                    h-52
                    w-52
                    rounded-full
                    bg-gradient-to-br
                    ${item.color}
                    opacity-0
                    blur-3xl
                    transition
                    duration-500
                    group-hover:opacity-20
                  `}
                />

                {/* Icon */}

                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    ${item.color}
                    shadow-xl
                  `}
                >

                  <Icon className="h-6 w-6 text-white"/>

                </div>

                {/* Title */}

                <h3 className="mt-6 text-lg font-semibold text-slate-900 leading-tight">

                  {item.title}

                </h3>

                {/* Description */}

                <p className="mt-3 leading-7 text-slate-600">

                  {item.description}

                </p>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom Banner */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: .8,
          }}
          className="
            relative
            mt-24
            overflow-hidden
            rounded-[40px]
            border
            border-lime-200
            bg-gradient-to-r
            from-lime-50
            via-white
            to-green-50
            p-12
          "
        >

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-lime-300/20 blur-[120px]" />

          <div className="relative flex flex-col items-center justify-between gap-10 lg:flex-row">

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
                Technology Vision
              </span>

              <h3 className="mt-5 text-4xl font-black text-slate-900">

                AI + IoT + CMS + Cloud +

                <span className="block text-lime-600">
                  Smart Energy Management
                </span>

              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">

                Every charger becomes a connected intelligent node
                capable of self-monitoring, optimization,
                predictive maintenance and data-driven decision making.

              </p>

            </div>

            <button
               onClick={() => router.push('/contact')}
              className="
                rounded-2xl
                bg-lime-600
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:scale-105
                cursor-pointer
              "
            >
             Contact Us
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}