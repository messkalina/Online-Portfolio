import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5">
      <div className="text-2xl font-semibold">RAB</div>
      <div className="flex gap-[30px] max-sm:hidden">
        <div className="cursor-pointer">Work</div>
        <div className="cursor-pointer">About Me</div>
        <div className="cursor-pointer">Contact</div>
      </div>
    </nav>
  );
};

export default Navbar;
