import { Github, Linkedin, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const links = [
    {
      href: "https://github.com/pavanfullstackdev",
      icon: <Github className="w-6 h-6 text-gray-900 dark:text-white" />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/pavan-birari-aab406179",
      icon: <Linkedin className="w-6 h-6 text-[#0077B5]" />,
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/p_a_v_a_n_n1/",
      icon: <Instagram className="w-6 h-6 text-[#E1306C]" />,
      label: "Instagram",
    },
    {
      href: "https://wa.me/918830134424",
      icon: <FaWhatsapp className="w-6 h-6 text-[#25D366]" />,
      label: "WhatsApp",
    },
    {
      href: "https://medium.com/@PavanCodeCraft",
      icon: <SiMedium className="w-6 h-6 text-gray-900 dark:text-white" />,
      label: "Twitter",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
      {links.map(({ href, icon, label }, index) => (
        <motion.a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className="group relative p-3 rounded-lg hover:scale-110 transform transition-transform duration-300
                     bg-white/20 backdrop-blur-md border border-white/30 shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <div className="relative z-10">{icon}</div>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
