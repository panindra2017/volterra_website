"use client";

import { motion } from "framer-motion";
import { useState } from "react";


import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock3,
  Building2,
  User,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 80954 34443",
    sub: "Mon - Sat | 9:30 AM - 6:30 PM",
  },

  {
    icon: Mail,
    title: "Email",
    value: "info@volterraenergy.in",
    sub: "We'll reply within 24 hours",
  },

  {
    icon: MapPin,
    title: "Office",
    value: "Bangalore, Karnataka",
    sub: "Visit our corporate office",
  },

//   {
//     icon: MessageCircle,
//     title: "WhatsApp",
//     value: "Chat with our team",
//     sub: "Quick support & quotations",
//   },
];

export function Contact() {

  const [formData, setFormData] = useState({
  fullName: "",
  company: "",
  phone: "",
  email: "",
  location: "",
  businessType: "",
  requirements: "",
});

const [loading, setLoading] = useState(false);

const [success, setSuccess] = useState("");

const [error, setError] = useState("");

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setSuccess("");
  setError("");

  // Required Fields
  if (
    !formData.fullName ||
    !formData.phone ||
    !formData.email ||
    !formData.location ||
    !formData.businessType ||
    !formData.requirements
  ) {
    setError("Please fill in all required fields.");
    return;
  }

  // Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email)) {
    setError("Please enter a valid email address.");
    return;
  }

  // Phone Validation (10 digits)
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!phoneRegex.test(formData.phone)) {
    setError("Please enter a valid mobile number.");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    setSuccess(
      "Thank you! Your request has been submitted successfully."
    );

    setFormData({
      fullName: "",
      company: "",
      phone: "",
      email: "",
      location: "",
      businessType: "",
      requirements: "",
    });

  } catch (err) {
    console.error(err);

    setError(
      "Unable to submit your request. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (

<section
id="contact"
className="
relative
overflow-hidden
bg-[#F8FAFC]
py-32
"
>

{/* Green Glow */}

<div
className="
absolute
left-0
top-0
h-125
w-125
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
h-125
w-125
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
              rounded-full
              border
              border-lime-500/20
              bg-lime-500
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-white
              shadow-[0_20px_50px_rgba(132,204,22,.35)]
              "
            >

Contact Us

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

Let's Build Your {" "}

<span className="text-lime-600">

 EV Charging Project

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

Whether you're planning EV charging for homes,
commercial buildings, corporate offices, fleets
or public infrastructure, our team is ready to
help you at every step.

</p>

</motion.div>

{/* ====================================== */}
{/* PART 2 STARTS HERE */}
{/* ====================================== */}
{/* CONTACT CONTENT */}
{/* ====================================== */}

<div className="mt-14 grid gap-10 lg:grid-cols-[430px_1fr]">

  {/* ====================================== */}
  {/* LEFT CONTACT CARD */}
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
      top-28
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
        -right-24
        -top-24
        h-64
        w-64
        rounded-full
        bg-lime-500/20
        blur-[120px]
        "
      />

      <div className="relative z-10">

        <div
          className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-lime-500/15
          "
        >

          <Building2
            className="
            h-6
            w-6
            text-lime-400
            "
          />

        </div>

        <h3
          className="
          mt-4
          text-2xl
          font-black
          "
        >

          Get In Touch

        </h3>

        <p
          className="
          mt-3
          text-base
          leading-6
          text-slate-300
          "
        >

          Our EV charging specialists are available
          to help you choose the right solution for
          your project.

        </p>

        {/* Contact Information */}

        <div className="mt-8 space-y-5">

          {contactInfo.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="flex gap-4"
              >

                <div
                  className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white/10
                  "
                >

                  <Icon
                    className="
                    h-5
                    w-5
                    text-lime-400
                    "
                  />

                </div>

                <div>

                  <p
                    className="
                    text-xs
                    text-slate-400
                    "
                  >

                    {item.title}

                  </p>

                  <h4
                    className="
                    mt-1
                    text-sm
                    font-semibold
                    "
                  >

                    {item.value}

                  </h4>

                  <p
                    className="
                    mt-1
                    text-sm
                    text-slate-400
                    "
                  >

                    {item.sub}

                  </p>

                </div>

              </div>

            );

          })}

        </div>

        {/* Working Hours */}

        <div
          className="
          mt-8
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-5
          "
        >

          <div className="flex gap-4">

            <Clock3
              className="
              mt-1
              h-6
              w-6
              text-lime-400
              "
            />

            <div>

              <h4 className="font-semibold">

                Working Hours

              </h4>

              <p className="mt-2 text-slate-300">

                Monday - Saturday

              </p>

              <p className="text-slate-300">

                9:30 AM - 6:30 PM

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </motion.div>

  {/* ====================================== */}
  {/* SITE SURVEY FORM */}
  {/* ====================================== */}

  <motion.div

    initial={{ opacity: 0, x: 40 }}

    whileInView={{ opacity: 1, x: 0 }}

    viewport={{ once: true }}

    transition={{ duration: .8 }}

  >

    <div
      className="
      rounded-[36px]
      border
      border-slate-200
      bg-white
      p-10
      shadow-[0_20px_60px_rgba(0,0,0,.06)]
      "
    >

      <h3
        className="
        text-2xl
        font-black
        text-slate-900
        "
      >

        Tell Us About Your Project

      </h3>


      {/* PART 3 STARTS HERE */}
      {/* ====================================== */}
{/* FORM */}
{/* ====================================== */}

