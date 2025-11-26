import { Edges } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";

export const Placeholder = (props: ThreeElements["group"]) => (
  <group {...props}>
    <mesh castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial opacity={0} transparent />
      <Edges color="#666666" linewidth={6} />
    </mesh>

    <axesHelper args={[1.5]} />
  </group>
);
