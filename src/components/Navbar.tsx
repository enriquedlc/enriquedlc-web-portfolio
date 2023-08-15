import { useState } from "react";
import { Link } from "react-router-dom";

// TODO: FIX THIS
import logo from "../assets/mainLogo/E-logo.png";

import { navTitles } from "../constants/constants";

import { mainStyles } from "../styles/mainStyles";

export function Navbar() {
	const [active, setActive] = useState("");
	// const [toggle, setToggle] = useState(false);

	return (
		<nav
			className={`${mainStyles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to={"/"}
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt="logo" className="w-9 h-9 object-contain" />
					<p className="text-white text-[18px] font-bold cursor-pointer">
						Enrique &nbsp;<span className="sm:block hidden">| De La Concepción</span>
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navTitles.map((title) => (
						// rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<li
							key={title.id}
							className={`${
								active === title.name ? "text-white" : "text-secondary"
							} hover:text-white text-[18px] cursor-pointer`}
							onClick={() => setActive(title.name)}
						>
							<a href={`#${title.id}`}>{title.name}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
