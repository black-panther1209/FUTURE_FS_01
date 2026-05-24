// src/components/Hero.jsx

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 relative overflow-hidden"
    >

      <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full top-20 left-20"></div>

      <div className="text-center max-w-3xl relative z-10 animate-pulse">

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 text-lg mb-4"
        >
          Hello There 👋
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          I'm <span className="text-cyan-400">Shristi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-400 text-lg md:text-xl mb-8"
        >
          A passionate Full Stack Web Developer who loves
          building modern and responsive web applications.
        </motion.p>

        <div className="flex justify-center gap-4 flex-wrap">

          <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl font-semibold transition duration-300">
            View Projects
          </button>

          <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition duration-300">
            Download Resume
          </button>

        </div>

        <div className="flex justify-center gap-6 mt-10 text-3xl">

          <a href="#">
            <FaGithub className="hover:text-cyan-400 transition" />
          </a>

          <a href="#">
            <FaLinkedin className="hover:text-cyan-400 transition" />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;