// 'use client';

// import { AnimatePresence, motion } from 'framer-motion';
// import {
//   Mail,
//   Phone,
//   MapPin,
//   ChevronDown,
//   ArrowRight,
//   ShieldCheck,
//   Award,
//   Headphones,
//   Zap,
//   MoreVertical,
// } from 'lucide-react';
// import { useState } from 'react';
// import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
// import { FaFacebook } from 'react-icons/fa';
// import { LiaLinkedin } from 'react-icons/lia';
// import Link from "next/link";

// export function Footer() {
//   const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

//  const footerSections = [
//   {
//     title: "Quick Links",
//     links: [
//       {
//         name: "Home",
//         href: "/",
//       },
//       {
//         name: "About Us",
//         href: "/about",
//       },
//       {
//         name: "Products",
//         href: "/products",
//       },
//       {
//         name: "Solutions",
//         href: "/solutions",
//       },
//       {
//         name: "Industries",
//         href: "/industries",
//       },
//       {
//         name: "CMS Platform",
//         href: "/cms-platform",
//       },
//       {
//         name: "Contact Us",
//         href: "/contact",
//       },
//     ],
//   },

//   {
//     title: "Products",
//     links: [
//       {
//         name: "Home Chargers",
//         href: "/products/home-chargers",
//       },
//       {
//         name: "Commercial Chargers",
//         href: "/products/commercial-chargers",
//       },
//       {
//         name: "DC Fast Chargers",
//         href: "/products/dc-fast-chargers",
//       },
//       {
//         name: "Accessories",
//         href: "/products/accessories",
//       },
//     ],
//   },

//   {
//     title: "Solutions",
//     links: [
//       {
//         name: "Residential",
//         href: "/solutions/residential",
//       },
//       {
//         name: "Commercial",
//         href: "/solutions/commercial",
//       },
//       {
//         name: "Fleet",
//         href: "/solutions/fleet",
//       },
//       {
//         name: "Public Charging",
//         href: "/solutions/public-charging",
//       },
//     ],
//   },
// ];

//   const faqs = [
//     {
//       question: 'How long does installation take?',
//       answer:
//         'Most home installations are completed within 1–2 days while commercial deployments vary depending on the project.',
//     },
//     {
//       question: 'What warranty do you provide?',
//       answer:
//         'Volterra chargers include comprehensive hardware warranty with optional extended coverage.',
//     },
//   ];

//   const socialLinks = [
//     {
//       icon: FaFacebook,
//       href: '#',
//     },
//     {
//       icon: BsInstagram,
//       href: '#',
//     },
//     {
//       icon: LiaLinkedin,
//       href: '#',
//     },
//     {
//       icon: BsTwitter,
//       href: '#',
//     },
//     {
//       icon: BsYoutube,
//       href: '#',
//     },
//   ];
  
//   const certifications = [
//   "/images/certifications/cert-1.png",
//   "/images/certifications/cert-2.png",
//   "/images/certifications/cert-3.png",
//   "/images/certifications/cert-4.png",
// ];
 

//   return (
//     <footer className="relative overflow-hidden bg-[#040404] text-white">

//       {/* Background Glow */}

//       <div className="absolute -top-56 -left-40 h-105 w-105 rounded-full bg-lime-500/20 blur-[160px]" />

//       <div className="absolute bottom-0 right-0 h-105 w-105 rounded-full bg-green-600/20 blur-[170px]" />

//       {/* Grid */}

//       <div
//         className="
//         absolute inset-0 opacity-[0.04]
//         bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
//         bg-size-[50px_50px]
//       "
//       />

//       {/* ===================================== */}
//       {/* MAIN FOOTER START */}
//       {/* ===================================== */}

//       <div className="relative">

//         <div className="max-w-375
// mx-auto
// lg:px-14 px-6 py-20">


//  {/* ================================= */}
//   {/* BRAND */}
//   {/* ================================= */}
//  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12">

//   {/* Brand */}
//   <div>
//     <Link href="/" className="inline-flex items-center">
//       <img
//         src="/images/website_logo.png"
//         alt="Volterra Energy"
//         className="h-16 w-auto object-contain"
//       />
//     </Link>

//   <p className="mt-5 max-w-lg text-gray-400 leading-8">
//     Volterra Energy delivers intelligent EV charging
//     infrastructure for homes, businesses, fleets and
//     public charging networks, accelerating India's
//     transition toward clean and sustainable mobility.
//   </p>

//   </div>

//   {/* Quick Links */}
//   <div className="ml-8">
//    <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
//       {footerSections[0].title}
//     </h3>

//     <ul className="space-y-3">
//       {footerSections[0].links.map((link) => (
//         <li key={link.name}>
//           <Link
//             href={link.href}
//             className="group inline-flex items-center text-gray-400 hover:text-lime-400 transition-all"
//           >
//             {link.name}

//             <ArrowRight
//               size={14}
//               className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
//             />
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>

//   {/* Products */}
//   <div>
//    <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
//       {footerSections[1].title}
//     </h3>

