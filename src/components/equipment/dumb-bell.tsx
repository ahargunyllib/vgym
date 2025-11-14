import type { ThreeElements } from "@react-three/fiber";

export const Dumbbell = (props: ThreeElements["group"]) => {
  return (
    <group {...props}>
      <mesh castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 16]} />
        <meshStandardMaterial color="#2c3e50" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Left weight () */}
      <mesh castShadow position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.1, 16]} />
        <meshStandardMaterial color="#34495e" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Right weight () */}
      <mesh castShadow position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.1, 16]} />
        <meshStandardMaterial color="#34495e" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  );
};
