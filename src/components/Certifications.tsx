
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Check } from "lucide-react";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  delay: number;
}

const CertificationItem = ({ title, issuer, date, delay }: CertificationProps) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="flex items-start gap-4 p-5 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <div className="mt-1 rounded-full bg-blue-100 dark:bg-blue-900/30 p-2 flex-shrink-0">
        <Award className="w-5 h-5 text-primary" />
      </div>
      
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{issuer}</p>
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
          <span>Issued {date}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const certifications = [
    {
      title: "Embracing an Agile Mindset at Work",
      issuer: "LinkedIn",
      date: "Nov 2024"
    },
    {
      title: "ISC2 Candidate",
      issuer: "ISC2",
      date: "Apr 2024"
    }
  ];

  return (
    <section id="certifications" className="py-20 md:py-32 bg-white dark:bg-black relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-yellow-100/50 dark:bg-yellow-900/10 rounded-tl-full -z-10"></div>
      
      <div className="section-container" ref={sectionRef}>
        <motion.span 
          className="section-subtitle block"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Professional Development
        </motion.span>
        
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Licenses & Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <CertificationItem
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              delay={0.2 + (index * 0.1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
