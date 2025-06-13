import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Arlogo from "../assets/ARlogo.jpg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Technologies", href: "#technologies" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    // { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="mb-8 md:mb-15 pt-10 md:pt-10 relative z-50">
      <div className="flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <Link to="/" onClick={closeMenu}>
            <img
              className="w-16 h-16 md:w-20 md:h-20 rounded-3xl cursor-pointer transition-transform duration-300 hover:scale-105"
              src={Arlogo}
              alt="logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg text-white font-medium hover:text-blue-600 transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-white hover:text-blue-600 transition-colors duration-300 focus:outline-none z-50 relative"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] shadow-lg border-t border-b border-gray-200 transition-all duration-300 ease-in-out z-40 ${
          isOpen
            ? "opacity-100 visibility-visible transform translate-y-0"
            : "opacity-0 visibility-hidden transform -translate-y-2"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="block text-lg font-medium text-white hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-30 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
};
