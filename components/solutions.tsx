// "use client";

// import { motion } from "framer-motion";

// import {
//   Landmark,
//   HandCoins,
//   TrendingUp,
//   BadgeCheck,
//   Store,
//   BatteryCharging,
//   CloudLightning,
//   ArrowRight,
//   ArrowUpRight,
// } from "lucide-react";

// const solutions = [
//   {
//     no: "01",
//     title: "CapEx Model",
//     icon: Landmark,
//     color: "green",
//     description:
//       "Own your complete EV charging infrastructure with maximum control and long-term returns.",
//     points: [
//       "100% ownership",
//       "Higher ROI",
//       "Long-term investment",
//     ],
//   },

//   {
//     no: "02",
//     title: "Revenue Sharing",
//     icon: HandCoins,
//     color: "green",
//     description:
//       "Partner with Volterra and generate recurring revenue through shared charging income.",
//     points: [
//       "Low investment",
//       "Shared revenue",
//       "Business partnership",
//     ],
//   },

//   {
//     no: "03",
//     title: "Investor Model",
//     icon: TrendingUp,
//     color: "green",
//     description:
//       "Invest in EV charging infrastructure and build sustainable long-term assets.",
//     points: [
//       "Scalable returns",
//       "Future-ready business",
//       "Growing EV market",
//     ],
//   },

//   {
//     no: "04",
//     title: "White Label Solutions",
//     icon: BadgeCheck,
//     color: "purple",
//     description:
//       "Launch your own EV charging brand using Volterra's technology and platform.",
//     points: [
//       "Custom branding",
//       "CMS included",
//       "Complete support",
//     ],
//   },

//   {
//     no: "05",
//     title: "Franchise Opportunities",
//     icon: Store,
//     color: "purple",
//     description:
//       "Become a Volterra franchise partner and expand EV charging in your region.",
//     points: [
//       "Business opportunity",
//       "Marketing support",
//       "Training provided",
//     ],
//   },

//   {
//     no: "06",
//     title: "Charge Point Operator (CPO)",
//     icon: BatteryCharging,
//     color: "blue",
//     description:
//       "Operate and manage public charging stations with centralized monitoring and billing.",
//     points: [
//       "Remote monitoring",
//       "User management",
//       "Revenue tracking",
//     ],
//   },

//   {
//     no: "07",
//     title: "Charging as a Service",
//     icon: CloudLightning,
//     color: "blue",
//     description:
//       "Subscription-based EV charging solutions with minimal upfront investment.",
//     points: [
//       "Pay-as-you-grow",
//       "Cloud platform",
//       "Maintenance included",
//     ],
//   },
// ];

// export function Solutions() {

//   return (

// <section
// id="solutions"
// className="
// relative
// overflow-hidden
// bg-[#F8FAFC]
// py-32
// "
// >

// {/* Green Glow */}

// <div
// className="
// absolute
// left-0
// top-0
// h-[450px]
// w-[450px]
// rounded-full
// bg-lime-500/10
// blur-[140px]
// "
// />

// <div
// className="
// absolute
// right-0
// bottom-0
// h-[450px]
// w-[450px]
// rounded-full
// bg-green-500/10
// blur-[140px]
// "
// />

// {/* Engineering Grid */}

// <div
// className="
// absolute
// inset-0
// opacity-[0.04]
// [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
// [background-size:70px_70px]
// "
// />

// <div
// className="
// relative
// z-10
// mx-auto
// max-w-[1500px]
// px-6
// lg:px-10
// "
// >

// <motion.div

// initial={{
// opacity:0,
// y:40
// }}

// whileInView={{
// opacity:1,
// y:0
// }}

// viewport={{
// once:true
// }}

// transition={{
// duration:.8
// }}

// className="text-center"

// >

// <div
//    className="
//             inline-flex
//             items-center
//             rounded-full
//             border
//             border-lime-500/20
//             bg-lime-500/10
//             px-3
//             py-1
//             text-xs
//             font-semibold
//             tracking-widest
//             uppercase
//             text-lime-600
//             "
// >

