import { useEffect, useRef } from "react";
import type { Group, Mesh } from "three";
import type { EquipmentData } from "../../types/equipment";

type EquipmentProps = {
  equipment: EquipmentData;
  isHovered: boolean;
  onMeshRef: (mesh: Mesh | null) => void;
};

export default function Equipment({
  equipment,
  isHovered,
  onMeshRef,
}: EquipmentProps) {
  const meshRef = useRef<Mesh | Group>(null);

  // Pass mesh ref to parent for raycasting
  useEffect(() => {
    if (meshRef.current) {
      onMeshRef(meshRef.current as Mesh);
    }
    return () => {
      onMeshRef(null);
    };
  }, [onMeshRef]);

  // Apply hover effect
  useEffect(() => {
    if (meshRef.current) {
      // Traverse all children and update materials
      // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: TODO
      meshRef.current.traverse((child) => {
        if ((child as Mesh).isMesh) {
          const mesh = child as Mesh;
          if (Array.isArray(mesh.material)) {
            for (const mat of mesh.material) {
              if ("emissive" in mat) {
                // biome-ignore lint/suspicious/noExplicitAny: TODO
                (mat.emissive as any).setHex(
                  isHovered ? 0x44_44_44 : 0x00_00_00
                );
                // biome-ignore lint/suspicious/noExplicitAny: TODO
                (mat as any).emissiveIntensity = isHovered ? 0.3 : 0;
              }
            }
          } else if ("emissive" in mesh.material) {
            // biome-ignore lint/suspicious/noExplicitAny: TODO
            (mesh.material.emissive as any).setHex(
              isHovered ? 0x44_44_44 : 0x00_00_00
            );
            // biome-ignore lint/suspicious/noExplicitAny: TODO
            (mesh.material as any).emissiveIntensity = isHovered ? 0.3 : 0;
          }
        }
      });
    }
  }, [isHovered]);

  const Comp = equipment.component;

  return (
    <Comp
      position={equipment.position}
      ref={meshRef}
      rotation={equipment.rotation}
    />
  );
}
