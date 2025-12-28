
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-16 flex items-center justify-between px-6 fixed top-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-lg shadow-md"
        : "bg-transparent"
        }`}
    >
      <a href="#home" className="text-xl font-semibold">
        <span className="text-coral-orange">P</span>ortfolio
      </a>

      <div className="flex items-center space-x-6">
        <a href="#home" className="hover:text-teal-300 transition-colors">
          Home
        </a>
        <a href="#about" className="hover:text-teal-300 transition-colors">
          About
        </a>
        <a href="#projects" className="hover:text-teal-300 transition-colors">
          Projects
        </a>
        <a href="#education" className="hover:text-teal-300 transition-colors">
          Education
        </a>

        {/* Aquarium link (special styling) */}
        <a
          href="#aquarium"
          className="px-4 py-1 rounded-full bg-teal-500/20 text-teal-200 font-semibold hover:bg-teal-500/30 hover:text-white transition-all"
        >
          Aquarium
        </a>
      </div>

    </nav>
  );
}
