
import React from "react";
import SectionLabel from "../ui/SectionLabel";

const AboutSection: React.FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <SectionLabel text="About me" />
      <div className="px-5 py-10 grid grid-cols-2 gap-10 max-md:grid-cols-1">
        <div>
          <h2 className="text-3xl font-semibold mb-5 max-sm:text-2xl">
            Exceptional Branding That Elevated Our Identity.
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-medium mb-2">User Research & Personas Development</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">User Research & Personas Development</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">User Research & Personas Development</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
