
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Exploratory Data Analysis on SBA loans",
      description: "Comprehensive analysis of SBA loan data using Python and data science libraries. The project includes data cleaning, visualization, statistical analysis, and insights about loan patterns and trends.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      github: "https://github.com/yunanajesse211/EDA-on-SBA-loans",
      demo: "https://github.com/yunanajesse211/EDA-on-SBA-loans"
    },
    {
      title: "Communicating Data Findings",
      description: "Data visualization project focusing on effective communication of findings through various plotting techniques and statistical analysis using Python libraries like Seaborn and Matplotlib.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      github: "https://github.com/yunanajesse211/communicate-data-findings",
      demo: "https://github.com/yunanajesse211/communicate-data-findings"
    },
    {
      title: "Investigate TMDb Movie Dataset",
      description: "In-depth analysis of TMDb movie dataset investigating trends in movie production, success factors, and audience preferences using Python data analysis tools.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
      github: "https://github.com/yunanajesse211/investigate-TMDb-movie-dataset",
      demo: "https://github.com/yunanajesse211/investigate-TMDb-movie-dataset"
    },
    {
      title: "SQL Project",
      description: "Database management and analysis project using SQL, demonstrating complex queries, database design, and data manipulation skills.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
      github: "https://github.com/yunanajesse211/SQL-Project",
      demo: "https://github.com/yunanajesse211/SQL-Project"
    },
    {
      title: "Weather Trend Analysis",
      description: "Analysis of global and local weather trends using SQL and Python, including data extraction, visualization, and pattern identification.",
      image: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9",
      github: "https://github.com/yunanajesse211/Weather-trend-Analysis",
      demo: "https://github.com/yunanajesse211/Weather-trend-Analysis"
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
