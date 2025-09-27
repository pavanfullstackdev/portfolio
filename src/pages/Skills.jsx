import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNpm,
  SiGithub,
  SiGit,
  SiFramer,
  SiFigma,
  SiCanva,
  SiBootstrap,
  SiShadcnui,
  SiMui,
  SiVite,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";
import zustandImg from "../assets/zustandImg.svg";
const skillsData = [
  // FRONTEND
  {
    name: "HTML5",
    icon: <SiHtml5 size={28} className="text-orange-500" />,
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: <SiCss3 size={28} className="text-blue-500" />,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={28} className="text-yellow-500" />,
    category: "Frontend",
  },
  {
    name: "React",
    icon: <SiReact size={28} className="text-sky-500" />,
    category: "Frontend",
  },
  // { name: "Next.js", icon: <SiNextdotjs size={28} className="text-gray-800" />, category: "Frontend" },
  {
    name: "TypeScript",
    icon: <SiTypescript size={28} className="text-blue-600" />,
    category: "Frontend",
  },

  {
    name: "Redux",
    icon: <SiRedux size={28} className="text-purple-500" />,
    category: "Frontend",
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux size={28} className="text-purple-500" />,
    category: "Frontend",
  },
  {
    name: "Zustand",
    icon: <img src={zustandImg} alt="Zustand" className="w-7 h-7" />,
    category: "Frontend",
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={28} className="text-teal-400" />,
    category: "Frontend",
  },

  // BACKEND
  {
    name: "Node.js",
    icon: <SiNodedotjs size={28} className="text-green-500" />,
    category: "Backend",
  },
  {
    name: "Express.js",
    icon: <SiExpress size={28} className="text-gray-700" />,
    category: "Backend",
  },
  {
    name: "AWS",
    icon: <FaAws size={28} className="text-orange-400" />,
    category: "DevOps",
  },

  // DATABASE
  {
    name: "MongoDB",
    icon: <SiMongodb size={28} className="text-green-600" />,
    category: "Database",
  },

  // ADVANCED TOOLING / DESIGN
  {
    name: "Vite",
    icon: <SiVite size={28} className="text-[#BD34FE]" />,
    category: "Tooling",
  },
  {
    name: "Git",
    icon: <SiGit size={28} className="text-orange-600" />,
    category: "Tooling",
  },
  {
    name: "GitHub",
    icon: <SiGithub size={28} className="text-gray-800" />,
    category: "Tooling",
  },
  {
    name: "NPM",
    icon: <SiNpm size={28} className="text-red-500" />,
    category: "Tooling",
  },
  {
    name: "Jira",
    icon: <SiJira size={28} className="text-blue-500" />,
    category: "Tooling",
  },

  {
    name: "Bootstrap",
    icon: <SiBootstrap size={28} className="text-purple-800" />,
    category: "Design",
  },
  {
    name: "ShadCn",
    icon: <SiShadcnui size={28} className="text-black-400" />,
    category: "Design",
  },
  {
    name: "Material UI",
    icon: <SiMui size={28} className="text-sky-600" />,
    category: "Design",
  },
  {
    name: "Ant Design",
    icon: <AiOutlineAntDesign size={28} className="text-purple-400" />,
    category: "Design",
  },
  {
    name: "Figma",
    icon: <SiFigma size={28} className="text-pink-500" />,
    category: "Design",
  },
  {
    name: "Canva",
    icon: <SiCanva size={28} className="text-blue-400" />,
    category: "Design",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer size={28} className="text-purple-400" />,
    category: "Design",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-20 py-16 bg-[linear-gradient(172deg,_hsl(210,70%,97%),_hsl(201,80%,92%))] backdrop-blur-lg"
    >
      <h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-12
             bg-gradient-to-r from-purple-500 to-blue-500
             bg-clip-text text-transparent
             tracking-wide
             drop-shadow-lg"
      >
        Skills & Expertise
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.3, delay: index * 0.009 }}
          >
            <Card className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg flex flex-col items-center justify-center p-4 cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300">
              <CardContent className="flex flex-col items-center justify-center gap-2">
                {skill.icon}
                <span className="font-medium text-gray-900 dark:text-white text-sm text-center">
                  {skill.name}
                </span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