// Business Solutions

// </div>


// <h2
// className="
//   mt-4
//             text-4xl
//             lg:text-5xl
//             font-black
//             leading-tight
//             text-slate-900
// "
// >

// Flexible EV Charging {" "}

// <span className="text-lime-600">

//  Business Models

// </span>

// </h2>

// <p
// className="
//   mx-auto
//             mt-3
//             max-w-4xl
//             text-lg
//             leading-7
//             text-slate-600
// "
// >

// Whether you're an investor, property owner, enterprise or entrepreneur,
// Volterra offers flexible business models designed to maximize value and accelerate EV charging adoption.

// </p>

// </motion.div>


//           {/* Features */}

//           <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

//           {solutions.map((solution, index) => {

//     const Icon = solution.icon;

//   return (
//     <motion.div
//       key={solution.title}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{
//         delay: index * 0.08,
//         duration: 0.6,
//       }}
//       whileHover={{
//         y: -10,
//       }}
//       className="
//       group
//       relative
//       overflow-hidden
//       rounded-[30px]
//       border
//       border-slate-200
//       bg-white
//       p-6
//       shadow-[0_15px_45px_rgba(0,0,0,.05)]
//       transition-all
//       duration-500
//       hover:border-lime-400
//       hover:shadow-[0_25px_60px_rgba(132,204,22,.18)]
//       "
//     >

//       {/* Glow */}

//       <div
//         className="
//         absolute
//         -right-20
//         -top-20
//         h-10
//         w-10
//         rounded-full
//         bg-lime-500/10
//         blur-[90px]
//         opacity-0
//         transition-all
//         duration-300
//         group-hover:opacity-100
//         "
//       />

//       {/* Top */}

//       <div className="flex items-start justify-between">

//         <span
//           className="
//           text-2xl
//           font-black
//           text-slate-200
//           transition
//           group-hover:text-lime-500/30
//           "
//         >
//           {solution.no}
//         </span>

//         <div
//           className="
//           flex
//           h-11
//           w-11
//           items-center
//           justify-center
//           rounded-2xl
//           bg-lime-500/10
//           transition-all
//           duration-500
         
//           group-hover:bg-lime-500
//           "
//         >

//           <Icon
//             className="
//             h-6
//             w-6
//             text-lime-600
//             transition-all
//             duration-500
//             group-hover:text-white
//             "
//           />

//         </div>

//       </div>

//       {/* Title */}

//       <h3
//         className="
//         mt-3
//         text-xl
//         font-bold
//         text-slate-900
//         "
//       >
//        {solution.title}
//       </h3>

//       {/* Description */}

//       <p
//         className="
//         mt-3
//         leading-7
//         text-slate-600
//         "
//       >
//         {solution.description}
//       </p>

//       {/* Divider */}

//       <div className="my-6 h-px bg-slate-200 " />

//       {/* Footer */}

//       <button
//         className="
//         flex
//         items-center
//         gap-3
//         font-semibold
//         text-lime-600
//         transition-all
//         group-hover:gap-5
//         "
//       >

//         Learn More

//         <ArrowUpRight
//           className="
//           h-5
//           w-5
//           transition-transform
//           duration-300
//           group-hover:translate-x-1
//           group-hover:-translate-y-1
//           "
//         />

//       </button>

//     </motion.div>
//   );
// })}

//           </div>

// {/* ======================================== */}
// {/* CTA */}
// {/* ======================================== */}

// <motion.div

//   initial={{ opacity: 0, y: 40 }}

//   whileInView={{ opacity: 1, y: 0 }}

//   viewport={{ once: true }}

//   transition={{ duration: .8 }}

//   className="
//   mt-24
//   overflow-hidden
//   rounded-[36px]
//   bg-gradient-to-r
//   from-slate-900
//   via-[#111827]
//   to-slate-900
//   p-12
//   shadow-[0_25px_70px_rgba(0,0,0,.18)]
//   "

// >

