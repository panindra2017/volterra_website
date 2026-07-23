


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  BadgeDollarSign,
  Car,
  Sparkles,
  TrendingUp,
  Settings2,
  Zap,
  BatteryCharging,
  MapPinned,
  IndianRupee,
  ArrowRight,
  X,
} from "lucide-react";

const stakeholders = [
  {
    id: "users",
    title: "EV Users",
    icon: Car,
    color: "red",
    position:
      "left-0 top-1/2 -translate-y-1/2 lg:-translate-x-6",
    challenges: [
      "Limited Chargers",
      "Poor Uptime",
      "Payment Issues",
      "Fast Charging",
    ],
  },

  {
    id: "business",
    title: "Businesses",
    icon: Building2,
    color: "lime",
    position:
      "left-1/2 -translate-x-1/2 -top-2",
    challenges: [
      "High CapEx",
      "Installation",
      "CMS",
      "Maintenance",
    ],
  },

  {
    id: "investors",
    title: "Investors",
    icon: BadgeDollarSign,
    color: "amber",
    position:
      "right-0 top-1/2 -translate-y-1/2 lg:translate-x-6",
    challenges: [
      "ROI",
      "Transparency",
      "Growth",
      "Low Risk",
    ],
  },
];


const solutions = [
  {
     no: "01",
    icon: BrainCircuit,
    title: "AI-Powered Intelligence",
    description:
      "Using data-driven insights to improve charger utilization, operational efficiency, demand forecasting and future network planning.",
  },
  {
     no: "02",
    icon: Wifi,
    title: "IoT-Enabled Infrastructure",
    description:
      "Connected charging stations enable real-time communication, remote diagnostics, performance monitoring and operational control.",
  },
  {
     no: "03",
    icon: MonitorSmartphone,
    title: "Smart Charge Management System",
    description:
      "Centralized management of charging stations, users, charging sessions, tariffs, payments and network performance.",
  },
  {
     no: "04",
    icon: Activity,
    title: "Predictive & Proactive Maintenance",
    description:
      "Technology-enabled monitoring helps identify potential issues before failures occur, maximizing charger availability.",
  },
  {
     no: "05",
    icon: Smartphone,
    title: "Seamless Digital Experience",
    description:
      "Simple charger discovery, digital payments, charging session management and transparent user experiences.",
  },
  {
     no: "06",
    icon: Handshake,
    title: "Scalable Partnership Models",
    description:
      "Flexible investment and operating models allow businesses, investors and property owners to participate confidently.",
  },
];

