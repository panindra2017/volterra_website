"use client";

import { motion } from "framer-motion";
import {
  Cookie,
  ShieldCheck,
  Globe,
  BarChart3,
  Settings,
  Lock,
} from "lucide-react";

const cookieTypes = [
  {
    icon: ShieldCheck,
    title: "Essential Cookies",
    description:
      "Required for the website to function properly and cannot be disabled.",
  },
  {
    icon: BarChart3,
    title: "Analytics Cookies",
    description:
      "Help us understand website usage and improve performance.",
  },
  {
    icon: Globe,
    title: "Functional Cookies",
    description:
      "Remember your preferences and enhance your browsing experience.",
  },
  {
    icon: Settings,
    title: "Preference Cookies",
    description:
      "Store settings such as language and display preferences.",
  },
];

export default function CookiesPolicyPage() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-28">

      {/* ====================================================== */}
      {/* Background */}
      {/* ====================================================== */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-lime-500/10 blur-[130px]" />

      <div className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-green-500/10 blur-[150px]" />

      <div
        className="absolute inset-0 opacity-[0.04]
        [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
        [background-size:70px_70px]"
      />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-10">

        {/* ====================================================== */}
        {/* HERO */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-lime-500/20 bg-lime-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-lime-600">

            <Cookie className="h-4 w-4" />

            Cookies Policy

          </div>

          <h1 className="mt-6 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">

            Cookies &

            <span className="text-lime-600">

              {" "}Tracking Technologies

            </span>

          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600">

            This Cookies Policy explains how Volterra Energy uses cookies
            and similar technologies to enhance your browsing experience,
            improve website performance and remember your preferences.

          </p>

          <div className="mt-8 inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 shadow-lg">

            <span className="font-semibold text-slate-700">

              Last Updated:

            </span>

            <span className="ml-2 font-bold text-lime-600">

              July 2026

            </span>

          </div>

        </motion.div>

                {/* ====================================================== */}
        {/* COOKIES OVERVIEW */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,.06)]">

            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-lime-500/10">

                <Cookie className="h-8 w-8 text-lime-600" />

              </div>

              <div>

                <h2 className="text-3xl font-black text-slate-900">

                  Cookies Overview

                </h2>

                <p className="mt-2 text-slate-500">

                  Simple. Transparent. Secure.

                </p>

              </div>

            </div>

            <div className="mt-8 space-y-5">

              {[
                "Cookies help our website function efficiently and provide a better browsing experience.",
                "They remember your preferences, improve website performance and help us understand visitor interactions.",
                "You can control or disable cookies through your browser settings at any time.",
              ].map((item) => (

                <div
                  key={item}
                  className="flex gap-4"
                >

                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-lime-500" />

                  <p className="leading-8 text-slate-600">

                    {item}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* WHAT ARE COOKIES */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <div className="inline-flex rounded-full border border-lime-500/20 bg-lime-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-lime-600">

                What Are Cookies?

              </div>

              <h2 className="mt-5 text-5xl font-black text-slate-900">

                Small Files,

                <span className="text-lime-600">

                  {" "}Better Experience

                </span>

              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">

                Cookies are small text files stored on your device when
                you visit a website. They help websites remember your
                preferences, improve performance and deliver a smoother
                browsing experience.

              </p>

            </div>

            <div className="rounded-[36px] bg-slate-900 p-10 text-white">

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10">

                <Lock className="h-8 w-8 text-lime-400" />

              </div>

              <h3 className="mt-6 text-3xl font-black">

                Why They Matter

              </h3>

              <div className="mt-8 space-y-5">

                {[
                  "Remember your preferences",
                  "Improve website performance",
                  "Provide a secure browsing experience",
                  "Help us enhance our services",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <ShieldCheck className="h-5 w-5 text-lime-400" />

                    <span className="text-gray-300">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* TYPES OF COOKIES */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >

          <div className="text-center">

            <div className="inline-flex rounded-full border border-lime-500/20 bg-lime-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-lime-600">

              Types of Cookies

            </div>

            <h2 className="mt-5 text-5xl font-black text-slate-900">

              Cookies We Use

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">

              We use different categories of cookies to improve
              functionality, security and website performance.

            </p>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {cookieTypes.map((cookie, index) => {

              const Icon = cookie.icon;

              return (

                <motion.div
                  key={cookie.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all hover:border-lime-400"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-500/10">

                    <Icon className="h-7 w-7 text-lime-600" />

                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">

                    {cookie.title}

                  </h3>

                  <p className="mt-5 leading-7 text-slate-600">

                    {cookie.description}

                  </p>

                </motion.div>

              );

            })}

          </div>

        </motion.div>

                {/* ====================================================== */}
        {/* WHY WE USE COOKIES */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="text-center">

            <div className="inline-flex rounded-full border border-lime-500/20 bg-lime-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-lime-600">

              Why We Use Cookies

            </div>

            <h2 className="mt-5 text-5xl font-black text-slate-900">

              Enhancing Your Experience

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">

              Cookies help us deliver a faster, safer and more
              personalized browsing experience.

            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Improve website performance",
              "Remember your preferences",
              "Maintain website security",
              "Analyze website traffic",
              "Enhance user experience",
              "Support essential website functionality",
            ].map((item, index) => (

              <motion.div
                key={item}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -6,
                }}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg transition-all hover:border-lime-400"
              >

                <div className="flex items-start gap-3">

                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-lime-500/10">

                    <ShieldCheck className="h-4 w-4 text-lime-600" />

                  </div>

                  <span className="leading-7 text-slate-700">

                    {item}

                  </span>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* THIRD-PARTY SERVICES */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >

          <div className="overflow-hidden rounded-[36px] bg-slate-900 p-12 text-white shadow-[0_25px_70px_rgba(0,0,0,.15)]">

            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10">

                <Globe className="h-8 w-8 text-lime-400" />

              </div>

              <div>

                <h2 className="text-4xl font-black">

                  Third-Party Services

                </h2>

                <p className="mt-2 text-gray-300">

                  Trusted services that help improve our website.

                </p>

              </div>

            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {[
                "Google Analytics",
                "Google Maps",
                "Payment Gateways",
                "Embedded Media & Social Platforms",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >

                  <div className="flex items-center gap-3">

                    <ShieldCheck className="h-5 w-5 text-lime-400" />

                    <span>

                      {item}

                    </span>

                  </div>

                </div>

              ))}

            </div>

            <div className="mt-8 rounded-2xl border border-lime-400/20 bg-lime-500/10 p-5">

              <p className="leading-8 text-lime-100">

                These providers have their own privacy and cookies
                policies. We encourage you to review them before
                using their services.

              </p>

            </div>

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* MANAGING COOKIES */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg">

              <Settings className="h-12 w-12 text-lime-600" />

              <h2 className="mt-6 text-3xl font-black text-slate-900">

                Managing Cookies

              </h2>

              <p className="mt-6 leading-8 text-slate-600">

                Most web browsers allow you to view, manage,
                delete or block cookies according to your
                preferences.

              </p>

            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg">

              <Lock className="h-12 w-12 text-lime-600" />

              <h2 className="mt-6 text-3xl font-black text-slate-900">

                Your Choice

              </h2>

              <div className="mt-8 space-y-4">

                {[
                  "Accept or reject cookies",
                  "Delete stored cookies",
                  "Block third-party cookies",
                  "Configure browser preferences",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <div className="h-3 w-3 rounded-full bg-lime-500" />

                    <span className="text-slate-600">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* BROWSER CONTROLS */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >

          <div className="rounded-[36px] border border-slate-200 bg-white p-12 shadow-[0_20px_60px_rgba(0,0,0,.06)]">

            <h2 className="text-4xl font-black text-slate-900">

              Browser Controls

            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Most browsers provide built-in tools to manage cookies.
              You can modify your browser settings to accept, reject
              or remove cookies whenever you choose.

            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {[
                "Google Chrome",
                "Microsoft Edge",
                "Mozilla Firefox",
                "Apple Safari",
              ].map((browser) => (

                <div
                  key={browser}
                  className="rounded-2xl bg-slate-50 p-5"
                >

                  <div className="flex items-center gap-3">

                    <Globe className="h-5 w-5 text-lime-600" />

                    <span className="font-medium text-slate-700">

                      {browser}

                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </motion.div>

                {/* ====================================================== */}
        {/* POLICY UPDATES */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="rounded-[36px] border border-slate-200 bg-white p-12 shadow-[0_20px_60px_rgba(0,0,0,.06)]">

            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-lime-500/10">

                <ShieldCheck className="h-8 w-8 text-lime-600" />

              </div>

              <div>

                <h2 className="text-4xl font-black text-slate-900">

                  Policy Updates

                </h2>

                <p className="mt-2 text-slate-500">

                  Keeping you informed.

                </p>

              </div>

            </div>

            <div className="mt-8 space-y-5">

              {[
                "We may update this Cookies Policy periodically.",
                "Any changes will be published on this page.",
                "Please review this policy regularly for the latest information.",
              ].map((item) => (

                <div
                  key={item}
                  className="flex gap-4"
                >

                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-lime-500" />

                  <p className="leading-8 text-slate-600">

                    {item}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* CONTACT US */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >

          <div className="overflow-hidden rounded-[40px] bg-slate-900 p-14 text-white">

            <div className="text-center">

              <h2 className="text-5xl font-black">

                Contact Us

              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">

                If you have any questions regarding our Cookies Policy,
                please feel free to contact us.

              </p>

            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">

              <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-xl">

                <ShieldCheck className="h-8 w-8 text-lime-400" />

                <h3 className="mt-5 text-xl font-bold">

                  Company

                </h3>

                <p className="mt-4 leading-8 text-gray-300">

                  <strong>Volterra Energy</strong>

                  <br />

                  A Brand of

                  <br />

                  Vayutattva Ventures LLP

                </p>

              </div>

              <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-xl">

                <Globe className="h-8 w-8 text-lime-400" />

                <h3 className="mt-5 text-xl font-bold">

                  Website

                </h3>

                <p className="mt-4 text-gray-300">

                  www.volterraenergy.com

                </p>

              </div>

              <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-xl">

                <Lock className="h-8 w-8 text-lime-400" />

                <h3 className="mt-5 text-xl font-bold">

                  Email

                </h3>

                <p className="mt-4 text-gray-300">

                  info@volterraenergy.com

                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* OUR COMMITMENT */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32"
        >

          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-lime-500 to-green-600 p-14 text-white shadow-[0_30px_80px_rgba(132,204,22,.30)]">

            <div className="mx-auto max-w-4xl text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur">

                <Cookie className="h-10 w-10" />

              </div>

              <h2 className="mt-8 text-5xl font-black">

                Our Commitment

              </h2>

              <p className="mt-6 text-lg leading-9 text-lime-50">

                At <strong>Volterra Energy</strong>, we are committed to
                maintaining transparency in how we use cookies and
                protecting your privacy while delivering a secure,
                intelligent and seamless digital experience.

              </p>

            </div>

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* FOOTER NOTE */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >

          <p className="mx-auto max-w-4xl text-base leading-8 text-slate-500">

            By continuing to use the Volterra Energy website, you
            acknowledge that you have read and understood this
            Cookies Policy.

          </p>

        </motion.div>

      </div>

    </section>
  );
}