// src/components/Projects.jsx

function Projects() {

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern responsive portfolio website built using React and Tailwind CSS.",
    },

    {
      title: "Mini CRM",
      description:
        "A customer management system with authentication and CRUD operations.",
    },

    {
      title: "Local Business Website",
      description:
        "A responsive business website designed for local shops and startups.",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-3 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-300"
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <button className="bg-cyan-500 hover:bg-cyan-400 px-5 py-2 rounded-xl font-semibold transition">
                View Project
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;