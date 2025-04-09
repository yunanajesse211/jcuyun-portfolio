
import React from 'react';

const TechStack: React.FC = () => {
  const technologies = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Pandas",
    "Scikit-learn",
    "NumPy",
    "SQL",
    "Tableau",
    "R"
  ];

  return (
    <section className="py-12 px-4 md:px-8">
      <h3 className="text-center text-datamind-primary mb-8 text-2xl">TECH STACK</h3>
      
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-pill">
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
