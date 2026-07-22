"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Cloud,
  Database,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

const ecosystem = [
  {
    title: "Artificial Intelligence",
    description:
      "AI-powered analytics for demand forecasting, predictive maintenance and operational intelligence.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Secure cloud platform providing centralized monitoring and real-time charger connectivity.",
    icon: Cloud,
  },
  {
    title: "IoT Connectivity",
    description:
      "Always-connected charging stations delivering live operational data and diagnostics.",
    icon: Cpu,
  },
  {
    title: "Data Analytics",
    description:
      "Business intelligence dashboards with utilization, revenue and performance insights.",
    icon: Database,
  },
];

export default function TechnologySection() {
  return (
    <section className="py-26">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
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
            OUR TECHNOLOGY
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
            Intelligence Behind {" "}
            <span className=" text-lime-600">
              Every Charge
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
            VOLTERRA Energy transforms EV chargers into an intelligent,
            connected energy ecosystem using AI, IoT, Cloud Computing,
            Data Analytics and Smart Energy Management.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {ecosystem.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .1,
                  duration: .6,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm"
              >

                <div className="flex items-start gap-5">

                  <div className="rounded-2xl bg-lime-100 p-2">

                    <Icon className="h-6 w-6 text-lime-600" />

                  </div>

                  <div>

                    <h3 className="text-2xl font-black text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.description}
                    </p>

                    {/* <button className="mt-6 flex items-center gap-2 font-semibold text-lime-600">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </button> */}

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}