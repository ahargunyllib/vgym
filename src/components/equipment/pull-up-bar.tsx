import type { ThreeElements } from "@react-three/fiber";

export const PullUpBar = (props: ThreeElements["group"]) => (
  <group {...props}>
    {/* ===== BASE FRAME ===== */}
    {/* Left base foot */}
    <mesh castShadow position={[-0.4, 0.025, 0]}>
      <boxGeometry args={[0.1, 0.05, 0.6]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>
    {/* Right base foot */}
    <mesh castShadow position={[0.4, 0.025, 0]}>
      <boxGeometry args={[0.1, 0.05, 0.6]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    {/* ===== VERTICAL POSTS ===== */}
    {/* Left post */}
    <mesh castShadow position={[-0.4, 1.1, 0]}>
      <boxGeometry args={[0.08, 2.2, 0.08]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>
    {/* Right post */}
    <mesh castShadow position={[0.4, 1.1, 0]}>
      <boxGeometry args={[0.08, 2.2, 0.08]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    {/* ===== PULL-UP BAR ===== */}
    <mesh castShadow position={[0, 2.15, 0]} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.03, 0.03, 0.88, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>

    {/* ===== SUPPORT BAR ===== */}
    <mesh castShadow position={[0, 1.0, 0]} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.02, 0.02, 0.72, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>
  </group>
);