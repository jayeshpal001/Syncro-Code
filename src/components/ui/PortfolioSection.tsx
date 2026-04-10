import { ProjectCard } from "./ProjectCard";

export const PortfolioSection = () => {
  const projects = [
    {
      title: "Gang-App",
      description: "A robust community social coordination platform designed for seamless group interactions. Engineered with a unified architecture using Next.js for both frontend and backend, ensuring blazing-fast performance and SEO optimization.",
      techStack: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript"],
      liveLink: "https://gang-app-demo.syncrocode.in",
      githubLink: "https://github.com/yourusername/gang-app",
    },
    {
      title: "Bringo",
      description: "A trust-based local errand and group request platform. Built to facilitate secure, transparent community help with real-time state management and a highly responsive user interface.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "https://bringo-demo.syncrocode.in",
      githubLink: "https://github.com/yourusername/bringo",
    },
    {
      title: "Role-Based Hospital App",
      description: "An end-to-end healthcare appointment system featuring complex role-based access control (RBAC) for doctors, patients, and admins. Ensures secure data handling and efficient scheduling.",
      techStack: ["MERN Stack", "Redux Toolkit", "JWT Auth"],
      liveLink: "https://hospital-demo.syncrocode.in",
      githubLink: "https://github.com/yourusername/hospital-app",
    }
  ];

  return (
    <section id="portfolio" className="relative w-full bg-black py-32 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Featured <span className="text-blue-500">Work</span>
          </h2>
          <p className="max-w-2xl text-gray-400 md:text-lg">
            A selection of scalable platforms and digital experiences engineered for performance and real-world impact.
          </p>
        </div>

        {/* Projects Container */}
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};