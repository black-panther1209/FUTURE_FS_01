// src/components/Contact.jsx

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6"
    >

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Contact Me
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Have a project idea or want to collaborate?
          Feel free to reach out.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="bg-slate-900 border border-slate-700 px-5 py-4 rounded-xl w-full outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-slate-900 border border-slate-700 px-5 py-4 rounded-xl w-full outline-none focus:border-cyan-400"
          />

        </div>

        <textarea
          placeholder="Your Message"
          rows="6"
          className="bg-slate-900 border border-slate-700 px-5 py-4 rounded-xl w-full mt-6 outline-none focus:border-cyan-400"
        ></textarea>

        <button className="bg-cyan-500 hover:bg-cyan-400 px-8 py-3 rounded-xl font-semibold mt-8 transition">
          Send Message
        </button>

      </div>

    </section>
  );
}

export default Contact;