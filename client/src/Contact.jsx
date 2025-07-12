// src/components/Contact.jsx
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto bg-[#121212] dark:bg-[#1a1a1a] rounded-2xl p-10 md:flex md:justify-between md:gap-10 shadow-2xl border border-gray-700">
        {/* Left Column */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Let's Talk</h2>
          <p className="text-gray-300 mb-6">
            Whether you have a project, want to collaborate, or just say hello—feel free to reach out!
          </p>

          <ul className="text-xl space-y-4">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Punjab, India</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-500" />
              <span>+91 83607 54357</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              <span>ernestanmol@gmail.com</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6 text-3xl text-white">
            <a href="https://www.linkedin.com/in/ernest-anmol-48a302211/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-red-500 transition" />
            </a>
            <a href="https://github.com/ernesto-official02" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-red-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-red-500 transition" />
            </a>
          </div>
        </div>

        {/* Right Column: Form */}
        <form className="md:w-1/2 space-y-6">
          <div>
            <label className="block text-xl mb-1">Your Name</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-red-500 py-2 px-1"
              required
            />
          </div>
          <div>
            <label className="block text-xl mb-1">Your Email</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-red-500 py-2 px-1"
              required
            />
          </div>
          <div>
            <label className="block text-xl mb-1">Subject</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-red-500 py-2 px-1"
            />
          </div>
          <div>
            <label className="block text-xl mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-red-500 py-2 px-1 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white text-xl font-semibold py-3 rounded-md transition duration-300"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
