
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Credit Card Fraud Detection in Nigeria",
      description: "Pre-processed data by creating dummy instances of dataset and performing feature selection to identify key features influencing credit card frauds within Nigeria. Performed EDA using python visualization tools (matplotlib and seaborn) to get insights on key factors influencing fraud in Nigeria. Developed deep neural network models and ensemble models for predicting credit card financial fraud in Nigeria.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/yunanajesse211/Credit-Card-Fraud-Detection-in-Nigeria",
      demo: "#"
    },
    {
      title: "Loan Default Prediction in Nigeria",
      description: "Validated and cleaned categorical variables, addressing missing values to ensure data completeness and accuracy, and also documented the cleaning process to maintain transparency and consistency. Performed comprehensive EDA analysis using python visualization tools (matplotlib and seaborn), providing key insights for decision-making regarding the examined dataset. Developed a hybridised neural network model for predicting loan default cases in Nigeria.",
      image: "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/yunanajesse211/Loan-Default-Prediction",
      demo: "#"
    },
    {
      title: "Statistical Analysis with Python",
      description: "Designed and implemented comprehensive statistical analysis techniques using Python's statistical libraries. Applied hypothesis testing, correlation analysis, and regression models to extract meaningful patterns from complex datasets. Created visualizations to communicate statistical findings to non-technical stakeholders.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/yunanajesse211/Statistical-Analysis-with-Python",
      demo: "#"
    },
    {
      title: "Machine Learning Applications",
      description: "Implemented various machine learning algorithms for classification, regression, and clustering problems. Developed pipelines for data preprocessing, feature engineering, model training, and evaluation. Optimized hyperparameters for better model performance and reduced overfitting.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/yunanajesse211/Machine-Learning-Applications",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
          Featured <span className="text-datamind-primary">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-black/20 border-datamind-primary/30 hover:border-datamind-primary transition-all overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-white/80">{project.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-4">
                <Button 
                  variant="outline" 
                  className="border-datamind-primary text-datamind-primary bg-black hover:bg-black/80 hover:border-datamind-primary rounded-full flex-1"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
                <Button 
                  className="bg-black text-datamind-primary hover:bg-black/80 rounded-full flex-1 border border-datamind-primary/50"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
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
