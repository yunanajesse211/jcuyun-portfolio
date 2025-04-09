
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
          Get in <span className="text-datamind-primary">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-white/80 mb-6">
              Ready to transform your data into actionable insights? Let's discuss how I can help your business make informed decisions through advanced analytics and machine learning solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-white">
                <Mail className="mr-3 h-5 w-5 text-datamind-primary" />
                <a href="mailto:yunanajesse2@gmail.com" className="hover:text-datamind-primary transition-colors">yunanajesse2@gmail.com</a>
              </div>
              
              <div className="flex items-center text-white">
                <Phone className="mr-3 h-5 w-5 text-datamind-primary" />
                <a href="tel:+2347034693441" className="hover:text-datamind-primary transition-colors">+234-7034693441</a>
              </div>
              
              <div className="flex items-center text-white">
                <Github className="mr-3 h-5 w-5 text-datamind-primary" />
                <a href="https://github.com/" className="hover:text-datamind-primary transition-colors">Github</a>
              </div>
              
              <div className="flex items-center text-white">
                <Linkedin className="mr-3 h-5 w-5 text-datamind-primary" />
                <a href="https://linkedin.com/" className="hover:text-datamind-primary transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="bg-black/20 border border-datamind-primary/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Send Me a Message</h3>
            
            <form className="space-y-4">
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="bg-black/30 border-datamind-primary/30 text-white focus:border-datamind-primary"
                />
              </div>
              
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-black/30 border-datamind-primary/30 text-white focus:border-datamind-primary"
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  className="bg-black/30 border-datamind-primary/30 text-white focus:border-datamind-primary min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-datamind-primary text-datamind-dark hover:bg-datamind-primary/80 rounded-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
