
"use client";

import { motion } from "framer-motion";

import {
  MessageCircle,
  MapPinned,
  FileText,
  CircuitBoard,
  Wrench,
  ShieldCheck,
  Zap,
  Headphones,
  Leaf,
} from "lucide-react";
import { useRouter } from "next/navigation";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Discuss your EV charging requirements and business objectives.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Site Survey",
    description:
      "Technical inspection and electrical infrastructure assessment.",
    icon: MapPinned,
  },
  {
    number: "03",
    title: "Proposal",
    description:
      "Customized commercial proposal with project scope and pricing.",
    icon: FileText,
  },
  // {
  //   number: "04",
  //   title: "Electrical Design",
  //   description:
  //     "Prepare optimized layouts and complete electrical planning.",
  //   icon: CircuitBoard,
  // },
  {
    number: "04",
    title: "Installation",
    description:
      "Professional installation and commissioning by certified engineers.",
    icon: Wrench,
  },
  // {
  //   number: "06",
  //   title: "Testing",
  //   description:
  //     "Quality inspection, testing and compliance verification.",
  //   icon: ShieldCheck,
  // },
  {
    number: "05",
    title: "Go Live",
    description:
      "Activate chargers and integrate with the CMS platform.",
    icon: Zap,
  },
  {
    number: "06",
    title: "AMC & Support",
    description:
      "24×7 monitoring, preventive maintenance and customer support.",
    icon: Headphones,
  },
];

export function Process() {

    const router = useRouter()

  return (

<section
id="process"
className="
relative
overflow-hidden
bg-white
py-28
"
>

{/* Background Glow */}

<div
className="
absolute
left-0
top-0
h-[450px]
w-[450px]
rounded-full
bg-lime-500/10
blur-[140px]
"
/>

<div
className="
absolute
right-0
bottom-0
h-[450px]
w-[450px]
rounded-full
bg-green-500/10
blur-[140px]
"
/>

{/* Engineering Grid */}

<div
className="
absolute
inset-0
opacity-[0.04]
[background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
[background-size:70px_70px]
"
/>

<div
className="
relative
z-10
mx-auto
max-w-[1500px]
px-6
lg:px-10
 -mt-10
"
>

<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className="text-center"

>

<div
className="
inline-flex
items-center
gap-4
text-lime-600
"
>

{/* <div className="h-0.5 w-12 bg-lime-500"/> */}

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

OUR PROCESS

</div>

{/* <div className="h-0.5 w-12 bg-lime-500"/> */}

</div>

<h2
className="
mt-3
text-3xl
lg:text-4xl
font-black
leading-tight
text-slate-900
"
>

Powering Your Journey,

<span className="text-lime-600">

 Together

</span>

</h2>

<p
className="
mx-auto
mt-2
max-w-4xl
text-lg
leading-7
text-slate-600
"
>

A simple, transparent 8-step implementation process
designed to deliver reliable EV charging infrastructure
for homes, businesses and public networks.

</p>

</motion.div>


{/* ========================================= */}
{/* TOP PROCESS ROW */}
{/* ========================================= */}


    <div className="mt-12 grid gap-6 lg:grid-cols-3">

  {processSteps.map((step, index) => {

    const Icon = step.icon;

    return (

      <motion.div
        key={step.number}
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: index * 0.08,
          duration: .6,
        }}
        whileHover={{
          y: 0,
        }}
        className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-[0_15px_45px_rgba(0,0,0,.06)]
        transition-all
        duration-500
        hover:border-lime-400
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
                  
      <div
className="
absolute
left-0
top-0
h-1
w-full
origin-left
scale-x-0
bg-gradient-to-r
from-lime-400
to-green-500
transition-transform
duration-500
group-hover:scale-x-100
"
/>

        {/* Background Number */}

        <span
          className="
absolute
right-5
top-3
mt-2
text-[46px]
font-black
leading-none
bg-gradient-to-b
from-slate-100
to-transparent
bg-clip-text
text-transparent
select-none
transition-all
duration-500
group-hover:scale-110
group-hover:from-lime-200
"
        >
          {step.number}
        </span>

        <div
          className="
          flex
          h-12
          w-12
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
            h-7
            w-7
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
                    mt-6
                    text-xl
                    font-bold
                    text-slate-900
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                    mt-2
                    leading-7
                    text-slate-600
                    "
                  >
                    {step.description}
                  </p>

                </motion.div>

              );

            })}

          </div>

{/* ========================================= */}
{/* CTA STRIP */}
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
  viewport={{
    once: true,
  }}
  transition={{
    duration: 0.7,
    delay: 0.2,
  }}
  className="
  mt-18
  flex
  justify-center
  "
>

  <div
    className="
    flex
    items-center
    gap-3
    rounded-full
    border
    border-lime-200
    bg-white
    px-8
    py-3
    shadow-[0_20px_50px_rgba(0,0,0,.08)]
    "
  >

    {/* Icon */}

    <div
      className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      bg-lime-600
      text-white
      "
    >

      <Leaf className="h-5 w-5"/>

    </div>

    {/* Divider */}

    <div
      className="
      h-8
      w-px
      bg-slate-200
      "
    />

    {/* Text */}

    <p
      className="
      text-base
      text-slate-700
      "
    >

      Reliable Solutions.

      <span className="font-semibold">

        {" "}Expert Support.

      </span>

      <span className="font-bold text-lime-600">

        {" "}A Greener Tomorrow.

      </span>

    </p>

  </div>

</motion.div>

{/* ========================================= */}
{/* BUTTON */}
{/* ========================================= */}

<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8,
delay:.3
}}

className="
mt-8
flex
justify-center
"

>

<button
   onClick={() => router.push('/contact')}
className="
rounded-2xl
bg-gradient-to-r
from-lime-500
to-green-600
px-6
py-3
text-base
font-semibold
text-white
shadow-[0_20px_50px_rgba(132,204,22,.35)]
transition-all
duration-300
hover:-translate-y-1
hover:scale-105
hover:shadow-[0_30px_60px_rgba(132,204,22,.45)]
cursor-pointer
"
>

Book Free Consultation

</button>

</motion.div>

</div>

</section>

  );

}