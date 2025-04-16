
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Data Wrangling and Analysis - WeRateDogs",
      description: "Data wrangling project where I gathered, assessed, cleaned, and analyzed Twitter data from the WeRateDogs Twitter account to create interesting analyses and visualizations.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      github: "https://github.com/yunanajesse211/Data-wrangling-and-Analysis-WeRateDogs",
      demo: "https://github.com/yunanajesse211/Data-wrangling-and-Analysis-WeRateDogs"
    },
    {
      title: "Flight Delay Analysis",
      description: "Analysis of flight delay data using Python and data visualization tools to identify patterns and predict delays in airline operations.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      github: "https://github.com/yunanajesse211/flight_delay_analysis",
      demo: "https://github.com/yunanajesse211/flight_delay_analysis"
    },
    {
      title: "RWFD-Customer Segmentation",
      description: "Implementing customer segmentation techniques for a retail company using Python to improve targeted marketing strategies.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      github: "https://github.com/yunanajesse211/RWFD-Customer-Segmentation",
      demo: "https://github.com/yunanajesse211/RWFD-Customer-Segmentation"
    },
    {
      title: "Loan Default Prediction",
      description: "Machine learning model to predict loan defaults using historical data, featuring exploratory data analysis and model deployment.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      github: "https://github.com/yunanajesse211/Loan-Default-Prediction",
      demo: "https://github.com/yunanajesse211/Loan-Default-Prediction"
    },
    {
      title: "Customer Churn Prediction",
      description: "Predictive modeling project to identify customers likely to churn, helping businesses implement retention strategies.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      github: "https://github.com/yunanajesse211/Customer-Churn-Prediction",
      demo: "https://github.com/yunanajesse211/Customer-Churn-Prediction"
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
          Featured <span className="text-datamind-primary">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-black/20 border-datamind-primary/30 hover:border-datamind-primary transition-all duration-300 hover:shadow-lg hover:shadow-datamind-primary/20">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-white/80 text-sm">{project.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button 
                    variant="outline" 
                    className="w-full border-datamind-primary text-datamind-primary bg-black hover:bg-black/80 hover:border-datamind-primary rounded-full"
                  >
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Button>
                </a>
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button 
                    className="w-full bg-black text-datamind-primary hover:bg-black/80 rounded-full border border-datamind-primary/50"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> View Project
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://github.com/yunanajesse211?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              className="bg-datamind-primary text-black hover:bg-datamind-primary/90 rounded-full px-8 py-6 text-lg font-semibold"
            >
              See More Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
