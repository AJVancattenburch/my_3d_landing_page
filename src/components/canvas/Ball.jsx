//eslint-disable-next-line no-unused-vars
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

import CanvasLoader from '../Loader';
import PropTypes from 'prop-types';
import { IcosahedronGeometry } from "three";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
      >
        {/* ANCHOR - THIS IS WHERE YOU LEFT OFF WHEN THE ICOSAHEDRON BROKE EVERYTHING */}
        <IcosahedronGeometry args={[1, 1]} />
      </mesh>
    </Float>
  )
}

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
    frameloop='demand'
    // dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false} />
      <Ball imgUrl={icon} />
    </Suspense>

    <Preload all />
  </Canvas>
  )
}

export default BallCanvas