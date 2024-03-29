import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, PresentationControls, Stage } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
function Model(props) {
    const { scene } = useGLTF("./apple_macpro_low_poly.glb");
    return <primitive object={scene} {...props} />;
}

const OurModel = () => {
    return (
        <div className=" h-full w-full">
            <Canvas
                dpr={[1, 1]}
                shadows={false}
                camera={{ fov: 45 }}
                style={{
                    
                    width: "100%",
                    height: "100%",

            
                }}
            >
                <ambientLight intensity={1} />

                
                <PresentationControls
                    speed={1.5}
                    global
                    zoom={0.9}
                    polar={[0.5, 0.7]}
                >
                    <Stage  environment={null} shadows={false}>
                        <Model scale={0.015} />
                    </Stage>
                </PresentationControls>
            </Canvas>
        </div>
    );
};

export default OurModel;
