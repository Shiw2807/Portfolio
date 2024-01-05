/** @format */

import {
  GradientTexture,
  MeshDistortMaterial,
  OrbitControls,
} from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import React, { Suspense } from "react";
import { TextureLoader } from "three";

function Intro() {
  return (
    <>
      <div className="container h-screen w-screen bg-[#ececec]">
        <Canvas camera={{ fov: 55, position: [1, 1, 1] }}>
          <Suspense>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <mesh position={[0, 0, 0]}>
              <sphereBufferGeometry args={[3, 32, 32]} geometry="geometry" />
              <MeshDistortMaterial distort={1}>
                <GradientTexture
                  stops={[0, 1]} // As many stops as you want
                  colors={["#458CF8", "#EB8EF4"]} // Colors need to match the number of stops
                  size={1024} // Size is optional, default = 1024
                />
              </MeshDistortMaterial>
            </mesh>
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute top-0 w-full h-full flex justify-center items-center ">
        <div className="text-center">
          <p className="font-brush text-[72px] md:text-[172px]">Hello Human!</p>
          <br />
          <p className="font-main text-xl tracking-widest">
            DEVELOPED BY SHIWANSHI 🚀.
          </p>
        </div>
      </div>
    </>
  );
}

export default Intro;
