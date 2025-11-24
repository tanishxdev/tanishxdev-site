import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="container min-h-[85vh] flex items-end pb-24">
      <div className="flex flex-col gap-6">

        {/* Breadcrumb */}
        <p className="text-xs tracking-[0.2em] uppercase text-gray-400">
          Portfolio / Tanish
        </p>

        {/* Main Heading with Smooth Reveal Animation */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="block"
          >
            Crafting full-stack products.
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block mt-3 text-base md:text-2xl text-[var(--text-muted)] font-normal"
          >
            with thoughtful full-stack engineering and human-centred AI.
          </motion.span>
        </h1>

        {/* Desktop paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hidden md:block max-w-xl text-sm md:text-base text-[var(--text-muted)]"
        >
          I work on products that feel quiet but powerful — clean interfaces,
          intentional flows and systems that remove friction from real life.
        </motion.p>

        {/* Mobile paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="block md:hidden text-sm text-[var(--text-muted)]"
        >
          I build thoughtful digital systems focused on clarity and calm experiences.
        </motion.p>

        {/* Current focus */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-sm md:text-base text-[#5cc8ff]"
        >
          <span className="hidden md:inline">
            Currently building: <span className="text-white font-medium">Calmind</span> — a space for reflective clarity and emotional grounding through technology.
          </span>
          <span className="md:hidden">
            Currently building: <span className="text-white font-medium">Calmind</span>
          </span>
        </motion.p>

        {/* Skills */}
        <div className="hidden md:flex flex-wrap gap-3 text-sm text-gray-400">
          <span className="px-3 py-1 rounded-full border border-white/10">Full-stack · Next.js · Node</span>
          <span className="px-3 py-1 rounded-full border border-white/10">AI product experiments</span>
          <span className="px-3 py-1 rounded-full border border-white/10">DSA · C++ · CS core</span>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-5 pt-2">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-[#5cc8ff] text-black text-sm font-medium hover:opacity-90 transition"
          >
            Let’s talk
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="hidden sm:inline text-sm text-gray-400 hover:text-white transition underline underline-offset-4"
          >
            View resume
          </a>
        </div>

      </div>
    </section>
  );
}