"use client"
import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"
import { useProgress, Html } from "@react-three/drei"

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 3]} className="relative h-svh">
      <ambientLight intensity={0.1} />
      <directionalLight position={[1, 3, 2]} intensity={1} color="#5555ff" />
      <pointLight position={[0, -3, 5]} intensity={2} color="#ffddaa" />
      <pointLight position={[2, 1, 5]} intensity={2} color="#ffddaa" />
      <pointLight position={[-3, 1, 5]} intensity={2} color="#ffddaa" />
      <Suspense fallback={<Loader />}>
        <Model />
        <OrbitControls minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} minDistance={5} maxDistance={20} />
      </Suspense>
    </Canvas>
  )
}

