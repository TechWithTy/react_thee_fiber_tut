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
const SpinningMesh = ({pos,args}) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh position={pos} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" />
    </mesh>
  );
}


const App = () => {
  return (
    <>
      {/* <Header /> */}
      {/* Our Scene & Camera is already built into our canvas */}
      <Canvas colorManagment camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} color="pink" />
        <SpinningMesh pos={[0, 1, 0]} args={[3,2,1]}/>
        <SpinningMesh pos={[-2, 1, -5]} />
        <SpinningMesh pos={[5, 1, -2]} />
      </Canvas>
    </>
  );
};

export default App;
