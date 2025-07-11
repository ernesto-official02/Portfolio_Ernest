// src/components/Work.jsx
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "InkByJenny",
    description:
      "Modern tattoo studio app with booking system, admin panel, email notifications, responsive UI, and SEO. Built using the MERN stack and styled with Tailwind CSS.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind", "Nodemailer"],
    liveLink: "https://your-inkbyjenny-live-link.com",
    codeLink: "https://github.com/yourusername/inkbyjenny",
  },
  {
    title: "VetBuddy",
    description:
      "Veterinary care app for emergency support, grooming, and pet appointments. Integrated email alerts and secure booking system using React, Express, MongoDB, and Tailwind CSS.",
    techStack: ["React", "Express", "MongoDB", "Tailwind"],
    liveLink: "https://your-vetbuddy-live-link.com",
    codeLink: "https://github.com/yourusername/vetbuddy",
  },
  {
    title: "Developer Portfolio Website",
    description:
      "A personal portfolio to showcase projects and skills. Features include animations, responsive design, contact form with email alerts, and SEO-friendly performance optimization.",
    techStack: ["React", "Express", "MongoDB", "Tailwind"],
    liveLink: "https://your-portfolio-live-link.com",
    codeLink: "https://github.com/yourusername/portfolio",
  },
];

const Work = () => {
  return (
    <section id="portfolio" className="bg-[#0e162e] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Portfolio</h2>

        {/* Glassy container box */}
        <div className="bg-gradient-to-b from-[#1c1f2b] to-[#151a27] bg-opacity-80 shadow-2xl rounded-2xl p-8 sm:p-12 backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white text-black p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-black text-white px-2 py-1 rounded text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm text-indigo-600 font-medium items-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <FiExternalLink />
                    Live
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <FaGithub />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
