import { equipmentData } from "../data/equipmentData";
import type { EquipmentCategory } from "../types/equipment";

interface EquipmentListProps {
  onEquipmentSelect: (id: string) => void;
  selectedEquipment: string | null;
}

export const EquipmentList = ({
  onEquipmentSelect,
  selectedEquipment,
}: EquipmentListProps) => {
  const categories: EquipmentCategory[] = ["cardio", "strength", "functional"];

  const categoryIcons = {
    cardio: "❤️",
    strength: "💪",
    functional: "🎯",
  };

  return (
    <nav
      aria-label="Equipment list"
      className="glass fixed top-0 left-0 z-[100] flex h-screen w-full max-w-[320px] flex-col shadow-2xl"
      role="navigation"
    >
      {/* Header */}
      <div className="border-border border-b bg-card/50 p-6">
        <h2 className="font-bold text-2xl text-foreground">Equipment</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {categories.map((category) => {
          const categoryEquipment = equipmentData.filter(
            (e) => e.category === category
          );

          if (categoryEquipment.length === 0) return null;

          return (
            <div className="mb-6" key={category}>
              <h3 className="mb-3 flex items-center gap-2 px-2 font-semibold text-base text-muted-foreground uppercase tracking-wider">
                <span className="text-xl">{categoryIcons[category]}</span>
                <span className="flex-1">{category}</span>
              </h3>

              <ul className="flex flex-col gap-1" role="list">
                {categoryEquipment.map((equipment) => (
                  <li key={equipment.id}>
                    <button
                      aria-label={`View ${equipment.name}`}
                      className={`flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3.5 text-left transition-all duration-250 ${
                        selectedEquipment === equipment.id
                          ? "bg-primary font-semibold text-primary-foreground"
                          : "bg-transparent text-muted-foreground hover:translate-x-1 hover:bg-muted hover:text-foreground"
                      }`}
                      onClick={() => onEquipmentSelect(equipment.id)}
                      type="button"
                    >
                      <span className="flex-1 font-medium">
                        {equipment.name}
                      </span>
                      <span
                        className={`rounded px-2 py-1 text-xs capitalize ${
                          selectedEquipment === equipment.id
                            ? "bg-primary-foreground/20"
                            : "bg-muted-foreground/10"
                        }`}
                      >
                        {equipment.difficulty}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </nav>
  );
};
