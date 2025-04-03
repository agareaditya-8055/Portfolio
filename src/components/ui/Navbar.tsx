
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleTheme } from '@/redux/slices/themeSlice';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((state) => state.theme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-3 backdrop-blur-lg bg-background/80' : 'py-5 bg-transparent',
        darkMode ? 'border-gray-800' : 'border-gray-200',
        scrolled && 'border-b'
      )}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gradient">Aditya Agare</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className="font-medium relative py-1.5 px-1 hover:text-primary transition-colors before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-primary before:transition-all hover:before:w-full"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4">
            <a href="https://github.com/agareaditya-8055" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5 hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com/in/aditya-agare-b04773195" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
            </a>
            <a href="mailto:adityaagare8055@gmail.com" aria-label="Email">
              <Mail className="w-5 h-5 hover:text-primary transition-colors" />
            </a>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => dispatch(toggleTheme())}
              aria-label="Toggle theme"
              className="ml-4"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b"
          >
            <div className="container py-4">
              <ul className="flex flex-col space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="block py-2 font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="flex space-x-6 mt-6 pt-6 border-t">
                <a href="https://github.com/agareaditya-8055" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-5 h-5 hover:text-primary transition-colors" />
                </a>
                <a href="https://linkedin.com/in/aditya-agare-b04773195" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
                </a>
                <a href="mailto:adityaagare8055@gmail.com" aria-label="Email">
                  <Mail className="w-5 h-5 hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
