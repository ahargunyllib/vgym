import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import type { Group, Mesh } from "three";
import type { EquipmentInfo } from "../types/equipment";
import { createEquipmentGeometry } from "../utils/equipmentGeometry";

interface EquipmentProps {
  info: EquipmentInfo;
  isHighlighted: boolean;
  isShowcasing: boolean;
  onPointerOver: () => void;
  onPointerOut: () => void;
  onClick: () => void;
}

export const Equipment = ({
  info,
  isHighlighted,
  isShowcasing,
  onPointerOver,
  onPointerOut,
  onClick,
}: EquipmentProps) => {
  const meshRef = useRef<Mesh | Group>(null);
  const [hovered, setHovered] = useState(false);

  // Gentle rotation animation when showcasing
  useFrame((state) => {
    if (meshRef.current && isShowcasing) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const handlePointerOver = () => {
    setHovered(true);
    onPointerOver();
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    setHovered(false);
    onPointerOut();
    document.body.style.cursor = "default";
  };

  const { geometry, material } = createEquipmentGeometry(info);
  const scale = info.scale ?? [1, 1, 1];
  const rotation = info.rotation ?? [0, 0, 0];

  return (
    <group position={info.position}>
      <mesh
        geometry={geometry}
        material={material}
        onClick={onClick}
        onPointerOut={handlePointerOut}
        onPointerOver={handlePointerOver}
        ref={meshRef}
        rotation={rotation}
        scale={scale}
      >
        {(isHighlighted || hovered) && (
          <meshStandardMaterial
            color={hovered ? 0x60_a5_fa : 0x3b_82_f6}
            emissive={hovered ? 0x3b_82_f6 : 0x1e_40_af}
            emissiveIntensity={0.5}
            metalness={0.7}
            roughness={0.3}
          />
        )}
      </mesh>

      {/* Hover glow effect */}
      {(isHighlighted || hovered) && (
        <pointLight
          color={0x3b_82_f6}
          distance={5}
          intensity={1.5}
          position={[0, 1, 0]}
        />
      )}
    </group>
  );
};
