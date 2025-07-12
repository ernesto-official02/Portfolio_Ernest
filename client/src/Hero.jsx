// src/components/HeroSection.jsx
import myPhoto from "/assets/profile.png"; // Update path as needed

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6l ">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm uppercase text-gray-600">Hello</p>
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            I’m <span className="text-red-500">Ernest</span> Anmol
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-md">
            A Full Stack Developer passionate about crafting visually stunning and user-centric digital experiences.
          </p>

          <a
            href="https://drive.google.com/file/d/14cTPwkfitWyaUmxkbsB8uvv-s2j_IrUP/view?usp=sharing" // Change this to your actual CV file path
            download target="_blank"
            className="inline-block mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded-full hover:bg-red-600 transition duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={myPhoto}
            alt="Gourav"
            className="rounded-xl shadow-lg w-full max-w-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
