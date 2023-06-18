import { lazy, Suspense } from 'react';
import Loader from './components/Loader';
import { Canvas } from '@react-three/fiber';

const Experience = lazy(() => import('./components/scene/Experience'));

const App = () => {
  return (
    <Canvas camera={{ fov: 45, near: 0.1, far: 2000, position: [-3, 1.5, 4] }}>
      <Loader />
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </Canvas>
  );
};

export default App;
