import { motion } from "framer-motion";
import React from "react";

const SectionAppWrapper = (Component: React.ComponentType, idName: string) =>
	function HOC() {
		return (
			<motion.section>
				<Component />
			</motion.section>
		);
	};

export default SectionAppWrapper;
