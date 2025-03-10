
import React from "react";
import SectionLabel from "../ui/SectionLabel";
import ProjectCard from "../ui/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "PROJECT NAME 1",
    description:
      "This is a detailed case study that aims to showcase approach to design allows me to understand the users needs and deliver solutions that address the needs of our clients.",
    variant: "red" as const,
  },
  {
    id: 2,
    title: "PROJECT NAME 1",
    description:
      "This is a detailed case study that aims to showcase exceptional user experiences. My attention to detail ensures that every project can make impacts on users.",
    variant: "blue" as const,
  },
  {
    id: 3,
    title: "PROJECT NAME 1",
    description:
      "This is a detailed case study that aims to showcase approach to design allows me to understand the users needs and deliver solutions that address the needs.",
    variant: "red" as const,
  },
  {
    id: 4,
    title: "PROJECT NAME 1",
    description:
      "This is a detailed case study that aims to showcase exceptional user experiences. My attention to detail ensures that every project can make impacts.",
    variant: "blue" as const,
  },
  {
    id: 5,
    title: "PROJECT NAME 1",
    description:
      "This is a detailed case study that aims to showcase exceptional user experiences. My attention to detail ensures that every project can make impacts.",
    variant: "red" as const,
  },
  {
    id: 6,
    title: "PROJECT NAME 1",
    description:
      "This is a detailed case study that aims to showcase exceptional user experiences. My attention to detail ensures that every project can make impacts.",
    variant: "blue" as const,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <SectionLabel text="Selected work" />
      <div className="px-5 py-10">
        <h2 className="text-[80px] font-black leading-none mb-5 max-sm:text-[60px]">
          PROJECTS
        </h2>
        <div className="text-xl max-w-[600px] mb-10">
          Explore our recent projects showcasing creativity, innovation, and
          impactful design solutions.
        </div>
        <div className="grid grid-cols-3 gap-0 max-md:grid-cols-2 max-sm:grid-cols-1">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              variant={project.variant}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
