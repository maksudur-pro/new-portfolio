import type React from "react";
import Button from "../reusable-component/Button";

type ProjectType = {
  image: string;
  title: string;
  description: string;
  demo: string;
  code: string;
  server: string;
};

type Props = {
  project: ProjectType;
};

const ProjectItem: React.FC<Props> = ({ project }) => {
  return (
    <div
      className="bg-white font-Montserrat p-4 m-4 shadow-lg rounded-lg flex flex-col lg:flex-row gap-4"
      key={project.title}>
      <div className="lg:w-1/3 md:w-1/3">
        <div className="w-full aspect-square overflow-hidden">
          <img
            src={project.image}
            loading="lazy"
            width={400}
            height={300}
            alt={project.title}
            className="rounded-lg w-full h-full object-cover  object-top transition-[object-position] duration-[2000ms] ease-in-out hover:object-bottom cursor-pointer "
          />
        </div>
      </div>
      <div className="lg:w-1/2 md:w-1/2 ">
        <h3 className="text-[#333] text-2xl font-medium my-4">
          {project.title}
        </h3>
        <p className="text-base text-[#828282] font-medium pb-6">
          {project.description}
        </p>

        <div className=" flex gap-4">
          <Button href={project.demo}> Demo</Button>
          <Button href={project.code}>Client</Button>
          <Button href={project.server}>Server</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
