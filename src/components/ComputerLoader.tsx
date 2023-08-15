import { Html, useProgress } from "@react-three/drei";

export function ComputerLoader() {
	const { progress } = useProgress();

	return (
		<Html>
			<span className="canvas-load">
				<p
					style={{
						fontSize: 14,
						color: "#f1f1f1",
						fontWeight: 700,
						marginTop: 40,
						marginRight: "50rem",
					}}
				>
					Loading... {progress.toFixed(2)}%
				</p>
			</span>
		</Html>
	);
}
