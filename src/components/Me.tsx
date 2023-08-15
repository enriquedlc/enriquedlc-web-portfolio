import { mainStyles } from "../styles/mainStyles";
import { ComputerCanvas } from "./canvas/Computers";

// import "./Me.css";

export function Me() {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${mainStyles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
			>
				<div className="flex flex-col items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div>
					<h1 className={`${mainStyles.heroHeadText}`}>
						Hi I'm <span className="text-[#915eff]">Enrique</span>
					</h1>
					<p className={`${mainStyles.heroSubText} mt-2 text-white-100`}>
						Specialized in developing <br className="sm:block hidden" /> both front-end and back-end
						applications.
					</p>
				</div>
			</div>
			<ComputerCanvas />
		</section>
	);
}
