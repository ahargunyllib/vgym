import type { ThreeElements } from "@react-three/fiber";

export const DipStation = (props: ThreeElements["group"]) => (
  <group {...props}>
    <mesh
      castShadow
      position={[-0.25, 0.025, 0]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <boxGeometry args={[0.8, 0.05, 0.1]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    <mesh castShadow position={[0.25, 0.025, 0]} rotation={[0, Math.PI / 2, 0]}>
      <boxGeometry args={[0.8, 0.05, 0.1]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    <mesh castShadow position={[-0.25, 0.6, -0.15]}>
      <boxGeometry args={[0.08, 1.2, 0.08]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    <mesh castShadow position={[0.25, 0.6, -0.15]}>
      <boxGeometry args={[0.08, 1.2, 0.08]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>

    <mesh
      castShadow
      position={[-0.25, 1.15, 0.1]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <cylinderGeometry args={[0.025, 0.025, 0.5, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>

    <mesh
      castShadow
      position={[0.25, 1.15, 0.1]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <cylinderGeometry args={[0.025, 0.025, 0.5, 16]} />
      <meshStandardMaterial color="#2c2c2c" metalness={0.4} roughness={0.6} />
    </mesh>

    <mesh castShadow position={[0, 0.5, -0.15]} rotation={[0, 0, Math.PI / 2]}>
      <boxGeometry args={[0.06, 0.5, 0.06]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
    </mesh>
  </group>
);
