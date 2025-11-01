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
      className="bg-white font-Montserrat p-4 m-4 shadow-lg rounded-lg lg:flex md:flex"
      key={project.title}>
      <div className="lg:w-1/3 md:w-1/3 mr-4">
        <img
          src={project.image}
          loading="lazy"
          alt={project.title}
          className="rounded-lg w-full h-[300px] object-cover object-top duration-[4000ms] hover:object-bottom cursor-pointer blur-sm"
          onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
        />
      </div>
      <div className="lg:w-1/2 md:w-1/2 ml-2">
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
