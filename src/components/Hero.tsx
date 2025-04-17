
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 md:px-8 py-16 relative w-full">
      <div className="absolute inset-0 grid-pattern-overlay"></div>
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-datamind-primary/20 backdrop-blur-sm rounded-full text-white mb-6 sm:mb-8 border border-datamind-primary/50">
          <span className="text-datamind-primary font-medium text-sm sm:text-base">Data Science & Machine Learning</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] via-[#D946EF] to-[#F97316]">
          Yunana Usheujawa Jesse
        </h1>
        
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-datamind-primary to-transparent w-full max-w-xs"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl px-3 sm:px-6 whitespace-nowrap">
            <span className="text-white">Data </span>
            <span className="text-datamind-primary">Scientist</span>
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-datamind-primary to-transparent w-full max-w-xs"></div>
        </div>
        
        <div className="relative">
          <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 h-40 w-40 bg-datamind-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 h-40 w-40 bg-datamind-secondary/20 rounded-full blur-3xl"></div>
          
          <p className="text-white/80 max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base md:text-lg px-4">
            I transform raw data into actionable intelligence through advanced analytics,
            machine learning models, and intuitive visualizations to help businesses make
            informed decisions.
          </p>
        </div>
        
        <div className={`flex flex-col ${isMobile ? 'gap-3' : 'sm:flex-row gap-4'} justify-center px-4 sm:px-0`}>
          <a href="#projects" className="w-full sm:w-auto">
            <Button className="bg-black text-datamind-primary hover:bg-black/80 rounded-full px-5 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium border border-datamind-primary/50 w-full sm:w-auto">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <Button variant="outline" className="border-datamind-primary text-datamind-primary bg-black hover:bg-black/80 hover:border-datamind-primary rounded-full px-5 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium w-full sm:w-auto">
              Get In Touch
            </Button>
          </a>
          <a 
            href="https://docs.google.com/document/d/1bGmQwIRe9AkSpFUaKe8PS2ue5WrME4gf/edit?usp=sharing&ouid=112234798624604499584&rtpof=true&sd=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="outline" className="border-datamind-primary text-datamind-primary bg-black hover:bg-black/80 hover:border-datamind-primary rounded-full px-5 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </a>
        </div>
        
        <div className="mt-10 sm:mt-16 px-4 sm:px-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Data Science Visualization" 
            className="rounded-xl border border-datamind-primary/30 shadow-xl shadow-datamind-primary/10 max-w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
