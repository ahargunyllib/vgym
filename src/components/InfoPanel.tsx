import type { EquipmentInfo } from "../types/equipment";

interface InfoPanelProps {
  equipment: EquipmentInfo | null;
  isVisible: boolean;
  onClose: () => void;
}

export const InfoPanel = ({
  equipment,
  isVisible,
  onClose,
}: InfoPanelProps) => {
  if (!(isVisible && equipment)) return null;

  const difficultyColors = {
    beginner: "bg-emerald-500",
    intermediate: "bg-amber-500",
    advanced: "bg-red-500",
  };

  const categoryIcons = {
    cardio: "❤️",
    strength: "💪",
    functional: "🎯",
  };

  return (
    <div
      aria-labelledby="equipment-name"
      className="fixed top-0 right-0 z-[100] flex h-screen w-full max-w-[500px] animate-slide-in flex-col border-border border-l bg-background/95 shadow-2xl backdrop-blur-xl"
      role="dialog"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-border border-b bg-surface/50 p-6">
        <h2
          className="flex items-center gap-3 font-bold text-3xl text-slate-100"
          id="equipment-name"
        >
          <span className="text-4xl">{categoryIcons[equipment.category]}</span>
          {equipment.name}
        </h2>
        <button
          aria-label="Close information panel"
          className="flex items-center justify-center rounded-lg p-2 text-slate-400 transition-all duration-250 hover:scale-110 hover:bg-surface hover:text-slate-100"
          onClick={onClose}
          type="button"
        >
          <svg
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
          >
            <line x1="18" x2="6" y1="6" y2="18" />
            <line x1="6" x2="18" y1="6" y2="18" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Meta badges */}
        <div className="mb-6 flex gap-3">
          <span className="rounded-full bg-surface px-3 py-1.5 font-semibold text-slate-100 text-sm capitalize">
            {equipment.category}
          </span>
          <span
            className={`rounded-full px-3 py-1.5 font-semibold text-sm text-white capitalize ${difficultyColors[equipment.difficulty]}`}
          >
            {equipment.difficulty}
          </span>
        </div>

        {/* Description */}
        <p className="mb-8 text-base text-slate-400 leading-relaxed">
          {equipment.description}
        </p>

        {/* Primary Muscles */}
        <section className="mb-8">
          <h3 className="mb-3 font-semibold text-lg text-slate-100">
            Primary Muscles
          </h3>
          <div className="flex flex-wrap gap-2">
            {equipment.primaryMuscles.map((muscle) => (
              <span
                className="rounded-md border border-blue-500/30 bg-blue-500/20 px-3.5 py-1.5 font-medium text-blue-400 text-sm capitalize"
                key={muscle}
              >
                {muscle}
              </span>
            ))}
          </div>
        </section>

        {/* Secondary Muscles */}
        {equipment.secondaryMuscles.length > 0 && (
          <section className="mb-8">
            <h3 className="mb-3 font-semibold text-lg text-slate-100">
              Secondary Muscles
            </h3>
            <div className="flex flex-wrap gap-2">
              {equipment.secondaryMuscles.map((muscle) => (
                <span
                  className="rounded-md border border-purple-500/30 bg-purple-500/20 px-3.5 py-1.5 font-medium text-purple-400 text-sm capitalize"
                  key={muscle}
                >
                  {muscle}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Instructions */}
        <section className="mb-8">
          <h3 className="mb-3 font-semibold text-lg text-slate-100">
            Instructions
          </h3>
          <ol className="list-decimal space-y-2 pl-6 text-slate-400">
            {equipment.instructions.map((instruction, index) => (
              <li className="leading-relaxed" key={`instruction-${index + 1}`}>
                {instruction}
              </li>
            ))}
          </ol>
        </section>

        {/* Proper Form */}
        <section className="mb-8">
          <h3 className="mb-3 font-semibold text-lg text-slate-100">
            Proper Form
          </h3>
          <ul className="list-disc space-y-2 pl-6 text-slate-400">
            {equipment.properForm.map((form, index) => (
              <li className="leading-relaxed" key={`form-${index + 1}`}>
                {form}
              </li>
            ))}
          </ul>
        </section>

        {/* Common Mistakes */}
        <section className="mb-8 rounded-lg border-amber-500 border-l-4 bg-amber-500/10 p-4">
          <h3 className="mb-3 font-semibold text-lg text-slate-100">
            Common Mistakes
          </h3>
          <ul className="list-disc space-y-2 pl-6 text-slate-400">
            {equipment.commonMistakes.map((mistake, index) => (
              <li className="leading-relaxed" key={`mistake-${index + 1}`}>
                {mistake}
              </li>
            ))}
          </ul>
        </section>

        {/* Alternative Exercises */}
        {equipment.alternatives.length > 0 && (
          <section className="mb-8">
            <h3 className="mb-3 font-semibold text-lg text-slate-100">
              Alternative Exercises
            </h3>
            <div className="flex flex-wrap gap-2">
              {equipment.alternatives.map((alt) => (
                <span
                  className="rounded-lg border border-border bg-surface px-4 py-2 text-slate-400 text-sm"
                  key={alt}
                >
                  {alt}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Safety Warnings */}
        <section className="rounded-lg border-red-500 border-l-4 bg-red-500/10 p-4">
          <h3 className="mb-3 font-semibold text-lg text-slate-100">
            ⚠️ Safety Warnings
          </h3>
          <ul className="list-disc space-y-2 pl-6 text-slate-400">
            {equipment.safetyWarnings.map((warning, index) => (
              <li className="leading-relaxed" key={`warning-${index + 1}`}>
                {warning}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
