import { Canvas } from "@react-three/fiber";
import React, {
  CSSProperties,
  Suspense,
  useEffect,
  useMemo,
  useState,
} from "react";
import LoadingScreen from "./LoadingScreen";
import Environment from "./models/Environment";
import RolleiflexContainer from "./RolleiflexContainer";
import Section from "./Section";

export default function RolleiflexScene(): JSX.Element {
  const canvasStyle = useMemo<CSSProperties>(
    () => ({ width: "100vw", height: "100vh", zIndex: 50, position: "fixed" }),
    []
  );
  const [envProgress, setEnvProgress] = useState<number>(0);
  const [isEnvLoaded, setIsEnvLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (envProgress === 1) {
      setIsEnvLoaded(true);
    }
  }, [envProgress]);

  return (
    <>
      <Canvas style={canvasStyle}>
        <Suspense fallback={<LoadingScreen envProgress={envProgress} />}>
          <Environment
            HdriName="photo_studio_broadway_hall_4k.hdr"
            onProgress={progress => setEnvProgress(progress)}
          />
          <RolleiflexContainer isEnvLoaded={isEnvLoaded} />
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
