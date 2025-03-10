
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  variant: "red" | "blue";
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  variant,
  index,
}) => {
  const bgColor = variant === "red" ? "bg-[#ff3b30]" : "bg-[#007aff]";

  return (
    <div className="flex flex-col">
      <div className={`h-[300px] ${bgColor}`}></div>
      <div className="bg-[#f1f1f1] p-5">
        <div className="text-xs text-[#666] mb-2">[{` 0${index}. `}]</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
