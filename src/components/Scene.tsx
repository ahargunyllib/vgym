import {
  Environment,
  Grid,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { equipmentData } from "../data/equipmentData";
import { Equipment } from "./Equipment";

interface SceneProps {
  highlightedEquipment: string | null;
  showcaseEquipment: string | null;
  onEquipmentHover: (id: string | null) => void;
  onEquipmentClick: (id: string) => void;
}

export const Scene = ({
  highlightedEquipment,
  showcaseEquipment,
  onEquipmentHover,
  onEquipmentClick,
}: SceneProps) => {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  // Handle camera transitions when entering/exiting showcase mode
  useEffect(() => {
    if (!(controlsRef.current && cameraRef.current)) return;

    if (showcaseEquipment) {
      const equipment = equipmentData.find((e) => e.id === showcaseEquipment);
      if (equipment) {
        // Smoothly transition camera to showcase position
        const targetPosition = new THREE.Vector3(
          equipment.position[0],
          equipment.position[1] + 1,
          equipment.position[2] + 3
        );

        // Animate camera
        const startPosition = cameraRef.current.position.clone();
        const startTarget = controlsRef.current.target.clone();
        const endTarget = new THREE.Vector3(...equipment.position);

        const duration = 1000; // 1 second
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Ease in-out
          const eased =
            progress < 0.5
              ? 2 * progress * progress
              : 1 - (-2 * progress + 2) ** 2 / 2;

          if (cameraRef.current && controlsRef.current) {
            cameraRef.current.position.lerpVectors(
              startPosition,
              targetPosition,
              eased
            );
            controlsRef.current.target.lerpVectors(
              startTarget,
              endTarget,
              eased
            );
            controlsRef.current.update();
          }

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        animate();
      }
    } else {
      // Return to gym view
      const startPosition = cameraRef.current.position.clone();
      const startTarget = controlsRef.current.target.clone();
      const endPosition = new THREE.Vector3(0, 8, 15);
      const endTarget = new THREE.Vector3(0, 0, 0);

      const duration = 1000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const eased =
          progress < 0.5
            ? 2 * progress * progress
            : 1 - (-2 * progress + 2) ** 2 / 2;

        if (cameraRef.current && controlsRef.current) {
          cameraRef.current.position.lerpVectors(
            startPosition,
            endPosition,
            eased
          );
          controlsRef.current.target.lerpVectors(startTarget, endTarget, eased);
          controlsRef.current.update();
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }
  }, [showcaseEquipment]);

  return (
    <Canvas
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
      }}
      shadows
    >
      {/* Camera */}
      <PerspectiveCamera
        fov={60}
        makeDefault
        position={[0, 8, 15]}
        ref={cameraRef}
      />

      {/* Controls */}
      <OrbitControls
        enablePan={!showcaseEquipment}
        enableRotate
        enableZoom
        maxDistance={30}
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        ref={controlsRef}
        target={[0, 0, 0]}
      />

      {/* Lighting */}
      <ambientLight intensity={0.4} />

      <directionalLight
        castShadow
        intensity={1.5}
        position={[10, 20, 10]}
        shadow-camera-bottom={-20}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
      />

      <directionalLight intensity={0.5} position={[-10, 10, -10]} />

      <spotLight
        angle={0.6}
        castShadow
        intensity={0.8}
        penumbra={1}
        position={[0, 15, 0]}
      />

      {/* Environment */}
      <Suspense fallback={null}>
        <Environment preset="warehouse" />
      </Suspense>

      {/* Floor */}
      <mesh position={[0, 0, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.2} roughness={0.8} />
      </mesh>

      {/* Grid */}
      <Grid
        args={[50, 50]}
        cellColor="#334155"
        cellSize={1}
        cellThickness={0.5}
        fadeDistance={40}
        fadeStrength={1}
        position={[0, 0.01, 0]}
        sectionColor="#475569"
        sectionSize={5}
        sectionThickness={1}
      />

      {/* Equipment */}
      {equipmentData.map((equipment) => (
        <Equipment
          info={equipment}
          isHighlighted={highlightedEquipment === equipment.id}
          isShowcasing={showcaseEquipment === equipment.id}
          key={equipment.id}
          onClick={() => onEquipmentClick(equipment.id)}
          onPointerOut={() => onEquipmentHover(null)}
          onPointerOver={() => onEquipmentHover(equipment.id)}
        />
      ))}

      {/* Walls (subtle) */}
      <mesh position={[0, 5, -10]} receiveShadow>
        <planeGeometry args={[50, 10]} />
        <meshStandardMaterial color="#0f172a" roughness={0.9} />
      </mesh>
    </Canvas>
  );
};
