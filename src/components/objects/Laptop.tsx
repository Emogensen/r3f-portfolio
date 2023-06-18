import { Html, useGLTF } from '@react-three/drei';

const Laptop = () => {
  const laptop = useGLTF('./src/assets/models/laptop.gltf');

  return (
    <>
      <rectAreaLight
        width={2.5}
        height={1.65}
        intensity={25}
        color={'#0f8a5f'}
        rotation={[0.1, Math.PI, 0]}
        position={[0, 0.55, -1.15]}
      />
      <primitive object={laptop.scene} position-x={0.2} position-y={-1.2}>
        <Html
          transform
          wrapperClass='laptopScreen'
          distanceFactor={1.17}
          position={[0, 1.56, -1.4]}
          rotation-x={-0.256}
        >
          <iframe src='https://aoc22.azurewebsites.net/' />
        </Html>
      </primitive>
    </>
  );
};

export default Laptop;
