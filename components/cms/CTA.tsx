"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const features = [
  "Real-Time Monitoring",
  "Remote Charger Management",
  "AI-Powered Analytics",
  "Enterprise Security",
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-slate-950" />

      {/* Gradient Orbs */}

      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-lime-500/20 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-green-500/20 blur-[140px]" />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-12
            lg:p-16
          "
        >

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-500/10 px-4 py-2 text-sm font-semibold text-lime-300">

                <Sparkles className="h-4 w-4" />

                Intelligent EV Platform

              </div>

              <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">

                Ready To Power

                <span className="block text-lime-400">
                  Your EV Network?
                </span>

              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

                Monitor chargers, optimize energy usage,
                automate operations and manage your
                complete charging infrastructure through
                one intelligent cloud platform.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <button
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-2xl
                    bg-lime-500
                    px-7
                    py-4
                    font-semibold
                    text-slate-900
                    transition
                    hover:scale-105
                  "
                >
                  Request Demo

                  <ArrowRight className="h-5 w-5" />

                </button>

                <button
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-2xl
                    border
                    border-white/20
                    bg-white/10
                    px-7
                    py-4
                    font-semibold
                    text-white
                    backdrop-blur
                    transition
                    hover:bg-white/20
                  "
                >
                  <PlayCircle className="h-5 w-5" />

                  Watch Demo

                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">

                <h3 className="text-3xl font-black text-white">

                  Why Choose VOLTERRA CMS

                </h3>

                <div className="mt-8 space-y-6">

                  {features.map((feature) => (

                    <motion.div
                      key={feature}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-4"
                    >

                      <div className="rounded-full bg-lime-500/20 p-2">

                        <CheckCircle2 className="h-5 w-5 text-lime-400" />

                      </div>

                      <span className="text-lg text-slate-200">

                        {feature}

                      </span>

                    </motion.div>

                  ))}

                </div>

                {/* Mini Stats */}

                <div className="mt-10 grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-white/5 p-5 text-center">

                    <h4 className="text-4xl font-black text-lime-400">
                      99.8%
                    </h4>

                    <p className="mt-2 text-sm text-slate-400">
                      Network Uptime
                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/5 p-5 text-center">

                    <h4 className="text-4xl font-black text-lime-400">
                      126+
                    </h4>

                    <p className="mt-2 text-sm text-slate-400">
                      Connected Chargers
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}