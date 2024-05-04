import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";

useGLTF.preload("/earth.glb");

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/earth.glb");
  const { actions } = useAnimations(animations, group.current);
  const [scale, setScale] = useState(0.0060);

  useEffect(() => {
    if (actions["Clouds|CloudsAction"] && group.current) {
      actions["Clouds|CloudsAction"].play();
    }
  }, [actions, group.current]);

  useEffect(() => {
    function handleResize() {
      // Obtener el ancho de la ventana
      const windowWidth = window.innerWidth;
      // Establecer la escala dependiendo del ancho de la ventana
      if (windowWidth < 768) {
        setScale(0.0050); // Escala para dispositivos pequeños
      } else {
        setScale(0.0065); // Escala predeterminada para otros dispositivos
      }
    }

    // Agregar un event listener para el evento resize
    window.addEventListener("resize", handleResize);
    // Llamar a handleResize al cargar la página para establecer la escala inicial
    handleResize();

    // Eliminar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 1.7, 0, 0.98]} scale={scale}>
          <group name="Earth_animationfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Clouds" rotation={[-Math.PI / 2, 0, 0]} scale={50}>
                  <mesh name="Clouds_Clouds_0" geometry={nodes.Clouds_Clouds_0.geometry} material={materials.Clouds} />
                </group>
                <group name="Earth" rotation={[-Math.PI / 2, 0, -1.5]} scale={50}>
                  <mesh name="Earth_Earth_0" geometry={nodes.Earth_Earth_0.geometry} material={materials.Earth} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}