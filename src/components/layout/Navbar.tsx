
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex justify-between items-center px-10 py-5">
      <div className="text-2xl font-semibold">RAB</div>
      
      {/* Desktop navigation */}
      <div className="hidden md:flex gap-[30px]">
        <div className="cursor-pointer">Work</div>
        <div className="cursor-pointer">About Me</div>
        <div className="cursor-pointer">Contact</div>
      </div>
      
      {/* Mobile hamburger menu */}
      <div className="md:hidden">
        <button 
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>
      
      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md z-50 md:hidden">
          <div className="flex flex-col py-4">
            <a href="#work" className="px-10 py-3 hover:bg-gray-100" onClick={toggleMenu}>
              Work
            </a>
            <a href="#about" className="px-10 py-3 hover:bg-gray-100" onClick={toggleMenu}>
              About Me
            </a>
            <a href="#contact" className="px-10 py-3 hover:bg-gray-100" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
