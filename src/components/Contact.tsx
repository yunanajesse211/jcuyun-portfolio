
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from '@/hooks/use-mobile';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Use EmailJS
      const serviceID = 'service_g2sfkbv';  // Replace with your actual EmailJS service ID
      const templateID = 'template_j5y7dei'; // Replace with your actual EmailJS template ID
      const userID = 'rThF8OMDf7hDmdI-f'; // Replace with your actual EmailJS user ID
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || "Contact from Portfolio",
        message: formData.message,
        to_name: 'Yunana Jesse',
        reply_to: formData.email
      };

      await emailjs.send(serviceID, templateID, templateParams, userID);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending message:", error);
      
      // Fallback to mailto
      const mailtoLink = `mailto:yunanajesse2@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`)}`;
      
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Direct Email Opened",
        description: "Your default email client has been opened with your message. Please send the email directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-8 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-datamind-dark/50 pointer-events-none"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
          Get in <span className="text-datamind-primary">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="order-2 md:order-1">
            <div className="bg-black/30 border border-datamind-primary/30 rounded-lg p-6 md:p-8 backdrop-blur-sm h-full">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Contact Information</h3>
              <p className="text-white/80 mb-6 md:mb-8 text-sm md:text-base">
                Ready to transform your data into actionable insights? Let's discuss how I can help your business make informed decisions through advanced analytics and machine learning solutions.
              </p>
              
              <div className="space-y-5">
                <div className="flex items-center text-white group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-datamind-primary/20 flex items-center justify-center mr-4 group-hover:bg-datamind-primary/40 transition-colors">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-datamind-primary" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs md:text-sm">Email</p>
                    <a href="mailto:yunanajesse2@gmail.com" className="hover:text-datamind-primary transition-colors text-sm md:text-base">yunanajesse2@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center text-white group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-datamind-primary/20 flex items-center justify-center mr-4 group-hover:bg-datamind-primary/40 transition-colors">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-datamind-primary" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs md:text-sm">Phone</p>
                    <a href="tel:+2347034693441" className="hover:text-datamind-primary transition-colors text-sm md:text-base">+234-7034693441</a>
                  </div>
                </div>
                
                <div className="flex items-center text-white group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-datamind-primary/20 flex items-center justify-center mr-4 group-hover:bg-datamind-primary/40 transition-colors">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-datamind-primary" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs md:text-sm">Location</p>
                    <span className="text-sm md:text-base">Kaduna, 800283 Nigeria</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <a href="https://github.com/yunanajesse211" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-datamind-primary/20 flex items-center justify-center hover:bg-datamind-primary/40 transition-colors group">
                  <Github className="h-4 w-4 md:h-5 md:w-5 text-datamind-primary group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://linkedin.com/in/yunana-jesse" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-datamind-primary/20 flex items-center justify-center hover:bg-datamind-primary/40 transition-colors group">
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5 text-datamind-primary group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 bg-black/30 border border-datamind-primary/30 rounded-lg p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Send Me a Message</h3>
            
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="text-white mb-1 md:mb-2 block text-sm">Your Name*</label>
                <Input 
                  id="name"
                  name="name"
                  placeholder="John Doe" 
                  className="bg-black/30 border-datamind-primary/30 text-white focus-visible:ring-datamind-primary focus-visible:border-datamind-primary"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-white mb-1 md:mb-2 block text-sm">Your Email*</label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-black/30 border-datamind-primary/30 text-white focus-visible:ring-datamind-primary focus-visible:border-datamind-primary"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="text-white mb-1 md:mb-2 block text-sm">Subject</label>
                <Input 
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?" 
                  className="bg-black/30 border-datamind-primary/30 text-white focus-visible:ring-datamind-primary focus-visible:border-datamind-primary"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-white mb-1 md:mb-2 block text-sm">Your Message*</label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Let me know how I can assist you..." 
                  className="bg-black/30 border-datamind-primary/30 text-white focus-visible:ring-datamind-primary focus-visible:border-datamind-primary min-h-[100px] md:min-h-[120px]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-datamind-primary text-datamind-dark hover:bg-datamind-primary/80 rounded-full py-5 md:py-6"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
