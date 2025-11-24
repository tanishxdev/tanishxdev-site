"use client";

import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import FeaturedProject from "@/components/sections/FeaturedProject";
import ValueZone from "@/components/sections/ValueZone";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import CTA from "@/components/sections/CTA";
import Skills from "@/components/sections/Skills";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";

export default function HomePage() {
  const { heroRef, sectionRefs } = useGSAPAnimations();

  const sections = [
    { id: "about", component: <Mission /> },
    { id: "skills", component: <Skills /> }, 
    { id: "work", component: <FeaturedProject /> },
    { id: "writing", component: <ValueZone /> },
    { id: "projects", component: <Projects /> },
    { id: "journey", component: <Journey /> },
    { id: "contact", component: <CTA /> },
  ];

  return (
    <main className="pt-20 py-12 md:py-16 space-y-24">
      
      {/* HERO */}
      <section ref={heroRef} className="container">
        <Hero />
      </section>

      {/* ALL OTHER SECTIONS */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          ref={(el) => {
            if (el) sectionRefs.current[index] = el;
          }}
          className="container"
        >
          {section.component}
        </section>
      ))}
    </main>
  );
}
