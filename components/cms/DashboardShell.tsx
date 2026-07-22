"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Search,
  Download,
  RefreshCw,
  Activity,
} from "lucide-react";

import KPICards from "./KPICards";
import RevenueChart from "./RevenueChart";
import EnergyChart from "./EnergyChart";
import NetworkHealth from "./NetworkHealth";
import LiveStatus from "./LiveStatus";



export default function DashboardShell() {
  return (
    <section className="relative">

      <motion.div
        initial={{
          opacity:0,
          y:40,
        }}
        whileInView={{
          opacity:1,
          y:0,
        }}
        viewport={{ once:true }}
        transition={{
          duration:.7,
        }}
        className="
        overflow-hidden
        rounded-[40px]
        border
        border-slate-200
        bg-white/70
        backdrop-blur-xl
        shadow-[0_40px_120px_rgba(15,23,42,.08)]
      "
      >

        {/* Header */}

        <div
          className="
          flex
          flex-wrap
          items-center
          justify-between
          gap-6
          border-b
          border-slate-200
          p-8
        "
        >
          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-lime-600 font-semibold">
              Dashboard
            </p>

            <h2 className="mt-2 text-4xl font-black text-slate-900">
              CMS Overview
            </h2>

          </div>

          <div className="flex flex-wrap items-center gap-4">

            {/* Search */}

            <div
              className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-5
              py-3
            "
            >
              <Search className="h-5 w-5 text-slate-400"/>

              <input
                placeholder="Search chargers..."
                className="
                bg-transparent
                outline-none
                text-sm
                placeholder:text-slate-400
              "
              />

            </div>

            {/* Export */}

            <button
              className="
              flex
              items-center
              gap-2
              rounded-2xl
              border
              border-slate-200
              px-5
              py-3
              hover:border-lime-500
            "
            >
              <Download className="h-5 w-5"/>

              Export

            </button>

            {/* Refresh */}

            <button
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-200
            "
            >
              <RefreshCw className="h-5 w-5"/>
            </button>

            {/* Notification */}

            <button
              className="
              relative
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-200
            "
            >
              <Bell className="h-5 w-5"/>

              <span
                className="
                absolute
                right-3
                top-3
                h-2.5
                w-2.5
                rounded-full
                bg-red-500
              "
              />

            </button>

          </div>

        </div>

        {/* KPI */}

        <div className="p-8">

          <KPICards/>

        </div>

        {/* Dashboard */}

        <div
          className="
          grid
          gap-8
          p-8
          pt-0
          xl:grid-cols-[1.8fr_.8fr]
        "
        >

          {/* Left */}

          <div className="space-y-8">

            <RevenueChart/>

            <EnergyChart/>

          </div>

          {/* Right */}

          <div className="space-y-8">

            <NetworkHealth/>

            <LiveStatus/>

          </div>

        </div>

        {/* Footer */}

        <div
          className="
          flex
          flex-wrap
          items-center
          justify-between
          gap-5
          border-t
          border-slate-200
          bg-slate-50
          px-8
          py-6
        "
        >

          <div className="flex items-center gap-3">

            <Activity className="h-5 w-5 text-green-600"/>

            <span className="font-semibold text-slate-700">
              System running normally
            </span>

          </div>

          <div className="flex items-center gap-8">

            <div>

              <p className="text-xs text-slate-500">
                Last Sync
              </p>

              <h4 className="font-bold">
                Just now
              </h4>

            </div>

            <div>

              <p className="text-xs text-slate-500">
                API
              </p>

              <h4 className="font-bold text-green-600">
                Connected
              </h4>

            </div>

            <div>

              <p className="text-xs text-slate-500">
                Server
              </p>

              <h4 className="font-bold text-green-600">
                Healthy
              </h4>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}