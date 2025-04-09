
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Credit Card Fraud Detection in Nigeria",
      description: "Pre-processed data by creating dummy instances of dataset and performing feature selection to identify key features influencing credit card frauds within Nigeria. Performed EDA using python visualization tools (matplotlib and seaborn) to get insights on key factors influencing fraud in Nigeria. Developed deep neural network models and ensemble models for predicting credit card financial fraud in Nigeria.",
      link: "#"
    },
    {
      title: "Loan Default Prediction in Nigeria",
      description: "Validated and cleaned categorical variables, addressing missing values to ensure data completeness and accuracy, and also documented the cleaning process to maintain transparency and consistency. Performed comprehensive EDA analysis using python visualization tools (matplotlib and seaborn), providing key insights for decision-making regarding the examined dataset. Developed a hybridised neural network model for predicting loan default cases in Nigeria.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
          Featured <span className="text-datamind-primary">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-black/20 border-datamind-primary/30 hover:border-datamind-primary transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-white/80">{project.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="border-datamind-primary/50 text-white hover:bg-datamind-primary/20 hover:border-datamind-primary rounded-full w-full">
                  <Github className="mr-2 h-4 w-4" /> View Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
