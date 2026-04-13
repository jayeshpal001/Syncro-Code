"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Cpu, 
  LineChart, 
  Layout, 
  DatabaseZap, 
  Bot
} from "lucide-react";

// The parent variant controls the staggering of children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Har card 0.1s ke gap se aayega
      delayChildren: 0.2,
    }
  }
};

export const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Scalable, blazing-fast web applications built on modern stacks like Next.js and MERN.",
      icon: <Code2 size={24} />,
    },
    {
      title: "UI/UX Design",
      description: "Premium, minimalistic, and user-centric interfaces designed for maximum engagement.",
      icon: <Layout size={24} />,
    },
    {
      title: "AI & Automation",
      description: "Intelligent AI solutions and workflow automations to 10x your business efficiency.",
      icon: <Bot size={24} />,
    },
    {
      title: "Mobile App Dev",
      description: "High-performance cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone size={24} />,
    },
    {
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure architecture and deployment.",
      icon: <Cloud size={24} />,
    },
    {
      title: "Salesforce & CRM",
      description: "Custom Salesforce development and seamless CRM implementation.",
      icon: <DatabaseZap size={24} />,
    },
    {
      title: "API Integration",
      description: "Robust and secure third-party API integrations to connect your digital ecosystem.",
      icon: <Cpu size={24} />,
    },
    {
      title: "Digital Marketing",
      description: "Data-driven Meta & Google Ads management to skyrocket your ROAS.",
      icon: <LineChart size={24} />,
    },
  ];

  return (
    <section id="services" className="relative w-full bg-black py-20 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Our <span className="text-blue-500">Expertise</span>
          </h2>
          <p className="max-w-2xl text-gray-400 md:text-lg">
            We deliver end-to-end technological solutions designed to scale your business and dominate the digital landscape.
          </p>
        </div>

        {/* Staggered Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }} // Scroll aane par hi trigger hoga
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};