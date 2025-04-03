
import React, { useEffect } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ParticleBackground from '@/components/effects/ParticleBackground';

const Projects = () => {
  useEffect(() => {
    document.title = 'Projects | Aditya Agare';
  }, []);

  return (
    <MainLayout>
      <ParticleBackground />
      <div className="pt-20">
        <ProjectsSection />
      </div>
    </MainLayout>
  );
};

export default Projects;
