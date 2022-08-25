import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { SphereGeometry } from "three";

export const Sphere = () => {
  {/*const meshRef = useRef(Mesh);
  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.x += 0.01;
    meshRef.current.y += 0.01;
  });*/}

  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[15, 32, 16]} />
      <meshDepthMaterial attach="material" color={"#f3fafe"} />
    </mesh>
  );
};
