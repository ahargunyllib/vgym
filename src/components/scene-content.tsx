import {
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import {
  type PerspectiveCamera as PerspectiveCameraType,
  Vector3,
} from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { ROOM_DIMENSIONS } from "../data/constant";
import { equipmentData } from "../data/equipment";
import type { EquipmentData } from "../types/equipment";
import Equipment from "./equipment";

type SceneContentProps = {
  selectedEquipment: EquipmentData | null;
  onEquipmentClick: (id: string | null) => void;
};

export const SceneContent = ({
  selectedEquipment,
  onEquipmentClick,
}: SceneContentProps) => {
  const { gl } = useThree();
  const maxAnisotropy = gl.capabilities.getMaxAnisotropy();
  const textures = useTexture({
    floor: "/floor.png",
    ceiling: "/ceiling.png",
    frontWall: "/front-wall.png",
    backWall: "/back-wall.png",
    leftWall: "/left-wall.png",
    rightWall: "/right-wall.png",
  });

  // Recommended: prevent blur on large interior textures
  useEffect(() => {
    textures.floor.anisotropy = maxAnisotropy;
    textures.ceiling.anisotropy = maxAnisotropy;
    textures.frontWall.anisotropy = maxAnisotropy;
    textures.backWall.anisotropy = maxAnisotropy;
    textures.leftWall.anisotropy = maxAnisotropy;
    textures.rightWall.anisotropy = maxAnisotropy;
  }, [maxAnisotropy, textures]);

  const controlsRef = useRef<OrbitControlsImpl>(null);
  const cameraRef = useRef<PerspectiveCameraType>(null);
  const [lastCameraTarget, setLastCameraTarget] = useState<Vector3 | null>(
    null
  );

  // Handle camera transitions when entering/exiting showcase mode
  // biome-ignore lint/correctness/useExhaustiveDependencies: false positive
  useEffect(() => {
    if (!(controlsRef.current && cameraRef.current)) {
      return;
    }

    if (selectedEquipment) {
      setLastCameraTarget(controlsRef.current.target.clone());

      // Animate camera target to look at equipment (position stays fixed)
      const startTarget = controlsRef.current.target.clone();
      const endTarget = new Vector3(...selectedEquipment.position);

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

        if (controlsRef.current) {
          controlsRef.current.target.lerpVectors(startTarget, endTarget, eased);
          controlsRef.current.update();
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
      return;
    }

    // Return to gym view (animate target only, position stays fixed)
    const startTarget = controlsRef.current.target.clone();
    const endTarget =
      lastCameraTarget || new Vector3(0, -ROOM_DIMENSIONS.H / 2 + 1.4, 0);

    const duration = 1000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - (-2 * progress + 2) ** 2 / 2;

      if (controlsRef.current) {
        controlsRef.current.target.lerpVectors(startTarget, endTarget, eased);
        controlsRef.current.update();
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [selectedEquipment]);

  return (
    <>
      <PerspectiveCamera
        fov={50}
        makeDefault
        position={[0, -ROOM_DIMENSIONS.H / 2 + 1.65, ROOM_DIMENSIONS.D / 2 - 1]}
        ref={cameraRef}
      />

      <OrbitControls
        dampingFactor={0.05}
        enableDamping
        enablePan={!selectedEquipment}
        enableRotate={!selectedEquipment}
        enableZoom={false}
        maxDistance={30}
        maxPolarAngle={(2 * Math.PI) / 3}
        minDistance={2}
        minPolarAngle={Math.PI / 3}
        ref={controlsRef}
        target={[0, -ROOM_DIMENSIONS.H / 2 + 1.4, 0]}
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
        position={[0, ROOM_DIMENSIONS.H / 2 - 0.3, 0]}
      />

      {/* Floor */}
      <mesh
        position={[0, -ROOM_DIMENSIONS.H / 2, 0]}
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[ROOM_DIMENSIONS.W, ROOM_DIMENSIONS.D]} />
        <meshStandardMaterial map={textures.floor} />
      </mesh>

      {/* Front Wall */}
      <mesh castShadow position={[0, 0, -ROOM_DIMENSIONS.D / 2]}>
        <planeGeometry args={[ROOM_DIMENSIONS.W, ROOM_DIMENSIONS.H]} />
        <meshStandardMaterial map={textures.frontWall} />
      </mesh>

      {/* Back Wall */}
      <mesh
        castShadow
        position={[0, 0, ROOM_DIMENSIONS.D / 2]}
        rotation={[0, Math.PI, 0]}
      >
        <planeGeometry args={[ROOM_DIMENSIONS.W, ROOM_DIMENSIONS.H]} />
        <meshStandardMaterial map={textures.backWall} />
      </mesh>

      {/* Left Wall */}
      <mesh
        castShadow
        position={[-ROOM_DIMENSIONS.W / 2, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <planeGeometry args={[ROOM_DIMENSIONS.D, ROOM_DIMENSIONS.H]} />
        <meshStandardMaterial map={textures.leftWall} />
      </mesh>

      {/* Right Wall */}
      <mesh
        castShadow
        position={[ROOM_DIMENSIONS.W / 2, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <planeGeometry args={[ROOM_DIMENSIONS.D, ROOM_DIMENSIONS.H]} />
        <meshStandardMaterial map={textures.rightWall} />
      </mesh>

      {/* Ceiling */}
      <mesh
        position={[0, ROOM_DIMENSIONS.H / 2, 0]}
        receiveShadow
        rotation={[Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[ROOM_DIMENSIONS.W, ROOM_DIMENSIONS.D]} />
        <meshStandardMaterial map={textures.ceiling} />
      </mesh>

      {/* Equipment */}
      {Object.values(equipmentData).map((equipment) => (
        <Equipment
          equipment={equipment}
          isShowcasing={selectedEquipment?.id === equipment.id}
          key={equipment.id}
          onClick={() => onEquipmentClick(equipment.id)}
        />
      ))}
    </>
  );
};
