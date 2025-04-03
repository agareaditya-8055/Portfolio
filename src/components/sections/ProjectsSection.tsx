
import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "YONOHA (Live Restaurant Listing Application)",
      description: "A front-end web application showcasing restaurants in Nagpur with user sign-up/sign-in functionality and dark/light mode switching.",
      technologies: ["React JS", "Tailwind CSS", "Appwrite"],
      githubUrl: "https://github.com/agareaditya-8055",
      liveUrl: "https://yonoha.vercel.app/"
    },
    {
      title: "My Portfolio",
      description: "A front-end web application showcasing my skills and personal information with responsive design.",
      technologies: ["React JS", "Tailwind CSS"],
      githubUrl: "https://github.com/agareaditya-8055",
      liveUrl: "https://aditya-blond.vercel.app/"
    },
  ];

  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
