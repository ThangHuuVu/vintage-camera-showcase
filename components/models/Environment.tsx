/* eslint-disable no-multi-assign */
/* eslint-disable no-return-assign */
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { PMREMGenerator, UnsignedByteType } from "three";
// eslint-disable-next-line import/extensions
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

export default function Environment({ HDRI }) {
  const { gl, scene } = useThree();
  const pmremGenerator = new PMREMGenerator(gl);
  const loader = new RGBELoader();
  loader.setDataType(UnsignedByteType);
  pmremGenerator.compileEquirectangularShader();

  useEffect(() => {
    loader.load(HDRI, texture => {
      const envMap = pmremGenerator.fromEquirectangular(texture).texture;

      scene.environment = envMap;
      scene.background = envMap;
      // one can also set scene.background to envMap here

      texture.dispose();
      pmremGenerator.dispose();
    });
  }, [scene, loader, pmremGenerator]);

  return null;
}
