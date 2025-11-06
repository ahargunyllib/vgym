import type { EquipmentInfo } from "../types/equipment";
import "./InfoPanel.css";

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
    beginner: "#10b981",
    intermediate: "#f59e0b",
    advanced: "#ef4444",
  };

  const categoryIcons = {
    cardio: "❤️",
    strength: "💪",
    functional: "🎯",
  };

  return (
    <div aria-labelledby="equipment-name" className="info-panel" role="dialog">
      <div className="info-panel-header">
        <h2 className="info-panel-title" id="equipment-name">
          <span className="category-icon">
            {categoryIcons[equipment.category]}
          </span>
          {equipment.name}
        </h2>
        <button
          aria-label="Close information panel"
          className="close-button"
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

      <div className="info-panel-content">
        <div className="equipment-meta">
          <span className="category-badge">{equipment.category}</span>
          <span
            className="difficulty-badge"
            style={{ backgroundColor: difficultyColors[equipment.difficulty] }}
          >
            {equipment.difficulty}
          </span>
        </div>

        <p className="equipment-description">{equipment.description}</p>

        <section className="info-section">
          <h3>Primary Muscles</h3>
          <div className="muscle-tags">
            {equipment.primaryMuscles.map((muscle) => (
              <span className="muscle-tag primary" key={muscle}>
                {muscle}
              </span>
            ))}
          </div>
        </section>

        {equipment.secondaryMuscles.length > 0 && (
          <section className="info-section">
            <h3>Secondary Muscles</h3>
            <div className="muscle-tags">
              {equipment.secondaryMuscles.map((muscle) => (
                <span className="muscle-tag secondary" key={muscle}>
                  {muscle}
                </span>
              ))}
            </div>
          </section>
        )}

        <section className="info-section">
          <h3>Instructions</h3>
          <ol className="instruction-list">
            {equipment.instructions.map((instruction, index) => (
              <li key={`instruction-${index + 1}`}>{instruction}</li>
            ))}
          </ol>
        </section>

        <section className="info-section">
          <h3>Proper Form</h3>
          <ul className="form-list">
            {equipment.properForm.map((form, index) => (
              <li key={`form-${index + 1}`}>{form}</li>
            ))}
          </ul>
        </section>

        <section className="info-section warning">
          <h3>Common Mistakes</h3>
          <ul className="mistakes-list">
            {equipment.commonMistakes.map((mistake, index) => (
              <li key={`mistake-${index + 1}`}>{mistake}</li>
            ))}
          </ul>
        </section>

        {equipment.alternatives.length > 0 && (
          <section className="info-section">
            <h3>Alternative Exercises</h3>
            <div className="alternatives">
              {equipment.alternatives.map((alt) => (
                <span className="alternative-tag" key={alt}>
                  {alt}
                </span>
              ))}
            </div>
          </section>
        )}

        <section className="info-section danger">
          <h3>⚠️ Safety Warnings</h3>
          <ul className="safety-list">
            {equipment.safetyWarnings.map((warning, index) => (
              <li key={`warning-${index + 1}`}>{warning}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
