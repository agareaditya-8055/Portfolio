
import React, { useEffect } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import AboutSection from '@/components/sections/AboutSection';
import ParticleBackground from '@/components/effects/ParticleBackground';

const About = () => {
  useEffect(() => {
    document.title = 'About | Aditya Agare';
  }, []);

  return (
    <MainLayout>
      <ParticleBackground />
      <div className="pt-20">
        <AboutSection />
      </div>
    </MainLayout>
  );
};

export default About;
