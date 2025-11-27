import { equipmentData } from "../../data/equipment";

type CategoryType = "Cardio" | "Strength" | "Functional";
type DifficultyType = "Beginner" | "Intermediate" | "Advanced";

type EquipmentListPanelProps = {
  onEquipmentClick: (id: string) => void;
  selectedEquipmentId: string | null;
};

const categoryColors: Record<CategoryType, string> = {
  Cardio: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Strength: "bg-red-500/20 text-red-300 border-red-500/30",
  Functional: "bg-green-500/20 text-green-300 border-green-500/30",
};

const difficultyColors: Record<DifficultyType, string> = {
  Beginner: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Intermediate: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  Advanced: "bg-rose-500/20 text-rose-300 border-rose-500/30",
};

export function EquipmentListPanel({
  onEquipmentClick,
  selectedEquipmentId,
}: EquipmentListPanelProps) {
  const equipmentList = Object.values(equipmentData);

  return (
    <div className="fixed top-0 left-0 z-40 hidden h-full w-72 overflow-y-auto border-border border-r bg-card/80 shadow-lg backdrop-blur-sm sm:block">
      <div className="p-4">
        <h2 className="mb-4 font-bold text-foreground text-lg">
          Equipment List
        </h2>
        <div className="space-y-2">
          {equipmentList.map((equipment) => (
            <button
              className={`w-full rounded-lg border p-3 text-left transition-all hover:border-primary hover:bg-muted/50 ${
                selectedEquipmentId === equipment.id
                  ? "border-primary bg-muted/50"
                  : "border-border bg-card/50"
              }`}
              key={equipment.id}
              onClick={() => onEquipmentClick(equipment.id)}
              type="button"
            >
              <div className="mb-2 font-medium text-foreground text-sm">
                {equipment.name}
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span
                  className={`rounded border px-2 py-0.5 text-xs ${
                    categoryColors[equipment.category]
                  }`}
                >
                  {equipment.category}
                </span>
                <span
                  className={`rounded border px-2 py-0.5 text-xs ${
                    difficultyColors[equipment.difficulty]
                  }`}
                >
                  {equipment.difficulty}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
