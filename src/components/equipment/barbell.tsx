import type { ThreeElements } from "@react-three/fiber";

export const Barbell = (props: ThreeElements["group"]) => (
  <group {...props}>
    <mesh castShadow>
      <cylinderGeometry args={[0.05, 0.05, 2.0, 32]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
    </mesh>
    <mesh castShadow position={[0, 0.1, -1]}>
      <cylinderGeometry args={[0.08, 0.08, 0.2, 32]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
    </mesh>
    <mesh castShadow position={[0, 0.1, 1]}>
      <cylinderGeometry args={[0.08, 0.08, 0.2, 32]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
    </mesh>
  </group>
);
