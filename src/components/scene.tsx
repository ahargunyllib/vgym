import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BenchPress } from "./equipment/BenchPress";
import { Dumbbell } from "./equipment/Dumbbell";
import { Kettlebell } from "./equipment/Kettlebell";

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

      {/* Hemisphere light with cool gym atmosphere */}
      <hemisphereLight color="#e3f2ff" groundColor="#9e9e9e" intensity={0.5} />

      {/* Ambient light for soft fill illumination */}
      <ambientLight intensity={0.2} />

      {/* Main overhead light - bright gym lighting */}
      <directionalLight
        castShadow
        color="#f0f8ff"
        intensity={1.0}
        position={[0, 5, 0]}
        shadow-bias={-0.0005}
        shadow-camera-bottom={-3}
        shadow-camera-far={15}
        shadow-camera-left={-3}
        shadow-camera-near={0.1}
        shadow-camera-right={3}
        shadow-camera-top={3}
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
      />

      {/* Orange accent light - top middle */}
      <pointLight
        color="#ff8800"
        decay={2}
        distance={7}
        intensity={2.0}
        position={[0, H / 2 - 0.3, 0]}
      />

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

      {/* Equipment */}
      <Dumbbell
        position={[1.2, -H / 2 + 0.1, 0.8]}
        rotation={[0, 0, Math.PI / 2]}
      />
      <Kettlebell position={[-0.8, -H / 2 + 0.12, -1.0]} />
      <BenchPress position={[-1.3, -H / 2, -0.8]} />
    </Canvas>
  );
};
