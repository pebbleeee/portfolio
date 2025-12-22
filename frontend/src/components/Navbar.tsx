import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-6">
      <Link to="/" className="text-xl font-semibold">
        My Portfolio
      </Link>

      <div className="flex items-center space-x-6">
        <Link to="/" className="hover:text-teal-300 transition-colors">
          Home
        </Link>
        <Link to="/about" className="hover:text-teal-300 transition-colors">
          About
        </Link>
        <Link to="/education" className="hover:text-teal-300 transition-colors">
          Education
        </Link>
        <Link to="/projects" className="hover:text-teal-300 transition-colors">
          Projects
        </Link>

        {/* Aquarium link (special styling) */}
        <Link
          to="/aquarium"
          className="px-4 py-1 rounded-full bg-teal-500/20 text-teal-200 font-semibold hover:bg-teal-500/30 hover:text-white transition-all"
        >
          Aquarium
        </Link>
      </div>

    </nav>
  );
}
