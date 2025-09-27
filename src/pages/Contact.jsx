"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import contactusImg from "../assets/contactusImg.jpg";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          title: "Someone Visited Portfolio.",
          name: formData.name,
          time: new Date().toLocaleString(),
          message: formData.message,
          email: formData.email,
        },
        PUBLIC_KEY
      );
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setSuccess("Failed to send message. Try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-16 
                 bg-[linear-gradient(120deg,_hsl(210,70%,97%),_hsl(201,80%,92%))] overflow-hidden"
    >
      {/* Optional Background Stars */}
      <div className="absolute inset-0">
        <canvas id="starfield" className="w-full h-full"></canvas>
      </div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl"
      >
        <div className="backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 rounded-2xl p-8 shadow-lg flex flex-col gap-6 items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white text-center">
            Let's Connect!
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center">
            Open for opportunities, collaborations, and freelance projects
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-md mx-auto">
            Whether you have a project idea, need a frontend developer, or want
            to collaborate on something exciting, I’m eager to contribute.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full items-center"
          >
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-3/4 max-w-md bg-white/10 dark:bg-black/20 placeholder-gray-500 text-gray-900 dark:text-white"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-3/4 max-w-md bg-white/10 dark:bg-black/20 placeholder-gray-500 text-gray-900 dark:text-white"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-3/4 max-w-md bg-white/10 dark:bg-black/20 placeholder-gray-500 text-gray-900 dark:text-white"
            />
            <Button
              type="submit"
              className="w-3/4 max-w-md bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:scale-105 transition-transform duration-300"
              disabled={sending}
            >
              {sending ? "Sending..." : "Connect"}
            </Button>
            {success && (
              <p
                className={`text-center mt-2 ${
                  success.includes("success")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {success}
              </p>
            )}
          </form>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="w-full max-w-3xl mt-12 mx-auto rounded-xl shadow-lg backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 px-6 py-4 flex justify-between items-center text-gray-700 dark:text-gray-300 transition-all duration-300 hover:shadow-xl">
        <span className="font-medium">Pavan Birari +91 8830134424</span>
        <span className="text-center">
          Created with <span className="text-red-500 animate-pulse">❤️</span> in
          India
        </span>
      </footer>
    </section>
  );
};

export default Contact;