const businessModels = [
  {
    id: "foco",
    number: "01",
    title: "FOCO",
    subtitle: "Franchise Owned • Company Operated",
    icon: Building2,
    color: "from-lime-500 to-green-600",

    headline: "You Invest. We Operate. Together We Grow.",

    description:
      "The franchise partner owns the charging infrastructure while VOLTERRA Energy manages charger operations, software, maintenance and the complete EV charging ecosystem.",

    idealFor: [
      "Investors",
      "Entrepreneurs",
      "Property Owners",
      "Commercial Spaces",
    ],

    benefits: [
      "Own charging assets",
      "Complete operational support",
      "Recurring revenue model",
      "AI-powered monitoring",
    ],
  },

  {
    id: "coco",
    number: "02",
    title: "COCO",
    subtitle: "Company Owned • Company Operated",
    icon: Building,
    color: "from-emerald-500 to-green-600",

    headline: "Strategic Locations. Fully Managed.",

    description:
      "VOLTERRA Energy owns, installs, operates and maintains charging infrastructure at strategic high-demand locations.",

    idealFor: [
      "Highways",
      "Charging Hubs",
      "Cities",
      "Commercial Destinations",
    ],

    benefits: [
      "Zero ownership responsibility",
      "Maximum uptime",
      "Professional operations",
      "Scalable deployment",
    ],
  },

  {
    id: "epc",
    number: "03",
    title: "EPC",
    subtitle: "Engineering • Procurement • Construction",
    icon: Wrench,
    color: "from-cyan-500 to-sky-600",

    headline: "Complete Turnkey EV Infrastructure.",

    description:
      "From feasibility studies to commissioning, VOLTERRA delivers complete engineering, procurement and construction services.",

    idealFor: [
      "Corporates",
      "Developers",
      "Hospitals",
      "Hotels",
    ],

    benefits: [
      "End-to-end execution",
      "Certified installation",
      "Electrical infrastructure",
      "Project management",
    ],
  },

  {
    id: "caas",
    number: "04",
    title: "CaaS",
    subtitle: "Charging as a Service",
    icon: CloudLightning,
    color: "from-violet-500 to-indigo-600",

    headline: "Charging Without Operational Complexity.",

    description:
      "Deploy EV charging infrastructure without building an internal charging business. VOLTERRA manages everything for you.",

    idealFor: [
      "Fleet Operators",
      "Corporates",
      "Hospitality",
      "Commercial Properties",
    ],

    benefits: [
      "Managed charging",
      "No operational burden",
      "Predictable costs",
      "24×7 support",
    ],
  },

  {
    id: "revenue",
    number: "05",
    title: "Revenue Sharing",
    subtitle: "Strategic Revenue-Sharing Partnerships",
    icon: HandCoins,
    color: "from-orange-500 to-amber-500",

    headline: "Convert Your Location Into Revenue.",

    description:
      "Property owners provide the location while VOLTERRA develops, owns and operates the charging infrastructure under a transparent revenue-sharing partnership.",

    idealFor: [
      "Hotels",
      "Restaurants",
      "Shopping Malls",
      "Commercial Properties",
    ],

    benefits: [
      "Passive income",
      "Long-term partnership",
      "No operational hassle",
      "Future-ready infrastructure",
    ],
  },
];

const challenges = [
  {
    icon: IndianRupee,
    title: "High Initial",
    subtitle: "Investment",
  },
  {
    icon: MapPinned,
    title: "Complex Site &",
    subtitle: "Power Feasibility",
  },
  {
    icon: BatteryCharging,
    title: "Charger Selection",
    subtitle: "& Procurement",
  },
  {
    icon: Zap,
    title: "Electrical",
    subtitle: "Infrastructure",
  },
  {
    icon: Wrench,
    title: "Installation &",
    subtitle: "Commissioning",
  },
  {
    icon: Settings2,
    title: "Operations &",
    subtitle: "Maintenance",
  },
  {
    icon: MonitorSmartphone,
    title: "Technology &",
    subtitle: "CMS Integration",
  },
  {
    icon: TrendingUp,
    title: "Revenue",
    subtitle: "Generation",
  },
  {
    icon: Activity,
    title: "Performance",
    subtitle: "Monitoring",
  },
];

