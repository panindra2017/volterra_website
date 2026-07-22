"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ChevronDown,
  CircleHelp,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";
import { useRouter } from "next/navigation";

const faqs = [
  {
    question: "Which EVs are compatible with Volterra chargers?",
    answer:
      "Volterra AC and DC chargers are compatible with most electric vehicles available in India, supporting standard charging protocols including CCS2 and Type 2 connectors.",
  },

  {
    question: "How much electrical load is required?",
    answer:
      "The required electrical load depends on the charger capacity. Our engineering team performs a detailed site assessment and recommends the appropriate power infrastructure.",
  },

  {
    question: "What charger capacity is right for my location?",
    answer:
      "Residential locations generally require 7.4kW or 11kW AC chargers, while commercial sites, fleets and public charging stations may require 22kW AC or 30kW–240kW DC fast chargers.",
  },

  {
    question: "Do you provide complete installation services?",
    answer:
      "Yes. We provide end-to-end installation, commissioning, electrical works, testing and project handover across all supported locations.",
  },

  {
    question: "Do you offer AMC and maintenance services?",
    answer:
      "Yes. We provide Annual Maintenance Contracts (AMC), preventive maintenance, software updates, remote diagnostics and 24×7 technical support.",
  },

  {
    question: "Can I monitor chargers remotely?",
    answer:
      "Absolutely. Every supported charger can be remotely monitored through our Charging Management System (CMS) with live status, reports and alerts.",
  },

  {
    question: "Do you provide a Charging Management System (CMS)?",
    answer:
      "Yes. Our intelligent CMS enables charger monitoring, user management, billing, remote control, analytics and OTA updates from a single dashboard.",
  },

  {
    question: "What payment methods are supported?",
    answer:
      "Our CMS supports multiple digital payment methods including UPI, debit cards, credit cards, wallets and enterprise billing integrations.",
  },

  {
    question: "Do you provide nationwide support?",
    answer:
      "Yes. Volterra is building a nationwide service network providing installation, maintenance and technical support across India.",
  },
];

