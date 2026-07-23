"use client";

import { motion } from "framer-motion";
import {
  Scale,
  BatteryCharging,
  Globe,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Copyright,
  Wallet,
  Building2,
  Mail,
  Phone,
} from "lucide-react";

const services = [
  "EV Charging Equipment",
  "Installation & Commissioning",
  "Operations & Maintenance",
  "Smart Charging Solutions",
  "Charging Infrastructure",
  "Technical Support",
];

const chargingFactors = [
  "Electricity Supply",
  "Charger Status",
  "Network Connectivity",
  "Vehicle Compatibility",
  "Battery Condition",
  "Technical Factors",
];

export default function TermsConditionsPage() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-15">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-lime-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[160px]" />

      {/* Grid */}

      <div className="absolute inset-0 opacity-[0.04]
      [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
      [background-size:70px_70px]" />

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

            Terms & Conditions

          </div>

          <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 lg:text-6xl">

            Terms

            <span className="text-lime-600">

              {" "} & Conditions

            </span>

          </h1>

          <p className="mx-auto mt-3 max-w-4xl text-lg leading-8 text-slate-600">

            Please read these Terms & Conditions carefully before using
            the Volterra Energy website, products or EV charging
            services.

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
        {/* OVERVIEW */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-10"
        >

          <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,.06)]">

            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-lime-500/10">

                <Scale className="h-8 w-8 text-lime-600" />

              </div>

              <div>

                <h2 className="text-3xl font-black text-slate-900">

                  Terms Overview

                </h2>

                <p className="mt-2 text-slate-500">

                  Understanding your rights and responsibilities.

                </p>

              </div>

            </div>

            <p className="mt-8 text-lg leading-9 text-slate-600">

              By accessing the Volterra Energy website or using our
              products and services, you agree to these Terms &
              Conditions.

            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">

              These Terms govern your use of the Volterra Energy
              website, EV charging products, charging infrastructure,
              software platforms and related services provided by
              <strong> Vayutattva Ventures LLP.</strong>

            </p>

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* SERVICES */}
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

              Services

            </div>

            <h2 className="mt-5 text-5xl font-black text-slate-900">

              Our Services

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">

              Volterra Energy provides intelligent EV charging
              infrastructure solutions across residential, commercial,
              fleet and public charging applications.

            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((item, index) => (

              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-lg transition-all hover:border-lime-400"
              >

                <BatteryCharging className="h-8 w-8 text-lime-600" />

                <h3 className="mt-6 text-xl font-bold text-slate-900">

                  {item}

                </h3>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* WEBSITE INFORMATION */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-32"
        >

          <div className="rounded-[36px] bg-slate-900 p-12 text-white shadow-[0_25px_70px_rgba(0,0,0,.15)]">

            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10">

                <Globe className="h-8 w-8 text-lime-400" />

              </div>

              <div>

                <h2 className="text-4xl font-black">

                  Website Information

                </h2>

                <p className="mt-2 text-gray-300">

                  Accuracy and availability.

                </p>

              </div>

            </div>

            <p className="mt-8 text-lg leading-9 text-gray-300">

              We make reasonable efforts to provide accurate information
              on our website. However, product specifications, pricing,
              service availability and other information may change
              without prior notice.

            </p>

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* EV CHARGING */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-32"
        >

          <div className="text-center">

            <div className="inline-flex rounded-full border border-lime-500/20 bg-lime-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-lime-600">

              EV Charging

            </div>

            <h2 className="mt-5 text-5xl font-black text-slate-900">

              Charging Performance

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">

              Charging speed and availability depend on several
              operational and technical factors.

            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {chargingFactors.map((item, index) => (

              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-lg transition-all hover:border-lime-400"
              >

                <Zap className="h-8 w-8 text-lime-600" />

                <h3 className="mt-6 text-xl font-bold text-slate-900">

                  {item}

                </h3>

                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">

                  <CheckCircle2 className="h-4 w-4 text-lime-500" />

                  Performance may vary.

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

                {/* ====================================================== */}
        {/* PRICING & PAYMENTS */}
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
              Pricing & Payments
            </div>

            <h2 className="mt-5 text-5xl font-black text-slate-900">
              Pricing Information
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Pricing may vary depending on the selected product, service,
              location, electricity tariff, taxes and commercial agreements.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Product",
              "Service",
              "Location",
              "Electricity Tariff",
              "Taxes",
              "Commercial Agreement",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-lg transition-all hover:border-lime-400"
              >
                <Wallet className="h-8 w-8 text-lime-600" />

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 rounded-[28px] bg-slate-900 p-8 text-white">
            <p className="leading-8 text-gray-300">
              Online payments, where available, may be securely processed
              through authorized third-party payment providers.
            </p>
          </div>
        </motion.div>

        {/* ====================================================== */}
        {/* USER RESPONSIBILITY */}
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
                <ShieldCheck className="h-8 w-8 text-lime-400" />
              </div>

              <div>
                <h2 className="text-4xl font-black">
                  User Responsibility
                </h2>

                <p className="mt-2 text-gray-300">
                  Safe and responsible usage.
                </p>
              </div>
            </div>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              Users must use EV charging equipment responsibly and follow
              all applicable safety instructions while using our charging
              infrastructure and related services.
            </p>

            <div className="mt-10 rounded-3xl border border-red-500/20 bg-red-500/10 p-6">
              <h3 className="text-xl font-bold text-red-300">
                Prohibited Activities
              </h3>

              <p className="mt-4 leading-8 text-red-100">
                Any misuse, unauthorized modification, tampering or
                intentional damage to charging infrastructure is strictly
                prohibited.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ====================================================== */}
        {/* INTELLECTUAL PROPERTY */}
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
                <Copyright className="h-8 w-8 text-lime-600" />
              </div>

              <div>
                <h2 className="text-4xl font-black text-slate-900">
                  Intellectual Property
                </h2>

                <p className="mt-2 text-slate-500">
                  Ownership of our brand and content.
                </p>
              </div>
            </div>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              The Volterra Energy name, logo, branding, website content,
              software, graphics and related materials are owned by or
              licensed to Vayutattva Ventures LLP.
            </p>

            <div className="mt-8 rounded-3xl bg-lime-50 p-6">
              <p className="font-medium leading-8 text-slate-700">
                No content may be copied, reproduced, modified,
                distributed or used without prior written authorization.
              </p>
            </div>
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
          <div className="text-center">
            <div className="inline-flex rounded-full border border-lime-500/20 bg-lime-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-lime-600">
              Third-Party Services
            </div>

            <h2 className="mt-5 text-5xl font-black text-slate-900">
              Trusted Partners
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Certain services may involve trusted third-party partners
              who provide specialized services to support our operations.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900">
                Service Partners
              </h3>

              <div className="mt-8 space-y-4">
                {[
                  "OEM Partners",
                  "Technology Providers",
                  "Charging Platforms",
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

            <div className="rounded-[32px] bg-slate-900 p-10 text-white">
              <h3 className="text-2xl font-bold">
                External Providers
              </h3>

              <div className="mt-8 space-y-4">
                {[
                  "Payment Processors",
                  "Site Hosts",
                  "Cloud Services",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="h-3 w-3 rounded-full bg-lime-400" />

                    <span className="text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-8 shadow-lg">
            <p className="leading-8 text-slate-600">
              Third-party providers operate under their own terms,
              conditions and privacy policies where applicable.
            </p>
          </div>
        </motion.div>

                {/* ====================================================== */}
        {/* LIABILITY */}
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

                <ShieldCheck className="h-8 w-8 text-lime-400" />

              </div>

              <div>

                <h2 className="text-4xl font-black">

                  Liability

                </h2>

                <p className="mt-2 text-gray-300">

                  Understanding our responsibilities.

                </p>

              </div>

            </div>

            <p className="mt-8 text-lg leading-9 text-gray-300">

              To the extent permitted by applicable law, Volterra Energy
              shall not be responsible for service interruptions,
              delays or losses caused by circumstances beyond our
              reasonable control.

            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {[
                "Power Outages",
                "Network Failures",
                "Third-Party Systems",
                "Vehicle Related Issues",
                "Technical Faults",
                "Force Majeure Events",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >

                  <div className="flex items-center gap-3">

                    <CheckCircle2 className="h-5 w-5 text-lime-400" />

                    <span className="font-medium">

                      {item}

                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* COMMERCIAL PARTNERSHIPS */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-32"
        >

          <div className="text-center">

            <div className="inline-flex rounded-full border border-lime-500/20 bg-lime-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-lime-600">

              Commercial Partnerships

            </div>

            <h2 className="mt-5 text-5xl font-black text-slate-900">

              Business Engagement Models

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">

              Commercial collaborations are governed through separate
              written agreements executed between the relevant parties.

            </p>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Site Hosting",
              "Revenue Sharing",
              "Investment",
              "Dealership",
            ].map((item) => (

              <motion.div
                key={item}
                whileHover={{
                  y: -8,
                }}
                className="rounded-[30px] border border-slate-200 bg-white p-8 text-center shadow-lg transition-all hover:border-lime-400"
              >

                <Building2 className="mx-auto h-10 w-10 text-lime-600" />

                <h3 className="mt-6 text-xl font-bold text-slate-900">

                  {item}

                </h3>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* GOVERNING LAW */}
        {/* ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
          className="mt-32"
        >

          <div className="rounded-[36px] border border-slate-200 bg-white p-12 shadow-[0_20px_60px_rgba(0,0,0,.06)]">

            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-lime-500/10">

                <Scale className="h-8 w-8 text-lime-600" />

              </div>

              <div>

                <h2 className="text-4xl font-black text-slate-900">

                  Governing Law

                </h2>

                <p className="mt-2 text-slate-500">

                  Legal jurisdiction.

                </p>

              </div>

            </div>

            <p className="mt-8 text-lg leading-9 text-slate-600">

              These Terms & Conditions shall be governed by the laws of
              India.

            </p>

            <p className="mt-5 text-lg leading-9 text-slate-600">

              Subject to applicable law, all disputes shall be subject to
              the jurisdiction of the competent courts located in
              <strong> Bengaluru, Karnataka.</strong>

            </p>

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* CONTACT */}
        {/* ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
          className="mt-32"
        >

          <div className="overflow-hidden rounded-[40px] bg-slate-900 p-14 text-white">

            <div className="text-center">

              <h2 className="text-5xl font-black">

                Contact Us

              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">

                For any questions regarding these Terms & Conditions,
                please contact our team.

              </p>

            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">

              <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-xl">

                <Building2 className="h-8 w-8 text-lime-400" />

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

                <Mail className="h-8 w-8 text-lime-400" />

                <h3 className="mt-5 text-xl font-bold">

                  Email

                </h3>

                <p className="mt-4 text-gray-300">

                  info@volterraenergy.com

                </p>

              </div>

              <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-xl">

                <Phone className="h-8 w-8 text-lime-400" />

                <h3 className="mt-5 text-xl font-bold">

                  Phone

                </h3>

                <p className="mt-4 text-gray-300">

                  +91 80954 34443

                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* ====================================================== */}
        {/* ACKNOWLEDGEMENT */}
        {/* ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
          }}
          className="mt-16 text-center"
        >

          <p className="mx-auto max-w-4xl text-base leading-8 text-slate-500">

            By continuing to access or use the Volterra Energy website,
            products or services, you acknowledge that you have read,
            understood and agreed to these Terms & Conditions.

          </p>

        </motion.div>

      </div>

    </section>
  );
}

