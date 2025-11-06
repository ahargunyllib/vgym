import { useCallback, useState } from "react";
import { equipmentData } from "../data/equipmentData";
import { EquipmentList } from "./EquipmentList";
import { InfoPanel } from "./InfoPanel";
import { Scene } from "./Scene";

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
    <div className="relative h-screen w-full overflow-hidden">
      {/* Equipment List Sidebar */}
      <EquipmentList
        onEquipmentSelect={handleEquipmentClick}
        selectedEquipment={showcaseEquipment}
      />

      {/* 3D Scene */}
      <div className="absolute inset-0 h-full w-full">
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
        <div className="-translate-x-1/2 fixed top-6 left-1/2 z-50 flex flex-col items-center gap-4">
          <button
            aria-label="Back to gym view"
            className="btn btn-default hover:-translate-y-0.5 gap-3 rounded-full px-6 py-3.5 shadow-lg hover:shadow-xl"
            onClick={handleCloseShowcase}
            type="button"
          >
            <svg
              className="group-hover:-translate-x-1 transition-transform duration-250"
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

          <div className="glass flex gap-6 rounded-full px-5 py-3 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <span className="text-lg">🖱️</span>
              <span>Drag to rotate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🔍</span>
              <span>Scroll to zoom</span>
            </div>
          </div>
        </div>
      )}

      {/* Branding */}
      <div className="-translate-x-1/2 pointer-events-none fixed bottom-8 left-1/2 z-10 text-center">
        <h1 className="mb-2 font-black text-5xl text-gradient">VGym</h1>
        <p className="font-medium text-base text-muted-foreground">
          Interactive 3D Gym Equipment Guide
        </p>
      </div>
    </div>
  );
};
