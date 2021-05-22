import { Box } from "@chakra-ui/layout";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const Camera = dynamic(() => import("@/components/Camera"));
export default function HomePage(): JSX.Element {
  return (
    <Box w="100%">
      <Canvas
        style={{ width: "100%", height: "100vh" }}
        camera={{ position: [0, 0, 35] }}
      >
        <ambientLight intensity={10} />
        <pointLight position={[45, 45, 45]} />
        <Suspense fallback={<mesh />}>
          <Camera />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </Box>
  );
}
