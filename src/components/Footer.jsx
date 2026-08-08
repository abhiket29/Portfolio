/* eslint-disable react/no-unknown-property */
import { Mail, X } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  // Close popup on Escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsContactPopupOpen(false);
      }
    };

    if (isContactPopupOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent background scroll when popup is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isContactPopupOpen]);

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsContactPopupOpen(true);
  };

  const closePopup = () => {
    setIsContactPopupOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <>
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
            <a href="#projects" id="nav-projects" className="hover:text-white transition-colors duration-200">
              Projects
            </a>
            <a href="#about" className="hover:text-white transition-colors duration-200">
              About
            </a>
            <a 
              href="#contact" 
              onClick={handleContactClick}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
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
              <FaGithub className="w-5 h-5 hover:text-white transition-colors duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhiket-kumar-28964b238/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-5 h-5 hover:text-white transition-colors duration-200" />
            </a>
            <a href="mailto:abhiket29@gmail.com">
              <Mail className="w-5 h-5 hover:text-white transition-colors duration-200" />
            </a>
            <a
              href="https://www.instagram.com/_.abhiiket.krr.49__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-5 h-5 hover:text-white transition-colors duration-200" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm mt-6 md:pb-[2rem]">
          Built with ❤️ by Abhiket © {new Date().getFullYear()} All Rights
          reserved.
        </div>
      </footer>

      {/* Contact Popup Modal */}
      {isContactPopupOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300 ease-out"
          onClick={handleOverlayClick}
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 ease-out scale-100 opacity-100 border border-gray-700">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                Get In Touch
              </h3>
              <button
                onClick={closePopup}
                className="text-gray-400 hover:text-white transition-colors duration-200 rounded-full p-1 hover:bg-gray-700"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-lg font-medium text-white">
                  Let&apos;s Connect!
                </h4>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  I&apos;d love to hear from you! Whether you have a project in mind, 
                  want to collaborate, or just want to say hello, feel free to reach out.
                </p>

                <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                  <p className="text-gray-300 text-sm mb-2">
                    Drop your enquiry at:
                  </p>
                  <a
                    href="mailto:abhiket29@gmail.com?subject=Enquiry from Portfolio Website"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 text-sm bg-blue-500/10 hover:bg-blue-500/20 px-3 py-2 rounded-lg border border-blue-500/20 hover:border-blue-500/40"
                    onClick={() => {
                      // Optional: Close popup after clicking email
                      setTimeout(() => setIsContactPopupOpen(false), 100);
                    }}
                  >
                    <Mail className="w-4 h-4" />
                    abhiket29@gmail.com
                  </a>
                </div>

                <p className="text-xs text-gray-400 mt-4">
                  I typically respond within 24 hours ⚡
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalEnter {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
}