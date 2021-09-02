import { Canvas } from "@react-three/fiber";
import React, { CSSProperties, Suspense, useMemo } from "react";
import Environment from "./models/Environment";
import RolleiflexContainer from "./RolleiflexContainer";
import Section from "./Section";

export default function RolleiflexScene(): JSX.Element {
  const canvasStyle = useMemo<CSSProperties>(
    () => ({ width: "100vw", height: "100vh", zIndex: 50, position: "fixed" }),
    []
  );

  return (
    <>
      <Canvas style={canvasStyle}>
        <Suspense fallback={null}>
          <Environment HdriName="photo_studio_broadway_hall_4k.hdr" />
          <RolleiflexContainer />
        </Suspense>
      </Canvas>
      <Section cls="section-one">
        <div>section 1</div>
      </Section>
      <Section cls="section-two">
        <div>section 2</div>
      </Section>
      <Section cls="section-three">
        <div>section 3</div>
      </Section>
      <Section cls="section-four">
        <div>section 4</div>
      </Section>
      <Section cls="section-five">
        <div>section 5</div>
      </Section>
      <Section cls="section-six">
        <div>section 5</div>
      </Section>
    </>
  );
}
