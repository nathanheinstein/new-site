
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Bot, Image, DollarSign } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  index: number;
}

const Project = ({ title, description, technologies, image, githubLink, index }: ProjectProps) => {
  const projectRef = useRef(null);
  const isInView = useInView(projectRef, { once: true, amount: 0.2 });
  
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={projectRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 mb-20 last:mb-0`}
    >
      <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
        <div className="aspect-video rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 glass-panel shadow-xl">
          <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
            {image ? (
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-sm">{title} Preview</span>
            )}
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
          {title.includes("Immaginate") && <Bot className="w-5 h-5 text-purple-500" />}
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          )} 
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "Imaginate - AI Image Generator Discord Bot",
      description: "Developed an innovative Discord bot as part of my MGMT 1301 Mini Venture Project that leverages the OpenAI API and DALL-E 2 to generate custom images based on user prompts. The bot features a freemium model with basic functionality available to all users, while advanced features are monetized through a premium subscription tier. This implementation demonstrated not only technical skills in API integration and bot development but also business acumen in creating a viable monetization strategy. The project showcased how AI technologies can be packaged into user-friendly applications with practical business models, combining technical innovation with entrepreneurial thinking.",
      technologies: ["JavaScript", "Node.js", "Discord.js", "OpenAI API", "DALL-E 2", "Business Strategy"],
      image: "", // Placeholder for image URL
      githubLink: "https://github.com/nathanheinstein/Imaginate"
    },
    {
      title: "Spotify API Integration",
      description: "Integrated the Spotify API into my personal portfolio website to display my currently playing track and recently liked tracks. The project involved setting up an OAuth flow to authenticate with the Spotify API, fetching user data, and displaying it on the frontend. This implementation showcases my ability to work with third-party APIs, handle authentication flows, and manage user data securely.",
      technologies: ["React", "Spotify API", "OAuth", "REST API", "Cloudflare Workers"],
      image: "", // Placeholder for image URL
      githubLink: "https://github.com/nathanheinstein/spotify-api"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-purple-50 dark:bg-purple-900/10 rounded-l-full -z-10"></div>
      
      <div className="section-container" ref={sectionRef}>
        <motion.span 
          className="section-subtitle block"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          My Portfolio
        </motion.span>
        
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="mt-16">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              githubLink={project.githubLink}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
