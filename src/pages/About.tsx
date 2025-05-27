import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Users, Target } from 'lucide-react';
import Container from '../components/ui/Container';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  const milestones = [
    { year: '2012', event: 'Club founded by local community leaders' },
    { year: '2015', event: 'First regional tournament participation' },
    { year: '2018', event: 'Youth development program launched' },
    { year: '2020', event: 'New training facilities completed' },
    { year: '2023', event: 'First national league qualification' },
    { year: '2025', event: 'Regional championship title win' },
  ];

  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Learn about our history, mission, and vision for the future."
        backgroundImage="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Our Story" />
              <p className="text-gray-700 mb-6">
                Gorilla Highland Sports Club was founded in 2012 by a group of passionate football enthusiasts and community leaders from the highland regions of Uganda. 
                What began as a small local team has grown into a respected club with ambitions to compete at the highest levels of Ugandan football.
              </p>
              <p className="text-gray-700 mb-6">
                Named after the magnificent mountain gorillas that inhabit our region, our club embodies the strength, community spirit, and resilience of these incredible animals. 
                We take pride in our highland heritage and aim to provide opportunities for talented young players from rural communities.
              </p>
              <p className="text-gray-700">
                Today, Gorilla Highland SC operates senior men's and women's teams, as well as a comprehensive youth development program that serves over 150 children and teenagers from the surrounding communities.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team training" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading 
            title="Our Mission & Vision" 
            subtitle="What drives us forward every day"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-primary-700 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower youth through sports, providing opportunities for talent development while fostering community growth and pride in the highland regions of Uganda.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-primary-700 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To become a premier sports hub for highland talent in Africa, recognized for excellence in player development, community engagement, and competitive success.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading 
            title="Our Core Values" 
            subtitle="The principles that guide our actions and decisions"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-700 mb-2">Excellence</h3>
              <p className="text-gray-600">Striving for the highest standards in everything we do.</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-700 mb-2">Community</h3>
              <p className="text-gray-600">Supporting and uplifting the communities we serve.</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-700 mb-2">Innovation</h3>
              <p className="text-gray-600">Embracing new ideas and approaches to grow and improve.</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-700 mb-2">Inclusivity</h3>
              <p className="text-gray-600">Creating opportunities for all, regardless of background.</p>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading 
            title="Our Journey" 
            subtitle="Key milestones in the Gorilla Highland SC story"
            centered
          />
          <div className="relative max-w-3xl mx-auto mt-12">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {/* Timeline Items */}
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:pl-8 md:pr-0 md:text-left' : 'md:mr-auto md:pr-8 md:pl-0 md:text-right'} md:w-1/2 px-4`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 md:left-auto md:right-0 transform -translate-x-1/2 md:translate-x-1/2 w-4 h-4 bg-accent-400 rounded-full border-4 border-white"></div>
                
                {/* Content */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {milestone.year}
                  </div>
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading 
            title="Leadership Team" 
            subtitle="Meet the dedicated individuals guiding our club"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="John Musoke" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-primary-700">John Musoke</h3>
                <div className="text-secondary-600 font-medium my-2">Head Coach</div>
                <p className="text-gray-600">Former national team player with over 15 years of coaching experience.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sarah Nakato" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-primary-700">Sarah Nakato</h3>
                <div className="text-secondary-600 font-medium my-2">Club President</div>
                <p className="text-gray-600">Community leader and advocate for sports development in rural Uganda.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Robert Kizza" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-primary-700">Robert Kizza</h3>
                <div className="text-secondary-600 font-medium my-2">Youth Development Director</div>
                <p className="text-gray-600">Dedicated to creating pathways for young talent to thrive in football.</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* CTA */}
      <section 
        className="py-16 bg-primary-600 text-white"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                Join Our Community
              </h2>
              <p className="text-xl mb-8">
                Become a part of the Gorilla Highland family. Whether as a player, supporter, or partner, there's a place for you in our story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" to="/get-involved">
                  Get Involved
                </Button>
                <Button variant="outline" size="lg" to="/contact" className="border-white text-white hover:bg-white hover:text-primary-700">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;