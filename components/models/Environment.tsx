import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { PMREMGenerator, UnsignedByteType } from "three";
// eslint-disable-next-line import/extensions
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

interface EnvironmentProp {
  HdriName: string;
  environment?: boolean;
  background?: boolean;
  onProgress: (progress: number) => void;
}

const ENVIRONMENT_PREFIX = "environment/";

export default function Environment({
  HdriName,
  environment = true,
  background = false,
  onProgress,
}: EnvironmentProp): null {
  const { gl, scene } = useThree();
  const pmremGenerator = new PMREMGenerator(gl);
  const loader = new RGBELoader();
  loader.setDataType(UnsignedByteType);
  pmremGenerator.compileEquirectangularShader();

  useLayoutEffect(() => {
    loader.load(
      `${ENVIRONMENT_PREFIX}/${HdriName}`,
      texture => {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture;

        if (environment) scene.environment = envMap;
        if (background) scene.background = envMap;

        texture.dispose();
        pmremGenerator.dispose();
      },
      ({ loaded, total }) => {
        onProgress(loaded / total);
      }
    );
  }, [scene, loader, pmremGenerator]);

  return null;
}
