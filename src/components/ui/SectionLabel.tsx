import React from "react";

interface SectionLabelProps {
  text: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ text }) => {
  return <div className="text-[#666] mx-0 my-5 px-10 py-0">[ {text} ]</div>;
};

export default SectionLabel;
