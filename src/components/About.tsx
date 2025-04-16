
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-gradient-to-r from-black/40 to-black/20 border-y border-datamind-primary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          About <span className="text-datamind-primary">Me</span>
        </h2>
        
        <p className="text-white/80 mb-8 text-lg">
          Results-driven Data Scientist with over 3 years of experience specializing in predictive modeling, data analysis, 
          and machine learning. Proficient in Python, SQL, and cloud platforms such as AWS, with a strong background in demand 
          forecasting, image classification, and supply chain optimization.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-black/40 border-datamind-primary/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-datamind-primary">Technical Skills</h3>
              <ul className="list-disc pl-5 text-white/80 space-y-2">
                <li>Python, SQL, AWS</li>
                <li>Machine Learning & Deep Learning</li>
                <li>Data Visualization (Tableau, Seaborn)</li>
                <li>Image Classification & Processing</li>
                <li>Predictive Modeling</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-datamind-primary/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-datamind-primary">Soft Skills</h3>
              <ul className="list-disc pl-5 text-white/80 space-y-2">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Project Management</li>
                <li>Communication</li>
                <li>Analytical Thinking</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-black/40 border-datamind-primary/30">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-datamind-primary">Experience</h3>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <h4 className="text-lg font-bold text-white">Data Scientist</h4>
                <span className="text-datamind-primary">Jan 2020 - Present</span>
              </div>
              <p className="text-white/80 mb-2">J-Tech Limited, Kaduna, Nigeria</p>
              <ul className="list-disc pl-5 text-white/80 space-y-2">
                <li>Led development of predictive models improving decision accuracy by 25%</li>
                <li>Optimized data queries and maintained high-integrity pipelines</li>
                <li>Implemented ML models integrated with cloud platforms</li>
                <li>Enhanced supply chain operations through data-driven solutions</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
