interface SectionDividerProps {
  icon?: string;
}

export function SectionDivider({ icon = '💕' }: SectionDividerProps) {
  return (
    <div className="section-divider max-w-4xl mx-auto">
      <span className="text-3xl">{icon}</span>
    </div>
  );
}
