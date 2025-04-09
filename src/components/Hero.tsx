
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 md:px-8 py-16">
      <div className="inline-block px-6 py-2 bg-black/20 backdrop-blur-sm rounded-full text-white mb-8">
        Data Science & Machine Learning
      </div>
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
        <span className="text-white">Yunana </span>
        <span className="text-datamind-primary">Usheujawa </span>
        <span className="text-white">Jesse</span>
      </h1>
      
      <h2 className="text-2xl md:text-3xl mb-8">
        <span className="text-white">Creating </span>
        <span className="text-datamind-primary">Insights </span>
        <span className="text-white">from </span>
        <span className="text-datamind-secondary">Data</span>
      </h2>
      
      <p className="text-white/80 max-w-2xl mb-12">
        I transform raw data into actionable intelligence through advanced analytics,
        machine learning models, and intuitive visualizations to help businesses make
        informed decisions.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-datamind-primary text-datamind-dark hover:bg-datamind-primary/80 rounded-full px-8">
          View Projects
        </Button>
        <Button variant="outline" className="border-datamind-primary/50 text-white hover:bg-datamind-primary/20 hover:border-datamind-primary rounded-full px-8">
          Get In Touch
        </Button>
        <Button variant="outline" className="border-datamind-primary/50 text-white hover:bg-datamind-primary/20 hover:border-datamind-primary rounded-full px-8">
          <Download className="mr-2 h-4 w-4" /> Download CV
        </Button>
      </div>
    </section>
  );
};

export default Hero;
