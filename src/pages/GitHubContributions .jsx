"use client";

import React, { useRef, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubContributions = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (calendarRef.current) {
      // Scroll to the right end
      calendarRef.current.scrollLeft = calendarRef.current.scrollWidth;
    }
  }, []);

  return (
    <div className="p-6 md:p-8 lg:p-10 bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        My GitHub Contributions
      </h2>

      {/* Scrollable and centered container */}
      <div
        ref={calendarRef}
        className="overflow-x-auto flex justify-center scrollbar-hide"
      >
        <GitHubCalendar
          username="pavanfullstackdev"
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          color="#6366f1"
          style={{ display: "inline-block" }}
        />
      </div>
    </div>
  );
};

export default GitHubContributions;
