import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { TbBrandVscode, TbBrandJavascript } from "react-icons/tb";
import {
  SiTailwindcss,
  SiReactrouter,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiEslint,
  SiNetlify,
  SiVercel,
  SiAxios,
} from "react-icons/si";

import jwt from "../assets/jwt.svg";
import TanStack from "../assets/TanStack.webp";
import daisyui from "../assets/daisyui.webp";
import problem_solving from "../assets/Problem-solving.webp";
import gsap from "../assets/gsap.webp";
import SkillItem from "../reusable-component/SkillItem";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 className="w-7 h-7 text-red-600" />, name: "HTML" },
    { icon: <FaCss3Alt className="w-7 h-7 text-blue-600" />, name: "CSS" },
    {
      icon: <SiTailwindcss className="w-7 h-7 text-cyan-500" />,
      name: "Tailwind",
    },
    {
      icon: <FaBootstrap className="w-7 h-7 text-[#7F11F9]" />,
      name: "Bootstrap",
    },
    {
      icon: <img src={daisyui} alt="DaisyUI" width={28} height={28} />,
      name: "DaisyUI",
    },
    {
      icon: <TbBrandJavascript className="w-7 h-7 text-yellow-500" />,
      name: "JavaScript",
    },
    { icon: <FaReact className="w-7 h-7 text-rose-600" />, name: "React" },
    { icon: <FaVuejs className="w-7 h-7 text-[#3FB27F]" />, name: "Vue JS" },
    { icon: <SiReactrouter className="w-7 h-7" />, name: "React Router" },
    { icon: <FaNodeJs className="w-7 h-7 text-green-600" />, name: "Node JS" },
    { icon: <SiMongodb className="w-7 h-7 text-green-600" />, name: "MongoDB" },
    { icon: <SiExpress className="w-7 h-7 text-black" />, name: "Express JS" },
    { icon: <img src={jwt} alt="JWT" width={28} height={28} />, name: "JWT" },
    {
      icon: <img src={TanStack} alt="TanStack" width={28} height={28} />,
      name: "React Query",
    },
    {
      icon: <img src={gsap} alt="GSAP" width={28} height={28} />,
      name: "GSAP",
    },
    {
      icon: <SiFirebase className="w-7 h-7 text-amber-500" />,
      name: "Firebase",
    },
    { icon: <SiAxios className="w-7 h-7 text-[#AC93F1]" />, name: "Axios" },
    {
      icon: <TbBrandVscode className="w-7 h-7 text-blue-800" />,
      name: "VS Code",
    },
    { icon: <FaGithub className="w-7 h-7 text-black" />, name: "GitHub" },
    { icon: <SiEslint className="w-7 h-7 text-[#4930BD]" />, name: "ESLint" },
    { icon: <FaFigma className="w-7 h-7 text-[#4930BD]" />, name: "Figma" },
    { icon: <SiNetlify className="w-7 h-7 text-[#0ABEBB]" />, name: "Netlify" },
    { icon: <SiVercel className="w-7 h-7 text-black" />, name: "Vercel" },
    {
      icon: (
        <img
          src={problem_solving}
          alt="Problem Solving"
          width={28}
          height={28}
        />
      ),
      name: "Problem Solving",
    },
  ];

  return (
    <div className="bg-white px-4 py-4 md:h-[303px] lg:h-[303px] font-mont shadow-lg rounded-lg">
      <h3 className="font-bold text-[#4F4F4F] text-lg uppercase mt-2 text-left">
        Skills
      </h3>

      <div className="grid grid-cols-2 p-6 lg:p-2 lg:grid-cols-6 gap-y-4 mt-4">
        {skills.map((skill) => (
          <SkillItem key={skill.name} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
