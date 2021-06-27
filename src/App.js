import React, { useRef } from 'react';
//R3F
import { Canvas, useFrame } from 'react-three-fiber';
import { softShadows,MeshWobbleMaterial } from '@react-three/drei';
import './App.scss';
// React Spring

softShadows()
const SpinningMesh = ({ pos, args, color }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh castShadow position={pos} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial attach="material" color={color} speed={1} factor={0.6} />
    </mesh>
  );
};

const App = () => {
  return (
    <>
      {/* <Header /> */}
      {/* Our Scene & Camera is already built into our canvas */}
      <Canvas
        shadow
        colorManagment
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        {/* //Light */}
        <ambientLight intensity={0.3} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={50}
          shadow-camera-bottom={-10}
        />

        {/* //PLane */}
        <group>
          <mesh
            rec
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
        </group>

        <SpinningMesh pos={[0, 1, 0]} args={[3, 2, 1]} color="lightBlue" />
        <SpinningMesh pos={[-2, 1, -5]} color="pink" />
        <SpinningMesh pos={[5, 1, -2]} color="pink" />
      </Canvas>
    </>
  );
};

export default App;
