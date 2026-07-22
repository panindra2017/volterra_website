"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  ShieldCheck,
  Radio,
  Activity,
  Users,
  BatteryCharging,
  BarChart3,
  CloudCog,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Remote Charger Control",
    description:
      "Start, stop, restart and configure chargers remotely from a centralized dashboard.",
    icon: Cpu,
  },
  {
    title: "Smart Energy Management",
    description:
      "Balance electrical load, optimize charging schedules and reduce energy costs.",
    icon: BatteryCharging,
  },
  {
    title: "Real-Time Monitoring",
    description:
      "Track charger availability, charging sessions and live operational status.",
    icon: Activity,
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain insights into revenue, utilization, energy consumption and user behaviour.",
    icon: BarChart3,
  },
  {
    title: "Fleet Management",
    description:
      "Manage commercial EV fleets, drivers and charging policies from one platform.",
    icon: Users,
  },
  {
    title: "OCPP Integration",
    description:
      "Seamlessly connect with OCPP-compliant charging stations and third-party systems.",
    icon: Radio,
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Enterprise-grade cloud architecture ensuring scalability, security and reliability.",
    icon: CloudCog,
  },
  {
    title: "Enterprise Security",
    description:
      "Role-based access, encrypted communication and secure authentication.",
    icon: ShieldCheck,
  },
];

export default function PlatformFeatures() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="inline-flex rounded-full bg-lime-100 px-4 py-2 text-sm font-semibold text-lime-700">
            PLATFORM FEATURES
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Everything You Need To
            <span className="block text-lime-600">
              Manage Your EV Network
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Built for charge point operators, fleet owners, businesses and
            enterprises with intelligent automation and real-time visibility.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  rounded-[32px]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-[0_20px_60px_rgba(15,23,42,.06)]
                  transition-all
                  hover:border-lime-400
                  hover:shadow-[0_30px_80px_rgba(132,204,22,.15)]
                "
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-100 transition group-hover:bg-lime-600">

                  <Icon className="h-8 w-8 text-lime-600 transition group-hover:text-white" />

                </div>

                <h3 className="mt-8 text-2xl font-black text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {feature.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}