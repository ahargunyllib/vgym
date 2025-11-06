import { useCallback, useState } from "react";
import { equipmentData } from "../data/equipmentData";
import { EquipmentList } from "./EquipmentList";
import { InfoPanel } from "./InfoPanel";
import { Scene } from "./Scene";
import "./GymExperience.css";

export const GymExperience = () => {
  const [highlightedEquipment, setHighlightedEquipment] = useState<
    string | null
  >(null);
  const [showcaseEquipment, setShowcaseEquipment] = useState<string | null>(
    null
  );

  const handleEquipmentHover = useCallback((id: string | null) => {
    setHighlightedEquipment(id);
  }, []);

  const handleEquipmentClick = useCallback((id: string) => {
    setShowcaseEquipment(id);
  }, []);

  const handleCloseShowcase = useCallback(() => {
    setShowcaseEquipment(null);
  }, []);

  const selectedEquipmentInfo = showcaseEquipment
    ? equipmentData.find((e) => e.id === showcaseEquipment) || null
    : null;

  return (
    <div className="gym-experience">
      {/* Equipment List Sidebar */}
      <EquipmentList
        onEquipmentSelect={handleEquipmentClick}
        selectedEquipment={showcaseEquipment}
      />

      {/* 3D Scene */}
      <div className="scene-container">
        <Scene
          highlightedEquipment={highlightedEquipment}
          onEquipmentClick={handleEquipmentClick}
          onEquipmentHover={handleEquipmentHover}
          showcaseEquipment={showcaseEquipment}
        />
      </div>

      {/* Info Panel */}
      <InfoPanel
        equipment={selectedEquipmentInfo}
        isVisible={showcaseEquipment !== null}
        onClose={handleCloseShowcase}
      />

      {/* Controls Overlay */}
      {showcaseEquipment && (
        <div className="controls-overlay">
          <button
            aria-label="Back to gym view"
            className="back-button"
            onClick={handleCloseShowcase}
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
              <line x1="19" x2="5" y1="12" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back to Gym</span>
          </button>

          <div className="controls-hint">
            <div className="hint-item">
              <span className="hint-icon">🖱️</span>
              <span>Drag to rotate</span>
            </div>
            <div className="hint-item">
              <span className="hint-icon">🔍</span>
              <span>Scroll to zoom</span>
            </div>
          </div>
        </div>
      )}

      {/* Branding */}
      <div className="branding">
        <h1>VGym</h1>
        <p>Interactive 3D Gym Equipment Guide</p>
      </div>
    </div>
  );
};
