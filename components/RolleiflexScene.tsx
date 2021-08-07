import { OrbitControls } from "@react-three/drei";
import { Canvas, Props as CanvasProps } from "@react-three/fiber";
import React, { Suspense, useMemo, useState } from "react";
import Environment from "./models/Environment";
import Rolleiflex from "./models/Rolleiflex";

export default function RolleiflexScene(): JSX.Element {
  const canvasStyle = useMemo(() => ({ width: "100vw", height: "100vh" }), []);
  const [cameraPosition] = useState<CanvasProps["camera"]>({
    position: [-60, 5, 45],
  });

  return (
    <Canvas camera={cameraPosition} style={canvasStyle}>
      <Suspense fallback={null}>
        <Environment HDRI="environment/photo_studio_broadway_hall_4k.hdr" />
        <Rolleiflex />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
