import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { ComputerLoader } from "../ComputerLoader";

function Earth() {
	const earth = useGLTF("./planet/scene.gltf");

	return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />;
}

export function EarthCanvas() {
	return (
		<Canvas
			shadows={true}
			frameloop="demand"
			gl={{ preserveDrawingBuffer: true }}
			camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 4, 6] }}
		>
			<Suspense fallback={<ComputerLoader />}>
				<OrbitControls
					autoRotate={true}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Earth />
				<Preload all={true} />
			</Suspense>
		</Canvas>
	);
}
