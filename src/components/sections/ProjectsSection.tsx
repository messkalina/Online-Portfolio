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
    <>
      <SectionLabel text="Selected work" />
      <section className="p-10">
        <h2 className="text-[64px] font-bold mb-5 max-sm:text-[40px]">
          PROJECTS
        </h2>
        <div className="text-lg max-w-[600px] mb-10">
          Explore our recent projects showcasing creativity, innovation, and
          impactful design solutions.
        </div>
        <div className="grid grid-cols-[repeat(3,1fr)] gap-5 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              variant={project.variant}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
