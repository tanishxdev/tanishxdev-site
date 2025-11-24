export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="border-t border-[#1B1B1F] pt-10">

        <h2
          id="skills-heading"
          className="text-sm font-medium uppercase tracking-[0.2em] text-[#A1A1A6] mb-6"
        >
          Skills & Focus
        </h2>

        <div className="grid gap-6 md:grid-cols-3 text-sm text-[#A1A1A6]">

          <div>
            <p className="font-medium text-white mb-2">Development</p>
            <ul className="space-y-1">
              <li>Next.js / React</li>
              <li>Node.js / Express</li>
              <li>TypeScript</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-white mb-2">Core CS</p>
            <ul className="space-y-1">
              <li>DSA (C++)</li>
              <li>OOP & OS</li>
              <li>DBMS</li>
              <li>System Design</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-white mb-2">AI & Experiments</p>
            <ul className="space-y-1">
              <li>Prompt Engineering</li>
              <li>AI UX Design</li>
              <li>LLM Flow Logic</li>
              <li>Product Experiments</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
