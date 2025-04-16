import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Shoe Size Prediction",
      description: "Machine learning project to predict shoe sizes based on features such as height, gender, and age using regression models.",
      image: "https://www.metropolispodiatrist.com/images/grayfish/Rdp5IoKd1fCVVxxFfUK9.jpg",
      github: "https://github.com/yunanajesse211/shoe-size-prediction",
      demo: "https://github.com/yunanajesse211/shoe-size-prediction"
    },
    {
      title: "Clothing Size Prediction",
      description: "Data-driven prediction of clothing sizes using supervised learning techniques to personalize fashion recommendations.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUFf6UCadUpX7ZDpue3HVTFiVvnEpVsIz7WA&s",
      github: "https://github.com/yunanajesse211/clothing-size-prediction",
      demo: "https://github.com/yunanajesse211/clothing-size-prediction"
    },
    {
      title: "Loan Default Prediction in Nigeria",
      description: "A predictive modeling project focusing on identifying loan default risks within the Nigerian financial sector using machine learning.",
      image: "data:image/jpeg;base64,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",
      github: "https://github.com/yunanajesse211/loan-default-prediction-in-Nigeria",
      demo: "https://github.com/yunanajesse211/loan-default-prediction-in-Nigeria"
    },
    {
      title: "Kaduna Water Potability Prediction",
      description: "Analysis and prediction of water potability in Kaduna using classification models to assess safe drinking water quality.",
      image: "https://kulkarnilabs.com/images/water5.jpg",
      github: "https://github.com/yunanajesse211/water_portability_prediction",
      demo: "https://github.com/yunanajesse211/water_portability_prediction"
    },
    {
      title: "Nigeria Court Case Judgement Prediction",
      description: "Using machine learning to predict outcomes of Nigerian court cases, based on historical data and legal features.",
      image: "data:image/jpeg;base64,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",
      github: "https://github.com/yunanajesse211/Court-case-Judgement-in-Nigeria",
      demo: "https://github.com/yunanajesse211/Court-case-Judgement-in-Nigeria"
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
