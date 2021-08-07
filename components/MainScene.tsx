import { OrbitControls } from "@react-three/drei";
import { Canvas, Props as CanvasProps } from "@react-three/fiber";
import React, { Suspense, useMemo, useState } from "react";
import { useRouter } from "next/router";
import BackgroundModel from "./models/Background";

export default function MainScene(): JSX.Element {
  const [cameraPosition] = useState<CanvasProps["camera"]>({
    position: [-60, 5, 45],
  });
  const router = useRouter();
  const onRolleiClick = () => {
    router.push("/rollei");
  };
  const canvasStyle = useMemo(() => ({ width: "100vw", height: "100vh" }), []);
  return (
    <Canvas camera={cameraPosition} style={canvasStyle}>
      <ambientLight intensity={10} />
      <pointLight position={[45, 45, 45]} />
      <Suspense fallback={null}>
        <BackgroundModel onRolleiClick={onRolleiClick} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
