import {
  PresentationControls,
  Float,
  Environment,
  ContactShadows,
} from '@react-three/drei';
import Laptop from '../objects/Laptop';
import Phone from '../objects/Phone';
import useWindowSize from '../../hooks/useWindowSize';
import { Suspense } from 'react';

const Experience: React.FC = () => {
  const windowSize = useWindowSize();
  const showLaptop = windowSize.width > windowSize.height;
  const showPhone = windowSize.height > windowSize.width;
  const shadowPos = windowSize.width > 1300 ? -1.2 : -2;

  return (
    <>
      <color args={['#241a1a']} attach='background' />

      {showLaptop && (
        <Suspense fallback={null}>
          <PresentationControls
            global
            rotation={[0.1, -0.1, 0]}
            polar={[-0.4, 0.2]} // Vertical
            azimuth={[-2, 0.75]} // Horizontal
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
          >
            <Float rotationIntensity={0.5}>
              <Environment preset='city' />
              <Laptop />
            </Float>
          </PresentationControls>
        </Suspense>
      )}

      {showPhone && (
        <Suspense fallback={null}>
          <PresentationControls
            global
            rotation={[-0.15, -0.3, 0]}
            polar={[-0.4, 0.4]} // Vertical
            azimuth={[-1.4, 0.7]} // Horizontal
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
          >
            <Float rotationIntensity={0.4}>
              <Environment preset='city' />
              <Phone />
            </Float>
          </PresentationControls>
        </Suspense>
      )}

      <ContactShadows
        position-y={shadowPos}
        opacity={0.4}
        scale={5}
        blur={2.4}
      />
    </>
  );
};

export default Experience;
