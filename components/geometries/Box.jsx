import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function Box() {
  const meshRef = useRef(Mesh);

  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x = 0.01;
    meshRef.current.rotation.y = 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry attach="geometry" args={[10, 10, 10]} />
      <meshDepthMaterial attach="material" color={"#20282f"} />
    </mesh>
  );
}
