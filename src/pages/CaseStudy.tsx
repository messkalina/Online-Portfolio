
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
      <main className="w-full mx-auto">
        <SectionLabel text="Case Study" />
        
        {/* Hero Section */}
        <div className="bg-black text-white p-8 md:p-16 lg:p-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">PROJECT TITLE</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Explore our tailored services designed to elevate your brand.
          </p>
        </div>
        
        {/* Goal Strategy Section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-blue-600 text-white p-8 md:p-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">GOAL STRATEGY</h2>
          </div>
          <div className="bg-red-600 text-white p-8 md:p-16">
            <p className="text-lg mb-8">
              "We are committed to great design and art direction. Our mission is to bring the best creative solutions to complex communications."
            </p>
            <p className="text-sm mb-4">— Name to be updated —</p>
            <div className="border-t border-white pt-6 mt-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold">Brand Philosophy & Positioning</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Business Growth Strategy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Problem Design Section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white p-8 md:p-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">PROBLEM DESIGN</h2>
            <p className="text-lg mb-6">
              Our challenge was to create a visual identity that stands out in a competitive market while conveying professionalism and innovation.
            </p>
            <div className="mt-8">
              <p className="text-sm font-semibold mb-2">Keyword 1</p>
              <p className="text-sm font-semibold mb-2">Keyword 2</p>
              <p className="text-sm font-semibold mb-2">Keyword 3</p>
            </div>
          </div>
          <div className="bg-white p-8 md:p-16 flex items-center">
            <div>
              <p className="text-lg mb-6">
                1. Lorem ipsum dolor sit amet
              </p>
              <p className="text-lg mb-6">
                2. Lorem ipsum dolor sit amet
              </p>
              <p className="text-lg mb-6">
                3. Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
        
        {/* UX/UX Design Section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-blue-600 text-white p-8 md:p-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">UX/UX DESIGN</h2>
            <p className="text-lg mb-6">
              We focused on a streamlined, intuitive user experience that puts content first. Our design principles prioritize both aesthetics and functionality to create engaging interactions.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-12">
              <div>
                <p className="text-sm font-semibold mb-2">Content Strategy</p>
                <p className="text-sm font-semibold mb-2">Digital User Flows</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2">User Testing & Feedback</p>
                <p className="text-sm font-semibold mb-2">UX/UI Design System</p>
              </div>
            </div>
          </div>
          <div className="bg-red-600 text-white p-8 md:p-16">
          </div>
        </div>
        
        {/* Objective/Solution Section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white p-8 md:p-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">OBJECTIVE/ SOLUTION</h2>
            <p className="text-lg mb-6">
              See what our satisfied clients say about working with us.
            </p>
          </div>
          <div className="bg-blue-600 text-white p-8 md:p-16 flex items-center">
            <div>
              <p className="text-xl font-bold mb-2">"The team is amazing"</p>
              <p className="text-lg mb-6">
                Client focused on results
              </p>
            </div>
          </div>
        </div>
        
        {/* Process Section */}
        <div className="bg-white p-8 md:p-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">PROCESS</h2>
          <p className="text-lg max-w-2xl mb-16">
            Our strategic process ensures consistent results and client satisfaction every time.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            <div className="bg-blue-600 text-white p-8 flex flex-col">
              <span className="text-2xl font-bold mb-4">01</span>
              <h3 className="text-xl font-semibold mb-4">Understanding Your Critical Needs</h3>
            </div>
            <div className="bg-red-600 text-white p-8 flex flex-col">
              <span className="text-2xl font-bold mb-4">02</span>
              <h3 className="text-xl font-semibold mb-4">Crafting Innovative Solutions</h3>
            </div>
            <div className="bg-blue-600 text-white p-8 flex flex-col">
              <span className="text-2xl font-bold mb-4">03</span>
              <h3 className="text-xl font-semibold mb-4">Bringing Ideas to Life</h3>
            </div>
            <div className="bg-red-600 text-white p-8 flex flex-col">
              <span className="text-2xl font-bold mb-4">04</span>
              <h3 className="text-xl font-semibold mb-4">Seamless Deployment and Beyond</h3>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;
