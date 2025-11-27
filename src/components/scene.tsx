import { Canvas } from "@react-three/fiber";
import { useCallback, useState } from "react";
import { getEquipmentById } from "../data/equipment";
import type { EquipmentData } from "../types/equipment";
import { SceneContent } from "./scene-content";
import { EquipmentDetailPanel } from "./ui/equipment-detail-panel";

export const Scene = () => {
  const [selectedEquipment, setSelectedEquipment] =
    useState<EquipmentData | null>(null);

  const handleEquipmentClick = useCallback((id: string | null) => {
    if (!id) {
      setSelectedEquipment(null);
      return;
    }

    const equipment = getEquipmentById(id);
    setSelectedEquipment(equipment || null);
  }, []);

  const handleClosePanel = useCallback(() => {
    setSelectedEquipment(null);
  }, []);

  return (
    <>
      <Canvas fallback={<div>Sorry no WebGL supported!</div>} shadows="soft">
        <SceneContent
          onEquipmentClick={handleEquipmentClick}
          selectedEquipment={selectedEquipment}
        />
      </Canvas>

      {/* Back to Gym Button */}
      {selectedEquipment && (
        <button
          className="fixed top-6 left-6 z-30 flex items-center gap-2 rounded-lg border border-border bg-card/90 px-4 py-2 font-medium text-foreground text-sm shadow-lg backdrop-blur-sm transition-colors hover:bg-muted"
          onClick={handleClosePanel}
          type="button"
        >
          <svg
            aria-label="Back arrow"
            fill="none"
            height="16"
            role="img"
            viewBox="0 0 15 15"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          Back to Gym
        </button>
      )}

      <EquipmentDetailPanel
        equipment={selectedEquipment}
        onClose={handleClosePanel}
      />
    </>
  );
};
