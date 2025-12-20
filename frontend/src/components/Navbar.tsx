import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-6">
      <Link to="/" className="text-xl font-semibold">
        My Portfolio
      </Link>

      <div className="flex space-x-6">
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
      </div>
    </nav>
  );
}
