import React from "react";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-[#edeb85ff]">Nahla Mohammed</h2>

        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#edeb85ff] text-sm sm:text-base my-1 transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/nahla.mohammed.889342" },
            { icon: <FaWhatsapp />, link: "https://wa.me/qr/4TKJHENDUWDMJ1" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/nahla-mohammed-381282381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
            { icon: <FaYoutube />, link: "https://youtube.com/@nahlamohamed-j3t?si=dKwMa3YhjnXvu5Bf" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#edeb85ff] transition-all duration-200 transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-6">
          © 2025 Nahla Mohammed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;