
import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { Building, Calendar } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, company, date, location, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-12 pb-12 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-last:bg-transparent"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center -translate-x-1/2">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
      </div>
      
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-xl font-medium">{title}</h3>
          <span className="text-sm px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
            {company}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1.5 h-4 w-4 text-muted-foreground" />
            {date}
          </div>
          <div className="flex items-center">
            <Building className="mr-1.5 h-4 w-4 text-muted-foreground" />
            {location}
          </div>
        </div>
        
        <ul className="space-y-2 mt-4">
          {description.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-primary">•</span>
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Bootcoding PVT. LTD.",
      date: "Jan 2024 - Present",
      location: "Nagpur, Maharashtra",
      description: [
        "Developed the 'ACEINT' platform, an AI-powered interview preparation tool, helping students boost confidence through mock interviews.",
        "Built a comprehensive mock test module, enabling users to take tests for companies like TCS and Accenture, with an 80% increase in engagement due to an intuitive UI and smooth modal animations.",
        "Designed and implemented both the front-end and back-end, reducing load times by 30% and ensuring seamless feature integration for an improved user experience.",
        "Implemented OAuth authentication, allowing users to sign in with GitHub and Google, reducing login time by 50% and improving security.",
        "Created reusable components and optimized the codebase, cutting development time by 40% and improving maintainability for future projects."
      ]
    }
  ];

  return (
    <Section id="experience" title="Experience">
      <div className="max-w-3xl mx-auto">
        <div className="mt-8">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              title={exp.title}
              company={exp.company}
              date={exp.date}
              location={exp.location}
              description={exp.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
