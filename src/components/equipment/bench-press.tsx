import type { ThreeElements } from "@react-three/fiber";

export const BenchPress = (props: ThreeElements["group"]) => {
  return (
    <group {...props}>
      {/* Bench pad/seat */}
      <mesh castShadow position={[0, 0.45, 0]}>
        <boxGeometry args={[0.35, 0.1, 1.2]} />
        <meshStandardMaterial color="#2c2c2c" metalness={0.2} roughness={0.8} />
      </mesh>

      {/* Frame legs - 4 corners */}
      <mesh castShadow position={[0.15, 0.2, 0.5]}>
        <boxGeometry args={[0.05, 0.4, 0.05]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh castShadow position={[-0.15, 0.2, 0.5]}>
        <boxGeometry args={[0.05, 0.4, 0.05]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh castShadow position={[0.15, 0.2, -0.5]}>
        <boxGeometry args={[0.05, 0.4, 0.05]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh castShadow position={[-0.15, 0.2, -0.5]}>
        <boxGeometry args={[0.05, 0.4, 0.05]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Barbell support posts */}
      <mesh castShadow position={[0.25, 0.75, -0.55]}>
        <cylinderGeometry args={[0.04, 0.04, 0.6, 16]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh castShadow position={[-0.25, 0.75, -0.55]}>
        <cylinderGeometry args={[0.04, 0.04, 0.6, 16]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Barbell bar */}
      <mesh
        castShadow
        position={[0, 1.0, -0.55]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.025, 0.025, 1.2, 16]} />
        <meshStandardMaterial color="#2c3e50" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Weight plates - left side */}
      <mesh
        castShadow
        position={[0.55, 1.0, -0.55]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
        <meshStandardMaterial color="#34495e" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh
        castShadow
        position={[0.48, 1.0, -0.55]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
        <meshStandardMaterial color="#34495e" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Weight plates - right side */}
      <mesh
        castShadow
        position={[-0.55, 1.0, -0.55]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
        <meshStandardMaterial color="#34495e" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh
        castShadow
        position={[-0.48, 1.0, -0.55]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
        <meshStandardMaterial color="#34495e" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  );
};
