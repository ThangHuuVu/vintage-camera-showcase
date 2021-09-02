import { useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rolleiflex from "./models/Rolleiflex";

gsap.registerPlugin(ScrollTrigger);

const sceneRotation = {
  front: { x: 0, y: 3.1, z: 0 },
  right: { x: 0, y: 1.7, z: 0 },
  left: { x: 0, y: -1.7, z: 0 },
  top: { x: 1.5, y: 0, z: 0 },
  back: { x: 0, y: 0, z: 0 },
};
const cameraPosition = {
  zoomedOut: { x: 0, y: 3, z: 10 },
  zoomedIn: { x: 0, y: 2, z: 6 },
};
export default function RolleiflexContainer() {
  const { scene, camera } = useThree();
  const rolleiflexTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-two",
      endTrigger: ".section-six",
      end: "top top",
      scrub: true,
    },
  });

  useEffect(() => {
    scene.rotation.set(
      sceneRotation.front.x,
      sceneRotation.front.y,
      sceneRotation.front.z
    );
    camera.position.set(
      cameraPosition.zoomedOut.x,
      cameraPosition.zoomedOut.y,
      cameraPosition.zoomedOut.z
    );

    rolleiflexTimeline
      .to(camera.position, { ...cameraPosition.zoomedIn })
      .to(scene.rotation, { ...sceneRotation.right })
      .to(scene.rotation, { ...sceneRotation.back })
      .to(camera.position, { ...cameraPosition.zoomedOut })
      .to(scene.rotation, { ...sceneRotation.top })
      .to(camera.position, { ...cameraPosition.zoomedIn })
      .to(scene.rotation, { ...sceneRotation.left })
      .to(scene.rotation, { y: -3.1 })
      .to(camera.position, { ...cameraPosition.zoomedOut });
  }, []);

  return <Rolleiflex />;
}
