import React from "react";
import { motion } from "framer-motion";
import { Eye, Send } from "lucide-react";
import { CardBody, CardContainer } from "@/components/ui/shadcn-io/3d-card";
import { SiInfosys } from "react-icons/si";
import saamaImg from "../assets/saamaImg.png";

const experienceData = [
  {
    company: "Infosys",
    role: "Associate Consultant",
    duration: "July 2024 - Present",
    description: "",
    logo: <SiInfosys size={80} className="text-sky-800" />,
  },
  {
    company: "SAAMA",
    role: "Associate Software Engineer",
    duration: "October 2021 - July 2024",
    description: "",
    logo: saamaImg,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 
                 bg-[linear-gradient(172deg,_hsl(210,70%,97%),_hsl(201,80%,92%))] backdrop-blur-md"
    >
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        👋 Hello! I’m a Frontend Developer
      </motion.h1>

      {/* About Text */}
      <motion.p
        className="text-gray-700 text-lg md:text-xl max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I have 4 years of hands-on experience, specializing in creating dynamic
        and responsive user interfaces. My toolkit includes JavaScript,
        React.js, Redux, and jQuery. I thrive on collaborating with
        cross-functional teams to tackle complex challenges and deliver
        innovative solutions.
      </motion.p>

      {/* Horizontal Experience Cards */}
      <motion.div
        className="flex gap-4 overflow-x-auto  w-full justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {experienceData.map((exp) => (
          <CardContainer key={exp.company} containerClassName="flex-shrink-0">
            <CardBody
              className="
                relative
                rounded-xl
                p-4
                transition-transform duration-500
                hover:scale-105
                w-[450px] h-[150px] flex items-center
                border border-gray-200
                shadow-lg hover:shadow-xl
                overflow-hidden
                bg-gradient-to-t from-indigo-100/30 via-pink-100/20 to-yellow-100/10
              "
            >
              {/* Content */}
              <div className="flex items-center w-full h-full">
                {/* Company Logo */}
                <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-lg text-4xl mr-4 bg-white/20">
                  {React.isValidElement(exp.logo) ? (
                    exp.logo
                  ) : (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="max-h-full max-w-full object-contain"
                    />
                  )}
                </div>

                {/* Company Info */}
                <div className="flex flex-col justify-center ml-4">
                  <p className="text-gray-800 text-sm">{exp.role}</p>
                  <p className="text-gray-600 text-xs mt-1">{exp.duration}</p>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="flex gap-4 flex-wrap justify-center "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="flex items-center gap-2 px-5 py-2 rounded bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow cursor-pointer"
        >
          <Eye size={18} /> See My Projects
        </motion.a>

        <motion.a
          href="#skills"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="flex items-center gap-2 px-5 py-2 rounded border border-purple-500 text-purple-500 font-medium shadow cursor-pointer hover:bg-purple-50 transition"
        >
          <Send size={18} /> Explore My Skills
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
