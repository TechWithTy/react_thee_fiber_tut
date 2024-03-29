import { useSpring,a } from '@react-spring/three';
import {
  MeshWobbleMaterial,
  OrbitControls,
  softShadows,
} from '@react-three/drei';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import './App.scss';

// React Spring

softShadows();
const SpinningMesh = ({ pos, args, color, speed, factor }) => {
  const [expand, setExpand] = useState(false);
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  return (
    <a.mesh
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
      position={pos}
      ref={mesh}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={factor}
      />
    </a.mesh>
  );
};

const App = () => {
  return (
    <>
      {/* <Header /> */}
      {/* Our Scene & Camera is already built into our canvas */}
      <Canvas shadows colorManagment camera={{ position: [-5, 2, 10], fov: 60 }}>
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
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
          <SpinningMesh
            pos={[0, 1, 0]}
            args={[3, 2, 1]}
            color="lightBlue"
            speed={2}
          />
          <SpinningMesh pos={[-2, 1, -5]} color="pink" speed={6} />
          <SpinningMesh pos={[5, 1, -2]} color="pink" speed={6} />
        </group>

        <OrbitControls />
      </Canvas>
    </>
  );
};

export default App;
