import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Arlogo from "../assets/ARlogo.jpg";
// import { GoDownload } from "react-icons/go";

export const Navbar = () => {
  return (
    <div>
      <nav className="mb-8 md:mb-15 flex items-center justify-around md:justify-between pt-10 md:pt-10">
        <div className="flex flex-shrink-0 items-center">
          <Link to="/">
            <img
              className="mx-2 w-20 h-30 rounded-3xl cursor-pointer"
              src={Arlogo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          {/* <a
            href="/Portfolio-main/public/Abhiket.FD.pdf"
            download="Abhiket.FD.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
          >
            <GoDownload />
          </a> */}
          <a
            href="http://www.linkedin.com/in/abhiket-kumar-28964b238"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/abhiket29"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/_.abhiiket.krr.49__/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
    </div>
  );
};
