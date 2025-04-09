
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 md:px-8 border-t border-datamind-primary/20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="h-6 w-6 bg-datamind-primary rounded flex items-center justify-center">
            <div className="h-3 w-3 border-2 border-datamind-dark"></div>
          </div>
          <span className="text-lg font-bold text-white">DataMind</span>
        </div>
        
        <div className="text-white/60 text-sm">
          © {currentYear} Jesse Yunana. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
