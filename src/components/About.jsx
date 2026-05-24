// src/components/About.jsx

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="profile"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>

            <p className="text-gray-300 text-lg leading-8 mb-6">
              I'm a passionate Full Stack Web Developer who enjoys
              creating responsive and modern websites using
              React, Tailwind CSS, Node.js, and MongoDB.
            </p>

            <p className="text-gray-400 text-lg leading-8">
              I love learning new technologies and building
              projects that solve real-world problems while
              improving user experience.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;