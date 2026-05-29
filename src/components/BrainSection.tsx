"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const NODE_COUNT = 60;
const CONNECTION_DISTANCE = 3.5;

const NeuronNetwork = () => {
  const group = useRef<THREE.Group>(null);
  
  // Create randomized nodes
  const nodes = useMemo(() => {
    return Array.from({ length: NODE_COUNT }).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      ),
      color: Math.random() > 0.5 ? "#3b82f6" : "#a855f7"
    }));
  }, []);

  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  useFrame((state: any) => {
    if (!group.current) return;
    
    const container = document.getElementById("about");
    let offset = 0;
    if (container) {
       const rect = container.getBoundingClientRect();
       const scrollDistance = rect.height - window.innerHeight;
       offset = Math.max(0, Math.min(1, -rect.top / (scrollDistance || 1)));
    }
    
    // Rotate entire network based on scroll and time
    group.current.rotation.y = offset * Math.PI * 1.5 + state.clock.elapsedTime * 0.05;
    group.current.rotation.x = state.clock.elapsedTime * 0.02;
  });

  return (
    <group ref={group}>
      {/* Draw Nodes */}
      {nodes.map((node, i) => (
        <Sphere 
          key={i} 
          position={node.position} 
          args={[0.12, 16, 16]}
          onPointerOver={(e: any) => { e.stopPropagation(); setHoveredNode(i); }}
          onPointerOut={() => setHoveredNode(null)}
        >
          <meshBasicMaterial 
            color={hoveredNode === i ? "#ffffff" : node.color} 
            toneMapped={false} 
          />
        </Sphere>
      ))}
      
      {/* Draw Connections */}
      {nodes.map((nodeA, i) => 
        nodes.map((nodeB, j) => {
          if (i >= j) return null;
          const distance = nodeA.position.distanceTo(nodeB.position);
          if (distance > CONNECTION_DISTANCE) return null;

          const isHovered = hoveredNode === i || hoveredNode === j;
          return (
            <ConnectionLine 
              key={`${i}-${j}`} 
              start={nodeA.position} 
              end={nodeB.position} 
              distance={distance} 
              color={nodeA.color}
              isHovered={isHovered} 
            />
          );
        })
      )}
    </group>
  );
};

// Extracted component for connection line with data flow effect
const ConnectionLine = ({ start, end, distance, color, isHovered }: { start: THREE.Vector3, end: THREE.Vector3, distance: number, color: string, isHovered: boolean }) => {
  const lineRef = useRef<any>(null);
  
  useFrame(({ clock }: any) => {
    if (!lineRef.current) return;
    const time = clock.elapsedTime;
    // Animate material opacity based on time to simulate data pulse flow
    const flowing = (Math.sin(time * 4 - distance) + 1) / 2; 
    lineRef.current.material.opacity = isHovered ? 0.8 : 0.05 + flowing * 0.5;
  });

  return (
    <Line
      ref={lineRef}
      points={[start, end]}
      color={isHovered ? "#ffffff" : color}
      transparent
      opacity={0.2}
      lineWidth={isHovered ? 3 : 1}
    />
  );
}

export default function BrainSection() {
  return (
    <div className="relative h-[250vh] w-full bg-black z-20" id="about">
      <div className="sticky top-0 h-screen w-full">
        <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
          <color attach="background" args={['#000000']} />
          <ambientLight intensity={0.5} />
          <NeuronNetwork />

          <EffectComposer>
            <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={1.5} />
          </EffectComposer>
        </Canvas>
      </div>

      {/* HTML Overlay layers mapped to native scroll */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col">
        
        {/* Buffer Intro Space */}
        <div className="h-[50vh] shrink-0"></div>
        
        {/* AI Journey Section */}
        <div className="h-screen shrink-0 flex items-center justify-start px-8 md:px-24 pointer-events-auto">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1 mb-6 border rounded-full border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
              Sector 01
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                AI Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed border-l-2 border-blue-500 pl-6 backdrop-blur-sm bg-black/40 p-4 rounded-r-xl">
              Forged in data, trained by experience. My journey spans from foundational machine learning algorithms to complex neural architectures, constantly pushing the boundaries of what intelligent systems can achieve.
            </p>
          </div>
        </div>

        {/* Deep Learning Models Section */}
        <div className="h-screen shrink-0 flex items-center justify-end px-8 md:px-24 pointer-events-auto">
          <div className="max-w-xl text-right" id="skills">
            <div className="inline-block px-4 py-1 mb-6 border rounded-full border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium">
              Sector 02
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                Deep Learning Models
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed border-r-2 border-purple-500 pr-6 backdrop-blur-sm bg-black/40 p-4 rounded-l-xl">
              Architecting convolutional neural networks, transformers, and generative models. Transforming vast amounts of unstructured data into precise predictions and immersive generative art.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
