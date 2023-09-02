import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import 
  {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture
  }
from '@react-three/drei';

import CanvasLoader from '../Loader';
import PropTypes from 'prop-types';
import { IcosahedronGeometry } from 'three';

const Ball = (props) => {
  const geometry = new IcosahedronGeometry(1, 1);
  const [decal] = useTexture([props.imgUrl]);

  useFrame(() => {
    geometry.rotateX(0.01); // Rotate the geometry in the X-axis
    geometry.rotateY(0.01); // Rotate the geometry in the Y-axis
  });

  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <ambientLight intensity={.75} />
      <pointLight position={[0, 0, 0.05]} intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
        geometry={geometry}
      >
        <meshStandardMaterial
          attach="material"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          color="#FFF8EB"
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default BallCanvas;
