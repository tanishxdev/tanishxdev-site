"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const sectionRefs = useRef<HTMLElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero intro animation
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      }

      // Sections scroll animations
      sectionRefs.current.forEach(section => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 70 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return { heroRef, sectionRefs };
};
