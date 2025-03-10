import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  variant: "red" | "blue";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  variant,
}) => {
  const bgColor = variant === "red" ? "bg-[#ff3b30]" : "bg-[#007aff]";

  return (
    <div className={`h-[300px] relative text-white p-5 ${bgColor}`}>
      <div className="absolute bottom-5">
        <div className="font-semibold mb-2.5">{title}</div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
