
import React from "react";
import SectionLabel from "../ui/SectionLabel";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="p-10">
      <SectionLabel text="About me" />
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10">
        <h2 className="text-[32px] font-semibold mb-[30px] max-sm:text-2xl">
          Exceptional Branding That Elevated Our Identity.
        </h2>
        <div className="flex flex-col gap-5">
          <div className="text-lg">User Research & Personas Development</div>
          <div className="text-lg">User Research & Personas Development</div>
          <div className="text-lg">User Research & Personas Development</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
