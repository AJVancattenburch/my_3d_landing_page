//eslint-disable-next-line
import React, { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const modelPath = '/planet/scene.gltf';


const Earth = () => {
  const isMobile = window.innerWidth < 500;
  const { scene } = useGLTF(modelPath);

  return (
    <primitive
      object={scene}
      // To render the scale differently on smaller screens, we can use the following:
      scale={[2, 2, 2]}
      position={[0, 0, 0]}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas