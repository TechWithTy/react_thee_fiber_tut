import React, { useRef, useState } from 'react';
//R3F
import { Canvas, useFrame } from 'react-three-fiber';
// Deai - R3F
// import { softShadows, MeshWobbleMaterial, OrbitControls } from '@react-three/drei';
//Components
// import Header from './components/header';
// Styles
import './App.scss';
// React Spring
// import { useSpring, a } from '@react-spring/three';

// soft Shadows
// softShadows();
const Box = () => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material"/>
    </mesh>
  )
}


const App = () => {
  return (
    <>
      {/* <Header /> */}
      {/* Our Scene & Camera is already built into our canvas */}
      <Canvas>
        <Box/>
      </Canvas>
    </>
  );
};

export default App;
