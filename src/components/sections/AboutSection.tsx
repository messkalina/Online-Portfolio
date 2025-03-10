import React from "react";
import SectionLabel from "../ui/SectionLabel";

const AboutSection: React.FC = () => {
  return (
    <section className="p-10">
      <SectionLabel text="About me" />
      <div className="mt-5">
        <h2 className="text-[32px] font-semibold max-w-[600px] mb-[30px] max-sm:text-2xl">
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
