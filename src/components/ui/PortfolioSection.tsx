"use client";

import { ProjectCard } from "./ProjectCard";

export const PortfolioSection = () => {
  const projects = [
    {
      title: "Kalakaar Ventures",
      description: "A fully deployed, high-performance web platform focused on a seamless user experience. Engineered for scale with optimized backend logic and a highly responsive interactive UI.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "https://kalakaarventures.in",
    //   githubLink: "https://github.com/jayeshpal001",
    //   // Add your video here later (e.g., "/projects/kalakaar.mp4") and change mediaType to "video"
      mediaUrl: "/projects/kalakaarventures.mp4", 
      mediaType: "video",
    },
    {
      title: "Syncro Code",
      description: "A production-ready web application built with clean architectural patterns. Designed to handle robust data flow while maintaining blazing-fast frontend performance.",
      techStack: ["MERN Stack", "Redux Toolkit", "Tailwind CSS"],
      liveLink: "https://syncrocode.in",
    //   githubLink: "https://github.com/jayeshpal001", 
      mediaUrl: "/projects/syncrocode.mp4",
      mediaType: "video",
    },
    {
      title: "ShareMate (Gang App)",
      description: "A robust community social coordination platform designed for seamless group interactions. Engineered with a unified architecture using Next.js for both frontend and backend, ensuring blazing-fast performance and SEO optimization.",
      techStack: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript"],
      liveLink: "https://gang-app-demo.syncrocode.in",
    //   githubLink: "https://github.com/jayeshpal001/gang-app",
      mediaUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
      mediaType: "image",
    },
    {
      title: "Role-Based Hospital App",
      description: "An end-to-end healthcare appointment system featuring complex role-based access control (RBAC) for doctors, patients, and admins. Ensures secure data handling and efficient scheduling.",
      techStack: ["MERN Stack", "JWT Auth", "Redux Toolkit"],
      liveLink: "https://hospital-appointment-system-pi.vercel.app",
    //   githubLink: "https://github.com/jayeshpal001/Hospital-Appointment-System.git",
      mediaUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      mediaType: "image",
    }
  ];

  return (
    <section id="portfolio" className="relative w-full bg-black py-15 px-4 md:px-8">
      {/* Ambient background glow for extra wow factor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Production Work</span>
          </h2>
          <p className="max-w-2xl text-gray-400 md:text-xl">
            A selection of scalable platforms and digital experiences engineered for performance and real-world impact.
          </p>
        </div>

        {/* Projects Container */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              liveLink={project.liveLink}
            //   githubLink={project.githubLink}
              // The new props passed down to the card:
              mediaUrl={project.mediaUrl}
              mediaType={project.mediaType as "video" | "image"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};