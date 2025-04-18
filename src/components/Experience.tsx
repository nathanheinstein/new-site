
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  delay: number;
}

const ExperienceItem = ({ title, company, period, description, delay }: ExperienceItemProps) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay }}
      className="relative pl-8 pb-16 border-l border-gray-200 dark:border-gray-800 last:border-transparent last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-0 w-4 h-4 rounded-full bg-primary"></div>
      
      <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary text-sm font-medium mb-2">
        {period}
      </span>

      <h3 className="text-xl font-display font-bold mb-1">{title}</h3>
      <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">{company}</h4>

      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 mt-2 mr-2"></span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const experienceData = [
    {
      title: "Computer Science Student",
      company: "Dalhousie University",
      period: "2024 - Present",
      description: [
        "First-year applied computer science student",
        "Gaining strong foundation in programming fundamentals",
        "Learning essential concepts in web development and computer systems"
      ]
    },
    {
      title: "High School Graduate",
      company: "Halifax West High School",
      period: "2019 - 2024",
      description: [
        "Completed high school education with focus on STEM subjects",
        "Participated in computer programming courses",
        "Developed foundational knowledge in Python programming language"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-100/50 dark:bg-blue-900/10 rounded-tr-full -z-10"></div>
      
      <div className="section-container" ref={sectionRef}>
        <motion.span 
          className="section-subtitle block"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Educational Journey
        </motion.span>
        
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Education & Background
        </motion.h2>

        <div className="mt-16">
          {experienceData.map((experience, index) => (
            <ExperienceItem
              key={index}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              delay={0.2 + (index * 0.1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
