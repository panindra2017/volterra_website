"use client";

import CMSHero from "./CMSHero";
import CTA from "./CTA";
import DashboardShell from "./DashboardShell";
import PlatformFeatures from "./PlatformFeatures";
import TechnologyCapabilities from "./TechnologyCapabilities";
import TechnologySection from "./TechnologySection";


export default function CMSPlatform() {
  return (
    <section
      id="cms-platform"
      className="relative overflow-hidden bg-[#f7f9fc]"
    >
      {/* Hero */}
      <CMSHero />

      {/* Technology */}
      <TechnologySection />

      {/* Technology Stack */}
      {/* <TechnologyStack /> */}

      {/* Capabilities */}
      <TechnologyCapabilities />

      {/* Dashboard */}
      {/* <DashboardShell /> */}

      {/* Platform Features */}
      {/* <PlatformFeatures /> */}

      {/* CTA */}
      {/* <CTA /> */}
    </section>
  );
}