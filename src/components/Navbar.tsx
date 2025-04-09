
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-4 ${isScrolled ? 'bg-datamind-dark/80 backdrop-blur-md shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-datamind-primary rounded-lg flex items-center justify-center">
            <div className="h-6 w-6 border-2 border-datamind-dark"></div>
          </div>
          <span className="text-xl font-bold text-white">Jesse<span className="text-datamind-primary">.Dev</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white">
          <a href="#home" className="hover:text-datamind-primary transition-colors font-medium">Home</a>
          <a href="#about" className="hover:text-datamind-primary transition-colors font-medium">About</a>
          <a href="#tech" className="hover:text-datamind-primary transition-colors font-medium">Skills</a>
          <a href="#projects" className="hover:text-datamind-primary transition-colors font-medium">Projects</a>
          <a href="#contact" className="hover:text-datamind-primary transition-colors font-medium">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:bg-datamind-primary/20"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button className="bg-black text-datamind-primary hover:bg-black/80 border border-datamind-primary/50 font-medium rounded-full">
            Let's Talk
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-datamind-dark/95 backdrop-blur-lg shadow-lg p-4 border-t border-datamind-primary/20">
          <div className="flex flex-col gap-4">
            <a 
              href="#home" 
              className="text-white hover:text-datamind-primary py-2 px-4 rounded-lg hover:bg-datamind-primary/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-datamind-primary py-2 px-4 rounded-lg hover:bg-datamind-primary/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#tech" 
              className="text-white hover:text-datamind-primary py-2 px-4 rounded-lg hover:bg-datamind-primary/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-white hover:text-datamind-primary py-2 px-4 rounded-lg hover:bg-datamind-primary/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-datamind-primary py-2 px-4 rounded-lg hover:bg-datamind-primary/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-black text-datamind-primary hover:bg-black/80 border border-datamind-primary/50 font-medium rounded-full w-full mt-2">
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
