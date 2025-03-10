import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center bg-black text-white p-10 max-sm:flex-col max-sm:gap-5 max-sm:text-center">
      <div>RAB</div>
      <div className="flex gap-[30px] max-sm:justify-center">
        <div>Work</div>
        <div>About Me</div>
        <div>Projects</div>
      </div>
      <div className="flex gap-5 max-sm:justify-center">
        {/* Using placeholder icons since the original uses Tabler icons */}
        <span>FB</span>
        <span>TW</span>
        <span>IG</span>
      </div>
    </footer>
  );
};

export default Footer;
