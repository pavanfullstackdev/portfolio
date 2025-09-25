import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Download, Send, X } from "lucide-react";
import avatar from "../assets/avatar.jpg";

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
        bg-[linear-gradient(172deg,_hsl(210,70%,97%),_hsl(201,80%,92%))] bg-opacity-70 backdrop-blur-lg"
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
            Hi, I'm <span className="text-blue-600">Pavan Birari</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700">
            Software Developer
          </h2>

          {/* Contact Info */}
          <div className="space-y-2 text-gray-700">
            <p className="flex items-center gap-2">
              <Phone size={18} />
              <a href="tel:+918830134424" className="hover:text-blue-600">
                +91 8830134424
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} />
              <a
                href="mailto:pavanbirair@gmai.com"
                className="hover:text-blue-600"
              >
                pavanbirair@gmai.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={18} /> Pune, India
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 flex-wrap">
            <button
              onClick={handleResumeClick}
              className="flex items-center gap-2 px-5 py-2 rounded-2xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              <Download size={18} /> View Resume
            </button>
            <button
              onClick={handleContactClick}
              className="flex items-center gap-2 px-5 py-2 rounded-2xl border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
            >
              <Send size={18} /> Contact Me
            </button>
          </div>
        </motion.div>

        {/* Right Column - Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex items-center justify-center w-full h-full"
        >
          <img
            src={avatar}
            alt="Hero Illustration"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
          />
        </motion.div>
      </section>

      {/* PDF Modal - only for screen width >= 700 */}
      {showPDF && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div
            className="relative w-full md:w-4/5 h-[90vh] rounded-xl overflow-hidden
            bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg border border-gray-200"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPDF(false)}
              className="absolute top-3 right-3 bg-white/80 rounded-full p-2 hover:bg-white shadow-md transition"
            >
              <X size={24} />
            </button>

            {/* Embedded PDF */}
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
