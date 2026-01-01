export type Project = {
  id: string;
  title: string;
  description: string;
  problem?: string;
  approach?: string;
  role?: string;
  stack: string;
  live?: string;
  code?: string;
  featuredOrder?: number;
};
export const projects: Project[] = [
  {
    id: "calmind",
    title: "Calmind — AI Therapist Platform",
    description:
      "A calm AI companion that helps people process their thoughts in a structured, emotionally-aware way instead of generic chat replies.",
    problem:
      "Most AI chats feel noisy and shallow. People struggle to put feelings into words and end up sitting with unprocessed emotions.",
    approach:
      "Designed guided prompts, reflection flows and a pacing system so users can unpack what they feel, one small step at a time.",
    role: "Product thinking · Full-stack development",
    stack: "Next.js · React · Node.js · TypeScript",
    live: "https://calmind-beta.vercel.app/",
    code: "https://github.com/tanishxdev/calmind",
    featuredOrder: 1, // primary quality project
  },

  {
    id: "interview-ai",
    title: "InterviewPrepWithAI — Mock Interview Coach",
    description:
      "A focused interview prep tool that simulates realistic technical interviews and gives structured feedback.",
    problem:
      "Most practice is random LeetCode. People do not get conversational, back-and-forth style interview practice.",
    approach:
      "Built scenario-based prompts and feedback buckets so users can practice answers, pacing and clarity under interview-like pressure.",
    role: "Full-stack development",
    stack: "Next.js · OpenAI API · TypeScript",
    live: "https://interviewmedev.vercel.app/",
    code: "https://github.com/tanishxdev/interview.me",
    featuredOrder: 2, // secondary quality project
  },

  {
    id: "gpt-lite",
    title: "GPT Lite — Minimal AI Chat Interface",
    description:
      "A clean, distraction-free AI chat interface for quick experiments and personal workflows.",
    problem:
      "Most AI dashboards are heavy and cluttered. For quick idea exploration, the UI gets in the way.",
    approach:
      "Kept the interface minimal, keyboard-first and dark by default so users can focus on the conversation only.",
    role: "Frontend and UX",
    stack: "Next.js · React · TypeScript",
    live: "https://gp-tlite.vercel.app/",
    code: "https://github.com/tanishxdev/gpt-lite",
    featuredOrder: 3, // tertiary quality project
  },

  {
    id: "studyflow",
    title: "StudyFlow — Focus & Productivity Tool",
    description:
      "A minimal dashboard for planning deep work sessions using focus cycles and ambient soundscapes.",
    problem:
      "Students struggle to maintain sustained focus during long study sessions.",
    approach:
      "Designed a lightweight timer + visual progress system to encourage distraction-free study zones.",
    role: "Frontend development · UX design",
    stack: "Next.js · Tailwind · TypeScript",
    live: "#",
    code: "#",
  },

  {
    id: "dev-notes",
    title: "Dev Notes — Personal Knowledge System",
    description:
      "A structured note-taking platform for developers to organize code snippets and learning logs.",
    problem:
      "Scattered notes reduce recall and structured learning efficiency.",
    approach:
      "Built tag-based filtering and topic grouping for quick knowledge retrieval.",
    role: "Full-stack development",
    stack: "React · Node.js · MongoDB",
    live: "#",
    code: "#",
  },
];
