import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

export function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time / 4) * 0.3;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />

      <Float
        speed={1.4}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <group ref={groupRef}>
          <mesh position={[-2, 0, 0]}>
            <octahedronGeometry args={[1]} />
            <meshStandardMaterial color="#2dd4bf" wireframe />
          </mesh>
          
          <mesh position={[2, 0, 0]}>
            <dodecahedronGeometry args={[1]} />
            <meshStandardMaterial color="#8b5cf6" wireframe />
          </mesh>

          <mesh>
            <torusGeometry args={[1.5, 0.2, 16, 100]} />
            <meshStandardMaterial color="#f43f5e" />
          </mesh>
        </group>
      </Float>
    </>
  );
}