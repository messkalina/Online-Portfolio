import React from "react";
import SectionLabel from "../ui/SectionLabel";

const HeroSection: React.FC = () => {
  return (
    <>
      <SectionLabel text="Portfolio" />
      <div className="text-5xl font-semibold max-w-[600px] bg-[#ff3b30] text-white mx-0 my-5 px-10 py-[100px] max-sm:text-[32px]">
        Elevating design through limitations
      </div>
    </>
  );
};

export default HeroSection;
