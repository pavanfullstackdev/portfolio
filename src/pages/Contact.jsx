"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import contactusImg from "../assets/contactusImg.jpg";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);

    try {
      await emailjs.send(
        // "YOUR_SERVICE_ID",
        // "YOUR_TEMPLATE_ID",
        "service_jxt2rwx",
        "template_m2uzk86",

        {
          title: "SomeOne Visited Portfolio.",
          name: formData.name,
          time: new Date().toLocaleString(),
          message: formData.message,
          email: formData.email,
        },
        // "YOUR_PUBLIC_KEY"
        "2pFyKRvgxlHteaE6Z"
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
      className="relative min-h-screen flex items-center justify-center bg-[linear-gradient(120deg,_#0d1b2a,_#12395f)] overflow-hidden"
    >
      {/* Starry Background */}
      <div className="absolute inset-0">
        <canvas id="starfield" className="w-full h-full"></canvas>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl px-6 py-16 gap-12">
        {/* Left - Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2 w-full"
        >
          <div className="border rounded-2xl p-8 shadow-lg flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              Contact Me
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/10 placeholder-gray-300 text-white"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/10 placeholder-gray-300 text-white"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white/10 placeholder-gray-300 text-white"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:scale-105 transition-transform duration-300"
                disabled={sending}
              >
                {sending ? "Sending..." : "Connect"}
              </Button>
              {success && (
                <p
                  className={`text-center mt-2 ${
                    success.includes("success")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {success}
                </p>
              )}
            </form>
          </div>
        </motion.div>

        {/* Right - Illustration / Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2 w-full flex items-center justify-center"
        >
          <div className=" border rounded-2xl p-8 shadow-lg flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Let’s Collaborate
            </h2>
            <p className="text-gray-300 mb-6">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to bring your vision to life.
            </p>
            <img
              src={contactusImg}
              alt="contact illustration"
              className="rounded-xl shadow-lg w-90 h-45"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
