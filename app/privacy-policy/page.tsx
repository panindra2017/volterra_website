"use client";

import { motion } from "framer-motion";

import {
  ShieldCheck,
  Database,
  User,
  Building2,
  MapPin,
  BatteryCharging,
  ClipboardList,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

const collectedInfo = [
  {
    icon: User,
    title: "Personal Information",
    items: [
      "Full Name",
      "Email Address",
      "Phone Number",
      "Company Name",
    ],
  },

  {
    icon: MapPin,
    title: "Project Information",
    items: [
      "Project Location",
      "Site Details",
      "EV Charging Requirements",
      "Business Information",
    ],
  },

  {
    icon: BatteryCharging,
    title: "Charging Information",
    items: [
      "Charging Infrastructure",
      "Installation Requirements",
      "Energy Usage",
      "Technical Information",
    ],
  },
];

const usage = [
  "Respond to enquiries and service requests",
  "Provide EV charging products and services",
  "Evaluate potential EV charging sites",
  "Process transactions and customer support",
  "Improve our website and services",
  "Send relevant service communications",
  "Comply with applicable legal requirements",
];

export default function PrivacyPolicy() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-15">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-lime-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[150px]" />

      {/* Engineering Grid */}

      <div className="absolute inset-0 opacity-[0.04]
      [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
      [background-size:60px_60px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-10">

        {/* ====================================================== */}
        {/* HERO */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-lime-500/20 bg-lime-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-lime-600">

            <ShieldCheck className="h-4 w-4" />

            Privacy Policy

          </div>

          <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 lg:text-6xl">

            Protecting Your

            <span className="text-lime-600">

              {" "}Privacy & Data

            </span>

          </h1>

          <p className="mx-auto mt-3 max-w-4xl text-lg leading-8 text-slate-600">

            Volterra Energy values your privacy and is committed to protecting
            your personal information through responsible data practices,
            secure technology and complete transparency.

          </p>

          <div className="mt-10 inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 shadow-lg">

            <span className="font-semibold text-slate-700">

              Last Updated:

            </span>

            <span className="ml-2 font-bold text-lime-600">

              July 2026

            </span>

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* PRIVACY OVERVIEW */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-10"
        >

          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,.06)]">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-500/10">

                <ShieldCheck className="h-7 w-7 text-lime-600" />

              </div>

              <div>

                <h2 className="text-3xl font-black text-slate-900">

                  Privacy Overview

                </h2>

                <p className="mt-1 text-slate-500">

                  Your trust is important to us.

                </p>

              </div>

            </div>

            <p className="mt-8 text-lg leading-9 text-slate-600">

              Volterra Energy, a brand of
              <strong> Vayutattva Ventures LLP</strong>, is committed to
              protecting the privacy of our customers, website visitors,
              partners and users.

            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">

              This Privacy Policy explains how we collect, use, protect and
              manage your personal information whenever you interact with our
              website, products or EV charging services.

            </p>

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* INFORMATION WE COLLECT */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-28"
        >

          <div className="text-center">

            <div className="inline-flex rounded-full border border-lime-500/20 bg-lime-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-lime-600">

              Information We Collect

            </div>

            <h2 className="mt-5 text-5xl font-black text-slate-900">

              Data We May Collect

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">

              We only collect information necessary to provide our services,
              improve customer experience and support your EV charging journey.

            </p>

          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">

            {collectedInfo.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * .1,
                    duration: .6,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all hover:border-lime-400"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-500/10">

                    <Icon className="h-7 w-7 text-lime-600" />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">

                    {item.title}

                  </h3>

                  <div className="mt-6 space-y-4">

                    {item.items.map((text) => (

                      <div
                        key={text}
                        className="flex items-center gap-3"
                      >

                        <div className="h-2.5 w-2.5 rounded-full bg-lime-500" />

                        <p className="text-slate-600">

                          {text}

                        </p>

                      </div>

                    ))}

                  </div>

                </motion.div>

              );

            })}

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* HOW WE USE YOUR INFORMATION */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-32"
        >

          <div className="overflow-hidden rounded-[36px] bg-slate-900 p-10 text-white shadow-[0_25px_70px_rgba(0,0,0,.18)]">

            <div className="absolute" />

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">

                <ClipboardList className="h-7 w-7 text-lime-400" />

              </div>

              <div>

                <h2 className="text-3xl font-black">

                  How We Use Your Information

                </h2>

                <p className="mt-1 text-gray-300">

                  We use your information responsibly.

                </p>

              </div>

            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {usage.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >

                  <ArrowRight className="mt-1 h-5 w-5 text-lime-400" />

                  <p className="leading-7 text-gray-300">

                    {item}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </motion.div>

                {/* ====================================================== */}
        {/* INFORMATION SHARING */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-32"
        >

          <div className="text-center">

            <div className="inline-flex rounded-full border border-lime-500/20 bg-lime-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-lime-600">

              Information Sharing

            </div>

            <h2 className="mt-5 text-5xl font-black text-slate-900">

              Responsible Information Sharing

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">

              Your information is shared only when necessary to deliver
              our services, complete transactions or comply with
              applicable legal obligations.

            </p>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Authorized Service Providers",
              "Technology Partners",
              "Payment Processors",
              "Government Authorities (where required)",
            ].map((item) => (

              <motion.div
                key={item}
                whileHover={{ y: -8 }}
                className="rounded-[30px] border border-slate-200 bg-white p-8 text-center shadow-lg transition-all hover:border-lime-400"
              >

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-500/10">

                  <Database className="h-7 w-7 text-lime-600" />

                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">

                  {item}

                </h3>

              </motion.div>

            ))}

          </div>

          <div className="mt-10 rounded-[28px] border border-lime-200 bg-lime-50 p-6">

            <p className="text-center text-lg font-medium text-slate-700">

              We <strong>do not sell</strong> your personal information to
              third parties for their independent marketing purposes.

            </p>

          </div>

        </motion.div>



        {/* ====================================================== */}
        {/* DATA SECURITY */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-32"
        >

          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white p-12 shadow-[0_20px_60px_rgba(0,0,0,.06)]">

            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-lime-500/10">

                <ShieldCheck className="h-8 w-8 text-lime-600" />

              </div>

              <div>

                <h2 className="text-4xl font-black text-slate-900">

                  Data Security

                </h2>

                <p className="mt-2 text-slate-500">

                  Keeping your information safe.

                </p>

              </div>

            </div>

            <p className="mt-8 text-lg leading-9 text-slate-600">

              We implement appropriate technical, administrative and
              organizational safeguards to protect your personal
              information from unauthorized access, misuse, disclosure,
              alteration or loss.

            </p>

          </div>

        </motion.div>






        {/* ====================================================== */}
        {/* YOUR RIGHTS */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-32"
        >

          <div className="rounded-[36px] border border-slate-200 bg-white p-12 shadow-lg">

            <h2 className="text-center text-4xl font-black text-slate-900">

              Your Rights

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-slate-600">

              Subject to applicable laws, you may exercise the following
              rights regarding your personal information.

            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">

              {[
                "Request access to your information",
                "Correct inaccurate information",
                "Request deletion of personal data",
                "Opt out of promotional communications",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5"
                >

                  <ShieldCheck className="h-5 w-5 text-lime-600" />

                  <span className="text-slate-700">

                    {item}

                  </span>

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
          transition={{ duration: .8 }}
          className="mt-32"
        >

          <div className="rounded-[32px] bg-lime-500 p-10 text-center">

            <h2 className="text-4xl font-black text-white">

              Policy Updates

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-lime-50">

              We may update this Privacy Policy periodically to reflect
              changes in our business practices, technology or legal
              requirements. Updated versions will always be published
              on this website.

            </p>

          </div>

        </motion.div>



        {/* ====================================================== */}
        {/* CONTACT */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-32"
        >

          <div className="overflow-hidden rounded-[40px] bg-slate-900 p-14 text-white">

            <div className="text-center">

              <h2 className="text-5xl font-black">

                Contact Us

              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">

                If you have questions about this Privacy Policy or wish
                to exercise your privacy rights, please contact us.

              </p>

            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">

              <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-xl">

                <Building2 className="h-8 w-8 text-lime-400" />

                <h3 className="mt-5 text-xl font-bold">

                  Company

                </h3>

                <p className="mt-3 leading-7 text-gray-300">

                  <strong>Volterra Energy</strong>

                  <br />

                  A Brand of

                  <br />

                  Vayutattva Ventures LLP

                </p>

              </div>

              <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-xl">

                <Mail className="h-8 w-8 text-lime-400" />

                <h3 className="mt-5 text-xl font-bold">

                  Email

                </h3>

                <p className="mt-3 text-gray-300">

                  info@volterraenergy.com

                </p>

              </div>

              <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-xl">

                <Phone className="h-8 w-8 text-lime-400" />

                <h3 className="mt-5 text-xl font-bold">

                  Phone

                </h3>

                <p className="mt-3 text-gray-300">

                  +91 80954 34443

                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}