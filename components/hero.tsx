"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";

import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Leaf,
  Network,
  MapPin,
  Building2,
  BatteryCharging,
  ChevronDown,
  Cpu,
  BadgeDollarSign,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Hero() {
    const router = useRouter()

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.3,
      },
    },
  };

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

  return (
    <section  id="hero" className="relative h-screen overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div
className="
absolute
top-0
left-0
right-0
h-48
bg-linear-to-b
from-black/30
to-transparent
"
/>

   <div
  className="
  absolute
  inset-0
  bg-cover
  bg-no-repeat
  scale-[1.08]
  "
  style={{
    backgroundImage: "url('/images/hero_image.png')",
    backgroundPosition: "72% center",
  }}
/>

      {/* Dark Overlay */}

<div className="absolute inset-0 bg-black/30" />



<div
className="
absolute
inset-0
"
/>

<div
className="
absolute
top-0
left-1/2
-translate-x-1/2
w-225
h-87.5
bg-white/5
blur-[120px]
rounded-full
"
/>
      {/* Left Gradient */}

      <div
className="
absolute
inset-0
bg-linear-to-r
from-[#08111d]/88
via-[#08111d]/45
to-transparent
"
/>

      {/* ================= CONTENT ================= */}
      <div
  className="
  absolute
  left-0
  top-0
  bottom-0
  w-[55%]
  bg-linear-to-r
  from-[#08111d]/35
  to-transparent
  backdrop-blur-[2px]
  "
/>

      <div className="relative z-20 max-w-[1750px] mx-auto h-full px-8 lg:px-16">

        <div className="flex h-full items-center">

          {/* LEFT CONTENT */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-190"
          >

            {/* Badge */}

            <motion.div variants={itemVariants}>

              <div
                className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/10
                backdrop-blur-xl
                px-6
                py-2
                shadow-xl
                mt-16
                "
              >

                <span className="relative flex h-3 w-3">

                  <span className="absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75 animate-ping" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-lime-400" />

                </span>

                <span className="text-white text-xs font-medium tracking-wide">

                  Driving India's EV Revolution

                </span>

              </div>

            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={itemVariants}
              className="
              mt-6
              text-white
              text-5xl
              lg:text-6xl
              xl:text-6xl
              font-black
              leading-[0.98]
              tracking-tight
              "
            >

             Powering India’s 


              <span className="mt-2 block bg-linear-to-r from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-transparent">

                Electric Future

              </span>

            </motion.h1>

            {/* Description */}

            <motion.p
              variants={itemVariants}
              className="
              mt-6
              max-w-155
              text-base
              md:text-lg
              leading-7
              text-gray-300
              "
            >
              Smart, Reliable & Scalable EV Charging Solutions for Homes, Businesses, Hotels, Fleets and Public Infrastructure.

            </motion.p>

            {/* Buttons */}

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-5"
            >

              {/* Primary */}

              <button
               onClick={() => router.push('/products')}
                className="
                group
                h-11
                rounded-2xl
                bg-lime-500
                px-6
                font-semibold
                text-white
                shadow-lg
                shadow-lime-500/20
                transition-all
                duration-300
                hover:scale-105
                hover:bg-lime-400
                cursor-pointer
                "
              >

                <span className="flex items-center gap-3">

                  Explore Products
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </span>

              </button>

              {/* Secondary */}

              <button
              onClick={() => setShowPartnerModal(true)}
                className="
                h-11
                rounded-2xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-xl
                px-6
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-white/20
                hover:border-white/40
                cursor-pointer
                "
              >
                Join Volterra

              </button>

            </motion.div>

            <motion.div
  variants={itemVariants}
  className="
    mt-10
    inline-flex
    overflow-hidden
    rounded-[28px]
    border
    border-white/10
    bg-white/8
    backdrop-blur-2xl
    shadow-[0_20px_60px_rgba(0,0,0,0.25)]
  "
>
  {[
{
icon:<Cpu />,
value:"AI",
label:"Powered Platform",
},
{
icon:<BatteryCharging />,
value:"AC & DC",
label:"Smart Chargers",
},
{
icon:<Network />,
value:"CMS",
label:"Cloud Management",
},
{
icon:<Leaf />,
value:"Green",
label:"Energy Ready",
}
].map((item, index) => (
    <div
      key={item.label}
      className={`
        group
        relative
        flex
        w-50
        flex-col
        items-center
        justify-center
        px-6
        py-2
        transition-all
        duration-300
        hover:bg-white/5
        ${index !== 3 ? "border-r border-white/10" : ""}
      `}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-lime-400/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <div
        className="
          relative
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          border
          border-lime-400/20
          bg-lime-400/10
          text-lime-400
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:bg-lime-400
          group-hover:text-black
        "
      >
        {item.icon}
      </div>

      {/* Value */}
      <h3 className="mt-1 text-lg font-bold text-white">
        {item.value}
      </h3>

      {/* Label */}
      <p className="text-center text-sm text-gray-300 leading-5">
        {item.label}
      </p>
    </div>
  ))}
</motion.div>

                        {/* ================= RIGHT FEATURE CARDS ================= */}

            <div
              className="
              absolute
              right-4
              xl:right-12
              2xl:right-8
              top-[54%]
              -translate-y-1/2
              hidden
              lg:flex
              flex-col
              gap-5
              "
            >
              {[
                {
                  icon: <Zap size={24} />,
                  title: "Ultra Fast Charging",
                  description: "0–80% in just 30 minutes",
                },
                {
                  icon: <ShieldCheck size={24} />,
                  title: "Safe & Reliable",
                  description: "Advanced protection at every step",
                },
                {
                  icon: <Leaf size={24} />,
                  title: "Sustainable Energy",
                  description: "100% green and renewable solutions",
                },
                {
                  icon: <Network size={24} />,
                  title: "Smart Network",
                  description: "AI powered monitoring & uptime",
                },
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{
                    opacity: 0,
                    x: 60,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.8 + index * 0.15,
                    duration: 0.7,
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -4,
                  }}
                  className="
                  group
                  w-77.5
                  rounded-[28px]
                  border
                  border-white/15
                  bg-white/10
                  backdrop-blur-xl
                  shadow-[0_15px_45px_rgba(0,0,0,.18)]
                  p-4
                  transition-all
                  duration-300
                  hover:border-lime-400/40
                  hover:bg-white/15
                  "
                >
                  <div className="flex items-start gap-3">

                    {/* Icon */}

                    <div
                      className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-2xl
                      bg-lime-400/10
                      text-lime-400
                      transition-all
                      duration-300
                      group-hover:bg-lime-400
                      group-hover:text-black
                      "
                    >
                      {card.icon}
                    </div>

                    {/* Content */}

                    <div className="flex-1">

                      <h3
                        className="
                        text-base
                        font-semibold
                        text-white
                        "
                      >
                        {card.title}
                      </h3>

                      <p
                        className="
                        leading-5
                        text-sm
                        text-gray-300
                        "
                      >
                        {card.description}
                      </p>

                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>

      <div
className="
absolute
left-1/2
bottom-0
-translate-x-1/2
w-225
h-55
bg-lime-400/10
blur-[140px]
rounded-full
pointer-events-none
"
/>

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