export default function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshDepthMaterial attach="material" color={"#f3fafe"} />
    </mesh>
  );
}
