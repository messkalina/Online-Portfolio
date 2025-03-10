
import React, { useState } from "react";
import SectionLabel from "../ui/SectionLabel";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    alert("Message sent successfully!");
  };

  return (
    <section className="bg-[#f1f1f1]">
      <div className="max-w-screen-xl mx-auto">
        <SectionLabel text="Contact" />
        <div className="p-5">
          <h2 className="text-6xl font-black my-10 max-sm:text-5xl">
            LET'S TALK
          </h2>
          <form onSubmit={handleSubmit} className="max-w-[800px]">
            <div className="grid grid-cols-2 gap-5 mb-5 max-md:grid-cols-1">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-transparent border-b pb-3 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border-b pb-3 focus:outline-none"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-5 mb-5 max-md:grid-cols-1">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-transparent border-b pb-3 focus:outline-none"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-transparent border-b pb-3 focus:outline-none"
              />
            </div>
            <div className="mb-10">
              <input
                type="text"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b pb-3 focus:outline-none"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-black text-white rounded-full px-6 py-3 font-medium text-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
