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
    <section className="bg-neutral-100 p-10">
      <SectionLabel text="Contact" />
      <h2 className="text-5xl font-bold mx-0 my-5 max-sm:text-[32px]">
        LET'S TALK
      </h2>
      <form onSubmit={handleSubmit} className="max-w-[800px]">
        <div className="flex gap-5 mb-5 max-md:flex-col">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="flex-1 border rounded p-2.5 border-solid border-[#ddd]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 border rounded p-2.5 border-solid border-[#ddd]"
            required
          />
        </div>
        <div className="flex gap-5 mb-5 max-md:flex-col">
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="flex-1 border rounded p-2.5 border-solid border-[#ddd]"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="flex-1 border rounded p-2.5 border-solid border-[#ddd]"
          />
        </div>
        <div>
          <input
            type="text"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded mb-5 p-2.5 border-solid border-[#ddd]"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white rounded cursor-pointer px-5 py-2.5 border-[none]"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
