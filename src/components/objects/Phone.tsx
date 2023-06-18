import { Html, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import Loader from '../Loader';

const Phone = () => {
  const phone = useGLTF('./src/assets/models/phone.gltf');

  return (
    <Suspense fallback={<Loader />}>
      <primitive object={phone.scene} position-x={-0.1} position-y={-1.4}>
        <Html
          transform
          wrapperClass='phoneScreen'
          distanceFactor={1.3}
          position={[0.16, 1.33, 0.075]}
          rotation-x={-0.001}
        >
          <iframe src='https://aoc22.azurewebsites.net/' />
        </Html>
      </primitive>
    </Suspense>
  );
};

export default Phone;

{
  /* <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} position0={0} />
        <Ball imgUrl={icon} />
      </Suspense> */
}
