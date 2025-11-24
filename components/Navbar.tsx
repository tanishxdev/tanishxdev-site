"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress + sticky state
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setScrolled(y > 20);

      const height = document.body.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (y / height) * 100 : 0;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

// Section highlight via IntersectionObserver
useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -30% 0px",
      threshold: 0.2,
    }
  );

  navItems.forEach(item => {
    const section = document.getElementById(item.id);
    if (section) observer.observe(section);
  });

  return () => observer.disconnect();
}, []);


  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[80] bg-black">
        <div
          className="h-full"
          style={{
            width: `${scrollProgress}%`,
            background: "var(--accent)",
          }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md" : "bg-black"
        }`}
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <nav className="container h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-sm font-medium tracking-wide">
            <span className="text-white">Tanish</span>
            <span className="text-gray-400">.dev</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition ${
                  activeSection === item.id
                    ? "text-[var(--accent)] hover:text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden relative w-6 h-6"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute block h-0.5 w-6 bg-white transition ${
                menuOpen ? "rotate-45 top-3" : "top-1"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-white transition ${
                menuOpen ? "opacity-0" : "top-3"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-white transition ${
                menuOpen ? "-rotate-45 top-3" : "top-5"
              }`}
            />
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed top-16 left-0 w-full bg-black/95 backdrop-blur-xl transition-all ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center py-10 gap-6">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium transition ${
                  activeSection === item.id
                    ? "text-[var(--accent)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
