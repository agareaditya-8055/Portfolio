
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  className, 
  children,
  fullWidth = false
}) => {
  return (
    <section 
      id={id} 
      className={cn("py-16 md:py-24", className)}
    >
      <div className={fullWidth ? "w-full" : "container"}>
        {title && (
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
