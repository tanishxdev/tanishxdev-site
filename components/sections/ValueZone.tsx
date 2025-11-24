import { writings } from "@/data/writing";

const WRITING_LIMIT = 2;

export default function ValueZone() {
  const visibleWritings = writings.slice(0, WRITING_LIMIT);

  return (
    <section className="border-t border-[#1B1B1F] pt-10">
      <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-[#A1A1A6] mb-6">
        Writing & Value
      </h2>

      <p className="text-sm md:text-base text-[#A1A1A6] max-w-2xl mb-8 leading-relaxed">
        A growing library of thoughts, experiments and breakdowns around calm
        technology, AI product thinking and developer growth.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {visibleWritings.map((post) => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[#1B1B1F] rounded-2xl p-5 bg-[#050509] hover:border-[#5cc8ff]/50 transition flex flex-col justify-between"
          >
            {/* Top content */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-[#5cc8ff] transition">
                {post.title}
              </h3>

              <p className="text-sm text-[#A1A1A6] leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Bottom aligned action */}
            <span className="mt-5 text-sm text-[#5cc8ff] opacity-80 group-hover:opacity-100 underline underline-offset-4 self-start">
              Read article →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
