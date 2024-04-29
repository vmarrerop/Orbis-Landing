import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

useGLTF.preload("/earth.glb");

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/earth.glb");
  const { actions } = useAnimations(animations, group.current);

  useEffect(() => {
    if (actions["Clouds|CloudsAction"] && group.current) {
      actions["Clouds|CloudsAction"].play();
    }
  }, [actions, group.current]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 1.7, 0, 0.98]} scale={0.0068}>
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
