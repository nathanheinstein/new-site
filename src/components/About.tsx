
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Agile Methodologies",
    "Network Security",
    "Cybersecurity",
    "Data Security",
    "IT Operations",
    "Leadership",
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-black relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 dark:bg-blue-900/10 rounded-bl-full -z-10"></div>
      
      <div className="section-container" ref={ref}>
        <motion.span 
          className="section-subtitle block"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.span>
        
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Computer Science Student
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              I'm a first-year student at Dalhousie University pursuing a Bachelor of Applied Computer Science. I have a strong academic foundation and a growing interest in information technology.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Currently I am working on a startup Mental Health AI app called <a 
              href="https://trumind.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 transition-colors"
              >
              Trumind
            </a>.  I am passionate about using technology to solve real-world problems and improve the lives of others.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Looking to expand my skills and gain hands-on experience in the field of computer science and information technology.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-display font-semibold mb-6">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="py-2 px-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium text-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.05) }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
