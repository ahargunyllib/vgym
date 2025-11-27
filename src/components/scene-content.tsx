import {
  PerspectiveCamera,
  PointerLockControls,
  useTexture,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import {
  type Mesh,
  type PerspectiveCamera as PerspectiveCameraType,
  Raycaster,
  Vector2,
  Vector3,
} from "three";
import type { PointerLockControls as PointerLockControlsImpl } from "three-stdlib";
import { ROOM_DIMENSIONS } from "../data/constant";
import { equipmentData } from "../data/equipment";
import type { EquipmentData } from "../types/equipment";
import Equipment from "./equipment";

type SceneContentProps = {
  selectedEquipment: EquipmentData | null;
  onEquipmentHover: (id: string | null) => void;
  controlsRef: React.RefObject<{
    lock: () => void;
    unlock: () => void;
  } | null>;
};

export const SceneContent = ({
  onEquipmentHover,
  controlsRef: externalControlsRef,
}: SceneContentProps) => {
  const { gl } = useThree();
  const maxAnisotropy = gl.capabilities.getMaxAnisotropy();
  const textures = useTexture({
    floor: "/floor.png",
    ceiling: "/floor.png",
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

  const controlsRef = useRef<PointerLockControlsImpl>(null);
  const cameraRef = useRef<PerspectiveCameraType>(null);
  const equipmentMeshesRef = useRef<Map<string, Mesh>>(new Map());
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [hoveredEquipmentId, setHoveredEquipmentId] = useState<string | null>(
    null
  );

  // Movement state
  const moveState = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  const velocity = useRef(new Vector3());
  const direction = useRef(new Vector3());

  const MOVE_SPEED = 5;
  const EYE_HEIGHT = 1.65;
  const HOVER_DELAY = 800; // milliseconds

  // Expose controls to parent
  useEffect(() => {
    if (controlsRef.current && externalControlsRef) {
      externalControlsRef.current = {
        lock: () => controlsRef.current?.lock(),
        unlock: () => controlsRef.current?.unlock(),
      };
    }
  }, [externalControlsRef]);

  // Keyboard controls for movement
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          moveState.current.forward = true;
          break;
        case "KeyS":
        case "ArrowDown":
          moveState.current.backward = true;
          break;
        case "KeyA":
        case "ArrowLeft":
          moveState.current.left = true;
          break;
        case "KeyD":
        case "ArrowRight":
          moveState.current.right = true;
          break;
        default:
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          moveState.current.forward = false;
          break;
        case "KeyS":
        case "ArrowDown":
          moveState.current.backward = false;
          break;
        case "KeyA":
        case "ArrowLeft":
          moveState.current.left = false;
          break;
        case "KeyD":
        case "ArrowRight":
          moveState.current.right = false;
          break;
        default:
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Movement, collision detection, and raycasting for hover
  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: TODO
  useFrame((_, delta) => {
    if (!cameraRef.current) {
      return;
    }

    const camera = cameraRef.current;

    // Movement logic
    velocity.current.x = 0;
    velocity.current.z = 0;

    direction.current.set(0, 0, 0);

    if (moveState.current.forward) {
      direction.current.z += 1;
    }
    if (moveState.current.backward) {
      direction.current.z -= 1;
    }
    if (moveState.current.left) {
      direction.current.x -= 1;
    }
    if (moveState.current.right) {
      direction.current.x += 1;
    }

    // Normalize diagonal movement
    if (direction.current.length() > 0) {
      direction.current.normalize();
    }

    // Apply movement relative to camera direction
    const forward = new Vector3(0, 0, -1);
    forward.applyQuaternion(camera.quaternion);
    forward.y = 0;
    forward.normalize();

    const right = new Vector3(1, 0, 0);
    right.applyQuaternion(camera.quaternion);
    right.y = 0;
    right.normalize();

    velocity.current.addScaledVector(
      forward,
      direction.current.z * MOVE_SPEED * delta
    );
    velocity.current.addScaledVector(
      right,
      direction.current.x * MOVE_SPEED * delta
    );

    // Calculate new position
    const newPosition = camera.position.clone().add(velocity.current);

    // Collision detection with walls
    const WALL_MARGIN = 0.3;
    const maxX = ROOM_DIMENSIONS.W / 2 - WALL_MARGIN;
    const minX = -ROOM_DIMENSIONS.W / 2 + WALL_MARGIN;
    const maxZ = ROOM_DIMENSIONS.D / 2 - WALL_MARGIN;
    const minZ = -ROOM_DIMENSIONS.D / 2 + WALL_MARGIN;

    newPosition.x = Math.max(minX, Math.min(maxX, newPosition.x));
    newPosition.z = Math.max(minZ, Math.min(maxZ, newPosition.z));
    newPosition.y = -ROOM_DIMENSIONS.H / 2 + EYE_HEIGHT;

    camera.position.copy(newPosition);

    // Raycasting for equipment hover detection (center of screen)
    const raycaster = new Raycaster();
    raycaster.setFromCamera(new Vector2(0, 0), camera);

    const meshes = Array.from(equipmentMeshesRef.current.values());
    const intersects = raycaster.intersectObjects(meshes, true);

    let hitEquipmentId: string | null = null;

    if (intersects.length > 0) {
      // Find which equipment was hit
      for (const [id, mesh] of equipmentMeshesRef.current.entries()) {
        if (
          intersects.some(
            (intersection) =>
              intersection.object === mesh ||
              intersection.object.parent === mesh
          )
        ) {
          hitEquipmentId = id;
          break;
        }
      }
    }

    // Handle hover state with delay
    if (hitEquipmentId !== hoveredEquipmentId) {
      // Clear existing timer
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
        hoverTimerRef.current = null;
      }

      setHoveredEquipmentId(hitEquipmentId);

      if (hitEquipmentId) {
        // Start delay timer for new equipment
        hoverTimerRef.current = setTimeout(() => {
          onEquipmentHover(hitEquipmentId);
        }, HOVER_DELAY);
      } else {
        // Immediately clear when not hovering
        onEquipmentHover(null);
      }
    }
  });

  // Register equipment mesh refs
  const handleEquipmentRef = (id: string, mesh: Mesh | null) => {
    if (mesh) {
      equipmentMeshesRef.current.set(id, mesh);
    } else {
      equipmentMeshesRef.current.delete(id);
    }
  };

  return (
    <>
      <PerspectiveCamera
        fov={75}
        makeDefault
        position={[
          0,
          -ROOM_DIMENSIONS.H / 2 + EYE_HEIGHT,
          ROOM_DIMENSIONS.D / 2 - 1,
        ]}
        ref={cameraRef}
      />

      <PointerLockControls ref={controlsRef} />

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

      {/* White accent light - top middle */}
      <pointLight
        color="#ffffff"
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
          isHovered={hoveredEquipmentId === equipment.id}
          key={equipment.id}
          onMeshRef={(mesh) => handleEquipmentRef(equipment.id, mesh)}
        />
      ))}
    </>
  );
};