export function Solutions() {
   const [active, setActive] = useState(0);

   const [showPartnerModal, setShowPartnerModal] = useState(false);

const investorForm =
  "https://docs.google.com/forms/d/e/1FAIpQLSctRL3vu3BlnSh-BkhTGda8dszCS3Lv21sSinrKr-6VnMNjnw/viewform";

const hostForm =
  "https://forms.gle/xr4URstRx15xA2ik7";

const openInvestorForm = () => {
  window.open(investorForm, "_blank");
};

const openHostForm = () => {
  window.open(hostForm, "_blank");
};

  const current = businessModels[active];
  const Icon = current.icon;

  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-white py-32"
    >
        <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-lime-500/10 blur-[130px]" />

        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[120px]" />

        <div
          className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
          [background-size:70px_70px]
          "
        />

      </div>


       <div className="relative z-10 mx-auto max-w-7xl px-6">
{/* ===================================================== */}
{/* THE PROBLEM */}
{/* ===================================================== */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative py-20 overflow-hidden"
>


  <div className="relative z-10 mx-auto max-w-[1500px] px-8">

    <div className="grid items-start gap-20 lg:grid-cols-[0.95fr_1.05fr] -mt-10">

      {/* ===================================================== */}
      {/* LEFT */}
      {/* ===================================================== */}

      <div>

        {/* Badge */}

        <div
          className="
          inline-flex
          items-center
          rounded-full
          border
              border-lime-500/20
              bg-lime-500
          px-4
          py-2
         text-xs
            font-semibold
            tracking-[3px]
            uppercase
          text-white
          shadow-[0_20px_50px_rgba(132,204,22,.35)]

          "
        >
          THE CHALLENGES
        </div>

        {/* Heading */}

        <h2
          className="
          mt-5
          max-w-[650px]
          text-[39px]
          font-black
          leading-[1.08]
          tracking-[-2px]
          text-slate-900
          "
        >

          India's EV Revolution

          <span className="mt-2 block text-lime-600">

            Needs Smarter Infrastructure

          </span>

        </h2>

        {/* Intro */}

        <p
          className="
          mt-4
          max-w-4xl
          text-[20px]
          leading-8
          text-slate-600
          "
        >
          India's electric mobility ecosystem is expanding
          rapidly, but charging infrastructure continues
          to face significant challenges.
        </p>

        {/* Description */}

        <p
          className="
          mt-3
         max-w-4xl
          text-[20px]
          leading-8
          text-slate-600
          "
        >
          EV users often encounter limited charger
          availability, unreliable stations, poor uptime,
          fragmented charging networks, particularly along
          highways and intercity routes.
        </p>

        {/* ===================================================== */}
        {/* IMAGE */}
        {/* ===================================================== */}

        <div className="relative mt-10 max-w-[760px]">

          {/* Glow */}

          <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-lime-500/10 blur-[120px]" />

          {/* Image */}

          <motion.img
            initial={{
              opacity: 0,
              scale: 1.05,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: .8,
            }}
            src="/images/problem-hero.png"
            alt="EV Charging"
            className="
            relative
            z-10
            w-full
            object-cover
            "
          />

          {/* ===================================== */}
          {/* INVESTOR CARD */}
          {/* ===================================== */}

         <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
  whileHover={{ y: -5 }}
  className="
    absolute
    -bottom-6
    left-6
    right-6
    z-20
    flex
    items-center
    gap-6
    rounded-[20px]
    bg-[#184F2F]
    px-7
    py-5
    shadow-[0_18px_45px_rgba(0,0,0,0.22)]
  "
>
  {/* Icon */}

  <div
    className="
      flex
      h-12
      w-12
      shrink-0
      items-center
      justify-center
      rounded-full
      bg-white
    "
  >
    <TrendingUp
      strokeWidth={2}
      className="h-7 w-7 text-[#2E7D32]"
    />
  </div>

  {/* Text */}

  <div className="flex-1">

    <h3
      className="
        text-[14px]
        font-bold
        leading-[1.35]
        text-white
      "
    >
      For investors, the challenge is equally significant:
    </h3>

    <p
      className="
        mt-2
        max-w-[520px]
        text-[12px]
        leading-[1.6]
        text-green-100
      "
    >
      how to participate in the growing EV infrastructure
      opportunity without having to operate a technically
      complex charging business.
    </p>

  </div>
</motion.div>

        </div>

      </div>

      {/* ===================================================== */}
      {/* RIGHT SIDE */}
      {/* PART 2 */}
      {/* ===================================================== */}

      <div>

       <div className="relative pt-2">

  {/* ========================================= */}
  {/* Heading */}
  {/* ========================================= */}

  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: .7 }}
    className="flex items-start gap-5"
  >

    {/* Icon */}

    <div
      className="
      flex
      h-12
      w-12
      shrink-0
      items-center
      justify-center
      rounded-full
      border
      border-lime-300
      bg-white
      shadow-[0_10px_35px_rgba(15,23,42,.08)]
      "
    >

      <TrendingUp className="h-8 w-8 text-lime-600"/>

    </div>

    {/* Text */}

    <div className="max-w-[560px]">

      <h3
        className="
        text-[18px]
        font-bold
        leading-7
        text-slate-600
        "
      >

        Businesses and property owners interested
        in deploying EV charging infrastructure
        face{" "}

        <span className="text-green-700">

          challenges

        </span>{" "}

        including:

      </h3>

    </div>

  </motion.div>

  {/* ========================================= */}
  {/* Challenge Cards */}
  {/* ========================================= */}

  <div className="mt-10 grid grid-cols-3 gap-6">

    {challenges.map((item, index) => {

      const Icon = item.icon;

      return (

        <motion.div
          key={item.title}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: index * .05,
            duration: .55,
          }}
          whileHover={{
            y: -8,
          }}
          className="
          group
          relative
          flex
          min-h-[160px]
          flex-col
          items-center
          justify-center
          rounded-[28px]
          border
          border-slate-100
          bg-white/50
          px-3
          py-1
          text-center
          shadow-[0_12px_35px_rgba(15,23,42,.05)]
          transition-all
          duration-500
          hover:border-lime-300
          hover:shadow-[0_20px_55px_rgba(132,204,22,.15)]
          "
        >

          {/* Glow */}

          <div
            className="
            absolute
            inset-0
            rounded-[28px]
            bg-gradient-to-br
            from-lime-50
            to-transparent
            opacity-0
            transition
            duration-500
            group-hover:opacity-100
            "
          />

          {/* Icon */}

          <div
            className="
            relative
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-lime-50
            transition-all
            duration-500
            group-hover:bg-lime-500
            "
          >

            <Icon
              className="
              h-6
              w-6
              text-lime-600
              transition-all
              duration-500
              group-hover:text-white
              "
            />

          </div>

          {/* Title */}

          <h4
            className="
            relative
            mt-2
            text-[14px]
            font-bold
            leading-6
            text-slate-900
            "
          >

            {item.title}

            <span className="block">

              {item.subtitle}

            </span>

          </h4>

        </motion.div>

      );

    })}

  </div>

  {/* ========================================= */}
  {/* Bottom Illustration */}
  {/* ========================================= */}

  <motion.div
    initial={{
      opacity: 0,
      y: 30,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{ once: true }}
    transition={{
      delay: .4,
    }}
    className="mt-4"
  >

    <img
      src="/images/city-line.png"
      alt="City Illustration"
      className="
      w-full
      opacity-70
      "
    />

  </motion.div>

</div>

      </div>

    </div>

  </div>

</motion.section>




                {/* ===================================================== */}
        {/* OUR SOLUTION */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-3"
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
              bg-lime-500
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-white
              shadow-[0_20px_50px_rgba(132,204,22,.35)]

              "
            >
              Our Solution
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
              One Platform.
              <span className="block text-lime-600">
                One Network. Intelligent Mobility.
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
              VOLTERRA Energy provides an integrated ecosystem to
              design, deploy, operate, monitor and continuously
              optimize EV charging infrastructure.

              Our technology-driven platform connects charging
              hardware, software, analytics and operations into
              one intelligent network.
            </p>

          </div>

                {/* Features */}

       
          <div className="relative z-10 mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {solutions.map((solution, index) => {

              const Icon = solution.icon;

              return (

                <motion.div
                  key={solution.title}
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

                  {/* <div
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

                  </div> */}

                  
       <div className="flex items-start justify-between">

       <span
          className="
          text-2xl
          font-black
          text-slate-200
          transition
          group-hover:text-lime-500/30
          "
        >
          {solution.no}
        </span>

        <div
          className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-2xl
          bg-lime-500/10
          transition-all
          duration-500
         
          group-hover:bg-lime-500
          "
        >

          <Icon
            className="
            h-6
            w-6
            text-lime-600
            transition-all
            duration-500
            group-hover:text-white
            "
          />

        </div>

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
                    {solution.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                    mt-4
                    leading-8
                    text-slate-600
                    "
                  >
                    {solution.description}
                  </p>

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
              bg-lime-500
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-white
              shadow-[0_20px_50px_rgba(132,204,22,.35)]

              "
            >
              Business Models
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
              Flexible Models.
              <span className="block text-lime-600">
                Scalable Opportunities.
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
              Every charging location has different investment,
              ownership and operational requirements.

              VOLTERRA Energy offers flexible business models
              designed for investors, businesses, fleet operators,
              property owners and strategic partners.
            </p>

          </div>

          {/* ========================================================= */}
{/* Business Model Selector */}
{/* ========================================================= */}

<div className="relative z-10 mt-10">

<div
  className="
    mx-auto
    flex
    w-full
    max-w-7xl
    items-center
    rounded-[24px]
    border
    border-slate-200
    bg-white/80
    p-2
    shadow-[0_20px_60px_rgba(15,23,42,.08)]
    backdrop-blur-xl
  "
>

    {businessModels.map((model, index) => {

      const ItemIcon = model.icon;

      return (

       <motion.button
  key={model.id}
  onClick={() => setActive(index)}
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.98 }}
  className="
    relative
    flex-1
    min-w-0
    overflow-hidden
    rounded-2xl
  
  "
>
  {/* Active Background */}

  {active === index && (
    <motion.div
      layoutId="businessModelActive"
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={`
        absolute
        inset-0
        rounded-2xl
        bg-gradient-to-r
        ${model.color}
      `}
    />
  )}

  {/* Content */}

  <div
    className={`
      relative
      z-10
      flex
      items-center
      justify-center
      gap-3
      px-4
      py-4
      transition-all
      duration-300
      ${
        active === index
          ? "text-white"
          : "text-slate-700 hover:bg-slate-50"
      }
    `}
  >
    {/* Icon */}

    <ItemIcon
      className={`
        h-5
        w-5
        flex-shrink-0
        ${
          active === index
            ? "text-white"
            : "text-lime-600"
        }
      `}
    />

    {/* Number */}

    {/* <span
      className={`
        text-xs
        font-bold
        tracking-[2px]
        ${
          active === index
            ? "text-white/80"
            : "text-lime-600"
        }
      `}
    >
      {model.number}
    </span> */}

    {/* Title */}

    <span className="truncate text-sm font-bold lg:text-base">
      {model.title}
    </span>

  </div>
</motion.button>
      );

    })}

  </div>

</div>


{/* ========================================================= */}
{/* Business Model Details Card */}
{/* ========================================================= */}

<div className="relative z-10 mt-14">

  <AnimatePresence mode="wait">

    <motion.div
      key={current.id}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: .45 }}
      className="
      relative
      overflow-hidden
      rounded-[36px]
      border
      border-slate-200
      bg-white/80
      backdrop-blur-xl
      shadow-[0_30px_80px_rgba(15,23,42,.08)]
      "
    >

      {/* Decorative Glow */}

      <div
        className={`
        absolute
        -right-24
        -top-24
        h-72
        w-72
        rounded-full
        bg-gradient-to-br
        ${current.color}
        opacity-10
        blur-[110px]
        `}
      />

      {/* Main Layout */}

      <div className="relative z-10 grid gap-12 p-10 lg:grid-cols-[1.15fr_.85fr]">

        {/* ===================================================== */}
        {/* LEFT CONTENT */}
        {/* ===================================================== */}

        <div>

          {/* Icon */}

          <motion.div
            initial={{ scale: .85 }}
            animate={{ scale: 1 }}
            transition={{ duration: .4 }}
            className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            ${current.color}
            shadow-xl
            `}
          >

            <Icon className="h-8 w-8 text-white" />

          </motion.div>


          {/* Title */}

          <h3
            className="
            mt-5
            text-4xl
            font-black
            leading-tight
            text-slate-900
            "
          >
            {current.title}
          </h3>

          {/* Subtitle */}

          <p
            className="
         
            text-lg
            font-medium
            text-slate-500
            "
          >
            {current.subtitle}
          </p>

          {/* Divider */}

          <div
            className={`
            mt-6
            h-1
            w-28
            rounded-full
            bg-gradient-to-r
            ${current.color}
            `}
          />

          {/* Headline */}

          <h4
            className="
            mt-6
            max-w-2xl
            text-3xl
            font-bold
            leading-tight
            text-slate-900
            "
          >
            {current.headline}
          </h4>

          {/* Description */}

          <p
            className="
            mt-3
            max-w-2xl
            text-lg
            leading-8
            text-slate-600
            "
          >
            {current.description}
          </p>

            {/* Ideal For */}

          <div
            className="
            rounded-[28px]
            border
            border-slate-200
            bg-white
            p-7
            mt-8
            "
          >

            <h5 className="text-xl font-bold text-slate-900">
              Ideal For
            </h5>

            <div className="mt-4 flex flex-wrap gap-3">

              {current.idealFor.map((item) => (

                <span
                  key={item}
                  className="
                  rounded-full
                  border
                  border-lime-200
                  bg-lime-50
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-lime-700
                  "
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        </div>

        {/* ===================================================== */}
        {/* RIGHT SIDE STARTS IN PART 3B */}
        {/* ===================================================== */}
                {/* ===================================================== */}
        {/* RIGHT CONTENT */}
        {/* ===================================================== */}

        <div className="space-y-5">

          {/* Benefits Card */}

          <div
            className="
            rounded-[28px]
            border
            border-slate-200
            bg-slate-50
            p-7
            "
          >

            <h5 className="text-xl font-bold text-slate-900">
              Key Benefits
            </h5>

            <div className="mt-4 space-y-2">

              {current.benefits.map((benefit) => (

                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: .3 }}
                  className="flex items-start gap-3"
                >

                  <div
                    className="
                    mt-1
                    flex
                    h-4
                    w-4
                    items-center
                    justify-center
                    rounded-full
                    bg-lime-500/10
                    "
                  >

                    <div className="h-2 w-2 rounded-full bg-lime-500" />

                  </div>

                  <span className="leading-6 text-slate-600">

                    {benefit}

                  </span>

                </motion.div>

              ))}

            </div>

          </div>

        

          {/* Quick Stats */}

          <div
            className="
            overflow-hidden
            rounded-[28px]
            bg-slate-900
            p-7
            text-white
            "
          >

            <div className="grid grid-cols-3 gap-6">

              <div>

                <p className="text-3xl font-black text-lime-400">

                  24×7

                </p>

                <p className="mt-2 text-sm text-slate-300">

                  Monitoring

                </p>

              </div>

              <div>

                <p className="text-3xl font-black text-lime-400">

                  AI

                </p>

                <p className="mt-2 text-sm text-slate-300">

                  Analytics

                </p>

              </div>

              <div>

                <p className="text-3xl font-black text-lime-400">

                  CMS

                </p>

                <p className="mt-2 text-sm text-slate-300">

                  Platform

                </p>

              </div>

            </div>

            <div
              className="
              mt-7
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
              "
            >

              <p className="text-sm uppercase tracking-[3px] text-lime-400">

                Why VOLTERRA?

              </p>

              <p className="mt-3 leading-7 text-slate-300">

                Every business model is powered by our intelligent
                charging platform, ensuring reliable operations,
                real-time monitoring, seamless user experiences,
                and scalable growth.

              </p>

            </div>

          </div>

        </div>

      </div>

    </motion.div>

  </AnimatePresence>

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
          bg-linear-to-r
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
                Want to join VOLTERRA ?
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
  onClick={() => setShowPartnerModal(true)}
  className="
  rounded-2xl
  bg-gradient-to-r
  from-lime-500
  to-green-600
  px-10
  py-4
  text-lg
  font-semibold
  text-white
  transition-all
  duration-300
  hover:-translate-y-1
  hover:scale-105
  hover:shadow-[0_20px_50px_rgba(132,204,22,.45)]
  cursor-pointer
  "
>
 Join Volterra
</button>

          </div>

        </motion.div>

      </div>

      <AnimatePresence>

{showPartnerModal && (

<motion.div

initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}

className="
fixed
inset-0
z-[999]
flex
items-center
justify-center
bg-black/60
backdrop-blur-md
px-6
"

>

<motion.div

initial={{
opacity:0,
scale:.92,
y:30
}}

animate={{
opacity:1,
scale:1,
y:0
}}

exit={{
opacity:0,
scale:.95
}}

transition={{
duration:.35
}}

className="
relative
w-full
max-w-4xl
overflow-hidden
rounded-[36px]
bg-white
shadow-[0_40px_120px_rgba(0,0,0,.35)]
"

>

<button

onClick={() => setShowPartnerModal(false)}

className="
absolute
right-6
top-6
flex
h-11
w-11
items-center
justify-center
rounded-full
bg-slate-100
hover:bg-slate-200
"

>

<X className="h-5 w-5"/>

</button>

<div className="p-12">

<div className="text-center">

<div
className="
inline-flex
rounded-full
bg-lime-100
px-4
py-2
text-xs
font-medium
uppercase
text-lime-700
"
>

Partner With VOLTERRA

</div>

<h2 className="mt-4 text-3xl font-black text-slate-900">

Let's Build Together

</h2>

<p className="mt-2 text-base text-slate-600">

Choose how you'd like to partner with VOLTERRA Energy.

</p>

</div>

<div className="mt-10 grid gap-8 md:grid-cols-2">

{/* Investor */}

<motion.div

whileHover={{
y:-8
}}

className="
group
rounded-[32px]
border
border-slate-200
p-5
transition-all
duration-300
hover:border-lime-400
hover:shadow-xl
"

>

<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-lime-100">

<BadgeDollarSign className="h-5 w-5 text-lime-600"/>

</div>

<h3 className="mt-3 text-xl font-bold">

Become an Investor

</h3>

<p className="mt-2 leading-7 text-slate-600">

Invest in India's growing EV charging network through VOLTERRA's flexible business models.

</p>

<button

onClick={()=>{
setShowPartnerModal(false);
openInvestorForm();
}}

className="
mt-7
flex
items-center
gap-2
rounded-xl
bg-lime-600
px-4
py-2
font-semibold
text-white
transition
hover:bg-lime-700
cursor-pointer
"

>

Continue

<ArrowRight className="h-5 w-5"/>

</button>

</motion.div>

{/* Host */}

<motion.div

whileHover={{
y:-8
}}

className="
group
rounded-[32px]
border
border-slate-200
p-8
transition-all
duration-300
hover:border-lime-400
hover:shadow-xl

"

>

<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-lime-100">

<BatteryCharging className="h-5 w-5 text-lime-600"/>

</div>

<h3 className="mt-3 text-xl font-bold">

Need EV Charging Station

</h3>

<p className="mt-2 leading-7 text-slate-600">

Install smart EV charging infrastructure at your apartment, hotel, office, mall, fleet depot or commercial property.

</p>

<button

onClick={()=>{
setShowPartnerModal(false);
openHostForm();
}}

className="
mt-7
flex
items-center
gap-2
rounded-xl
bg-slate-900
px-4
py-2
font-semibold
text-white
transition
hover:bg-slate-800
cursor-pointer
"

>

Continue

<ArrowRight className="h-5 w-5"/>

</button>

</motion.div>

</div>

</div>

</motion.div>

</motion.div>

)}

</AnimatePresence>

    </section>

  );

}