import { BrowserRouter } from "react-router-dom";

import About from "./components/About";
import { Contact } from "./components/Contact";
import Experience from "./components/Experience";
import { Me } from "./components/Me";
import { Navbar } from "./components/Navbar";
import { Stars } from "./components/Stars";
import Tech from "./components/Tech";
import { Works } from "./components/Works";

function App() {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Me />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<div className="relative z-0">
					<Contact />
					<Stars />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