//     <ul className="space-y-3">
//       {footerSections[1].links.map((link) => (
//         <li key={link.name}>
//           <Link
//             href={link.href}
//             className="group inline-flex items-center text-gray-400 hover:text-lime-400 transition-all"
//           >
//             {link.name}

//             <ArrowRight
//               size={14}
//               className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
//             />
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>

//   {/* Solutions */}
//   <div>
//     <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
//       {footerSections[2].title}
//     </h3>

//     <ul className="space-y-3">
//       {footerSections[2].links.map((link) => (
//         <li key={link.name}>
//           <Link
//             href={link.href}
//             className="group inline-flex items-center text-gray-400 hover:text-lime-400 transition-all"
//           >
//             {link.name}

//             <ArrowRight
//               size={14}
//               className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
//             />
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>

// </div>

// <div className="mt-16 border-t border-white/10 pt-12">
//   <div className="grid lg:grid-cols-[1fr_2fr] gap-4">

//     {/* Social Media */}
//     <div>
//       <h3 className="mb-2 text-lg font-semibold text-white">
//         Follow Us
//       </h3>

//       <p className="mb-4 text-sm text-gray-400">
//         Stay connected with Volterra Energy.
//       </p>

//       <div className="flex flex-wrap gap-4">
//         {socialLinks.map((social, index) => {
//           const Icon = social.icon;

//           return (
//             <motion.a
//               key={index}
//               href={social.href}
//               whileHover={{ y: -4, scale: 1.05 }}
//               className="
//                 flex h-10 w-10 items-center justify-center
//                 rounded-xl
//                 border border-white/10
//                 bg-white/5
//                 text-gray-300
//                 transition-all duration-300
//                 hover:border-lime-400
//                 hover:bg-lime-400
//                 hover:text-black
//               "
//             >
//               <Icon size={20} />
//             </motion.a>
//           );
//         })}
//       </div>
//     </div>

//     <div className="mt-14 border-t border-white/10 pt-10">
//   <div className="grid md:grid-cols-3 gap-8">

//     <div className="flex items-start gap-4">
//       <MapPin className="text-lime-400 mt-1" />
//       <div>
//         <p className="text-white font-medium">Address</p>
//         <p className="text-gray-400 text-sm">
//           Bangalore, Karnataka, India
//         </p>
//       </div>
//     </div>

//     <div className="flex items-start gap-4">
//       <Phone className="text-lime-400 mt-1" />
//       <div>
//         <p className="text-white font-medium">Call Us</p>
//         <p className="text-gray-400 text-sm">
//           +91 XXXXX XXXXX
//         </p>
//       </div>
//     </div>

//     <div className="flex items-start gap-4">
//       <Mail className="text-lime-400 mt-1" />
//       <div>
//         <p className="text-white font-medium">Email</p>
//         <p className="text-gray-400 text-sm">
//           info@volterraenergy.com
//         </p>
//       </div>
//     </div>

//   </div>
// </div>

//     {/* Certifications */}
//     <div>
//       <h3 className="mb-5 text-lg font-semibold text-white">
//         Certifications & Standards
//       </h3>

//     <div className="flex flex-wrap gap-4">
//   {certifications.map((image, index) => (
//     <div
//       key={index}
//       className="
//         flex
//         h-20
//         w-32
//         items-center
//         justify-center
//         rounded-xl
//         border
//         border-white/10
//         bg-white/5
//         p-4
//       "
//     >
//       <img
//         src={image}
//         alt={`Certification ${index + 1}`}
//         className="max-h-10 w-auto object-contain"
//       />
//     </div>
//   ))}
// </div>

//     </div>

//   </div>
// </div>

        
//           {/* ===================================== */}
//           {/* BOTTOM BAR */}
//           {/* ===================================== */}

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="mt-20"
//           >
//             {/* Animated Divider */}
//             <motion.div
//               initial={{ scaleX: 0 }}
//               whileInView={{ scaleX: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="h-px origin-left bg-linear-to-r from-transparent via-lime-400/50 to-transparent"
//             />

//             <div className="flex flex-col items-center justify-between gap-6 py-8 lg:flex-row">

//               <div>
//                 <p className="text-sm text-gray-400">
//                   © {new Date().getFullYear()}{" "}
//                   <span className="font-semibold text-white">
//                     Volterra Energy
//                   </span>
//                   . All rights reserved.
//                 </p>

//                 <p className="mt-2 text-xs text-gray-500">
//                   Powering sustainable mobility through innovative EV charging
//                   solutions.
//                 </p>
//               </div>

//               <div className="flex flex-wrap items-center justify-center gap-6 text-sm">

//                 <a
//                   href="#"
//                   className="text-gray-400 transition-colors hover:text-lime-400"
//                 >
//                   Privacy Policy
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-400 transition-colors hover:text-lime-400"
//                 >
//                   Terms & Conditions
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-400 transition-colors hover:text-lime-400"
//                 >
//                   Cookie Policy
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-400 transition-colors hover:text-lime-400"
//                 >
//                   Sitemap
//                 </a>

//               </div>

//             </div>

