import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function Box() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    meshRef.current.rotation.x = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry attach="geometry" args={[10, 10, 10]} />
      <meshDepthMaterial attach="material" color={"#f3fafe"} />
    </mesh>
  );
}
