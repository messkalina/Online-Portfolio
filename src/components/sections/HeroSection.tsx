
import React from "react";
import SectionLabel from "../ui/SectionLabel";

const HeroSection: React.FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <SectionLabel text="Portfolio" />
      <div className="bg-[#ff3b30] h-[300px] flex items-center justify-center">
        <h1 className="text-4xl font-semibold text-white px-5 pb-0 w-[90%] text-center max-sm:text-[32px]">
          Elevating design through limitations
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
