
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 md:px-8 py-16 relative">
      <div className="absolute inset-0 grid-pattern-overlay"></div>
      <div className="relative z-10">
        <div className="inline-block px-6 py-3 bg-datamind-primary/20 backdrop-blur-sm rounded-full text-white mb-8 border border-datamind-primary/50">
          <span className="text-datamind-primary font-medium">Data Science & Machine Learning</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-white">Yunana </span>
          <span className="text-datamind-primary">Usheujawa </span>
          <span className="text-white">Jesse</span>
        </h1>
        
        <div className="flex items-center justify-center mb-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-datamind-primary to-transparent w-full max-w-xs"></div>
          <h2 className="text-2xl md:text-3xl px-6 whitespace-nowrap">
            <span className="text-white">Data </span>
            <span className="text-datamind-primary">Scientist</span>
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-datamind-primary to-transparent w-full max-w-xs"></div>
        </div>
        
        <div className="relative">
          <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 h-40 w-40 bg-datamind-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 h-40 w-40 bg-datamind-secondary/20 rounded-full blur-3xl"></div>
          
          <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg">
            I transform raw data into actionable intelligence through advanced analytics,
            machine learning models, and intuitive visualizations to help businesses make
            informed decisions.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-black text-datamind-primary hover:bg-black/80 rounded-full px-8 py-6 text-base font-medium border border-datamind-primary/50">
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="border-datamind-primary text-datamind-primary bg-black hover:bg-black/80 hover:border-datamind-primary rounded-full px-8 py-6 text-base font-medium">
            Get In Touch
          </Button>
          <Button variant="outline" className="border-datamind-primary text-datamind-primary bg-black hover:bg-black/80 hover:border-datamind-primary rounded-full px-8 py-6 text-base font-medium">
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
        </div>
        
        <div className="mt-16">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Data Science Visualization" 
            className="rounded-xl border border-datamind-primary/30 shadow-xl shadow-datamind-primary/10 max-w-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
