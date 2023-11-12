import { BrowserRouter } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { Me } from "./components/Me";
import { Navbar } from "./components/Navbar";
import { StarCanvas } from "./components/Stars";
import Tech from "./components/Tech";
import Projects from "./components/Project";

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
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