export function FAQ() {
    const router = useRouter()

  const [open, setOpen] = useState(0);

  return (

<section
id="faq"
className="
relative
overflow-hidden
bg-white
py-32
"
>

{/* Green Glow */}

<div
className="
absolute
left-0
top-0
h-105
w-105
rounded-full
bg-lime-500/10
blur-[150px]
"
/>

<div
className="
absolute
right-0
bottom-0
h-105
w-105
rounded-full
bg-green-500/10
blur-[150px]
"
/>

{/* Engineering Grid */}

<div
className="
absolute
inset-0
opacity-[0.04]
bg-[linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
bg-size-[70px_70px]
"
/>

<div
className="
relative
z-10
mx-auto
max-w-375
px-6
lg:px-10
-mt-11
"
>

{/* ====================================== */}
{/* Heading */}
{/* ====================================== */}

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

<div className="h-px w-12 bg-lime-500"/>

<p
className="
text-sm
font-bold
uppercase
tracking-[4px]
"
>

Frequently Asked Questions

</p>

<div className="h-px w-12 bg-lime-500"/>

</div>

<h2
className="
mt-3
text-4xl
lg:text-5xl
font-black
leading-tight
text-slate-900
"
>

Everything You Need {" "}

<span className="text-lime-600">

 to Know

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

Find answers to the most common questions about our
EV charging products, installation process,
Charging Management System and nationwide support.

</p>

</motion.div>

{/* ====================================== */}
{/* PART 2 STARTS HERE */}
{/* ====================================== */}
{/* CONTENT */}
{/* ====================================== */}

<div className="mt-18 grid gap-12 lg:grid-cols-[420px_1fr]">

  {/* ====================================== */}
  {/* LEFT PANEL */}
  {/* ====================================== */}

  <motion.div

    initial={{ opacity: 0, x: -40 }}

    whileInView={{ opacity: 1, x: 0 }}

    viewport={{ once: true }}

    transition={{ duration: .8 }}

  >

    <div
      className="
      sticky
      top-32
      overflow-hidden
      rounded-[36px]
      bg-linear-to-br
      from-slate-900
      via-[#111827]
      to-slate-900
      p-10
      text-white
      shadow-[0_25px_70px_rgba(0,0,0,.18)]
      "
    >

      {/* Glow */}

      <div
        className="
        absolute
        -right-20
        -top-20
        h-60
        w-60
        rounded-full
        bg-lime-500/20
        blur-[120px]
        "
      />

      <div className="relative z-10">

        <div
          className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-3xl
          bg-lime-500/20
          "
        >

          <CircleHelp className="h-10 w-10 text-lime-400"/>

        </div>

        <h3
          className="
          mt-8
          text-4xl
          font-black
          "
        >

          Need More Help?

        </h3>

        <p
          className="
          mt-6
          text-lg
          leading-8
          text-slate-300
          "
        >

          Our EV charging specialists are available to
          help you choose the right charging solution,
          answer technical questions and guide you
          through installation.

        </p>

        {/* Contact Items */}

        <div className="mt-10 space-y-6">

          <div className="flex items-center gap-4">

            <div
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-white/10
              "
            >

              <Phone className="h-5 w-5 text-lime-400"/>

            </div>

            <div>

              <p className="text-sm text-slate-400">

                Call Us

              </p>

              <p className="font-semibold">

                +91 80954 34443

              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <div
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-white/10
              "
            >

              <Mail className="h-5 w-5 text-lime-400"/>

            </div>

            <div>

              <p className="text-sm text-slate-400">

                Email

              </p>

              <p className="font-semibold">

                info@volterraenergy.in

              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <div
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-white/10
              "
            >

              <MessageSquare className="h-5 w-5 text-lime-400"/>

            </div>

            <div>

              <p className="text-sm text-slate-400">

                Support

              </p>

              <p className="font-semibold">

                Mon – Sat | 9 AM – 7 PM

              </p>

            </div>

          </div>

        </div>

        <button
            onClick={() => router.push('/contact')}
          className="
          mt-10
          w-full
          rounded-2xl
          bg-linear-to-r
          from-lime-500
          to-green-600
          py-4
          font-semibold
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_20px_50px_rgba(132,204,22,.35)]
          cursor-pointer
          "
        >

          Contact Our Team

        </button>

      </div>

    </div>

  </motion.div>

  {/* ====================================== */}
  {/* FAQ ACCORDION */}
  {/* ====================================== */}

  <motion.div

    initial={{ opacity: 0, x: 40 }}

    whileInView={{ opacity: 1, x: 0 }}

    viewport={{ once: true }}

    transition={{ duration: .8 }}

    className="space-y-4"

  >

    {faqs.map((faq, index) => (

      <motion.div

        key={index}

        layout

        className="
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        shadow-[0_10px_35px_rgba(0,0,0,.05)]
        transition-all
        duration-300
        hover:border-lime-400
        "

      >

        {/* Question */}

        <button

          onClick={() =>
            setOpen(open === index ? -1 : index)
          }

          className="
          flex
          w-full
          items-center
          justify-between
          px-8
          py-4
          text-left
          "

        >

          <span
            className="
            pr-8
            text-lg
            font-bold
            text-slate-900
            "
          >

            {faq.question}

          </span>

          <motion.div

            animate={{
              rotate: open === index ? 180 : 0
            }}

            transition={{
              duration: .3
            }}

            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-lime-500/10
            "

          >

            <ChevronDown
              className="h-5 w-5 text-lime-600"
            />

          </motion.div>

        </button>

        {/* PART 3 STARTS HERE */}
        <AnimatePresence initial={false}>

  {open === index && (

    <motion.div

      initial={{
        height: 0,
        opacity: 0,
      }}

      animate={{
        height: "auto",
        opacity: 1,
      }}

      exit={{
        height: 0,
        opacity: 0,
      }}

      transition={{
        duration: 0.35,
      }}

      className="overflow-hidden"

    >

      <div
        className="
        border-t
        border-slate-200
        px-8
        pb-6
        pt-3
        "
      >

        <p
          className="
          text-base
          leading-8
          text-slate-600
          "
        >

          {faq.answer}

        </p>

      </div>

    </motion.div>

  )}

</AnimatePresence>

      </motion.div>

    ))}

  </motion.div>

</div>

</div>

</section>

  );

}


