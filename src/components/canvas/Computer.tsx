import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { ComputerLoader } from "../ComputerLoader";

interface ComputerProps {
	isMobile: boolean;
}

function Computer({ isMobile }: ComputerProps) {
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
				scale={isMobile ? 0.7 : 0.75}
				position={isMobile ? [0, -3.2, -2.2] : [0, -3.75, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
}

export function ComputerCanvas() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 500px)");
		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (e: MediaQueryListEvent) => {
			setIsMobile(e.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			frameloop="demand"
			shadows={true}
			dpr={[1, 2]}
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<ComputerLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computer isMobile={isMobile} />
			</Suspense>

			<Preload all={true} />
		</Canvas>
	);
}