<form  onSubmit={handleSubmit} className="mt-7">

  <div className="grid gap-6 md:grid-cols-2">

    {/* Name */}

    <div>

      <label className="mb-2 block font-semibold text-slate-800">
        Full Name  <span className="text-red-500">*</span>
      </label>

      <div className="relative">

        <User
          className="
          absolute
          left-4
          top-1/2
          h-4
          w-4
          -translate-y-1/2
          text-slate-400
          "
        />

        <input
  type="text"
  name="fullName"
  value={formData.fullName}
  onChange={handleChange}
  placeholder="Enter your name"
  required
          className="
          h-12
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          pl-12
          pr-4
          outline-none
          transition-all
          duration-300
          focus:border-lime-500
          focus:bg-white
          focus:ring-4
          focus:ring-lime-500/10
          "
        />

      </div>

    </div>

    {/* Company */}

    <div>

      <label className="mb-2 block font-semibold text-slate-800">
        Company Name
      </label>

      <div className="relative">

        <Building2
          className="
          absolute
          left-4
          top-1/2
          h-4
          w-4
          -translate-y-1/2
          text-slate-400
          "
        />

        <input
            type="text"
  name="company"
  value={formData.company}
  onChange={handleChange}
  placeholder="Your company"
          className="
          h-12
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          pl-12
          pr-4
          outline-none
          transition-all
          duration-300
          focus:border-lime-500
          focus:bg-white
          focus:ring-4
          focus:ring-lime-500/10
          "
        />

      </div>

    </div>

    {/* Phone */}

    <div>

      <label className="mb-2 block font-semibold text-slate-800">
        Phone Number  <span className="text-red-500">*</span>
      </label>

      <div className="relative">

        <Phone
          className="
          absolute
          left-4
          top-1/2
          h-4
          w-4
          -translate-y-1/2
          text-slate-400
          "
        />

        <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="+91 XXXXX XXXXX"
  required
          className="
          h-12
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          pl-12
          pr-4
          outline-none
          transition-all
          duration-300
          focus:border-lime-500
          focus:bg-white
          focus:ring-4
          focus:ring-lime-500/10
          "
        />

      </div>

    </div>

    {/* Email */}

    <div>

      <label className="mb-2 block font-semibold text-slate-800">
        Email Address  <span className="text-red-500">*</span>
      </label>

      <div className="relative">

        <Mail
          className="
          absolute
          left-4
          top-1/2
          h-4
          w-4
          -translate-y-1/2
          text-slate-400
          "
        />

        <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="example@email.com"
  required
          className="
          h-12
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          pl-12
          pr-4
          outline-none
          transition-all
          duration-300
          focus:border-lime-500
          focus:bg-white
          focus:ring-4
          focus:ring-lime-500/10
          "
        />

      </div>

    </div>

    {/* Location */}

    <div>

      <label className="mb-2 block font-semibold text-slate-800">
        Project Location  <span className="text-red-500">*</span>
      </label>

      <div className="relative">

        <MapPin
          className="
          absolute
          left-4
          top-1/2
          h-4
          w-4
          -translate-y-1/2
          text-slate-400
          "
        />

        <input
  type="text"
  name="location"
  value={formData.location}
  onChange={handleChange}
  placeholder="City / State"
  required
          className="
          h-12
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          pl-12
          pr-4
          outline-none
          transition-all
          duration-300
          focus:border-lime-500
          focus:bg-white
          focus:ring-4
          focus:ring-lime-500/10
          "
        />

      </div>

    </div>

    {/* Business Type */}

    <div>

      <label className="mb-2 block font-semibold text-slate-800">
        Business Type  <span className="text-red-500">*</span>
      </label>

    <select
    required
  name="businessType"
  value={formData.businessType}
  onChange={handleChange}
  className="
    h-12
    w-full
    rounded-2xl
    border
    border-slate-200
    bg-slate-50
    px-5
    outline-none
    transition-all
    duration-300
    focus:border-lime-500
    focus:bg-white
    focus:ring-4
    focus:ring-lime-500/10
  "
