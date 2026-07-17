"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  Search,
  SlidersHorizontal,
  ArrowRight,
  BatteryCharging,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  power: string;
  image: string;
  description: string;
}

const categories = [
  "All Products",
  "Residential",
  "Corporate",
  "Fast DC",
  "Ultra DC",
];

const products: Product[] = [
  {
    id: 1,
    name: "Volterra Lite",
    category: "Residential",
    power: "3.3 kW",
    image: "/images/3.3kw_charger.png",
    description:
      "Smart AC charging solution designed for residential EV charging.",
  },
    {
    id: 2,
    name: "Volterra GO",
    category: "Residential",
    power: "7.4 kW",
    image: "/images/products/commercial-ac.png",
    description:
      "Smart AC charging solution designed for residential EV charging.",
  },
    {
    id: 3,
    name: "Volterra One",
    category: "Residential",
    power: "11 kW",
    image: "/images/products/commercial-ac.png",
    description:
      "Smart AC charging solution designed for residential EV charging.",
  },

  {
    id: 4,
    name: "Volterra Pro",
    category: "Corporate",
    power: "22kW",
    image: "/images/products/commercial-ac.png",
    description:
      "Reliable charging infrastructure for offices and commercial spaces.",
  },

  {
    id: 5,
    name: "Volterra Plus",
    category: "Destination",
    power: "30kW",
    image: "/images/products/dc-fast.png",
    description:
      "High-speed public charging built for highways and smart cities.",
  },

  {
    id: 6,
    name: "Volterra Max",
    category: "Destination",
    power: "60kW",
    image: "/images/products/fleet.png",
    description:
      "Intelligent charging infrastructure for commercial fleets.",
  },

  {
    id: 7,
    name: "Volterra Prime",
    category: "Public",
    power: "120kW",
    image: "/images/products/fleet.png",
    description:
      "Intelligent charging infrastructure for commercial fleets.",
  },

  {
    id: 7,
    name: "Volterra Elite",
    category: "Public",
    power: "180kW",
    image: "/images/products/fleet.png",
    description:
      "Intelligent charging infrastructure for commercial fleets.",
  },

  {
    id: 8,
    name: "Volterra Ultra",
    category: "Public",
    power: "240kW",
    image: "/images/products/fleet.png",
    description:
      "Intelligent charging infrastructure for commercial fleets.",
  },

  {
    id: 9,
    name: "Volterra Infinity",
    category: "Public",
    power: "360kW",
    image: "/images/products/fleet.png",
    description:
      "Intelligent charging infrastructure for commercial fleets.",
  },
];

