// "use client";

// import { motion } from "framer-motion";
// import {
//   Sparkles,
//   BrainCircuit,
//   Cloud,
//   Cpu,
//   ShieldCheck,
//   BarChart3,
//   Radio,
//   BatteryCharging,
// } from "lucide-react";

// const technologies = [
//   {
//     icon: BrainCircuit,
//     label: "AI Powered",
//   },
//   {
//     icon: Cpu,
//     label: "IoT Connected",
//   },
//   {
//     icon: Cloud,
//     label: "Cloud Native",
//   },
//   {
//     icon: BarChart3,
//     label: "Analytics",
//   },
//   {
//     icon: Radio,
//     label: "OCPP Ready",
//   },
//   {
//     icon: ShieldCheck,
//     label: "Secure Platform",
//   },
// ];

// export default function CMSHero() {
//   return (
//     <section className="relative overflow-hidden bg-[#F7F9FC] py-32">

//       {/* Background */}

//       <div className="absolute inset-0">

//         {/* Grid */}

//         <div
//           className="
//             absolute
//             inset-0
//             opacity-[0.04]
//             bg-[linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
//             bg-[size:60px_60px]
//           "
//         />

//         {/* Glow */}

//         <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-lime-400/10 blur-[140px]" />

//         <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-green-500/10 blur-[140px]" />

//         <div className="absolute left-1/2 bottom-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-lime-300/10 blur-[120px]" />

//       </div>

//       <div className="relative mx-auto max-w-7xl px-6">

//         {/* Hero */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 40,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{ once: true }}
//           transition={{
//             duration: .8,
//           }}
//           className="text-center"
//         >

//           {/* Badge */}

//          <div
//               className="
//               inline-flex
//               items-center
//               rounded-full
//               border
//               border-lime-500/20
//               bg-lime-500/10
//               px-4
//               py-2
//               text-xs
//               font-semibold
//               uppercase
//               tracking-[3px]
//               text-lime-600
//               "
//             >
//             Intelligent CMS Platform

//           </div>

//           {/* Heading */}

//          <h1
//             className="
//               mx-auto
//               mt-8
//               max-w-4xl
//               text-5xl
//               font-black
//               leading-tight
//               text-slate-900
//               lg:text-5xl
//             "
//           >
//             Powering

//             <span className="mx-3 text-lime-600">
//               Intelligent EV
//             </span>

//             Charging Networks
//           </h1>

//           {/* Description */}

//            <p
//               className="
//               mx-auto
//               mt-3
//               max-w-4xl
//               text-lg
//               leading-7
//               text-slate-600
//               "
//             >
//             VOLTERRA CMS transforms EV charging infrastructure into a
//             connected, intelligent and data-driven ecosystem. Monitor,
//             control and optimize every charger through one secure cloud
//             platform powered by AI, IoT and advanced analytics.
//           </p>

//           {/* Technology Chips */}

//           <div
//             className="
//               mx-auto
//               mt-12
//               flex
//               max-w-5xl
//               flex-wrap
//               justify-center
//               gap-4
//             "
//           >

//             {technologies.map((item) => {

//               const Icon = item.icon;

//               return (

//                 <motion.div
//                   key={item.label}
//                   whileHover={{
//                     y: -4,
//                     scale: 1.04,
//                   }}
//                   className="
//                     flex
//                     items-center
//                     gap-3
//                     rounded-full
//                     border
//                     border-slate-200
//                     bg-white/80
//                     px-5
//                     py-3
//                     shadow-sm
//                     backdrop-blur
//                   "
//                 >

//                   <div className="rounded-full bg-lime-100 p-2">

//                     <Icon className="h-4 w-4 text-lime-600" />

//                   </div>

//                   <span className="font-semibold text-slate-700">
//                     {item.label}
//                   </span>

//                 </motion.div>

//               );

//             })}

//           </div>

//         </motion.div>

//       </div>

//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Cpu,
  ShieldCheck,
  BarChart3,
  Radio,
} from "lucide-react";

const technologies = [
  {
    icon: BrainCircuit,
    label: "AI Powered",
  },
  {
    icon: Cpu,
    label: "IoT Connected",
  },
  {
    icon: Cloud,
    label: "Cloud Native",
  },
  {
    icon: BarChart3,
    label: "Analytics",
  },
  {
    icon: Radio,
    label: "OCPP Ready",
  },
  {
    icon: ShieldCheck,
    label: "Secure Platform",
  },
];

export default function CMSHero() {
  return (
<section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}

      <Image
        src="/images/cms-hero-image.png"
        alt="CMS Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-slate-950/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/30" />

      {/* Hero Content */}

   {/* Hero Content */}

<div className="relative z-10 flex min-h-[92vh] items-center justify-center mt-14">

  <div className="mx-auto max-w-7xl px-6">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-4xl text-center"
    >

      {/* Badge */}

       <div
              className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/10
              bg-whitel/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-white
              "
            >
        <span className="text-xs font-semibold uppercase tracking-[3px] text-lime-300">
          Intelligent CMS Platform
        </span>
      </div>

      {/* Heading */}

      <h2
              className="
              mt-6
              text-4xl
              font-black
              leading-tight
              text-white
              lg:text-5xl
              "
            >
        Powering {" "}

        <span className=" text-lime-400">
          Intelligent EV {" "}
        </span>

        Charging Networks
      </h2>

      {/* Description */}

       <p
          className="
          mt-6
          max-w-4xl
          text-[20px]
          leading-8
          text-slate-300
          "
        >
 VOLTERRA CMS transforms EV charging infrastructure into a connected,
intelligent and data-driven energy ecosystem. Monitor, control and
optimize every charging station through one secure cloud platform
powered by AI, IoT, Cloud Computing, Smart Energy Management,
real-time analytics and intelligent automation.
</p>

      {/* Technology Chips */}

      <div
        className="
          mt-16
          flex
          flex-wrap
          justify-center
          gap-4
        "
      >
        {technologies.map((item) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.label}
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/20
                bg-white/10
                px-5
                py-3
                backdrop-blur-xl
                transition-all
                hover:border-lime-400
                hover:bg-lime-500/20
              "
            >

              <div className="rounded-full bg-lime-500/15 p-2">

                <Icon className="h-4 w-4 text-lime-400" />

              </div>

              <span className="text-sm font-medium text-white">
                {item.label}
              </span>

            </motion.div>

          );

        })}
      </div>

    </motion.div>


        </div>

      </div>

    </section>
  );
}