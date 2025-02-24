import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene';
import { Navigation } from './components/Navigation';
import { Content } from './components/Content';

function App() {
  return (
    <main className="relative w-full h-screen bg-black">
      <Navigation />
      <Content />
      
      <Canvas>
        <Scene />
      </Canvas>
      
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}

export default App;