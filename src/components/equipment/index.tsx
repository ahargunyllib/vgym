import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";
import type { EquipmentData } from "../../types/equipment";

type EquipmentProps = {
  equipment: EquipmentData;
  isShowcasing: boolean;
  onClick: () => void;
};

export default function Equipment({
  equipment,
  isShowcasing,
  onClick,
}: EquipmentProps) {
  const meshRef = useRef<Mesh | Group>(null);
  // Gentle rotation animation when showcasing
  // TODO Fix Issue: animating rotation interferes with initial rotation set on equipment
  useFrame((state) => {
    if (meshRef.current && isShowcasing) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      return;
    }

    if (meshRef.current) {
      meshRef.current.rotation.y = equipment.rotation[1];
      return;
    }
  });

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  const Comp = equipment.component;

  return (
    <Comp
      onClick={onClick}
      onPointerOut={handlePointerOut}
      onPointerOver={handlePointerOver}
      position={equipment.position}
      ref={meshRef}
      rotation={equipment.rotation}
    />
  );
}
