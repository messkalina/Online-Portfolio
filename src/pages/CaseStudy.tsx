
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";

const CaseStudy: React.FC = () => {
  return (
    <div className="bg-white font-['Inter']">
      <Navbar />
      <main className="max-w-screen-xl mx-auto">
        <SectionLabel text="Case Study" />
        <div className="p-10">
          <h1 className="text-[64px] font-bold mb-5 max-sm:text-[40px]">
            PROJECT NAME 1
          </h1>
          <div className="text-lg max-w-[600px] mb-10">
            This is a detailed case study that aims to showcase approach to design allows me to understand the users needs and deliver solutions that address the needs of our clients.
          </div>
          {/* Add your case study content here based on your Figma design */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;
