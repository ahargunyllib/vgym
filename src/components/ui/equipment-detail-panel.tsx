import type { EquipmentData } from "../../types/equipment";

type EquipmentDetailPanelProps = {
  equipment: EquipmentData | null;
  onClose: () => void;
};

export const EquipmentDetailPanel = ({
  equipment,
  onClose,
}: EquipmentDetailPanelProps) => {
  if (!equipment) {
    return null;
  }

  const difficultyColors = {
    Beginner: "bg-green-500/20 text-green-400 border-green-500/50",
    Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
    Advanced: "bg-red-500/20 text-red-400 border-red-500/50",
  };

  const categoryColors = {
    Cardio: "bg-blue-500/20 text-blue-400",
    Strength: "bg-purple-500/20 text-purple-400",
    Functional: "bg-orange-500/20 text-orange-400",
  };

  return (
    <div
      aria-labelledby="equipment-title"
      aria-modal="true"
      className="fixed top-0 right-0 z-50 h-full w-1/4 overflow-y-auto border-border border-l bg-card/80 shadow-lg backdrop-blur-sm"
      role="dialog"
    >
      <div className="z-10 space-y-2 border-border border-b p-6 pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2
              className="mb-2 font-bold text-2xl text-foreground"
              id="equipment-title"
            >
              {equipment.name}
            </h2>
            <p className="text-lg text-muted-foreground">
              {equipment.exerciseName}
            </p>
          </div>
          <button
            aria-label="Close panel"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            onClick={onClose}
            type="button"
          >
            <svg
              aria-label="Close icon"
              fill="none"
              height="20"
              role="img"
              viewBox="0 0 15 15"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          <span
            className={`rounded-full px-3 py-1 font-medium text-xs ${categoryColors[equipment.category]}`}
          >
            {equipment.category}
          </span>
          <span
            className={`rounded-full border px-3 py-1 font-medium text-xs ${difficultyColors[equipment.difficulty]}`}
          >
            {equipment.difficulty}
          </span>
        </div>
      </div>

      <div className="space-y-6 p-6">
        <section className="space-y-2">
          <h3 className="font-semibold text-foreground text-lg">
            Muscles Targeted
          </h3>
          <div className="space-y-3">
            <div className="space-y-1">
              <h4 className="font-medium text-primary text-sm">Primary</h4>
              <ul className="space-y-1">
                {equipment.musclesTargeted.primary.map((muscle) => (
                  <li
                    className="relative pl-4 text-muted-foreground text-sm before:absolute before:left-0 before:text-primary before:content-['•']"
                    key={muscle}
                  >
                    {muscle}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium text-primary text-sm">Secondary</h4>
              <ul className="space-y-1">
                {equipment.musclesTargeted.secondary.map((muscle) => (
                  <li
                    className="relative pl-4 text-muted-foreground text-sm before:absolute before:left-0 before:text-primary before:content-['•']"
                    key={muscle}
                  >
                    {muscle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold text-foreground text-lg">
            Usage Instructions
          </h3>
          <ol className="space-y-2">
            {equipment.usageInstructions.map((instruction, index) => (
              <li
                className="relative pl-6 text-muted-foreground text-sm"
                key={`instruction-${index + 1}`}
              >
                <span className="absolute left-0 font-medium text-primary">
                  {index + 1}.
                </span>
                {instruction}
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold text-foreground text-lg">
            Proper Form Tips
          </h3>
          <ul className="space-y-2">
            {equipment.properFormTips.map((tip, index) => (
              <li
                className="relative pl-4 text-muted-foreground text-sm before:absolute before:left-0 before:text-green-500 before:content-['✓']"
                key={`tip-${index + 1}`}
              >
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold text-foreground text-lg">
            Common Mistakes
          </h3>
          <ul className="space-y-2">
            {equipment.commonMistakes.map((mistake, index) => (
              <li
                className="relative pl-4 text-muted-foreground text-sm before:absolute before:left-0 before:text-red-500 before:content-['✗']"
                key={`mistake-${index + 1}`}
              >
                {mistake}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="space-y-2 rounded-lg border border-destructive/30 bg-destructive/10 p-4">
            <h3 className="flex items-center gap-2 font-semibold text-destructive text-sm">
              <svg
                aria-label="Warning icon"
                fill="none"
                height="16"
                role="img"
                viewBox="0 0 15 15"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
              Safety
            </h3>
            <p className="text-destructive/90 text-sm">{equipment.safety}</p>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold text-foreground text-lg">
            Alternative Exercises
          </h3>
          <div className="flex flex-wrap gap-2">
            {equipment.alternatives.map((alternative) => (
              <span
                className="rounded-md bg-muted px-3 py-1.5 text-muted-foreground text-sm"
                key={alternative}
              >
                {alternative}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
