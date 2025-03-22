import { Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-b border-neutral-900 text-gray-300 py-8 pb-4 px-8 md:px-[8rem]">
      <div className="max-w-6xl flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-white">Abhiket Kr. Roy</h2>
          <p className="text-sm opacity-75">
            Building the future with code & AI.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex lg:space-x-6 gap-3 mt-4 md:mt-0 md:flex-col lg:flex-row">
          <a href="#projects" id="nav-projects" className="hover:text-white">
            Projects
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex lg:space-x-4 mt-4 gap-3 md:mt-0 lg:flex-row md:gap-1">
          <a
            href="https://github.com/abhiket29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5 hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhiket-kumar-28964b238/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-5 h-5 hover:text-white" />
          </a>
          <a
            href="https://www.instagram.com/_.abhiiket.krr.49__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-5 h-5 hover:text-white" />
          </a>
          <a href="mailto:abhiket29@gmail.com">
            <Mail className="w-5 h-5 hover:text-white" />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-6 md:pb-[2rem]">
        Built with ❤️ by Abhiket © {new Date().getFullYear()} All Rights
        reserved.
      </div>
    </footer>
  );
}
