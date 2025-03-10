
import React from "react";
import SectionLabel from "../ui/SectionLabel";

const HeroSection: React.FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <SectionLabel text="Portfolio" />
      <div className="bg-[#ff3b30] h-[300px] flex items-end">
        <h1 className="text-4xl font-semibold text-white p-5 pb-10 max-w-[600px] max-sm:text-[32px]">
          Elevating design through limitations
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
