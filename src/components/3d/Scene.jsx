import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, PerspectiveCamera, Lightformer } from '@react-three/drei'
import * as THREE from 'three'

function PlaceholderCamera() {
  const group = useRef()
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = Math.sin(t / 4) / 4
    group.current.rotation.x = Math.cos(t / 4) / 4
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Main Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 2, 1.5]} />
          <meshStandardMaterial color="#111" roughness={0.2} metalness={0.8} />
        </mesh>
        
        {/* Lens */}
        <mesh position={[0, 0, 1]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1, 1, 1.5, 32]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.1} metalness={0.9} />
        </mesh>
        
        {/* Lens Glass */}
        <mesh position={[0, 0, 1.76]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.9, 0.9, 0.05, 32]} />
          <meshPhysicalMaterial 
            color="#ffffff"
            transmission={1}
            opacity={1}
            roughness={0}
            ior={1.5}
            thickness={0.5}
          />
        </mesh>
        
        {/* Flash/Top Part */}
        <mesh position={[0, 1.2, 0]}>
          <boxGeometry args={[1.5, 0.5, 1]} />
          <meshStandardMaterial color="#111" roughness={0.2} metalness={0.8} />
        </mesh>

        {/* Gold Ring around lens */}
        <mesh position={[0, 0, 1.5]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.05, 1.05, 0.1, 32]} />
          <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={1} />
        </mesh>
      </Float>
    </group>
  )
}

function FloatingPhotos() {
  const count = 15
  const photos = Array.from({ length: count })
  
  return (
    <group>
      {photos.map((_, i) => {
        const x = (Math.random() - 0.5) * 20
        const y = (Math.random() - 0.5) * 20
        const z = (Math.random() - 0.5) * 10 - 5
        const scale = 0.5 + Math.random() * 1.5
        
        return (
          <Float key={i} speed={1 + Math.random()} rotationIntensity={2} floatIntensity={2} position={[x, y, z]}>
            <mesh>
              <planeGeometry args={[16/9 * scale, 1 * scale]} />
              <meshStandardMaterial 
                color="#222" 
                transparent 
                opacity={0.8}
                roughness={0.2}
                metalness={0.5}
              />
            </mesh>
          </Float>
        )
      })}
    </group>
  )
}

export function Scene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 1.5]} performance={{ min: 0.5 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 10, 30]} />
        
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#D4AF37" />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} color="#ffffff" />
        
        <PlaceholderCamera />
        <FloatingPhotos />
        
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
            <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
            <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} color="#D4AF37" />
          </group>
        </Environment>
      </Canvas>
    </div>
  )
}
