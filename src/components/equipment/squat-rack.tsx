import type { ThreeElements } from "@react-three/fiber";

export const SquatRack = (props: ThreeElements["group"]) => (
  <group {...props}>
    {/* Base frame - front left foot */}
    <mesh castShadow position={[-0.5, 0.025, 0.4]}>
      <boxGeometry args={[0.1, 0.05, 0.8]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    {/* Base frame - front right foot */}
    <mesh castShadow position={[0.5, 0.025, 0.4]}>
      <boxGeometry args={[0.1, 0.05, 0.8]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    {/* Base frame - back left foot */}
    <mesh castShadow position={[-0.5, 0.025, -0.4]}>
      <boxGeometry args={[0.1, 0.05, 0.8]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    {/* Base frame - back right foot */}
    <mesh castShadow position={[0.5, 0.025, -0.4]}>
      <boxGeometry args={[0.1, 0.05, 0.8]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    {/* Left vertical post - front */}
    <mesh castShadow position={[-0.5, 1.0, 0.35]}>
      <boxGeometry args={[0.08, 2.0, 0.08]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    {/* Right vertical post - front */}
    <mesh castShadow position={[0.5, 1.0, 0.35]}>
      <boxGeometry args={[0.08, 2.0, 0.08]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    {/* Left vertical post - back */}
    <mesh castShadow position={[-0.5, 1.0, -0.35]}>
      <boxGeometry args={[0.08, 2.0, 0.08]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    {/* Right vertical post - back */}
    <mesh castShadow position={[0.5, 1.0, -0.35]}>
      <boxGeometry args={[0.08, 2.0, 0.08]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    {/* Top cross bar - front */}
    <mesh castShadow position={[0, 1.95, 0.35]} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.025, 0.025, 1.0, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>

    {/* Top cross bar - back */}
    <mesh castShadow position={[0, 1.95, -0.35]} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.025, 0.025, 1.0, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>

    {/* Top cross bar - left side */}
    <mesh castShadow position={[-0.5, 1.95, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.025, 0.025, 0.7, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>

    {/* Top cross bar - right side */}
    <mesh castShadow position={[0.5, 1.95, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.025, 0.025, 0.7, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>

    {/* J-hooks / Barbell holders - left */}
    <mesh castShadow position={[-0.5, 1.2, 0.42]}>
      <boxGeometry args={[0.12, 0.08, 0.15]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>
    <mesh castShadow position={[-0.5, 1.26, 0.48]}>
      <boxGeometry args={[0.12, 0.2, 0.03]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>

    {/* J-hooks / Barbell holders - right */}
    <mesh castShadow position={[0.5, 1.2, 0.42]}>
      <boxGeometry args={[0.12, 0.08, 0.15]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>
    <mesh castShadow position={[0.5, 1.26, 0.48]}>
      <boxGeometry args={[0.12, 0.2, 0.03]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>

    {/* Safety bars - left */}
    <mesh castShadow position={[-0.55, 0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.02, 0.02, 0.7, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>

    {/* Safety bars - right */}
    <mesh castShadow position={[0.55, 0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.02, 0.02, 0.7, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>

    {/* Barbell bar */}
    <mesh castShadow position={[0, 1.25, 0.42]} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.025, 0.025, 1.8, 16]} />
      <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.2} />
    </mesh>

    {/* Weight plates - left side */}
    <mesh
      castShadow
      position={[-0.75, 1.25, 0.42]}
      rotation={[0, 0, Math.PI / 2]}
    >
      <cylinderGeometry args={[0.18, 0.18, 0.04, 32]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.3} />
    </mesh>
    <mesh
      castShadow
      position={[-0.7, 1.25, 0.42]}
      rotation={[0, 0, Math.PI / 2]}
    >
      <cylinderGeometry args={[0.18, 0.18, 0.04, 32]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.3} />
    </mesh>

    {/* Weight plates - right side */}
    <mesh
      castShadow
      position={[0.75, 1.25, 0.42]}
      rotation={[0, 0, Math.PI / 2]}
    >
      <cylinderGeometry args={[0.18, 0.18, 0.04, 32]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.3} />
    </mesh>
    <mesh
      castShadow
      position={[0.7, 1.25, 0.42]}
      rotation={[0, 0, Math.PI / 2]}
    >
      <cylinderGeometry args={[0.18, 0.18, 0.04, 32]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.3} />
    </mesh>

    {/* Weight plate storage pegs - left */}
    <mesh
      castShadow
      position={[-0.5, 0.4, -0.5]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <cylinderGeometry args={[0.02, 0.02, 0.25, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>

    {/* Weight plate storage pegs - right */}
    <mesh castShadow position={[0.5, 0.4, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.02, 0.02, 0.25, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>
  </group>
);
