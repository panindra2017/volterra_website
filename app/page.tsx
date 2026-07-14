import Navbar from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
// import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Process } from "@/components/process";
import { FAQ } from "@/components/faq";

export default function Page() {
  return (
    <main className="bg-white">
      <Navbar />

      <Hero />

      <Process />

      {/* <Testimonials /> */}

      <FAQ />

      {/* <Contact /> */}

      <Footer />
    </main>
  );
}