export function Products() {

  const [selectedCategory, setSelectedCategory] =
    useState("All Products");

  const [search, setSearch] =
    useState("");

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter(
          (item) => item.category === selectedCategory
        );

  return (

<section
id="products"
className="
relative
overflow-hidden
bg-[#F7F9FC]
py-32
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
blur-[150px]
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
bg-lime-400/10
blur-[150px]
"
/>

{/* Engineering Grid */}

<div
className="
absolute
inset-0
opacity-[0.03]
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
"
>

<motion.div

initial={{ opacity:0,y:30 }}

whileInView={{ opacity:1,y:0 }}

viewport={{ once:true }}

transition={{ duration:.8 }}

className="text-center"

>

<div
   className="
            inline-flex
            items-center
            rounded-full
            border
            border-lime-500/20
            bg-lime-500/10
            px-3
            py-1
            text-xs
            font-semibold
            tracking-widest
            uppercase
            text-lime-600
            "
>

Our Products

</div>

<h2
   className="
            mt-4
            text-4xl
            lg:text-5xl
            font-black
            leading-tight
            text-slate-900
            "
>

Premium EV Charging

<span className=" text-lime-600">

{" "}Solutions

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

Built for homes, businesses,
commercial fleets and public
charging infrastructure with
industry-leading performance,
intelligent connectivity and
future-ready technology.

</p>

</motion.div>

<motion.div

initial={{ opacity:0 }}

whileInView={{ opacity:1 }}

viewport={{ once:true }}

transition={{ delay:.2 }}

className="
mt-8
flex
flex-wrap
justify-center
gap-4
"

>

{categories.map((category)=>(

<button

key={category}

onClick={()=>setSelectedCategory(category)}

className={`
rounded-full
px-4
py-2
font-semibold
transition-all
duration-300

${
selectedCategory===category

?

"bg-lime-500 text-white shadow-lg shadow-lime-500/30"

:

"bg-white border border-slate-200 text-slate-700 hover:border-lime-500 hover:text-lime-600"

}
`}

>

{category}

</button>

))}

</motion.div>

{/* ================================= */}
{/* SEARCH CONTAINER */}
{/* ================================= */}

<div
className="
mt-12
rounded-[32px]
border
border-slate-200
bg-white/80
backdrop-blur-2xl
p-4
shadow-[0_15px_45px_rgba(0,0,0,.05)]
"
>

  {/* ========================================= */}
{/* SEARCH TOOLBAR */}
{/* ========================================= */}

<div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">

  {/* Search */}

  <div className="relative w-full lg:max-w-xl">

    <Search
      className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
    />

    <input
      type="text"
      placeholder="Search EV Chargers..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="
      h-12
      w-full
      rounded-2xl
      border
      border-slate-200
      bg-white
      pl-14
      pr-5
      outline-none
      transition-all
      duration-300
      focus:border-lime-500
      focus:ring-4
      focus:ring-lime-500/10
      "
    />

  </div>

  {/* Right Side */}

  <div className="flex gap-4">

    <button
      className="
      flex
      items-center
      gap-3
      rounded-2xl
      border
      border-slate-200
      bg-white
      px-4
      py-2
      font-semibold
      text-slate-700
      transition-all
      duration-300
      hover:border-lime-500
      hover:text-lime-600
      "
    >

      <SlidersHorizontal className="h-4 w-4" />

      Filters

    </button>

    <button
      className="
      rounded-2xl
      bg-lime-500
      px-4
      py-2
      font-semibold
      text-white
      shadow-lg
      shadow-lime-500/30
      transition-all
      duration-300
      hover:scale-105
      "
    >

      Download Catalogue

    </button>

  </div>

</div>

</div>



{/* ========================================= */}
{/* PRODUCT GRID */}
{/* ========================================= */}

<div className="mt-12">

<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

{filteredProducts
.filter((product)=>
product.name.toLowerCase().includes(search.toLowerCase())
)
.map((product,index)=>(

<motion.div
key={product.id}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:index*.08}}
whileHover={{y:-12}}
className="
group
relative
overflow-hidden
rounded-[32px]
border
border-slate-200
bg-white
shadow-[0_20px_60px_rgba(0,0,0,.06)]
"
>

{/* PART 3 STARTS HERE */}

{/* Premium Glow */}

<div
  className="
  absolute
  -top-20
  -right-20
  h-50
  w-50
  rounded-full
  bg-lime-500/10
  blur-[90px]
  opacity-0
  transition-all
  duration-500
  group-hover:opacity-100
  "
/>

{/* Category */}

<div
  className="
  absolute
  left-6
  top-6
  rounded-full
  bg-lime-500
  px-3
  py-1
  text-xs
  font-semibold
  uppercase
  tracking-[2px]
  text-white
  shadow-lg
  "
>
  {product.category}
</div>

{/* Image */}

<div className="relative flex h-72 items-center justify-center overflow-hidden">

  <div
    className="
    absolute
    h-56
    w-56
    rounded-full
    bg-lime-500/10
    blur-[90px]
    "
  />

  <motion.img
    src={product.image}
    alt={product.name}
    whileHover={{
      scale: 1.08,
      rotate: -2,
    }}
    transition={{ duration: .4 }}
    className="
    relative
    z-10
    max-h-60
    object-contain
    drop-shadow-[0_30px_50px_rgba(0,0,0,.25)]
    "
  />

</div>

{/* Content */}

<div className="px-8 pb-8">

  <div className="flex items-center justify-between">

    <span
      className="
      rounded-full
      bg-slate-100
      px-4
      py-2
      text-sm
      font-semibold
      text-slate-600
      "
    >
      {product.power}
    </span>

    <BatteryCharging className="h-6 w-6 text-lime-600" />

  </div>

  <h3
    className="
    mt-6
    text-2xl
    font-black
    text-slate-900
    "
  >
    {product.name}
  </h3>

  <p
    className="
    mt-4
    leading-8
    text-slate-600
    "
  >
    {product.description}
  </p>

  <div className="mt-6 flex flex-wrap gap-3">

    <span className="rounded-full bg-lime-500/10 px-4 py-2 text-sm font-medium text-lime-700">
      Smart Charging
    </span>

    <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
      OCPP
    </span>

    <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
      CMS Ready
    </span>

  </div>

  <div className="my-8 h-px bg-slate-200" />

  <div className="flex items-center">

    {/* <div>

      <p className="text-xs uppercase tracking-[3px] text-slate-400">
        Starting From
      </p>

      <h4 className="mt-2 text-2xl font-black text-slate-900">
        ₹54,999
      </h4>

    </div> */}

    <button
      className="
      flex
      items-center
      gap-3
      font-semibold
      text-lime-600
      transition-all
      duration-300
      group-hover:gap-5
      "
    >
      Explore

      <ArrowRight className="h-5 w-5" />

    </button>

  </div>

</div>

</motion.div>

))}

</div>

</div>



{/* ========================================= */}
{/* CTA */}
{/* ========================================= */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: .8 }}
  className="
  relative
  mt-28
  overflow-hidden
  rounded-[40px]
  bg-gradient-to-r
  from-slate-900
  via-[#1F2937]
  to-slate-900
  p-16
  text-center
  text-white
  "
>

  <div
    className="
    absolute
    left-1/2
    top-1/2
    h-96
    w-96
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-lime-500/20
    blur-[140px]
    "
  />

  <div className="relative z-10">

    <div
      className="
      inline-flex
      rounded-full
      bg-white/10
      px-5
      py-2
      text-sm
      font-semibold
      uppercase
      tracking-[3px]
      "
    >
      Let's Build Together
    </div>

    <h2
      className="
      mt-8
      text-5xl
      font-black
      leading-tight
      "
    >
      Need a Custom
      <span className="block text-lime-400">
        EV Charging Solution?
      </span>
    </h2>

    <p
      className="
      mx-auto
      mt-8
      max-w-3xl
      text-lg
      leading-9
      text-slate-300
      "
    >
      From residential communities to commercial campuses,
      fleet operators and public charging stations,
      Volterra provides complete end-to-end EV charging ecosystems.
    </p>

    <div className="mt-12 flex flex-wrap justify-center gap-5">

      <button
        className="
        rounded-2xl
        bg-lime-500
        px-8
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-105
        "
      >
        Request Consultation
      </button>

      <button
        className="
        rounded-2xl
        border
        border-white/20
        bg-white/10
        px-8
        py-4
        font-semibold
        backdrop-blur-xl
        transition-all
        duration-300
        hover:bg-white/20
        "
      >
        Download Catalogue
      </button>

    </div>

  </div>

</motion.div>

</div>

</section>

  );
}