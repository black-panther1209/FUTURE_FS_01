// src/components/Skills.jsx

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub"
  ];

  return (
    <section className="bg-slate-950 text-white py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-14">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl py-6 text-center text-lg font-semibold hover:border-cyan-400 hover:scale-110 hover:shadow-cyan-500/20 hover:shadow-xl transition duration-300"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;