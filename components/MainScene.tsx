import { OrbitControls } from "@react-three/drei";
import { Canvas, Props as CanvasProps } from "@react-three/fiber";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import BackgroundModel from "./models/Background";

export default function MainScene(): JSX.Element {
  const [cameraPosition] = useState<CanvasProps["camera"]>({
    position: [-60, 5, 45],
  });
  const canvasStyle = useMemo(() => ({ width: "100vw", height: "100vh" }), []);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    // animate using gsap
    setScrolled(true);
  }, []);
  return (
    <Canvas camera={cameraPosition} style={canvasStyle}>
      <ambientLight intensity={10} />
      <pointLight position={[45, 45, 45]} />
      <Suspense fallback={null}>
        <BackgroundModel />
      </Suspense>
      {scrolled && <OrbitControls />}
    </Canvas>
  );
}
