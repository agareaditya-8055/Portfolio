
import React, { useEffect } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import ParticleBackground from '@/components/effects/ParticleBackground';

const Index = () => {
  useEffect(() => {
    document.title = 'Aditya Agare | Full Stack Developer';
  }, []);

  return (
    <MainLayout>
      <ParticleBackground />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  );
};

export default Index;
