
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-4 md:px-8 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 bg-datamind-primary rounded flex items-center justify-center">
          <div className="h-5 w-5 border-2 border-datamind-dark"></div>
        </div>
        <span className="text-xl font-bold text-white">DataMind</span>
      </div>

      <div className="hidden md:flex gap-8 text-white">
        <a href="#home" className="hover:text-datamind-primary transition-colors">Home</a>
        <a href="#about" className="hover:text-datamind-primary transition-colors">About</a>
        <a href="#services" className="hover:text-datamind-primary transition-colors">Services</a>
        <a href="#projects" className="hover:text-datamind-primary transition-colors">Projects</a>
        <a href="#contact" className="hover:text-datamind-primary transition-colors">Contact</a>
      </div>

      <div>
        <Button className="bg-datamind-primary hover:bg-datamind-primary/80 text-datamind-dark font-medium rounded-full">
          Let's Talk
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
