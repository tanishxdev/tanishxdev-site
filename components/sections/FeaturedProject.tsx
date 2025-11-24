import { projects } from "@/data/projects";

const FEATURED_LIMIT = 3;

const featuredProjects = projects
  .filter(p => p.featuredOrder !== undefined)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))
  .slice(0, FEATURED_LIMIT);

export default function FeaturedProject() {
  if (featuredProjects.length === 0) return null;

  return (
    <section className="border-t border-[#1B1B1F] pt-10">
      <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-[#A1A1A6] mb-8">
        Featured Projects
      </h2>

      <div className="space-y-10">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="border border-[#1B1B1F] rounded-2xl p-6 bg-[#050509] hover:border-[#5cc8ff]/40 transition"
          >
            <div className="grid md:grid-cols-3 gap-6">

              {/* MAIN CONTENT */}
              <div className="md:col-span-2 space-y-4">

                <h3 className="text-xl md:text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-sm md:text-base text-[#A1A1A6] leading-relaxed max-w-xl">
                  {project.description}
                </p>

                {(project.problem || project.approach) && (
                  <div className="space-y-2 text-sm text-[#A1A1A6]">
                    {project.problem && (
                      <p>
                        <span className="text-white font-medium">Problem:</span>{" "}
                        {project.problem}
                      </p>
                    )}

                    {project.approach && (
                      <p>
                        <span className="text-white font-medium">Approach:</span>{" "}
                        {project.approach}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* META PANEL */}
              <div className="space-y-5 text-sm">

                {project.role && (
                  <div>
                    <p className="uppercase tracking-wider text-xs text-[#A1A1A6] mb-1">
                      Role
                    </p>
                    <p className="text-[#E5E7EB]">{project.role}</p>
                  </div>
                )}

                <div>
                  <p className="uppercase tracking-wider text-xs text-[#A1A1A6] mb-1">
                    Stack
                  </p>
                  <p className="text-[#A1A1A6]">{project.stack}</p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">

                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5cc8ff] hover:underline underline-offset-4"
                    >
                      Live Preview
                    </a>
                  )}

                  {project.code && project.code !== "#" && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A1A1A6] hover:text-white transition underline underline-offset-4"
                    >
                      Source Code
                    </a>
                  )}

                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