//             <div className="border-t border-white/10 py-6">

//               <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

//                 <p>
//                   Designed & Developed with ❤️ by Vinsmart
//                 </p>

//                 <div className="flex items-center gap-2">
//                   <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
//                   <span>Building the Future of EV Charging</span>
//                 </div>

//               </div>

//             </div>

//           </motion.div>

//         </div>
//       </div>
//     </footer>
//   );
// }




'use client';

import { AnimatePresence, motion } from 'framer-motion';
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
  MoreVertical,
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
        href: "/cms_platform",
      },
      {
        name: "Contact Us",
        href: "/contact",
      },
    ],
  },

];

const products = [
  "Residential Chargers",
  "Corporate Chargers",
  "Fast DC Chargers",
  "Ultra DC Chargers",
];

const solutions = [
  "AI-Powered Intelligence",
  "IoT-Enabled Infrastructure",
  "Smart Charge Management System",
  "Predictive & Proactive Maintenance",
  "Seamless Digital Experience",
  "Scalable Partnership Models",
]

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
  
  const certifications = [
  "/images/certifications/cert-1.png",
  "/images/certifications/cert-2.png",
  "/images/certifications/cert-3.png",
  "/images/certifications/cert-4.png",
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
        bg-size-[50px_50px]
      "
      />

      {/* ===================================== */}
      {/* MAIN FOOTER START */}
      {/* ===================================== */}

      <div className="relative">

        <div className="max-w-375
mx-auto
lg:px-14 px-6 py-20">


{/* ===================== MAIN FOOTER ===================== */}

<div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.1fr_2fr] -mt-6">

  {/* ================= LEFT ================= */}

  <div>

    <Link href="/" className="inline-flex">
      <img
        src="/images/website_logo.png"
        alt="Volterra Energy"
        className="h-16 w-auto"
      />
    </Link>

    <p className="mt-5 max-w-md text-gray-400 leading-7">
     VOLTERRA Energy is building the intelligent infrastructure behind India's electric mobility 
     revolution—connecting technology, energy, 
     infrastructure, investors, businesses, and EV users through one scalable charging ecosystem.
    </p>

    {/* Follow Us */}

    <div className="mt-8">

      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-lime-400">
        Follow Us
      </h3>

      <div className="flex gap-3">

        {socialLinks.map((social, index) => {

          const Icon = social.icon;

          return (

            <motion.a
              key={index}
              href={social.href}
              whileHover={{ y: -3 }}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
            >

              <Icon size={18} />

            </motion.a>

          );

        })}

      </div>

    </div>

    {/* Certifications */}

    <div className="mt-8">

      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-lime-400">
        Certified
      </h3>

      <div className="flex flex-wrap gap-3">

        {certifications.map((image, index) => (

          <div
            key={index}
            className="flex h-16 w-20 items-center justify-center rounded-lg border border-white/10 bg-white/5"
          >

            <img
              src={image}
              alt=""
              className="max-h-12 w-auto object-contain"
            />

          </div>

        ))}

      </div>

    </div>

  </div>

  {/* ================= RIGHT ================= */}

  <div className="grid grid-cols-3 gap-10">

    {/* Company */}

    <div>

      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-lime-400">
        Company
      </h3>

      <ul className="space-y-2">

        {footerSections[0].links
          .filter((_, i) => i <= 5)
          .map((link) => (

            <li key={link.name}>

              <Link
                href={link.href}
                className="text-gray-400 transition hover:text-lime-400"
              >

                {link.name}

              </Link>

            </li>

          ))}

      </ul>

    </div>

    {/* Products */}

    <div>

      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-lime-400">
        Products
      </h3>

      <ul className="space-y-3">
  {products.map((item) => (
    <li key={item} className="text-gray-400 transition hover:text-lime-400">
      {item}
    </li>
  ))}
</ul>

    </div>

    {/* Solutions */}

    <div>

      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-lime-400">
        Solutions
      </h3>

      <ul className="space-y-3">
  {solutions.map((item) => (
    <li key={item} className="text-gray-400 transition hover:text-lime-400">
      {item}
    </li>
  ))}
</ul>


    </div>

  </div>

</div>


 <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-gray-400 lg:flex-row -mb-10">

  <p>
    © {new Date().getFullYear()}
    <span className="font-semibold text-white">
      {" "}Volterra Energy
    </span>
    . All rights reserved.
  </p>

  <div className="flex flex-wrap items-center gap-3">

    <a href="/privacy-policy" className="hover:text-lime-400">
      Privacy
    </a>

    <span>•</span>

    <a href="/terms-and-conditions" className="hover:text-lime-400">
      Terms
    </a>

    <span>•</span>

    <a href="/cookies" className="hover:text-lime-400">
      Cookies
    </a>

    {/* <span>•</span>

    <a href="#" className="hover:text-lime-400">
      Sitemap
    </a> */}

  </div>

  {/* <p>
    Designed by
    <span className="font-semibold text-lime-400">
      {" "}Vinsmart
    </span>
  </p> */}

</div>

        </div>
      </div>
    </footer>
  );
}