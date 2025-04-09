
import React from 'react';
import { 
  Activity, Database, BarChart3, PieChart, TableProperties, 
  FileSpreadsheet, Code, ScrollText, BrainCircuit
} from 'lucide-react';

const TechStack: React.FC = () => {
  const technologies = [
    { name: "Python", icon: <Code className="h-5 w-5 text-datamind-primary" /> },
    { name: "TensorFlow", icon: <BrainCircuit className="h-5 w-5 text-datamind-primary" /> },
    { name: "PyTorch", icon: <BrainCircuit className="h-5 w-5 text-datamind-primary" /> },
    { name: "Pandas", icon: <TableProperties className="h-5 w-5 text-datamind-primary" /> },
    { name: "Scikit-learn", icon: <BrainCircuit className="h-5 w-5 text-datamind-primary" /> },
    { name: "NumPy", icon: <Activity className="h-5 w-5 text-datamind-primary" /> },
    { name: "SQL", icon: <Database className="h-5 w-5 text-datamind-primary" /> },
    { name: "Tableau", icon: <PieChart className="h-5 w-5 text-datamind-primary" /> },
    { name: "R", icon: <BarChart3 className="h-5 w-5 text-datamind-primary" /> },
    { name: "Excel", icon: <FileSpreadsheet className="h-5 w-5 text-datamind-primary" /> },
    { name: "Jupyter", icon: <ScrollText className="h-5 w-5 text-datamind-primary" /> },
  ];

  return (
    <section id="tech" className="py-8 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center text-datamind-primary mb-8 text-2xl font-bold">TECH STACK</h3>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-pill flex items-center gap-2 hover:scale-105 transition-transform">
              {tech.icon}
              {tech.name}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/30 border border-datamind-primary/30 rounded-lg p-6 backdrop-blur-sm hover:border-datamind-primary transition-all">
            <div className="w-12 h-12 bg-datamind-primary/20 rounded-full flex items-center justify-center mb-4">
              <BrainCircuit className="h-6 w-6 text-datamind-primary" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Machine Learning</h4>
            <p className="text-white/80">Building predictive models using classification, regression, clustering algorithms and deep learning techniques</p>
          </div>
          
          <div className="bg-black/30 border border-datamind-primary/30 rounded-lg p-6 backdrop-blur-sm hover:border-datamind-primary transition-all">
            <div className="w-12 h-12 bg-datamind-primary/20 rounded-full flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-datamind-primary" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Data Engineering</h4>
            <p className="text-white/80">Designing ETL pipelines, data cleaning, preprocessing and feature engineering for analytical workflows</p>
          </div>
          
          <div className="bg-black/30 border border-datamind-primary/30 rounded-lg p-6 backdrop-blur-sm hover:border-datamind-primary transition-all">
            <div className="w-12 h-12 bg-datamind-primary/20 rounded-full flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-datamind-primary" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Data Visualization</h4>
            <p className="text-white/80">Creating insightful visualizations using Tableau, matplotlib, seaborn to communicate complex analytical findings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
