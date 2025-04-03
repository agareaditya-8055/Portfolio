
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useAppSelector } from '@/redux/hooks';
import { OrbitControls } from '@react-three/drei';

interface CubeProps {
  position: [number, number, number];
  color: string;
}

const Cube: React.FC<CubeProps> = ({ position, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const SpinningCube: React.FC = () => {
  const { darkMode } = useAppSelector(state => state.theme);
  
  return (
    <Canvas
      camera={{ position: [3, 3, 5], fov: 45 }}
      className="cursor-grab active:cursor-grabbing"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Cube position={[0, 0, 0]} color={darkMode ? "#60a5fa" : "#3b82f6"} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default SpinningCube;
