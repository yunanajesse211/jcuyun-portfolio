
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Machine Learning Applications",
      description: "A comprehensive collection of machine learning projects including implementation of various algorithms for classification, regression, and clustering problems. Features data preprocessing, feature engineering, model training, and evaluation techniques.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      github: "https://github.com/yunanajesse211/Machine-Learning-Applications",
      demo: "#"
    },
    {
      title: "Statistical Analysis with Python",
      description: "Implementation of statistical analysis techniques using Python libraries. Includes hypothesis testing, correlation analysis, and regression models with visualizations for communicating findings effectively.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      github: "https://github.com/yunanajesse211/Statistical-Analysis-with-Python",
      demo: "#"
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Machine learning project focused on detecting credit card fraud in Nigeria. Includes data preprocessing, feature selection, and implementation of deep neural networks and ensemble models for fraud prediction.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      github: "https://github.com/yunanajesse211/Credit-Card-Fraud-Detection-in-Nigeria",
      demo: "#"
    },
    {
      title: "Loan Default Prediction",
      description: "Project focused on predicting loan defaults using machine learning. Features comprehensive data cleaning, exploratory data analysis, and implementation of a hybrid neural network model.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      github: "https://github.com/yunanajesse211/Loan-Default-Prediction",
      demo: "#"
    },
    {
      title: "Backend Development",
      description: "A collection of backend development projects showcasing API development, database management, and server-side programming skills.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      github: "https://github.com/yunanajesse211/Backend-Development",
      demo: "#"
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
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
