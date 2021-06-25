/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { Mesh } from "three";

export default function BackgroundModel(): JSX.Element {
  const group = useRef();
  const { materials, ...rest } = useGLTF("/gltf/background/background.gltf");
  const nodes = rest.nodes as {
    [name: string]: Mesh;
  };
  return (
    <group ref={group} dispose={null}>
      {/* bottom camera */}
      <group position={[16.49, 28.38, -30.3]}>
        <mesh
          onClick={() => console.log("123")}
          geometry={nodes.polySurface191PIV.geometry}
          material={nodes.polySurface191PIV.material}
          position={[-16.49, -28.38, 30.3]}
        />
      </group>
      <group position={[0, 40.4, 0]}>
        <group position={[0, -40.4, 0]}>
          <mesh
            geometry={nodes.polySurface230Shape_1.geometry}
            material={nodes.polySurface230Shape_1.material}
          />
        </group>
      </group>
      {/* top camera */}
      <group position={[11, 34.3, -36.25]}>
        <mesh
          onClick={() => console.log("456")}
          geometry={nodes.polySurface339PIV.geometry}
          material={nodes.polySurface339PIV.material}
          position={[-11, -34.3, 36.25]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/gltf/background/background.gltf");