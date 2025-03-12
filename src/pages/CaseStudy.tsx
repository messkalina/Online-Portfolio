
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";

const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="bg-white font-['Inter']">
      <Navbar />
      <main className="max-w-screen-xl mx-auto">
        <SectionLabel text="Case Study" />
        <div className="p-10">
          <h1 className="text-[64px] font-bold mb-5 max-sm:text-[40px]">
            PROJECT NAME {id}
          </h1>
          <div className="text-lg max-w-[600px] mb-10">
            This is a detailed case study that aims to showcase approach to design allows me to understand the users needs and deliver solutions that address the needs of our clients.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-700">
                This project showcases my approach to designing user-centered solutions. I focused on understanding the client's needs and delivering a product that addresses their specific requirements.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-gray-700">
                The main challenge was to create an intuitive interface that would allow users to easily navigate through complex data while maintaining a clean and modern design.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;