//   <div
//     className="
//     grid
//     items-center
//     gap-10
//     lg:grid-cols-[1fr_auto]
//     "
//   >

//     <div>

//       <div
//         className="
//         inline-flex
//         rounded-full
//         border
//         border-lime-500/20
//         bg-lime-500/10
//         px-5
//         py-2
//         text-xs
//         font-semibold
//         uppercase
//         tracking-[3px]
//         text-lime-400
//         "
//       >

//         Find Your Business Model

//       </div>

//       <h3
//         className="
//         mt-6
//         text-4xl
//         lg:text-5xl
//         font-black
//         leading-tight
//         text-white
//         "
//       >

//         Let's Build a Profitable

//         <span className="text-lime-400">

//           {" "}EV Charging Business

//         </span>

//       </h3>

//       <p
//         className="
//         mt-6
//         max-w-2xl
//         text-lg
//         leading-8
//         text-slate-300
//         "
//       >

//         Whether you're an investor, property owner,
//         entrepreneur or enterprise, Volterra has a
//         flexible business model designed to help you
//         succeed in the growing EV charging ecosystem.

//       </p>

//     </div>

//     <button
//       className="
//       rounded-2xl
//       bg-gradient-to-r
//       from-lime-500
//       to-green-600
//       px-10
//       py-5
//       text-lg
//       font-semibold
//       text-white
//       transition-all
//       duration-300
//       hover:-translate-y-1
//       hover:scale-105
//       hover:shadow-[0_20px_50px_rgba(132,204,22,.45)]
//       "
//     >

//       Talk to Our Experts

//     </button>

//   </div>

// </motion.div>

// </div>

// </section>

// );

// }


"use client";

import { motion } from "framer-motion";

import {
  BrainCircuit,
  Wifi,
  MonitorSmartphone,
  Activity,
  Smartphone,
  Handshake,
  Building2,
  Building,
  Wrench,
  CloudLightning,
  HandCoins,
  ArrowRight,
  CircleAlert,
  Zap,
  Gauge,
  BatteryCharging,
} from "lucide-react";

const technologySolutions = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Intelligence",
    description:
      "Using data-driven insights to improve charger utilization, operational efficiency, demand forecasting and future network planning.",
  },
  {
    icon: Wifi,
    title: "IoT-Enabled Infrastructure",
    description:
      "Connected charging stations enable real-time communication, remote diagnostics, performance monitoring and operational control.",
  },
  {
    icon: MonitorSmartphone,
    title: "Smart Charge Management System",
    description:
      "Centralized management of charging stations, users, charging sessions, tariffs, payments and network performance.",
  },
  {
    icon: Activity,
    title: "Predictive & Proactive Maintenance",
    description:
      "Technology-enabled monitoring helps identify potential issues before failures occur, maximizing charger availability.",
  },
  {
    icon: Smartphone,
    title: "Seamless Digital Experience",
    description:
      "Simple charger discovery, digital payments, charging session management and transparent user experiences.",
  },
  {
    icon: Handshake,
    title: "Scalable Partnership Models",
    description:
      "Flexible investment and operating models allow businesses, investors and property owners to participate confidently.",
  },
];

const businessModels = [
  {
    no: "01",
    title: "FOCO",
    subtitle: "Franchise Owned • Company Operated",
    icon: Building2,
  },
  {
    no: "02",
    title: "COCO",
    subtitle: "Company Owned • Company Operated",
    icon: Building,
  },
  {
    no: "03",
    title: "EPC",
    subtitle: "Engineering Procurement & Construction",
    icon: Wrench,
  },
  {
    no: "04",
    title: "Charging as a Service",
    subtitle: "Managed EV Charging",
    icon: CloudLightning,
  },
  {
    no: "05",
    title: "Revenue Sharing",
    subtitle: "Strategic Partnership",
    icon: HandCoins,
  },
];

