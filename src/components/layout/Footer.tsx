
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-5 max-sm:text-center">
          <div className="font-bold">RAB</div>
          <div className="flex gap-5 max-sm:justify-center">
            <span>FB</span>
            <span>TW</span>
            <span>IG</span>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-10 max-sm:grid-cols-1 max-sm:gap-3 max-sm:text-center">
          <div className="text-sm">Work</div>
          <div className="text-sm">About Me</div>
          <div className="text-sm">Contact</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
