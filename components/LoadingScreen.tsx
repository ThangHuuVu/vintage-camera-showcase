import { Html, useProgress } from "@react-three/drei";
import React from "react";

interface Props {
  envProgress?: number;
}
export default function LoadingScreen({ envProgress = 0 }: Props) {
  const { progress } = useProgress();
  return <Html center>{envProgress || progress} % loaded</Html>;
}
