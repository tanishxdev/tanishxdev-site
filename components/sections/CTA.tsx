import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function CTA() {
  return (
    <section className="border-t border-[#1B1B1F] pt-10 pb-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        {/* Left content */}
        <div className="space-y-2">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-[#A1A1A6]">
            Contact
          </h2>

          <p className="text-base md:text-lg">
            Open to internships, junior roles and meaningful side projects.
          </p>

          <p className="text-sm text-[#A1A1A6] max-w-xl">
            If you are building something around mental health, learning tools
            or calm productivity, I would love to talk.
          </p>
        </div>

        {/* Right content */}
        <div className="flex flex-col items-start md:items-end gap-4">
          {/* Email */}
          <a
            href="mailto:tanish.kumar.works@gmail.com"
            className="text-[var(--accent)] hover:underline underline-offset-4 text-sm"
          >
            tanish.kumar.works@gmail.com
          </a>

          {/* Social links */}
          <div className="flex gap-5 text-lg text-[#9CA3AF]">
            <a
              href="https://github.com/tanishxdev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/tanish29/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/tanishxdev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="X / Twitter"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://leetcode.com/u/tanishxdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Leetcode"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
      </div>

      {/* Footer line - centered & bottom */}
    </section>
  );
}
