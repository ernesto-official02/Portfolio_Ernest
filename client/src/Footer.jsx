// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c0f1d] text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Developer Info */}
        <div>
          <h3 className="text-4xl font-bold text-red-500 mb-2">Ernest Anmol</h3>
          <p className="text-xl">
            Full Stack Developer passionate about building stylish, scalable, and interactive web experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold text-red-500 mb-2">Quick Links</h3>
          <ul className="space-y-2 text-xl">
            <li><a href="#home" className="hover:text-red-400">Home</a></li>
            <li><a href="#about" className="hover:text-red-400">About</a></li>
            <li><a href="#services" className="hover:text-red-400">Services</a></li>
            <li><a href="#portfolio" className="hover:text-red-400">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-red-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold text-red-500 mb-2">Contact Info</h3>
          <ul className="text-xl space-y-2">
            <li>Email: <a href="mailto:ernestanmol@gmail.com" className="hover:text-red-400">ernestanmol@gmail.com</a></li>
            <li>Location: India</li>
            <li>Phone: +91-8360754357</li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-700 max-w-6xl mx-auto" />

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xl text-gray-400">
        <p>© 2025 Ernest Anmol. All rights reserved.</p>
        <div className="flex space-x-4 text-xl mt-4 md:mt-0">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-red-500">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-red-500">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-red-500">
            <FaTwitter />
          </a>
          <a href="mailto:ernestanmol@gmail.com" className="hover:text-red-500">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
