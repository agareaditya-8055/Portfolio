
import React, { useEffect } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import ContactSection from '@/components/sections/ContactSection';
import ParticleBackground from '@/components/effects/ParticleBackground';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact | Aditya Agare';
  }, []);

  return (
    <MainLayout>
      <ParticleBackground />
      <div className="pt-20">
        <ContactSection />
      </div>
    </MainLayout>
  );
};

export default Contact;
