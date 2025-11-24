export default function Journey() {
  const steps = [
    {
      label: "Foundation",
      body: "Developed a solid technical foundation alongside my formal studies by strengthening C++, DSA, OS and problem-solving through consistent practice and small experimental projects.",
    },
    {
      label: "Exploration",
      body: "Transitioned into web and product development using React and Next.js, focusing on building systems that solve real problems instead of surface-level clones.",
    },
    {
      label: "Direction",
      body: "Started Calmind and other AI-based tools to explore how software can support emotional clarity, mental wellbeing and intentional productivity.",
    },
  ];

  return (
    <div className="border-t border-[#1B1B1F] pt-10">
      <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-[#A1A1A6] mb-6">
        Journey
      </h2>

      <div className="space-y-6">
        {steps.map(step => (
          <div key={step.label} className="flex gap-4">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)] shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#9CA3AF] mb-1">
                {step.label}
              </p>
              <p className="text-sm text-[#E5E7EB] leading-relaxed">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
