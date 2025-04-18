
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay: number;
}

const SkillCategory = ({ title, skills, delay }: SkillCategoryProps) => {
  const categoryRef = useRef(null);
  const isInView = useInView(categoryRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={categoryRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
    >
      <h3 className="text-xl font-display font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "HTML", "CSS", "JavaScript", "Python"]
    },
    {
      title: "Methods & Frameworks",
      skills: ["Agile Methodologies"]
    },
    {
      title: "IT & Security",
      skills: [
        "Incident Response", 
        "Disaster Recovery", 
        "Security Operations", 
        "Network Security", 
        "Cybersecurity", 
        "Data Security"
      ]
    },
    {
      title: "Management & Leadership",
      skills: [
        "Risk Management", 
        "IT Risk Management", 
        "Computer Management", 
        "IT Operations Management",
        "Team Management",
        "Leadership",
        "Management Style",
        "Supervisory Skills"
      ]
    },
    {
      title: "Software & Tools",
      skills: ["Microsoft Office", "Microsoft 365", "Microsoft Copilot", "Adobe Creative Suite"]
    },
    {
      title: "Other Skills",
      skills: [
        "Information Technology Infrastructure",
        "Unconscious Bias Awareness",
        "Artificial Intelligence for Business"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-green-100/50 dark:bg-green-900/10 rounded-br-full -z-10"></div>
      
      <div className="section-container" ref={sectionRef}>
        <motion.span 
          className="section-subtitle block"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Technical Abilities
        </motion.span>
        
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              delay={0.2 + (index * 0.1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
