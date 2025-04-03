
import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { Code, Database, Layout, Server, GraduationCap, MapPin } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-primary/10 rounded-lg text-primary mr-4">
          {icon}
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-muted-foreground">
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const AboutSection: React.FC = () => {
  const skills = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "C++"],
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Frontend",
      skills: ["React.js", "HTML", "CSS", "Redux"],
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend",
      skills: ["Node.js", "Express.js"],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Databases",
      skills: ["SQL", "MongoDB"],
    },
  ];

  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-medium mb-4 text-primary">Get to know me</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm a passionate Full Stack Developer with expertise in building web applications using modern technologies. I'm dedicated to creating efficient, scalable, and user-friendly solutions.
            </p>
            <p>
              Currently working at Bootcoding PVT. LTD. where I develop and maintain AI-powered applications like ACEINT, an interview preparation platform.
            </p>
            
            <div className="flex items-center mt-4 text-foreground">
              <MapPin className="h-5 w-5 text-primary mr-2" />
              <span>Nagpur, Maharashtra, India</span>
            </div>
            
            <div className="flex items-center mt-2 text-foreground">
              <GraduationCap className="h-5 w-5 text-primary mr-2" />
              <span>B.Tech, JD COllege of Engineering and Management</span>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              skills={skill.skills}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
