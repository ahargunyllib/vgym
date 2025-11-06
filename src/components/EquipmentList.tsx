import { equipmentData } from "../data/equipmentData";
import type { EquipmentCategory } from "../types/equipment";
import "./EquipmentList.css";

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
    <div
      aria-label="Equipment list"
      className="equipment-list"
      role="navigation"
    >
      <div className="equipment-list-header">
        <h2>Equipment</h2>
      </div>

      <div className="equipment-list-content">
        {categories.map((category) => {
          const categoryEquipment = equipmentData.filter(
            (e) => e.category === category
          );

          if (categoryEquipment.length === 0) return null;

          return (
            <div className="equipment-category" key={category}>
              <h3 className="category-title">
                <span className="category-icon">{categoryIcons[category]}</span>
                <span className="category-name">{category}</span>
              </h3>

              <ul className="equipment-items" role="list">
                {categoryEquipment.map((equipment) => (
                  <li key={equipment.id}>
                    <button
                      aria-label={`View ${equipment.name}`}
                      className={`equipment-item ${selectedEquipment === equipment.id ? "active" : ""}`}
                      onClick={() => onEquipmentSelect(equipment.id)}
                      type="button"
                    >
                      <span className="equipment-name">{equipment.name}</span>
                      <span className="equipment-difficulty">
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
    </div>
  );
};
