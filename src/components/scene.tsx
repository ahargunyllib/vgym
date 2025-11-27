import { Canvas } from "@react-three/fiber";
import { Suspense, useCallback, useRef, useState } from "react";
import { getEquipmentById } from "../data/equipment";
import type { EquipmentData } from "../types/equipment";
import { SceneContent } from "./scene-content";
import { Crosshair } from "./ui/crosshair";
import { EquipmentDetailPanel } from "./ui/equipment-detail-panel";
import { Loading } from "./ui/loading";
import { MobileMessage } from "./ui/mobile-message";

export const Scene = () => {
  const [selectedEquipment, setSelectedEquipment] =
    useState<EquipmentData | null>(null);
  const controlsRef = useRef<{ lock: () => void; unlock: () => void } | null>(
    null
  );

  const handleEquipmentHover = useCallback((id: string | null) => {
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
      <Suspense fallback={<Loading />}>
        <Canvas fallback={<div>Sorry no WebGL supported!</div>} shadows="soft">
          <SceneContent
            controlsRef={controlsRef}
            onEquipmentHover={handleEquipmentHover}
            selectedEquipment={selectedEquipment}
          />
        </Canvas>

        <div className="-translate-x-1/2 fixed bottom-6 left-1/2 z-30 text-center">
          <h1 className="mb-2 font-bold text-3xl text-primary tracking-wider">
            VGYM
          </h1>
          <p className="rounded-lg border border-border bg-card/90 px-4 py-2 text-muted-foreground text-xs backdrop-blur-sm">
            WASD to move • Look at equipment to view details •{" "}
            {selectedEquipment
              ? "Click to dismiss"
              : "Press ESC to show cursor"}
          </p>
        </div>

        {/* Equipment Detail Panel - Auto-show on hover */}
        <EquipmentDetailPanel
          equipment={selectedEquipment}
          onClose={handleClosePanel}
        />
      </Suspense>

      {/* Mobile Message - Shows on mobile devices */}
      <MobileMessage />

      <Crosshair />
    </>
  );
};
