"use client"

import { Canvas, useThree } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"
import { useProgress, Html, ScrollControls } from "@react-three/drei"

function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 3]} className="relative h-svh">
      <ambientLight intensity={0.1} /> {/* Luz ambiental suave */}
      <directionalLight position={[1, 3, 2]} intensity={1} color="#5555ff" /> {/* Luz direccional azulada suave */}
      {/* Luces puntuales que representan las ciudades más grandes (solo como ejemplo, ajustar según sea necesario) */}
      <pointLight position={[0, -3, 5]} intensity={50} color="#ffddaa" />
      <pointLight position={[2, 1, 5]} intensity={80} color="#ffddaa" />
      <pointLight position={[-3, 1, 5]} intensity={10} color="#ffddaa" />
      <Suspense fallback={<Loader />}>
        <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}
