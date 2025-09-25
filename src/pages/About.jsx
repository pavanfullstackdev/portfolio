import React from "react";
import { motion } from "framer-motion";
import { Eye, Send } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-16
                 bg-[linear-gradient(172deg,_hsl(210,70%,97%),_hsl(201,80%,92%))] backdrop-blur-md"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        👋 Hello! I’m a Frontend Developer
      </motion.h1>

      <motion.p
        className="text-gray-700 text-lg md:text-xl max-w-3xl mb-6 text-center"
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

      <motion.div
        className="text-gray-700 text-lg max-w-3xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p>
          🌟 <strong>What Sets Me Apart:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Passion for Creativity:</strong> I approach every project
            with a creative mindset, ensuring unique and engaging user
            experiences.
          </li>
          <li>
            <strong>Adaptability:</strong> I stay nimble and adapt quickly to
            new tools and methodologies.
          </li>
          <li>
            <strong>Continuous Learning:</strong> I’m committed to staying ahead
            of industry trends and expanding my skill set.
          </li>
        </ul>

        <p className="mt-4">
          🚀 <strong>Value Proposition:</strong>
        </p>
        <p>
          I enhance user experiences through seamless navigation, performance
          optimization, and accessibility compliance. My collaborative approach
          ensures successful project outcomes.
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="flex gap-4 flex-wrap justify-center mt-6"
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
