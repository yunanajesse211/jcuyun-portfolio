
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Phone, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-8 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-datamind-dark/50 pointer-events-none"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
          Get in <span className="text-datamind-primary">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-black/30 border border-datamind-primary/30 rounded-lg p-8 backdrop-blur-sm h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-white/80 mb-8">
                Ready to transform your data into actionable insights? Let's discuss how I can help your business make informed decisions through advanced analytics and machine learning solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center text-white group">
                  <div className="w-12 h-12 rounded-full bg-datamind-primary/20 flex items-center justify-center mr-4 group-hover:bg-datamind-primary/40 transition-colors">
                    <Mail className="h-5 w-5 text-datamind-primary" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <a href="mailto:yunanajesse2@gmail.com" className="hover:text-datamind-primary transition-colors">yunanajesse2@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center text-white group">
                  <div className="w-12 h-12 rounded-full bg-datamind-primary/20 flex items-center justify-center mr-4 group-hover:bg-datamind-primary/40 transition-colors">
                    <Phone className="h-5 w-5 text-datamind-primary" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Phone</p>
                    <a href="tel:+2347034693441" className="hover:text-datamind-primary transition-colors">+234-7034693441</a>
                  </div>
                </div>
                
                <div className="flex items-center text-white group">
                  <div className="w-12 h-12 rounded-full bg-datamind-primary/20 flex items-center justify-center mr-4 group-hover:bg-datamind-primary/40 transition-colors">
                    <MapPin className="h-5 w-5 text-datamind-primary" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <span>Kaduna, 800283 Nigeria</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex gap-4">
                <a href="https://github.com/yunanajesse211" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-datamind-primary/20 flex items-center justify-center hover:bg-datamind-primary/40 transition-colors group">
                  <Github className="h-5 w-5 text-datamind-primary group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-datamind-primary/20 flex items-center justify-center hover:bg-datamind-primary/40 transition-colors group">
                  <Linkedin className="h-5 w-5 text-datamind-primary group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-black/30 border border-datamind-primary/30 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="text-white mb-2 block">Your Name</label>
                <Input 
                  id="name"
                  placeholder="John Doe" 
                  className="bg-black/30 border-datamind-primary/30 text-white focus-visible:ring-datamind-primary focus-visible:border-datamind-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-white mb-2 block">Your Email</label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-black/30 border-datamind-primary/30 text-white focus-visible:ring-datamind-primary focus-visible:border-datamind-primary"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="text-white mb-2 block">Subject</label>
                <Input 
                  id="subject"
                  placeholder="How can I help you?" 
                  className="bg-black/30 border-datamind-primary/30 text-white focus-visible:ring-datamind-primary focus-visible:border-datamind-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-white mb-2 block">Your Message</label>
                <Textarea 
                  id="message"
                  placeholder="Let me know how I can assist you..." 
                  className="bg-black/30 border-datamind-primary/30 text-white focus-visible:ring-datamind-primary focus-visible:border-datamind-primary min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-datamind-primary text-datamind-dark hover:bg-datamind-primary/80 rounded-full py-6">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
