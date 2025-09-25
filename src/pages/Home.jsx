import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, X, Eye } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import avatar from "../assets/avatar.jpg";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  const [showPDF, setShowPDF] = useState(false);

  const handleResumeClick = () => {
    if (window.innerWidth < 700) {
      window.open("/pavan.pdf", "_blank");
    } else {
      setShowPDF(true);
    }
  };

  const handleContactClick = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <section
        id="home"
        className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 py-16
        bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-lg"
      >
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col justify-center space-y-4"
        >
          <h1 className="text-5xl font-extrabold text-gray-900">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Pavan Birari
            </span>
          </h1>

          {/* Animated Roles */}
          <h2 className="text-2xl font-semibold h-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            <Typewriter
              words={[
                "Software Developer",
                "MERN Developer",
                "UI/UX Expert",
                "Tech Enthusiast",
              ]}
              loop={0} // 0 = infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          {/* Contact Info */}
          <div className="space-y-2 text-gray-700">
            <p className="flex items-center gap-2">
              <Phone size={18} />
              <a
                href="tel:+918830134424"
                className="hover:text-blue-500 transition-colors"
              >
                +91 8830134424
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} />
              <a
                href="mailto:pavanbirari98@gmail.com"
                className="hover:text-blue-500 transition-colors"
              >
                pavanbirari98@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={18} /> Pune, India
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 flex-wrap">
            <motion.button
              onClick={handleResumeClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex items-center gap-2 px-5 py-2 rounded bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow cursor-pointer"
            >
              <Eye size={18} /> View Resume
            </motion.button>

            <motion.button
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex items-center gap-2 px-5 py-2 rounded border border-purple-500 text-purple-500 font-medium shadow cursor-pointer hover:bg-purple-50 transition"
            >
              <Send size={18} /> Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column - Hero Image + Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center justify-center w-full h-full"
        >
          <motion.img
            src={avatar}
            alt="Hero Illustration"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
            whileInView={{ scale: [0.95, 1, 1.05] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          />

          {/* Social Links below the image */}
          <div className="mt-4 flex flex-row gap-4 justify-center w-full">
            <SocialLinks />
          </div>
        </motion.div>
      </section>

      {/* PDF Modal */}
      {showPDF && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div
            className="relative w-full md:w-4/5 h-[90vh] rounded-xl overflow-hidden
            bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg border border-gray-200"
          >
            <button
              onClick={() => setShowPDF(false)}
              className="absolute top-3 right-3 bg-purple-700/80 rounded-full p-2 hover:bg-purple-800 shadow-md transition"
            >
              <X size={24} />
            </button>

            <iframe
              src="/pavan.pdf"
              title="Resume"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
