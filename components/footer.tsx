// 'use client';

// import { motion } from 'framer-motion';
// import {
//   Mail,
//   MapPin,
//   Phone,
//   ChevronDown,
// } from 'lucide-react';
// import { useState } from 'react';

// export function Footer() {
//   const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

//   const footerSections = [
//     {
//       title: 'Product',
//       links: [
//         { name: 'Home Chargers', href: '#' },
//         { name: 'Commercial', href: '#' },
//         { name: 'Fleet Solutions', href: '#' },
//         { name: 'Pricing', href: '#' },
//       ],
//     },
//     {
//       title: 'Company',
//       links: [
//         { name: 'About Us', href: '#' },
//         { name: 'Blog', href: '#' },
//         { name: 'Careers', href: '#' },
//         { name: 'Press', href: '#' },
//       ],
//     },
//     {
//       title: 'Resources',
//       links: [
//         { name: 'Documentation', href: '#' },
//         { name: 'API Reference', href: '#' },
//         { name: 'Community', href: '#' },
//         { name: 'Support', href: '#' },
//       ],
//     },
//     {
//       title: 'Legal',
//       links: [
//         { name: 'Privacy Policy', href: '#' },
//         { name: 'Terms of Service', href: '#' },
//         { name: 'Cookie Policy', href: '#' },
//         { name: 'Compliance', href: '#' },
//       ],
//     },
//   ];

//   const faqs = [
//     {
//       question: 'How long does it take to install a charger?',
//       answer:
//         'Most home chargers are installed within 1-2 days. Commercial installations typically take 3-7 days depending on site complexity.',
//     },
//     {
//       question: 'What is the warranty on Volterra chargers?',
//       answer:
//         'All Volterra chargers come with a 10-year warranty on hardware and 2 years on electronics. Extended warranty options are available.',
//     },
//     {
//       question: 'Can I monitor charging remotely?',
//       answer:
//         'Yes, our mobile app provides real-time monitoring, scheduling, and management of all connected chargers from anywhere.',
//     },
//     {
//       question: 'Do you offer financing options?',
//       answer:
//         'We offer flexible financing, lease, and subscription options to suit businesses of all sizes.',
//     },
//   ];

//   const socialLinks = [
//     { name: 'f', href: '#', label: 'Facebook' },
//     { name: '𝕏', href: '#', label: 'Twitter' },
//     { name: '📷', href: '#', label: 'Instagram' },
//     { name: 'in', href: '#', label: 'LinkedIn' },
//   ];

//   return (
//     <footer className="bg-black text-white">

//       <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-lime-500/10 blur-[140px]" />

// <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-500/10 blur-[140px]" />

//     <div
// className="
// absolute
// inset-0
// opacity-[0.04]
// [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
// [background-size:70px_70px]
// "
// />

//       {/* Newsletter Section */}
//       <div className="border-b border-green-500/20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <motion.div
//             className="grid md:grid-cols-2 gap-8 items-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <div>
//               <h3 className="text-2xl md:text-3xl font-bold mb-2">
//                 Stay Updated
//               </h3>
//               <p className="text-gray-300">
//                 Get the latest news on EV charging and Volterra innovations
//               </p>
//             </div>
//             <div className="flex gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors"
//               />
//               <button className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-secondary transition-colors">
//                 Subscribe
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid md:grid-cols-5 gap-1 mb-12">
//           {/* Brand */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex items-center gap-2">
//                <a
//   href="/"
//   className="flex items-center justify-center h-full shrink-0 mb-3"
// >
//   <img
//     src="/images/website_logo.png"
//     alt="Volterra Energy"
//     className="h-14 w-auto object-contain"
//   />
// </a>
//             </div>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Powering the future of sustainable transportation with innovative
//               EV charging solutions.
//             </p>
//           </motion.div>

//           {/* Footer Links */}
//           {footerSections.map((section, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: idx * 0.05 }}
//               viewport={{ once: true }}
//             >
//               <h4 className="font-semibold mb-4">{section.title}</h4>
//               <ul className="space-y-2">
//                 {section.links.map((link) => (
//                   <li key={link.name}>
//                     <a
//                       href={link.href}
//                       className="text-gray-400 hover:text-primary transition-colors"
//                     >
//                       {link.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom Section */}
//         <motion.div
//           className="border-t border-white/10 pt-8 space-y-6"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.4, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="text-gray-400 text-sm">
//               © {new Date().getFullYear()} Volterra Energy. All rights reserved.
//             </div>

//             {/* Social Links */}
//             <div className="flex gap-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors text-gray-300 hover:text-black font-semibold"
//                   aria-label={social.label}
//                 >
//                   {social.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }




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

            {/* Contact Card */}

            <motion.div
              className="lg:col-span-3"
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
            >

              <div
                className="
                rounded-3xl
                border
                border-lime-500/20
                bg-linear-to-b
                from-white/10
                to-white/5
                backdrop-blur-xl
                p-8
                "
              >

                <h3 className="text-2xl font-bold">

                  Contact Us

                </h3>

                <p className="mt-2 text-gray-400">

                  We'd love to hear from you.

                </p>

                <div className="mt-8 space-y-6">

                  <div className="flex gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">

                      <Phone size={20} />

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">

                        Call Us

                      </p>

                      <p className="mt-1 font-medium">

                        +91 80954 34443

                      </p>

                    </div>

                  </div>

                  <div className="flex gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">

                      <Mail size={20} />

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">

                        Email

                      </p>

                      <p className="mt-1 font-medium break-all">

                        info@volterraenergy.com

                      </p>

                    </div>

                  </div>

                  <div className="flex gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">

                      <MapPin size={20} />

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">

                        Office

                      </p>

                      <p className="mt-1 leading-7 text-gray-300">

                        Bengaluru,
                        Karnataka,
                        India

                      </p>

                    </div>

                  </div>

                </div>

                <div className="mt-8 rounded-2xl border border-lime-500/20 bg-lime-500/10 p-5">

                  <div className="flex items-center gap-3">

                    <div className="h-3 w-3 rounded-full bg-lime-400 animate-pulse" />

                    <p className="font-medium">

                      Support Available

                    </p>

                  </div>

                  <p className="mt-2 text-sm text-gray-400">

                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM

                  </p>

                </div>

              </div>

            </motion.div>

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