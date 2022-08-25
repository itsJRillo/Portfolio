import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"

export default function Box() {
    const meshRef = useRef(Mesh)

    useFrame(() =>{
        if (!meshRef.current) return
        
        meshRef.current.x += 0.01
        meshRef.current.y += 0.01
    })
    return (
      <mesh ref={meshRef}>
        <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
        <meshDepthMaterial attach="material" color={"#f3fafe"} />
      </mesh>
    );
  }
  