import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Scene = () => {
  // Room dimensions (meters)
  const W = 5; // width  (x)
  const H = 3; // height (y)
  const D = 5; // depth  (z)

  return (
    <Canvas
      camera={{
        fov: 50,
        position: [0, -H / 2 + 1.65, D / 2 - 1],
      }}
      fallback={<div>Sorry no WebGL supported!</div>}
      shadows="soft"
    >
      <OrbitControls
        dampingFactor={0.05}
        enableDamping
        enableZoom={false}
        maxPolarAngle={(2 * Math.PI) / 3}
        minPolarAngle={Math.PI / 3}
        target={[0, -H / 2 + 1.4, 0]}
      />

      <ambientLight intensity={1} />

      {/* Floor */}
      <mesh
        position={[0, -H / 2, 0]}
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[W, D]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>

      {/* Front wall */}
      <mesh castShadow position={[0, 0, -D / 2]}>
        <planeGeometry args={[W, H]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>

      {/* Back wall */}
      <mesh castShadow position={[0, 0, D / 2]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[W, H]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>

      {/* Left wall */}
      <mesh castShadow position={[-W / 2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[D, H]} />
        <meshStandardMaterial color="#d0d0d0" />
      </mesh>

      {/* Right wall */}
      <mesh castShadow position={[W / 2, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[D, H]} />
        <meshStandardMaterial color="#d0d0d0" />
      </mesh>

      {/* Ceiling */}
      <mesh
        position={[0, H / 2, 0]}
        receiveShadow
        rotation={[Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[W, D]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
    </Canvas>
  );
};
