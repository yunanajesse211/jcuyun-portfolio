
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          About <span className="text-datamind-primary">Me</span>
        </h2>
        
        <p className="text-white/80 mb-8">
          Results-driven Data Scientist with over 3 years of experience specializing in predictive modeling, data analysis, 
          and machine learning. Proficient in Python, SQL, and cloud platforms such as AWS, with a strong background in demand 
          forecasting, image classification, and supply chain optimization. Experienced in end-to-end machine learning pipeline 
          development, data warehousing, and deploying models in production environments. Proven ability to translate complex 
          data insights into clear, actionable business recommendations to drive organizational success.
        </p>
        
        <h3 className="text-2xl font-bold mb-4 text-datamind-primary">Skills</h3>
        
        <Card className="bg-black/20 border-datamind-primary/30 mb-8">
          <CardContent className="p-6">
            <p className="text-white font-semibold mb-2">Software Tools:</p>
            <p className="text-white/80 mb-4">
              MySQL | Python programming | Predictive Analysis | Image classification | Web-application development (Streamlit) | 
              Deep Learning (CNNs, RNNs, LSTMs) | Data Visualization (Tableau, Seaborn, Matplotlib) | Lean & Agile Methodologies
            </p>
            
            <p className="text-white font-semibold mb-2">Soft Skills:</p>
            <p className="text-white/80">
              Attention to Detail | Analytical, Problem-Solving and Data-driven decisions | Development of predictive models | 
              Continuous Learning and Development | Collaboration and Teamwork
            </p>
          </CardContent>
        </Card>
        
        <h3 className="text-2xl font-bold mb-4 text-datamind-primary">Professional Experience</h3>
        
        <Card className="bg-black/20 border-datamind-primary/30 mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between mb-2">
              <h4 className="text-lg font-bold text-white">Data Scientist</h4>
              <span className="text-datamind-primary">Jan 2020 - Present</span>
            </div>
            <p className="text-white/80 mb-4">J-Tech Limited, Kaduna, Nigeria</p>
            
            <ul className="list-disc pl-5 text-white/80 space-y-2">
              <li>Led the development and deployment of predictive models in areas like credit fraud detection and loan default prediction, driving a 25% improvement in decision-making accuracy.</li>
              <li>Worked extensively with SQL databases, optimizing data queries and ensuring high integrity in data pipelines for real-time analysis.</li>
              <li>Designed and implemented machine learning models (CNNs, RNNs, LSTMs) that integrated with cloud platforms, enhancing data accessibility and performance.</li>
              <li>Collaborated with cross-functional teams to develop end-to-end data workflows, integrating demand forecasting solutions and optimizing supply chain operations.</li>
              <li>Applied statistical techniques, regression analysis, and data visualization tools to derive actionable insights, improving business decision-making processes.</li>
            </ul>
          </CardContent>
        </Card>
        
        <h3 className="text-2xl font-bold mb-4 text-datamind-primary">Education</h3>
        
        <Card className="bg-black/20 border-datamind-primary/30">
          <CardContent className="p-6">
            <div className="flex justify-between mb-2">
              <h4 className="text-lg font-bold text-white">B.Tech. (Computer Science)</h4>
              <span className="text-datamind-primary">Jan 2018 - Sept 2024</span>
            </div>
            <p className="text-white/80">Abubakar Tafawa Balewa University, Bauchi state, Nigeria.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
