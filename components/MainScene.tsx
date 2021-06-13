import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CameraModel from "./CameraModel";

export default function MainScene(): JSX.Element {
  return (
    <Canvas
      camera={{ position: [0, 0, 35] }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <ambientLight intensity={10} />
      <pointLight position={[45, 45, 45]} />
      <Suspense fallback={null}>
        <CameraModel />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
