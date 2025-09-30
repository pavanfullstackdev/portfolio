"use client";
import React, { useRef } from "react";
import { CardBody, CardContainer } from "@/components/ui/shadcn-io/3d-card";
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
  SiJira,
  SiVite,
} from "react-icons/si";
import { FaAws, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { motion } from "framer-motion";
import PortfolioWebsiteImg from "../assets/PortfolioWebsiteImg.PNG";
import TaskTrackerImg from "../assets/TaskTrackerImg.PNG";
import { Eye } from "lucide-react";
import zustandImg from "../assets/zustandImg.svg";
import ColorGenerator from "../assets/ColorGenerator.PNG";
import AvatarGeneratorImg from "../assets/AvatarGeneratorImg.PNG";
import imageeditormodernIMG from "../assets/imageeditormodernIMG.PNG";
import imageFinderIMG from "../assets/imageFinderIMG.PNG";
import AIAssistant from "../assets/AIAssistant.PNG";

const techIcons = {
  HTML: <SiHtml5 size={20} className="text-orange-500" />,
  CSS: <SiCss3 size={20} className="text-blue-500" />,
  JavaScript: <SiJavascript size={20} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={20} className="text-blue-600" />,
  React: <SiReact size={20} className="text-sky-500" />,
  Tailwind: <SiTailwindcss size={20} className="text-sky-500" />,
  Redux: <SiRedux size={20} className="text-purple-500" />,
  Framer: <SiFramer size={20} className="text-purple-400" />,
  MUI: <SiMui size={20} className="text-sky-600" />,
  Shadcn: <SiShadcnui size={20} className="text-black/80" />,
  Node: <SiNodedotjs size={20} className="text-green-500" />,
  Express: <SiExpress size={20} className="text-gray-700" />,
  MongoDB: <SiMongodb size={20} className="text-green-600" />,
  AWS: <FaAws size={20} className="text-orange-400" />,
  Git: <SiGit size={20} className="text-orange-600" />,
  GitHub: <SiGithub size={20} className="text-gray-800" />,
  NPM: <SiNpm size={20} className="text-red-500" />,
  Jira: <SiJira size={20} className="text-blue-500" />,
  AntDesign: <AiOutlineAntDesign size={20} className="text-purple-400" />,
  Figma: <SiFigma size={20} className="text-pink-500" />,
  Canva: <SiCanva size={20} className="text-blue-400" />,
  Stripe: <SiNpm size={20} className="text-indigo-500" />,
  Postgres: <SiNpm size={20} className="text-indigo-600" />,
  Firebase: <SiNpm size={20} className="text-yellow-400" />,
  Socket: <SiNpm size={20} className="text-purple-700" />,
  MERN: <SiNpm size={20} className="text-red-500" />,
  Prisma: <SiNpm size={20} className="text-blue-700" />,
  Nextjs: <SiNpm size={20} className="text-gray-800" />,
  Zustend: <img src={zustandImg} alt="Zustand" className="w-5 h-5" />,
  vite: <SiVite size={20} className="text-[#BD34FE]" />,
};

const projectsData = [
  {
    name: "Portfolio Website",
    img: PortfolioWebsiteImg,
    desc: "A modern portfolio showcasing my skills, projects, and experience with animations and responsive design.",
    demoLink: "https://pavanbirari.netlify.app/",
    githubLink: "https://github.com/pavanfullstackdev/portfolio",
    stacks: ["React", "vite", "Tailwind", "Framer", "Shadcn"],
  },
  {
    name: "AI Assistant",
    img: AIAssistant,
    desc: "Chat application built with React, TailwindCSS, and shadcn/ui that integrates with Google’s Gemini API",
    demoLink: "https://genaiassistants.netlify.app/",
    githubLink:
      "https://github.com/pavanfullstackdev/Image-Finder-A-React-Image-Gallery",
    stacks: ["React", "vite", "Tailwind", "Shadcn"],
  },
  {
    name: "Task Tracker App",
    img: TaskTrackerImg,
    desc: "Task management app  drag-and-drop, task CRUD operations, task filtering by date, and task status tracking",
    demoLink: "https://daily-tasks-trackers.netlify.app/",
    githubLink: "https://github.com/pavanfullstackdev/Task_Tracker",
    stacks: ["React", "Zustend", "vite", "AntDesign", "Tailwind", "Shadcn"],
  },
  {
    name: "Gradient Generator",
    img: ColorGenerator,
    desc: "A beautiful and interactive Gradient Generator. It allows you to generate linear, radial, and conical gradients.",
    demoLink: "https://gradientgeneratorcool.netlify.app/",
    githubLink: "https://github.com/pavanfullstackdev/Gradient-Generator",
    stacks: ["React", "vite", "Tailwind"],
  },
  {
    name: "Avatar Generator",
    img: AvatarGeneratorImg,
    desc: "A simple React + Vite app that generates random avatars using the DiceBear API, with features like favorites, download, and copy link.",
    demoLink: "https://avatargeneratorcool.netlify.app/",
    githubLink: "https://github.com/pavanfullstackdev/Avatar-generator",
    stacks: ["React", "vite", "Tailwind", "Shadcn"],
  },
  {
    name: "Image Editor",
    img: imageeditormodernIMG,
    desc: "A simple image editor Upload an image, edit it, and download the edited version with a dynamic filename.",
    demoLink: "https://imageeditormodern.netlify.app/",
    githubLink: "https://github.com/pavanfullstackdev/image-editor",
    stacks: ["React", "vite", "Tailwind", "Shadcn"],
  },
  {
    name: "Image Finder",
    img: imageFinderIMG,
    desc: "A simple and elegant image gallery application.Users can search for photos and download them with a single click.",
    demoLink: "https://imagesearchfake.netlify.app/",
    githubLink:
      "https://github.com/pavanfullstackdev/Image-Finder-A-React-Image-Gallery",
    stacks: ["React", "vite", "Tailwind", "Shadcn"],
  },
];

const Projects = () => {
  const containerRef = useRef(null);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-20 bg-[linear-gradient(120deg,_hsl(210,70%,97%),_hsl(201,80%,92%))] py-12"
    >
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-7xl">
        {projectsData.map((project) => (
          <CardContainer
            key={project.name}
            className="group"
            containerClassName="flex justify-center"
          >
            <CardBody
              className="
            bg-gradient-to-tr from-white/20 via-white/10 to-white/5
            backdrop-blur-xl
            relative
            rounded-xl
            border border-white/20    
            p-3
            transition-all duration-500
            hover:shadow-[0_0_40px_rgba(56,189,248,0.3)]
            hover:scale-105
            w-[280px] flex flex-col
          "
            >
              {/* Project Image */}
              <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-lg bg-gray-100/20">
                <img
                  src={project.img}
                  alt={project.name}
                  className="max-h-full max-w-full object-cover group-hover:scale-105 transition duration-500 rounded-lg"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-3 text-center">
                {project.name}
              </h3>

              {/* Project Description */}
              {project.desc && (
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 text-center">
                  {project.desc}
                </p>
              )}

              {/* Tech Stack Icons */}
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {project.stacks.map((stack) => (
                  <div
                    key={stack}
                    className="hover:scale-105 transition"
                    title={stack}
                  >
                    {techIcons[stack] || (
                      <span className="px-2 py-1 text-xs rounded bg-white/20 text-gray-800 dark:text-gray-200">
                        {stack}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-3 mt-3">
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex items-center gap-1 px-2 py-1.5 rounded bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium shadow cursor-pointer"
                  title="Live Demo"
                >
                  <Eye size={16} />
                  <span>Demo</span>
                </motion.a>

                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex items-center gap-1 px-2 py-1.5 rounded bg-black/90 text-white text-sm font-medium shadow cursor-pointer border border-gray-700 hover:bg-gray-800"
                  title="Source Code"
                >
                  <SiGithub size={16} />
                  <span>Code</span>
                </motion.a>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Projects;
