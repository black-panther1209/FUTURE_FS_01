// src/components/Navbar.jsx

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950 text-white flex justify-between items-center px-8 py-4 z-50">

      <h1 className="text-2xl font-bold text-cyan-400">
        Portfolio
      </h1>

      <div className="flex gap-6 text-lg">

        <a href="#home" className="hover:text-cyan-400">
          Home
        </a>

        <a href="#about" className="hover:text-cyan-400">
          About
        </a>

        <a href="#projects" className="hover:text-cyan-400">
          Projects
        </a>

        <a href="#contact" className="hover:text-cyan-400">
          Contact
        </a>

      </div>

    </nav>
  );
}

export default Navbar;