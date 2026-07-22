"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wifi,
  Cpu,
  Server,
  Activity,
  TrendingUp,
} from "lucide-react";

const metrics = [
  {
    title: "Network Uptime",
    value: "99.8%",
    icon: ShieldCheck,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Connected Chargers",
    value: "126",
    icon: Wifi,
    color: "bg-lime-100 text-lime-600",
  },
  {
    title: "CPU Usage",
    value: "42%",
    icon: Cpu,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Server Load",
    value: "Normal",
    icon: Server,
    color: "bg-orange-100 text-orange-600",
  },
];

export default function NetworkHealth() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200
        bg-white
        shadow-[0_20px_60px_rgba(15,23,42,.08)]
      "
    >
      {/* Header */}

      <div className="border-b border-slate-100 p-7">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-600">
              Network
            </p>

            <h3 className="mt-2 text-3xl font-black text-slate-900">
              Health Status
            </h3>

          </div>

          <div className="rounded-2xl bg-green-50 p-3">
            <Activity className="h-8 w-8 text-green-600" />
          </div>

        </div>

      </div>

      {/* Circle */}

      <div className="flex justify-center p-8">

        <div className="relative flex h-52 w-52 items-center justify-center">

          {/* Outer */}

          <div className="absolute inset-0 rounded-full border-[16px] border-slate-100" />

          {/* Progress */}

          <motion.div
            initial={{ rotate: -90 }}
            animate={{ rotate: 270 }}
            transition={{ duration: 2 }}
            className="
              absolute
              inset-0
              rounded-full
              border-[16px]
              border-lime-500
              border-r-transparent
              border-b-lime-500
              border-t-lime-500
            "
          />

          {/* Center */}

          <div className="text-center">

            <h2 className="text-5xl font-black text-green-600">
              99.8%
            </h2>

            <p className="mt-2 text-slate-500">
              Healthy
            </p>

          </div>

        </div>

      </div>

      {/* Metrics */}

      <div className="space-y-4 px-7 pb-7">

        {metrics.map((item) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              whileHover={{ x: 4 }}
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-slate-100
                bg-slate-50
                p-4
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h4 className="font-bold text-slate-900">
                    {item.value}
                  </h4>

                </div>

              </div>

              <TrendingUp className="h-5 w-5 text-green-600" />

            </motion.div>

          );

        })}

      </div>

      {/* Footer */}

      <div className="border-t border-slate-100 bg-slate-50 px-7 py-5">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-xs text-slate-500">
              Response Time
            </p>

            <h4 className="font-bold text-slate-900">
              23 ms
            </h4>

          </div>

          <div>

            <p className="text-xs text-slate-500">
              Active Nodes
            </p>

            <h4 className="font-bold text-slate-900">
              18 / 18
            </h4>

          </div>

          <div>

            <p className="text-xs text-slate-500">
              Last Check
            </p>

            <h4 className="font-bold text-green-600">
              Just now
            </h4>

          </div>

        </div>

      </div>
    </motion.div>
  );
}