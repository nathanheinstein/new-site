import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-50/50 dark:bg-blue-900/10 rounded-tl-full -z-10"></div>
      
      <div className="section-container" ref={sectionRef}>
        <motion.span 
          className="section-subtitle block"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.span>
        
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let's Connect
        </motion.h2>
        
        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold mb-6">Say Hello</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I'm always open to discussing new projects, opportunities or partnerships. Feel free to reach out or connect with me directly through social platforms.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:nathanheinstein@dal.ca" 
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>nathan.heinstein@dal.ca</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/nathanheinstein/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/nathanheinstein</span>
              </a>
              
              <a 
                href="https://github.com/nathanheinstein" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>github.com/nathanheinstein</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;