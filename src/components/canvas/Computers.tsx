import { Suspense } from "react";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ComputerLoader } from "../ComputerLoader";

// loader

function Computer() {
	const computer = useGLTF("./desktop_pc/scene.gltf");
	return (
		<mesh>
			<hemisphereLight intensity={2} groundColor="black" />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.1}
				penumbra={1}
				intensity={1}
				castShadow={true}
				shadow-mapSize={1024}
			/>
			<pointLight intensity={1} />
			<primitive
				object={computer.scene}
				scale={0.75}
				position={[0, -3.25, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
}

export function ComputerCanvas() {
	return (
		<Canvas
			frameloop="demand"
			shadows={true}
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			{/* TODO: PUT SOME PARTICLES */}
			<Suspense fallback={<ComputerLoader />}>
				<OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
				<Computer />
			</Suspense>
			<Preload all={true} />
		</Canvas>
	);
}
