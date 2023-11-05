import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import { ComputerLoader } from "../ComputerLoader";

interface BallProps {
	imgUrl: string;
}

const Ball = (props: BallProps) => {
	const [decal] = useTexture([props.imgUrl]);

	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow={true} receiveShadow={true} scale={3}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="#fff8eb"
					polygonOffset={true}
					polygonOffsetFactor={-5}
					flatShading={true}
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					map={decal}
					// @ts-ignore
					flatShading={{ position: [0, 0, 1] }}
				/>
			</mesh>
		</Float>
	);
};

interface BallCanvasProps {
	icon: string;
}

const BallCanvas = ({ icon }: BallCanvasProps) => {
	return (
			<Suspense fallback={<ComputerLoader />}>
				<img src={icon} alt="" className="h-24" />
			</Suspense>
	);
};

export default BallCanvas;
