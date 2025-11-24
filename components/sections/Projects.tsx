import { projects } from "@/data/projects";

const MAX_PROJECTS = 4;
const visibleProjects = projects.slice(0, MAX_PROJECTS);

export default function Projects() {
  if (visibleProjects.length === 0) return null;

  return (
    <div className="border-t border-[#1B1B1F] pt-10">
      <h2
        id="projects-heading"
        className="text-sm font-medium uppercase tracking-[0.2em] text-[#A1A1A6] mb-6"
      >
        Selected Work
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {visibleProjects.map(project => (
          <article
            key={project.id}
            className="group border border-[#1B1B1F] rounded-2xl p-5 bg-[#050509] hover:border-[#5cc8ff]/50 transition"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-[#A1A1A6] mb-3 leading-relaxed">
              {project.description}
            </p>

            <p className="text-xs uppercase tracking-wider text-[#6B7280] mb-4">
              {project.stack}
            </p>

            {/* Action buttons - ALWAYS visible */}
            <div className="flex items-center gap-5 text-sm">
              
              <a
                href={project.live || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5cc8ff] hover:underline underline-offset-4 font-medium"
              >
                Live Preview
              </a>

              <a
                href={project.code || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`underline underline-offset-4 transition ${
                  project.code && project.code !== "#"
                    ? "text-[#A1A1A6] hover:text-white"
                    : "text-[#444]"
                }`}
              >
                Source Code
              </a>

            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