export function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-lime-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-green-500/10 blur-[140px]" />

      {/* Grid */}

      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
            Our Solution
          </div>

          <h1
            className="
            mt-6
            text-5xl
            font-black
            leading-tight
            text-slate-900
            lg:text-6xl
            "
          >
            An Intelligent
            <span className="block text-lime-600">
              EV Charging Ecosystem
            </span>
          </h1>

          <p
            className="
            mx-auto
            mt-8
            max-w-4xl
            text-lg
            leading-9
            text-slate-600
            "
          >
            VOLTERRA Energy bridges the gap between EV users,
            infrastructure investors, businesses, property owners
            and technology.

            We provide an integrated platform to design,
            deploy, operate, monitor and scale intelligent EV
            charging infrastructure across India.
          </p>

        </motion.div>

        {/* ===================================================== */}
        {/* THE PROBLEM */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-32"
        >

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="text-sm font-bold uppercase tracking-[4px] text-red-500">
                The Problem
              </span>

              <h2
                className="
                mt-4
                text-4xl
                font-black
                leading-tight
                text-slate-900
                "
              >
                India's EV Revolution
                <span className="block text-lime-600">
                  Needs Smarter Infrastructure
                </span>
              </h2>

              <p
                className="
                mt-8
                text-lg
                leading-9
                text-slate-600
                "
              >
                India's electric mobility ecosystem is expanding
                rapidly, but charging infrastructure continues
                to face significant challenges.
              </p>

              <p
                className="
                mt-5
                text-lg
                leading-9
                text-slate-600
                "
              >
                EV users often encounter limited charger
                availability, unreliable stations,
                poor uptime, fragmented charging
                networks, complicated payment
                experiences and insufficient fast-charging
                infrastructure, particularly along highways
                and intercity routes.
              </p>

            </div>

            {/* Right */}

            <div className="grid gap-6">

              <div
                className="
                rounded-3xl
                border
                border-red-200
                bg-white
                p-6
                shadow-lg
                "
              >

                <div className="mb-5 flex items-center gap-3">

                  <CircleAlert className="h-7 w-7 text-red-500" />

                  <h3 className="text-xl font-bold text-slate-900">
                    EV Users
                  </h3>

                </div>

                <ul className="space-y-3 text-slate-600">

                  <li>• Limited charger availability</li>

                  <li>• Poor uptime</li>

                  <li>• Fragmented charging networks</li>

                  <li>• Complicated payment experience</li>

                  <li>• Limited highway fast charging</li>

                </ul>

              </div>

              <div
                className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-lg
                "
              >

                <div className="mb-5 flex items-center gap-3">

                  <Gauge className="h-7 w-7 text-lime-600" />

                  <h3 className="text-xl font-bold text-slate-900">
                    Businesses & Investors
                  </h3>

                </div>

                <ul className="space-y-3 text-slate-600">

                  <li>• High initial investment</li>

                  <li>• Site & power feasibility</li>

                  <li>• Infrastructure deployment</li>

                  <li>• Operations & maintenance</li>

                  <li>• Revenue optimization</li>

                  <li>• Transparent monitoring</li>

                </ul>

              </div>

            </div>

          </div>

        </motion.div>

                {/* ===================================================== */}
        {/* OUR SOLUTION */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-36"
        >
          {/* Background Number */}

          <div
            className="
            absolute
            -top-10
            right-0
            select-none
            text-[180px]
            font-black
            leading-none
            text-slate-100
            "
          >
            01
          </div>

          {/* Heading */}

          <div className="relative z-10 text-center">

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
              Our Solution
            </div>

            <h2
              className="
              mt-5
              text-4xl
              font-black
              leading-tight
              text-slate-900
              lg:text-5xl
              "
            >
              One Platform.
              <span className="block text-lime-600">
                One Network. Intelligent Mobility.
              </span>
            </h2>

            <p
              className="
              mx-auto
              mt-6
              max-w-4xl
              text-lg
              leading-9
              text-slate-600
              "
            >
              VOLTERRA Energy provides an integrated ecosystem to
              design, deploy, operate, monitor and continuously
              optimize EV charging infrastructure.

              Our technology-driven platform connects charging
              hardware, software, analytics and operations into
              one intelligent network.
            </p>

          </div>

          {/* Technology Cards */}

          <div className="relative z-10 mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {technologySolutions.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-[0_15px_45px_rgba(0,0,0,.05)]
                  transition-all
                  duration-500
                  hover:border-lime-400
                  hover:shadow-[0_25px_70px_rgba(132,204,22,.18)]
                  "
                >

                  {/* Glow */}

                  <div
                    className="
                    absolute
                    -right-16
                    -top-16
                    h-44
                    w-44
                    rounded-full
                    bg-lime-500/10
                    blur-[80px]
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    "
                  />

                  {/* Icon */}

                  <div
                    className="
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-3xl
                    bg-lime-500/10
                    transition-all
                    duration-500
                    group-hover:bg-lime-500
                    "
                  >

                    <Icon
                      className="
                      h-8
                      w-8
                      text-lime-600
                      transition-all
                      duration-500
                      group-hover:text-white
                      "
                    />

                  </div>

                  {/* Title */}

                  <h3
                    className="
                    mt-8
                    text-2xl
                    font-bold
                    text-slate-900
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                    mt-5
                    leading-8
                    text-slate-600
                    "
                  >
                    {item.description}
                  </p>

                  {/* Bottom */}

                  <div
                    className="
                    mt-8
                    flex
                    items-center
                    justify-between
                    "
                  >

                    <span
                      className="
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[2px]
                      text-lime-600
                      "
                    >
                      Learn More
                    </span>

                    <div
                      className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-slate-100
                      transition-all
                      duration-500
                      group-hover:bg-lime-500
                      "
                    >

                      <ArrowRight
                        className="
                        h-5
                        w-5
                        text-slate-700
                        transition-all
                        duration-500
                        group-hover:translate-x-1
                        group-hover:text-white
                        "
                      />

                    </div>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </motion.div>

                {/* ===================================================== */}
        {/* BUSINESS MODELS */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-36"
        >
          {/* Background Number */}

          <div
            className="
            absolute
            left-0
            -top-8
            select-none
            text-[180px]
            font-black
            leading-none
            text-slate-100
            "
          >
            02
          </div>

          {/* Heading */}

          <div className="relative z-10 text-center">

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
              Business Models
            </div>

            <h2
              className="
              mt-5
              text-4xl
              font-black
              text-slate-900
              lg:text-5xl
              "
            >
              Flexible Models.
              <span className="block text-lime-600">
                Scalable Opportunities.
              </span>
            </h2>

            <p
              className="
              mx-auto
              mt-6
              max-w-4xl
              text-lg
              leading-9
              text-slate-600
              "
            >
              Every charging location has different investment,
              ownership and operational requirements.

              VOLTERRA Energy offers flexible business models
              designed for investors, businesses, fleet operators,
              property owners and strategic partners.
            </p>

          </div>

          {/* Cards */}

          <div className="relative z-10 mt-20 grid gap-8 lg:grid-cols-2">

            {/* ================================================= */}
            {/* FOCO */}
            {/* ================================================= */}

            <motion.div
              whileHover={{ y: -8 }}
              className="
              group
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-8
              shadow-[0_20px_60px_rgba(0,0,0,.06)]
              transition-all
              duration-500
              hover:border-lime-500
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <span className="text-sm font-bold uppercase tracking-[3px] text-lime-600">
                    01
                  </span>

                  <h3 className="mt-2 text-3xl font-black text-slate-900">
                    FOCO
                  </h3>

                  <p className="mt-2 text-slate-500 font-medium">
                    Franchise Owned • Company Operated
                  </p>

                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-lime-500/10 group-hover:bg-lime-500 transition-all">

                  <Building2 className="h-8 w-8 text-lime-600 group-hover:text-white" />

                </div>

              </div>

              <h4 className="mt-8 text-xl font-bold text-slate-900">
                You Invest. We Operate. Together We Grow.
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                The franchise partner invests in and owns the charging
                infrastructure while VOLTERRA Energy manages charging
                operations, technology and the complete software ecosystem.
              </p>

              <div className="mt-8 rounded-2xl bg-slate-50 p-5">

                <h5 className="font-semibold text-slate-900">
                  Ideal For
                </h5>

                <p className="mt-2 text-slate-600">
                  Investors and entrepreneurs seeking to participate
                  in EV charging infrastructure without managing
                  day-to-day technical operations.
                </p>

              </div>

            </motion.div>

            {/* ================================================= */}
            {/* COCO */}
            {/* ================================================= */}

            <motion.div
              whileHover={{ y: -8 }}
              className="
              group
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-8
              shadow-[0_20px_60px_rgba(0,0,0,.06)]
              transition-all
              duration-500
              hover:border-lime-500
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <span className="text-sm font-bold uppercase tracking-[3px] text-lime-600">
                    02
                  </span>

                  <h3 className="mt-2 text-3xl font-black text-slate-900">
                    COCO
                  </h3>

                  <p className="mt-2 text-slate-500 font-medium">
                    Company Owned • Company Operated
                  </p>

                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-lime-500/10 group-hover:bg-lime-500 transition-all">

                  <Building className="h-8 w-8 text-lime-600 group-hover:text-white" />

                </div>

              </div>

              <h4 className="mt-8 text-xl font-bold text-slate-900">
                Strategic Locations. Fully Managed by VOLTERRA.
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                VOLTERRA Energy invests in, owns and operates
                charging infrastructure at strategically selected,
                high-potential locations.
              </p>

              <div className="mt-8 rounded-2xl bg-slate-50 p-5">

                <h5 className="font-semibold text-slate-900">
                  Ideal For
                </h5>

                <p className="mt-2 text-slate-600">
                  Flagship charging hubs, strategic urban
                  destinations and high-demand highway corridors.
                </p>

              </div>

            </motion.div>

            {/* ================================================= */}
            {/* EPC */}
            {/* ================================================= */}

            <motion.div
              whileHover={{ y: -8 }}
              className="
              group
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-8
              shadow-[0_20px_60px_rgba(0,0,0,.06)]
              transition-all
              duration-500
              hover:border-lime-500
              lg:col-span-2
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <span className="text-sm font-bold uppercase tracking-[3px] text-lime-600">
                    03
                  </span>

                  <h3 className="mt-2 text-3xl font-black text-slate-900">
                    EPC
                  </h3>

                  <p className="mt-2 text-slate-500 font-medium">
                    Engineering • Procurement • Construction
                  </p>

                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-lime-500/10 group-hover:bg-lime-500 transition-all">

                  <Wrench className="h-8 w-8 text-lime-600 group-hover:text-white" />

                </div>

              </div>

              <h4 className="mt-8 text-xl font-bold text-slate-900">
                From Concept to Commissioning.
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                VOLTERRA Energy provides turnkey EV charging
                infrastructure solutions covering site assessment,
                engineering, charger procurement, electrical
                infrastructure, installation, testing,
                commissioning and project handover.
              </p>

              <div className="mt-8 rounded-2xl bg-slate-50 p-5">

                <h5 className="font-semibold text-slate-900">
                  Ideal For
                </h5>

                <p className="mt-2 text-slate-600">
                  Corporates, developers, hotels, hospitals,
                  commercial establishments, fleet operators,
                  institutions and infrastructure owners.
                </p>

              </div>

            </motion.div>

          </div>

        </motion.div>

                    {/* ================================================= */}
            {/* Charging-as-a-Service */}
            {/* ================================================= */}

            <motion.div
              whileHover={{ y: -8 }}
              className="
              group
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-8
              shadow-[0_20px_60px_rgba(0,0,0,.06)]
              transition-all
              duration-500
              hover:border-lime-500
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <span className="text-sm font-bold uppercase tracking-[3px] text-lime-600">
                    04
                  </span>

                  <h3 className="mt-2 text-3xl font-black text-slate-900">
                    Charging-as-a-Service
                  </h3>

                  <p className="mt-2 font-medium text-slate-500">
                    Managed EV Charging Solutions
                  </p>

                </div>

                <div
                  className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-3xl
                  bg-lime-500/10
                  transition-all
                  group-hover:bg-lime-500
                  "
                >

                  <CloudLightning className="h-8 w-8 text-lime-600 group-hover:text-white" />

                </div>

              </div>

              <h4 className="mt-8 text-xl font-bold text-slate-900">
                Charging Infrastructure Without the Complexity.
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                A flexible service model that enables organizations to
                deploy EV charging without building internal technical
                or operational capabilities.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Depending on the commercial structure, VOLTERRA Energy
                provides charging hardware, software, monitoring,
                operations and maintenance as one integrated service.
              </p>

              <div className="mt-8 rounded-2xl bg-slate-50 p-5">

                <h5 className="font-semibold text-slate-900">
                  Ideal For
                </h5>

                <p className="mt-3 text-slate-600">
                  Corporates • Fleet Operators • Commercial Properties •
                  Hospitality Businesses • Enterprises
                </p>

              </div>

            </motion.div>

            {/* ================================================= */}
            {/* Revenue Sharing */}
            {/* ================================================= */}

            <motion.div
              whileHover={{ y: -8 }}
              className="
              group
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-8
              shadow-[0_20px_60px_rgba(0,0,0,.06)]
              transition-all
              duration-500
              hover:border-lime-500
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <span className="text-sm font-bold uppercase tracking-[3px] text-lime-600">
                    05
                  </span>

                  <h3 className="mt-2 text-3xl font-black text-slate-900">
                    Revenue Sharing
                  </h3>

                  <p className="mt-2 font-medium text-slate-500">
                    Strategic Partnership Model
                  </p>

                </div>

                <div
                  className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-3xl
                  bg-lime-500/10
                  transition-all
                  group-hover:bg-lime-500
                  "
                >

                  <HandCoins className="h-8 w-8 text-lime-600 group-hover:text-white" />

                </div>

              </div>

              <h4 className="mt-8 text-xl font-bold text-slate-900">
                Turn Your Location Into an EV Charging Destination.
              </h4>

              <p className="mt-5 leading-8 text-slate-600">
                Property owners provide strategically located space,
                while VOLTERRA Energy and its investment partners
                develop, own and operate the charging infrastructure
                under a transparent revenue-sharing model.
              </p>

              <div className="mt-8 rounded-2xl bg-slate-50 p-5">

                <h5 className="font-semibold text-slate-900">
                  Ideal For
                </h5>

                <p className="mt-3 text-slate-600 leading-8">
                  Hotels • Restaurants • Highway Destinations •
                  Shopping Malls • Resorts • Commercial Properties •
                  Public Parking • High-Footfall Locations
                </p>

              </div>

            </motion.div>

        {/* ===================================================== */}
        {/* CTA */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="
          mt-32
          overflow-hidden
          rounded-[40px]
          bg-gradient-to-r
          from-slate-900
          via-[#111827]
          to-slate-900
          p-12
          shadow-[0_30px_80px_rgba(0,0,0,.18)]
          "
        >

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">

            <div>

              <div
                className="
                inline-flex
                rounded-full
                border
                border-lime-500/20
                bg-lime-500/10
                px-5
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[3px]
                text-lime-400
                "
              >
                Partner With VOLTERRA
              </div>

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
                Let's Build India's

                <span className="text-lime-400">
                  {" "}EV Charging Future
                </span>

              </h2>

              <p
                className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-slate-300
                "
              >
                Whether you're an investor, enterprise, fleet operator,
                property owner or strategic partner, VOLTERRA Energy
                provides the technology, infrastructure and business
                model to help you succeed in India's rapidly growing
                EV ecosystem.
              </p>

            </div>

            <button
              className="
              rounded-2xl
              bg-gradient-to-r
              from-lime-500
              to-green-600
              px-10
              py-5
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:scale-105
              hover:shadow-[0_20px_50px_rgba(132,204,22,.45)]
              "
            >
              Talk to Our Experts
            </button>

          </div>

        </motion.div>

      </div>

    </section>

  );

}