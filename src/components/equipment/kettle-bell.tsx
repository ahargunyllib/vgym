import type { ThreeElements } from "@react-three/fiber";

export const Kettlebell = (props: ThreeElements["group"]) => (
  <group {...props}>
    <mesh castShadow>
      <sphereGeometry args={[0.12, 32, 32]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
    </mesh>
    <mesh castShadow position={[0, 0.15, 0]}>
      <torusGeometry args={[0.08, 0.03, 16, 32]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
    </mesh>
  </group>
);
