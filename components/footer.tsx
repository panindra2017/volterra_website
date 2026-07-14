'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Award,
  Headphones,
  Zap,
} from 'lucide-react';
import { useState } from 'react';
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { LiaLinkedin } from 'react-icons/lia';
import Link from "next/link";

export function Footer() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

 const footerSections = [
  {
    title: "Quick Links",
    links: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "About Us",
        href: "/about",
      },
      {
        name: "Products",
        href: "/products",
      },
      {
        name: "Solutions",
        href: "/solutions",
      },
      {
        name: "Industries",
        href: "/industries",
      },
      {
        name: "CMS Platform",
        href: "/cms-platform",
      },
      {
        name: "Blogs",
        href: "/blogs",
      },
      {
        name: "Contact Us",
        href: "/contact",
      },
    ],
  },

  {
    title: "Products",
    links: [
      {
        name: "Home Chargers",
        href: "/products/home-chargers",
      },
      {
        name: "Commercial Chargers",
        href: "/products/commercial-chargers",
      },
      {
        name: "DC Fast Chargers",
        href: "/products/dc-fast-chargers",
      },
      {
        name: "Accessories",
        href: "/products/accessories",
      },
    ],
  },

  {
    title: "Solutions",
    links: [
      {
        name: "Residential",
        href: "/solutions/residential",
      },
      {
        name: "Commercial",
        href: "/solutions/commercial",
      },
      {
        name: "Fleet",
        href: "/solutions/fleet",
      },
      {
        name: "Public Charging",
        href: "/solutions/public-charging",
      },
    ],
  },
];

  const faqs = [
    {
      question: 'How long does installation take?',
      answer:
        'Most home installations are completed within 1–2 days while commercial deployments vary depending on the project.',
    },
    {
      question: 'What warranty do you provide?',
      answer:
        'Volterra chargers include comprehensive hardware warranty with optional extended coverage.',
    },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      href: '#',
    },
    {
      icon: BsInstagram,
      href: '#',
    },
    {
      icon: LiaLinkedin,
      href: '#',
    },
    {
      icon: BsTwitter,
      href: '#',
    },
    {
      icon: BsYoutube,
      href: '#',
    },
  ];

  const stats = [
    {
      value: '15K+',
      label: 'Charging Sessions',
    },
    {
      value: '500+',
      label: 'Business Clients',
    },
    {
      value: '120+',
      label: 'Cities Served',
    },
    {
      value: '99.9%',
      label: 'Network Uptime',
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#040404] text-white">

      {/* Background Glow */}

      <div className="absolute -top-56 -left-40 h-105 w-105 rounded-full bg-lime-500/20 blur-[160px]" />

      <div className="absolute bottom-0 right-0 h-105 w-105 rounded-full bg-green-600/20 blur-[170px]" />

      {/* Grid */}

      <div
        className="
        absolute inset-0 opacity-[0.04]
        bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
        bg-size-[70px_70px]
      "
      />

      {/* ===================================== */}
      {/* MAIN FOOTER START */}
      {/* ===================================== */}

      <div className="relative">

        <div className="max-w-375
mx-auto
lg:px-14 px-6 py-24">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Brand */}

            <div className="lg:col-span-4">

              {/* Part 2 starts here */}
                          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="/"
                className="inline-flex items-center mb-6"
              >
                <img
                  src="/images/website_logo.png"
                  alt="Volterra Energy"
                  className="h-16 w-auto object-contain"
                />
              </a>

              <p className="text-gray-400 leading-8 max-w-md">
                Volterra delivers intelligent EV charging solutions for
                homes, commercial buildings, fleets and public
                infrastructure, helping accelerate the transition toward
                sustainable mobility.
              </p>

              <div className="mt-8 flex items-center gap-3">

                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-[#040404] bg-linear-to-br from-lime-400 to-green-500"
                    />
                  ))}
                </div>

                <div>
                  <p className="font-semibold">
                    Trusted by 500+ Businesses
                  </p>

                  <p className="text-sm text-gray-500">
                    Across India
                  </p>
                </div>

              </div>

              <div className="mt-10 flex gap-4">

                {socialLinks.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{
                        scale: 1.1,
                        y: -4,
                      }}
                      className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      text-gray-300
                      transition-all
                      duration-300
                      hover:border-lime-400
                      hover:bg-lime-400
                      hover:text-black
                      hover:shadow-[0_0_30px_rgba(163,230,53,.35)]
                      "
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}

              </div>
            </motion.div>

            {/* Navigation Columns */}

            <div className="lg:col-span-5">

              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">

                {footerSections.map((section, index) => (

                  <motion.div
                    key={section.title}
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
                      delay: index * 0.1,
                    }}
                  >

                    <h3 className="mb-6 text-lg font-semibold">

                      {section.title}

                    </h3>

                    <ul className="space-y-4">

                      {section.links.map((link) => (

                        <li key={link.name}>

                          <Link
    href={link.href}
    className="
        group
        inline-flex
        items-center
        text-gray-400
        transition-all
        duration-300
        hover:text-lime-400
    "
>
    <span>{link.name}</span>

    <ArrowRight
        size={14}
        className="
            ml-2
            opacity-0
            -translate-x-2
            transition-all
            duration-300
            group-hover:opacity-100
            group-hover:translate-x-0
        "
    />
</Link>

                        </li>

                      ))}

                    </ul>

                  </motion.div>

                ))}

              </div>
              </div>

            </div>

          </div>

          {/* Newsletter section starts in Part 3 */}
                    {/* ===================================== */}
          {/* NEWSLETTER */}
          {/* ===================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-lime-500/20 bg-linear-to-r from-white/5 via-white/3 to-white/5 backdrop-blur-xl">

              <div className="absolute inset-0 bg-linear-to-r from-lime-500/10 via-transparent to-green-500/10" />

              <div className="relative grid items-center gap-10 px-8 py-10 lg:grid-cols-2 lg:px-14">

                <div>

                  <span className="inline-flex rounded-full border border-lime-400/30 bg-lime-500/10 px-4 py-2 text-sm text-lime-300">
                    Newsletter
                  </span>

                  <h3 className="mt-5 text-3xl font-bold">
                    Stay Ahead with EV Innovation
                  </h3>

                  <p className="mt-4 max-w-xl leading-8 text-gray-400">
                    Receive product launches, charging technology updates,
                    industry insights and exclusive Volterra news directly
                    in your inbox.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-400">

                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-lime-400" />
                      No Spam
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-lime-400" />
                      Monthly Updates
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-lime-400" />
                      Unsubscribe Anytime
                    </div>

                  </div>

                </div>

                <div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-3">

                    <div className="flex flex-col gap-3 sm:flex-row">

                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="h-14 flex-1 rounded-xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-gray-500 focus:border-lime-400 focus:outline-none"
                      />

                      <button
                        className="
                        h-14
                        rounded-xl
                        bg-lime-400
                        px-8
                        font-semibold
                        text-black
                        transition-all
                        duration-300
                        hover:scale-[1.03]
                        hover:shadow-[0_0_30px_rgba(163,230,53,.45)]
                        "
                      >
                        Subscribe
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Part 3B starts here */}
                    {/* ===================================== */}
          {/* BOTTOM BAR */}
          {/* ===================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            {/* Animated Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px origin-left bg-linear-to-r from-transparent via-lime-400/50 to-transparent"
            />

            <div className="flex flex-col items-center justify-between gap-6 py-8 lg:flex-row">

              <div>
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()}{" "}
                  <span className="font-semibold text-white">
                    Volterra Energy
                  </span>
                  . All rights reserved.
                </p>

                <p className="mt-2 text-xs text-gray-500">
                  Powering sustainable mobility through innovative EV charging
                  solutions.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">

                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-lime-400"
                >
                  Privacy Policy
                </a>

                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-lime-400"
                >
                  Terms & Conditions
                </a>

                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-lime-400"
                >
                  Cookie Policy
                </a>

                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-lime-400"
                >
                  Sitemap
                </a>

              </div>

            </div>

            <div className="border-t border-white/10 py-6">

              <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

                <p>
                  Designed & Developed with ❤️ by Vinsmart
                </p>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
                  <span>Building the Future of EV Charging</span>
                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </footer>
  );
}