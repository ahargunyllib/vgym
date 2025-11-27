import type { ThreeElements } from "@react-three/fiber";

export const BenchPress = (props: ThreeElements["group"]) => {
  return (
    <group {...props}>
      {/* ===== BENCH PAD ===== */}
      {/* Main seat pad */}
      <mesh castShadow position={[0, 0.48, 0.15]}>
        <boxGeometry args={[0.4, 0.08, 0.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.2} roughness={0.9} />
      </mesh>

      {/* Back rest pad */}
      <mesh castShadow position={[0, 0.48, -0.35]}>
        <boxGeometry args={[0.4, 0.08, 0.55]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.2} roughness={0.9} />
      </mesh>

      {/* Pad cushion top (rounded effect) */}
      <mesh castShadow position={[0, 0.53, 0.15]}>
        <boxGeometry args={[0.36, 0.02, 0.46]} />
        <meshStandardMaterial
          color="#2c2c2c"
          metalness={0.1}
          roughness={0.95}
        />
      </mesh>
      <mesh castShadow position={[0, 0.53, -0.35]}>
        <boxGeometry args={[0.36, 0.02, 0.51]} />
        <meshStandardMaterial
          color="#2c2c2c"
          metalness={0.1}
          roughness={0.95}
        />
      </mesh>

      {/* ===== MAIN FRAME ===== */}

      {/* ===== FRONT LEGS ===== */}
      <mesh castShadow position={[0.15, 0.25, 0.35]}>
        <boxGeometry args={[0.06, 0.5, 0.06]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh castShadow position={[-0.15, 0.25, 0.35]}>
        <boxGeometry args={[0.06, 0.5, 0.06]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Front leg connector */}
      <mesh castShadow position={[0, 0.06, 0.35]}>
        <boxGeometry args={[0.36, 0.04, 0.06]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* ===== BACK FRAME (UPRIGHTS) ===== */}
      {/* Main vertical uprights */}
      <mesh castShadow position={[0.25, 0.6, -0.6]}>
        <boxGeometry args={[0.08, 1.2, 0.08]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh castShadow position={[-0.25, 0.6, -0.6]}>
        <boxGeometry args={[0.08, 1.2, 0.08]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Upright base feet */}
      <mesh castShadow position={[0.25, 0.025, -0.6]}>
        <boxGeometry args={[0.12, 0.05, 0.25]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh castShadow position={[-0.25, 0.025, -0.6]}>
        <boxGeometry args={[0.12, 0.05, 0.25]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Cross beam connecting uprights at bottom */}
      <mesh castShadow position={[0, 0.15, -0.6]}>
        <boxGeometry args={[0.5, 0.06, 0.06]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Cross beam connecting uprights at top */}
      <mesh castShadow position={[0, 1.15, -0.6]}>
        <boxGeometry args={[0.5, 0.06, 0.06]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* ===== J-HOOKS / BARBELL HOLDERS ===== */}
      {/* Left J-hook base */}
      <mesh castShadow position={[0.25, 0.95, -0.52]}>
        <boxGeometry args={[0.1, 0.06, 0.12]} />
        <meshStandardMaterial color="#2c2c2c" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Left J-hook vertical lip */}
      <mesh castShadow position={[0.25, 1.0, -0.45]}>
        <boxGeometry args={[0.1, 0.16, 0.03]} />
        <meshStandardMaterial color="#2c2c2c" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Right J-hook base */}
      <mesh castShadow position={[-0.25, 0.95, -0.52]}>
        <boxGeometry args={[0.1, 0.06, 0.12]} />
        <meshStandardMaterial color="#2c2c2c" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Right J-hook vertical lip */}
      <mesh castShadow position={[-0.25, 1.0, -0.45]}>
        <boxGeometry args={[0.1, 0.16, 0.03]} />
        <meshStandardMaterial color="#2c2c2c" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* ===== SAFETY SPOTTERS (optional arms) ===== */}

      {/* ===== BARBELL ===== */}
      {/* Main bar */}
      <mesh
        castShadow
        position={[0, 0.98, -0.52]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.028, 0.028, 1.8, 16]} />
        <meshStandardMaterial
          color="#a0a0a0"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      {/* Bar sleeve collars (where weights attach) */}
      <mesh
        castShadow
        position={[0.42, 0.98, -0.52]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.035, 0.035, 0.04, 16]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh
        castShadow
        position={[-0.42, 0.98, -0.52]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.035, 0.035, 0.04, 16]} />
        <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* ===== WEIGHT PLATES - LEFT SIDE ===== */}
      {/* Large plate */}
      <mesh
        castShadow
        position={[0.55, 0.98, -0.52]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.22, 0.22, 0.03, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh
        castShadow
        position={[0.59, 0.98, -0.52]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.22, 0.22, 0.03, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Medium plate */}
      <mesh
        castShadow
        position={[0.63, 0.98, -0.52]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.18, 0.18, 0.025, 32]} />
        <meshStandardMaterial color="#2c2c2c" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Collar clip */}
      <mesh
        castShadow
        position={[0.68, 0.98, -0.52]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.04, 0.04, 0.03, 16]} />
        <meshStandardMaterial color="#e74c3c" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* ===== WEIGHT PLATES - RIGHT SIDE ===== */}
      {/* Large plate */}
      <mesh
        castShadow
        position={[-0.55, 0.98, -0.52]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.22, 0.22, 0.03, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh
        castShadow
        position={[-0.59, 0.98, -0.52]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.22, 0.22, 0.03, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Medium plate */}
      <mesh
        castShadow
        position={[-0.63, 0.98, -0.52]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.18, 0.18, 0.025, 32]} />
        <meshStandardMaterial color="#2c2c2c" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Collar clip */}
      <mesh
        castShadow
        position={[-0.68, 0.98, -0.52]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.04, 0.04, 0.03, 16]} />
        <meshStandardMaterial color="#e74c3c" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* ===== FLOOR STABILIZERS ===== */}
      {/* Rubber feet */}
      <mesh castShadow position={[0.15, 0.01, 0.35]}>
        <cylinderGeometry args={[0.04, 0.045, 0.02, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.1} roughness={0.9} />
      </mesh>
      <mesh castShadow position={[-0.15, 0.01, 0.35]}>
        <cylinderGeometry args={[0.04, 0.045, 0.02, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.1} roughness={0.9} />
      </mesh>
    </group>
  );
};
