"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BatteryCharging,
  Clock3,
  MapPin,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Wifi,
} from "lucide-react";

const chargers = [
  {
    id: "VLT-DC-001",
    location: "Bengaluru",
    power: "180 kW",
    status: "Charging",
    session: "12 min",
  },
  {
    id: "VLT-AC-021",
    location: "Hyderabad",
    power: "22 kW",
    status: "Available",
    session: "--",
  },
  {
    id: "VLT-DC-014",
    location: "Chennai",
    power: "120 kW",
    status: "Maintenance",
    session: "--",
  },
  {
    id: "VLT-UFC-002",
    location: "Mumbai",
    power: "240 kW",
    status: "Charging",
    session: "34 min",
  },
];

const activities = [
  {
    title: "Charging Session Started",
    time: "2 min ago",
    icon: Zap,
    color: "bg-lime-100 text-lime-600",
  },
  {
    title: "Payment Received",
    time: "8 min ago",
    icon: CheckCircle2,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Maintenance Alert",
    time: "15 min ago",
    icon: AlertTriangle,
    color: "bg-orange-100 text-orange-600",
  },
];

export default function LiveStatus() {
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
              Live Monitoring
            </p>

            <h3 className="mt-2 text-3xl font-black text-slate-900">
              Charger Status
            </h3>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">

            <span className="relative flex h-3 w-3">

              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-70" />

              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />

            </span>

            <span className="font-semibold text-green-700">
              Live
            </span>

          </div>

        </div>

      </div>

      {/* Summary */}

      <div className="grid grid-cols-3 gap-4 border-b border-slate-100 p-6">

        <div className="rounded-2xl bg-lime-50 p-4 text-center">

          <BatteryCharging className="mx-auto h-7 w-7 text-lime-600" />

          <h4 className="mt-3 text-2xl font-black text-slate-900">
            126
          </h4>

          <p className="mt-1 text-xs text-slate-500">
            Chargers
          </p>

        </div>

        <div className="rounded-2xl bg-green-50 p-4 text-center">

          <Activity className="mx-auto h-7 w-7 text-green-600" />

          <h4 className="mt-3 text-2xl font-black text-slate-900">
            84
          </h4>

          <p className="mt-1 text-xs text-slate-500">
            Active
          </p>

        </div>

        <div className="rounded-2xl bg-blue-50 p-4 text-center">

          <Wifi className="mx-auto h-7 w-7 text-blue-600" />

          <h4 className="mt-3 text-2xl font-black text-slate-900">
            99%
          </h4>

          <p className="mt-1 text-xs text-slate-500">
            Online
          </p>

        </div>

      </div>

      {/* Chargers */}

      <div className="p-6">

        <div className="flex items-center justify-between">

          <h4 className="font-bold text-slate-900">
            Active Stations
          </h4>

          <span className="text-sm font-medium text-lime-600">
            View All
          </span>

        </div>

        <div className="mt-5 space-y-4">

          {chargers.map((charger) => (

            <motion.div
              key={charger.id}
              whileHover={{
                x: 4,
                scale: 1.01,
              }}
              className="
                rounded-2xl
                border
                border-slate-100
                bg-slate-50
                p-4
              "
            >

              <div className="flex items-start justify-between">

                <div>

                  <h5 className="font-bold text-slate-900">
                    {charger.id}
                  </h5>

                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">

                    <MapPin className="h-4 w-4" />

                    {charger.location}

                  </div>

                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    charger.status === "Charging"
                      ? "bg-green-100 text-green-700"
                      : charger.status === "Available"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {charger.status}
                </span>

              </div>

              <div className="mt-4 flex items-center justify-between">

                <div>

                  <p className="text-xs text-slate-500">
                    Output
                  </p>

                  <h5 className="font-bold text-slate-900">
                    {charger.power}
                  </h5>

                </div>

                <div className="text-right">

                  <p className="text-xs text-slate-500">
                    Session
                  </p>

                  <div className="flex items-center justify-end gap-1 font-semibold text-slate-900">

                    <Clock3 className="h-4 w-4" />

                    {charger.session}

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* Activity Feed */}

      <div className="border-t border-slate-100 bg-slate-50 p-6">

        <div className="flex items-center justify-between">

          <h4 className="font-bold text-slate-900">
            Recent Activity
          </h4>

          <span className="text-sm text-slate-500">
            Today
          </span>

        </div>

        <div className="mt-5 space-y-4">

          {activities.map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4"
              >

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.color}`}
                >

                  <Icon className="h-5 w-5" />

                </div>

                <div className="flex-1">

                  <h5 className="font-semibold text-slate-900">
                    {item.title}
                  </h5>

                  <p className="text-sm text-slate-500">
                    {item.time}
                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </motion.div>
  );
}