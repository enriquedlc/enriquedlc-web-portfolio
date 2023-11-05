import { Suspense } from "react";

import { ComputerLoader } from "../ComputerLoader";

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