>

       <option value="">Select Business Type</option>
        <option>Residential Community</option>
        <option>Hotel</option>
        <option>Corporate Office</option>
        <option>Commercial Property</option>
        <option>Fleet Operator</option>
        <option>Public Charging</option>

      </select>

    </div>

  </div>

  {/* Message */}

  <div className="mt-6">

    <label className="mb-3 block font-semibold text-slate-800">
      Project Requirements  <span className="text-red-500">*</span>
    </label>

   <textarea
  rows={3}
  name="requirements"
  value={formData.requirements}
  onChange={handleChange}
  placeholder="Tell us about your EV charging project..."
      className="
      w-full
      rounded-2xl
      border
      border-slate-200
      bg-slate-50
      p-5
      outline-none
      transition-all
      duration-300
      focus:border-lime-500
      focus:bg-white
      focus:ring-4
      focus:ring-lime-500/10
      "
    />

  </div>

  {/* Submit */}

  <div className="mt-6">

 <button
  type="submit"
  disabled={loading}
  className="
  flex
  w-full
  items-center
  justify-center
  gap-3
  rounded-2xl
  bg-linear-to-r
  from-lime-500
  to-green-600
  py-3
  text-lg
  font-semibold
  text-white
  transition-all
  duration-300
  hover:-translate-y-1
  hover:shadow-[0_20px_50px_rgba(132,204,22,.35)]
  disabled:cursor-not-allowed
  disabled:opacity-60
  "
>
  {loading ? "Submitting..." : "Submit The Details"}

  {!loading && (
    <ArrowRight
      className="
      h-5
      w-5
      transition-transform
      duration-300
      "
    />
  )}
</button>

{success && (
  <div
    className="
      mt-6
      rounded-2xl
      border
      border-green-200
      bg-green-50
      p-5
      text-green-700
    "
  >
    <h4 className="font-bold">
      ✅ Request Submitted Successfully
    </h4>

    <p className="mt-2">
      Thank you for contacting VOLTERRA Energy.
      Our EV charging experts will contact you shortly.
    </p>
  </div>
)}

{error && (
  <div
    className="
      mt-6
      rounded-2xl
      border
      border-red-200
      bg-red-50
      p-5
      text-red-700
    "
  >
    <h4 className="font-bold">
      Unable to Submit
    </h4>

    <p className="mt-2">
      {error}
    </p>
  </div>
)}

  </div>

</form>

</div>

</motion.div>
</div>

{/* ====================================== */}
{/* PART 4 STARTS HERE */}
{/* ====================================== */}
{/* GOOGLE MAP */}
{/* ====================================== */}

<motion.div

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
    duration: .8,
    delay: .2,
  }}

  className="mt-24"

>

  <div
    className="
    overflow-hidden
    rounded-[36px]
    border
    border-slate-200
    bg-white
    shadow-[0_25px_70px_rgba(0,0,0,.08)]
    "
  >

    <div
      className="
      grid
      lg:grid-cols-[380px_1fr]
      "
    >

      {/* ================================= */}
      {/* OFFICE DETAILS */}
      {/* ================================= */}

      <div
        className="
        bg-slate-900
        p-10
        text-white
        "
      >

        <div
          className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-3xl
          bg-lime-500/25
          "
        >

          <MapPin
            className="
            h-10
            w-10
            text-lime-400
            "
          />

        </div>

        <h3
          className="
          mt-8
          text-3xl
          font-black
          "
        >

          Visit Our Office

        </h3>

        <p
          className="
          mt-6
          leading-8
          text-slate-300
          "
        >

          Volterra Energy Pvt. Ltd.

          <br />

          #3, Second Floor 
          80 Feet Road, BSK 3 Stage
          Srinivas Nagar, Bangalore
          Karnataka, India - 560050

        </p>

        <button
  onClick={() =>
    window.open(
      "https://www.google.com/maps/@12.9107832,77.5963265,14z?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    )
  }
  className="
    mt-10
    inline-flex
    items-center
    gap-3
    rounded-2xl
    bg-linear-to-r
    from-lime-500
    to-green-600
    px-8
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
  Open Google Maps
  <ArrowRight className="h-5 w-5" />
</button>
      </div>

      {/* ================================= */}
      {/* GOOGLE MAP */}
      {/* ================================= */}

      <div className="h-125">

        <iframe
          src="https://www.google.com/maps?q=Bangalore,+Karnataka&output=embed"
          className="
          h-full
          w-full
          border-0
          "
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

      </div>

    </div>

  </div>

</motion.div>

</div>

</section>

  );

}