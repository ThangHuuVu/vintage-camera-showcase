import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Camera = dynamic(() => import("../components/Camera"));
export default function CameraPage() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={10} />
        <pointLight position={[45, 45, 45]} />
        <Suspense fallback={<mesh />}>
          <Camera />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}
