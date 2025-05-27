import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Container from '../components/ui/Container';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to Contact Form 7 or another backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset form submitted state after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with Gorilla Highland Sports Club. We'd love to hear from you!"
        backgroundImage="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <SectionHeading title="Get In Touch" />
              <p className="text-gray-700 mb-8">
                Have questions, suggestions, or want to get involved? We're here to help! 
                Reach out using any of the methods below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-primary-700 mb-1">Location</h3>
                    <p className="text-gray-600">
                      Kisoro District, Uganda<br />
                      Bwindi Impenetrable Forest Region
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-primary-700 mb-1">Phone</h3>
                    <p className="text-gray-600">+256 7XX XXX XXX</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-primary-700 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@gorillasc.org" className="hover:text-primary-600 transition-colors">
                        info@gorillasc.org
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-primary-700 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="font-heading font-bold text-2xl text-primary-700 mb-6">Send Us a Message</h2>
                
                {formSubmitted ? (
                  <motion.div 
                    className="bg-green-100 border border-green-200 text-green-800 rounded-lg p-4 mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-medium">Thank you for your message!</p>
                    <p>We'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                      <select 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      >
                        <option value="">Please select a topic</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Volunteering">Volunteering</option>
                        <option value="Sponsorship">Sponsorship</option>
                        <option value="Donations">Donations</option>
                        <option value="Youth Programs">Youth Programs</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <Button type="submit" variant="primary" fullWidth>
                        Send Message
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading 
            title="Find Us" 
            subtitle="Visit our home ground and training facilities in the beautiful highlands of Uganda."
            centered
          />
          
          <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
            {/* Placeholder for map - in a real implementation, this would be a Google Maps or similar embed */}
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 text-center p-8">
                Map placeholder - In a real implementation, this would be an interactive map showing the club's location.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about Gorilla Highland Sports Club."
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-8 space-y-6">
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-semibold text-xl text-primary-700 mb-2">How can I join the club as a player?</h3>
              <p className="text-gray-700">
                We hold regular tryouts for our youth and senior teams. Check our News section for announcements about upcoming 
                tryout dates, or contact us directly for more information.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-semibold text-xl text-primary-700 mb-2">Can I visit to watch training sessions or matches?</h3>
              <p className="text-gray-700">
                Yes! We welcome visitors to our matches and occasionally to our training sessions. Home matches are typically 
                played on weekends, and our training schedule is available upon request.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-semibold text-xl text-primary-700 mb-2">How are donations used by the club?</h3>
              <p className="text-gray-700">
                Donations primarily support our youth development programs, including equipment, coaching, transportation, 
                and educational support for young players. We provide detailed reports to major donors on how their 
                contributions are utilized.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-semibold text-xl text-primary-700 mb-2">Do you offer football programs for girls?</h3>
              <p className="text-gray-700">
                Absolutely! We're committed to gender equality in sports and have dedicated girls' programs at various age levels. 
                Our Girls in Football Initiative specifically focuses on creating opportunities for female players.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;