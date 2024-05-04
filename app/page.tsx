"use client"
import dynamic from 'next/dynamic';
import './globals.css';
import image from './OrbisLogo.svg';
import Image from 'next/image';
import { useState } from 'react'; // Import useState for managing state

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });

export default function Home() {
  const [showMessage, setShowMessage] = useState(false); // State to manage which message to display

  const toggleMessage = () => {
    setShowMessage(!showMessage); // Toggle the state to show either one title or the other
  };

  return (
    <>
      <main className="h-full relative" style={{ marginLeft: -150, }}>
        <div className="world2">
            <Scene  /> {/* Ajusta el margen izquierdo de la escena según sea necesario */}
        </div>

        <div className='bg-blue-200 info' style={{ position: "fixed", bottom: 250, right: 0, zIndex: 2 }}>
          {/* Conditional rendering to toggle between titles */}
          {!showMessage ? (
            <h1 className="main-title text-xl md:text-4xl lg:text-4xl xl:text-7xl">ORBIS GEOSCRIPTING | ACADEMIA</h1>
          ) : (
            <h1 className="main-title text-2xl md:text-4xl lg:text-4xl xl:text-7xl">ESPÉRANOS PRONTO...</h1>
          )}
          <button className="mt-4 px-4 py-2 text-white rounded conoce" onClick={toggleMessage}>CONOCE MÁS</button>
          <Image className="image-orbis" src={image} alt="Orbis Logo" width={400} height={300} />
        </div>
        
      </main>
    </>
  );
}