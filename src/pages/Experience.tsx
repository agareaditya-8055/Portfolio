
import React, { useEffect } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ParticleBackground from '@/components/effects/ParticleBackground';

const Experience = () => {
  useEffect(() => {
    document.title = 'Experience | Aditya Agare';
  }, []);

  return (
    <MainLayout>
      <ParticleBackground />
      <div className="pt-20">
        <ExperienceSection />
      </div>
    </MainLayout>
  );
};

export default Experience;
