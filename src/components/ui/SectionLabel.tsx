
import React from "react";

interface SectionLabelProps {
  text: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ text }) => {
  return <div className="text-[#666] text-sm px-5 py-2">[ {text} ]</div>;
};

export default SectionLabel;
