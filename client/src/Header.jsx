// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="shadow-md bg-white dark:bg-[#1a1a2e] fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <h1 className="text-2xl font-bold text-red-600">Ernest</h1>

        {/* Center: Nav (hidden on mobile) */}
        <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium justify-center flex-1">
          <Link to="home" smooth duration={500} className="cursor-pointer hover:text-red-500">Home</Link>
          <Link to="about" smooth duration={500} className="cursor-pointer hover:text-red-500">About</Link>
          <Link to="services" smooth duration={500} className="cursor-pointer hover:text-red-500">Services</Link>
          <Link to="portfolio" smooth duration={500} className="cursor-pointer hover:text-red-500">Portfolio</Link>
          <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-red-500">Contact</Link>
        </nav>

        {/* Right: Dark Mode Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-700 dark:text-gray-200 text-lg hover:text-red-500 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-200 md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu links */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#1a1a2e] shadow-md px-6 pb-4 text-gray-800 dark:text-gray-100">
          {["home", "about", "services", "portfolio", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:text-red-500"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
