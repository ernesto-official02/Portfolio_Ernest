// src/components/Services.jsx
import React from "react";

const services = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Crafting beautiful, user-centric designs with Figma and modern CSS frameworks like Tailwind CSS.",
  },
  {
    icon: "💻",
    title: "Full Stack Development",
    description: "Developing scalable and responsive web apps using React, Node.js, Express, and MongoDB.",
  },
  {
    icon: "⚙️",
    title: "API Integration",
    description: "Connecting third-party services, payment gateways, and custom APIs to deliver dynamic features.",
  },
  {
    icon: "🔍",
    title: "SEO Optimization",
    description: "Improving site visibility with SEO best practices including meta tags, Open Graph, and performance tuning.",
  },
  {
    icon: "📊",
    title: "Admin Dashboards",
    description: "Building secure, role-based admin dashboards with analytics, search, filters, and data export tools.",
  },
  {
    icon: "🛠️",
    title: "Maintenance & Support",
    description: "Providing ongoing support, updates, bug fixes, and optimizations to keep your site running smoothly.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#0e162e] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">What I Do</h2>

        {/* Glassmorphic Container */}
        <div className="bg-gradient-to-b from-[#1c1f2b] to-[#151a27] bg-opacity-80 shadow-2xl rounded-2xl p-8 sm:p-12 backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white text-black p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
