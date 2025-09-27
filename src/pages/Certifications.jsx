import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { SiUdemy } from "react-icons/si";

const certificationsData = [
  {
    title: "Modern JavaScript for React JS-ES",
    icon: <SiUdemy size={40} className="text-violet-500" />,
    link: "https://www.udemy.com/certificate/UC-92892bb9-e3f0-4863-b6b7-49cf336fd6a8/",
  },
  {
    title: "Bootstrap 4 for Beginners Build a modern Responsive website",
    icon: <SiUdemy size={40} className="text-violet-500" />,
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-e960b726-46f9-42a6-a711-7b37e19cb33c.pdf",
  },
  {
    title: "Git & GitHub Crash Course: Create a Repository From Scratch!",
    icon: <SiUdemy size={40} className="text-violet-500" />,
    link: "",
  },
  {
    title: " Web Design for Web Developers: Build Beautiful Websites!",
    icon: <SiUdemy size={40} className="text-violet-500" />,
    link: "",
  },
  {
    title: "Learn jQuery - For Beginners",
    icon: <SiUdemy size={40} className="text-violet-500" />,
    link: "https://www.udemy.com/certificate/UC-110ec0ba-d6bd-4c36-8515-58c2b74c7dc1/",
  },
  {
    title: "The Complete ReactJs Course - Basics to Advanced [2023]",
    icon: <SiUdemy size={40} className="text-violet-500" />,
    link: "https://www.udemy.com/certificate/UC-1f208ba9-3562-4c0e-af26-c4a636a6df43/",
  },
  {
    title: "The Complete 2023 Web Development Bootcamp",
    icon: <SiUdemy size={40} className="text-violet-500" />,
    link: "https://www.udemy.com/certificate/UC-888aaa68-f09d-49f6-ab24-3af5a5074e1c/",
  },
];

const Certifications = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    let interval;
    const startScroll = () => {
      interval = setInterval(() => {
        scrollAmount += 1;
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }
        container.scrollLeft = scrollAmount;
      }, 20);
    };

    startScroll();

    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => startScroll();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(interval);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="certifications"
      className="flex flex-col items-center justify-center py-8 px-6 md:px-20"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        My Certifications
      </h1>

      <div ref={scrollRef} className="flex gap-4 w-full overflow-hidden">
        {certificationsData.map((cert, index) => (
          <Card
            key={index}
            className="flex-shrink-0 w-[300px] h-[120px] shadow-lg border border-gray-700 bg-gray-800 hover:scale-105 transition-transform duration-300"
          >
            <CardContent className="flex items-center justify-start gap-4 h-full p-4">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gray-900">
                {cert.icon}
              </div>

              {/* Title + Link */}
              <div className="flex flex-col justify-center">
                <p className="text-white font-medium text-sm">{cert.title}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-xs flex items-center gap-1 mt-1"
                  >
                    View <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
