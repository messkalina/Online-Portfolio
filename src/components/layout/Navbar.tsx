
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-5 py-5 max-w-screen-xl mx-auto">
      <div className="text-2xl font-bold">RAB</div>
      <div className="flex gap-10 max-sm:hidden">
        <div className="cursor-pointer text-sm">Work</div>
        <div className="cursor-pointer text-sm">About Me</div>
        <div className="cursor-pointer text-sm">Contact</div>
      </div>
    </nav>
  );
};

export default Navbar;
