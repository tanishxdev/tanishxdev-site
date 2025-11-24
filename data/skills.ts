export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Core",
    items: ["Data Structures & Algorithms", "C++", "System Design basics", "Operating Systems", "DBMS"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js App Router", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express / REST APIs", "Authentication", "PostgreSQL / MongoDB basics"],
  },
  {
    label: "AI / Tools",
    items: ["Prompt design", "OpenAI APIs", "Product thinking", "Mental health tooling experiments"],
  },
];
