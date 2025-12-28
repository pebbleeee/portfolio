
import Navbar from "./components/Navbar";
import GlobalBubbles from "./components/GlobalBubbles";

import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Aquarium from "./pages/Aquarium";


export default function App() {
  return (
    <div className="min-h-screen relative">
      <div className="light-rays" />
      <GlobalBubbles />
      <Navbar />

      <main className="px-6">
        <section id="home" className="min-h-screen pt-16">
          <Home />
        </section>
        <section id="about" className="min-h-screen pt-16">
          <About />
        </section>
        <section id="projects" className="min-h-screen pt-16">
          <Projects />
        </section>
        <section id="education" className="min-h-screen pt-16">
          <Education />
        </section>
        <section id="aquarium" className="min-h-screen pt-16">
          <Aquarium />
        </section>
      </main>
    </div>
  );
}
