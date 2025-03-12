
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import { builder, BuilderComponent } from "@builder.io/react";

// Initialize the Builder with your public API key
builder.init("04da1de429d941d88b8fb2e2b7a9daff");

const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [builderContentJson, setBuilderContentJson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBuilderContent() {
      try {
        const content = await builder.get("case-study").promise();
        setBuilderContentJson(content);
      } catch (error) {
        console.error("Error fetching Builder content:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBuilderContent();
  }, []);

  return (
    <div className="bg-white font-['Inter']">
      <Navbar />
      <main className="max-w-screen-xl mx-auto">
        <SectionLabel text="Case Study" />
        
        {loading ? (
          <div className="p-10 text-center">Loading case study...</div>
        ) : builderContentJson ? (
          <BuilderComponent model="case-study" content={builderContentJson} />
        ) : (
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
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;
