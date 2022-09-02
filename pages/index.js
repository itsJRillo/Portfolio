import { useRef } from "react";
import Script from "next/script";
import * as THREE from "three";
import Inicio from "../components/Inicio";
import Layout from "../components/Layout";

export default function Home() {
  const trunkRef = useRef(null);

  const config = {
    el: trunkRef.current,
    THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    chaos: 1.5,
  };

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.trunk.min.js" afterInteractive></Script>
      <Script>TRUNK({config})</Script>

      <Layout ref={trunkRef} pagina="Inicio">
        <Inicio />
      </Layout>
    </>
  );
}
