import type { ThreeElements } from "@react-three/fiber";

export const Treadmill = (props: ThreeElements["group"]) => (
  <group {...props}>
    {/* ===== BASE FRAME ===== */}
    <mesh castShadow position={[0, 0.1, 0]}>
      <boxGeometry args={[0.8, 0.15, 1.8]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    {/* ===== RUNNING BELT ===== */}
    <mesh castShadow position={[0, 0.19, 0.1]}>
      <boxGeometry args={[0.6, 0.02, 1.5]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.2} roughness={0.9} />
    </mesh>

    {/* Belt side rails */}
    <mesh castShadow position={[-0.32, 0.19, 0.1]}>
      <boxGeometry args={[0.04, 0.03, 1.5]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>
    <mesh castShadow position={[0.32, 0.19, 0.1]}>
      <boxGeometry args={[0.04, 0.03, 1.5]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    {/* ===== FRONT ROLLER ===== */}
    <mesh castShadow position={[0, 0.15, -0.6]} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.06, 0.06, 0.65, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>

    {/* ===== BACK ROLLER ===== */}
    <mesh castShadow position={[0, 0.15, 0.8]} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.06, 0.06, 0.65, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>

    {/* ===== UPRIGHT POSTS ===== */}
    {/* Left post */}
    <mesh castShadow position={[-0.35, 0.65, -0.75]}>
      <boxGeometry args={[0.06, 1.1, 0.06]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>
    {/* Right post */}
    <mesh castShadow position={[0.35, 0.65, -0.75]}>
      <boxGeometry args={[0.06, 1.1, 0.06]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    {/* ===== CONSOLE/DISPLAY ===== */}
    {/* Console base */}
    <mesh castShadow position={[0, 1.15, -0.75]}>
      <boxGeometry args={[0.65, 0.3, 0.08]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>
    {/* Display screen */}
    <mesh castShadow position={[0, 1.18, -0.7]}>
      <boxGeometry args={[0.5, 0.18, 0.02]} />
      <meshStandardMaterial color="#3498db" metalness={0.5} roughness={0.3} />
    </mesh>

    {/* ===== HANDLEBARS ===== */}
    {/* Left handlebar - vertical */}
    <mesh castShadow position={[-0.35, 0.95, -0.7]}>
      <cylinderGeometry args={[0.02, 0.02, 0.5, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>
    {/* Right handlebar - vertical */}
    <mesh castShadow position={[0.35, 0.95, -0.7]}>
      <cylinderGeometry args={[0.02, 0.02, 0.5, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>

    {/* Left handlebar - horizontal grip */}
    <mesh
      castShadow
      position={[-0.35, 0.75, -0.6]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <cylinderGeometry args={[0.02, 0.02, 0.25, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>
    {/* Right handlebar - horizontal grip */}
    <mesh
      castShadow
      position={[0.35, 0.75, -0.6]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <cylinderGeometry args={[0.02, 0.02, 0.25, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>

    {/* ===== SIDE RAILS (SAFETY) ===== */}
    <mesh castShadow position={[-0.38, 0.22, 0.1]}>
      <boxGeometry args={[0.04, 0.04, 1.2]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>
    <mesh castShadow position={[0.38, 0.22, 0.1]}>
      <boxGeometry args={[0.04, 0.04, 1.2]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    {/* ===== MOTOR COVER ===== */}
    <mesh castShadow position={[0, 0.22, -0.7]}>
      <boxGeometry args={[0.6, 0.12, 0.25]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>
  </group>
);
