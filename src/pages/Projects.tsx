import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/project/ProjectCard';

const Projects: React.FC = () => {
  // Mock data for projects
  const projects = [
    {
      id: 1,
      name: 'Youth Empowerment League',
      status: 'Ongoing' as const,
      description: 'A competitive league for underprivileged youth, providing coaching, equipment, and mentorship.',
      imageUrl: 'https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'youth-empowerment-league',
    },
    {
      id: 2,
      name: 'Girls in Football Initiative',
      status: 'Ongoing' as const,
      description: 'Promoting gender equality in sports by creating opportunities for girls to play football.',
      imageUrl: 'https://images.pexels.com/photos/9701704/pexels-photo-9701704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'girls-in-football-initiative',
    },
    {
      id: 3,
      name: 'School Football Program',
      status: 'Ongoing' as const,
      description: 'Partnering with local schools to introduce football as part of physical education curriculum.',
      imageUrl: 'https://images.pexels.com/photos/8847151/pexels-photo-8847151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'school-football-program',
    },
    {
      id: 4,
      name: 'Coach Education Workshop',
      status: 'Completed' as const,
      description: 'Training local coaches in modern football techniques and youth development approaches.',
      imageUrl: 'https://images.pexels.com/photos/8985458/pexels-photo-8985458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'coach-education-workshop',
    },
    {
      id: 5,
      name: 'Community Pitch Renovation',
      status: 'Completed' as const,
      description: 'Transforming an abandoned field into a proper football pitch for community use.',
      imageUrl: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'community-pitch-renovation',
    },
    {
      id: 6,
      name: 'Football Equipment Distribution',
      status: 'Completed' as const,
      description: 'Providing footballs, boots, and training equipment to underprivileged schools and communities.',
      imageUrl: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'football-equipment-distribution',
    },
  ];

  const ongoingProjects = projects.filter(project => project.status === 'Ongoing');
  const completedProjects = projects.filter(project => project.status === 'Completed');

  return (
    <>
      <PageHeader 
        title="Our Projects" 
        subtitle="Community initiatives and development programs by Gorilla Highland Sports Club."
        backgroundImage="https://images.pexels.com/photos/8847151/pexels-photo-8847151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Intro Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Making a Difference" />
              <p className="text-gray-700 mb-6">
                At Gorilla Highland Sports Club, we believe in the power of sports to transform lives and communities. 
                Our projects focus on providing opportunities for youth development, promoting gender equality, and 
                building stronger communities through football.
              </p>
              <p className="text-gray-700">
                We work closely with local schools, community organizations, and international partners to implement 
                sustainable programs that have lasting impact on the highlands region of Uganda.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/8847168/pexels-photo-8847168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Community outreach" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Ongoing Projects */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading 
            title="Ongoing Projects" 
            subtitle="Current initiatives that are making an impact in our community."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {ongoingProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Completed Projects */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading 
            title="Completed Projects" 
            subtitle="Past initiatives that have successfully served our community."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {completedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Impact Stats */}
      <section className="py-16 bg-primary-600 text-white">
        <Container>
          <SectionHeading 
            title="Our Impact" 
            subtitle="Measuring the difference we're making in our community."
            centered
            className="text-white"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-accent-400 mb-2">1500+</div>
              <div className="text-white opacity-90">Youth Participants</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-accent-400 mb-2">12</div>
              <div className="text-white opacity-90">Communities Served</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-accent-400 mb-2">45</div>
              <div className="text-white opacity-90">Local Coaches Trained</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-accent-400 mb-2">24</div>
              <div className="text-white opacity-90">Schools Partnered With</div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Partners */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading 
            title="Our Partners" 
            subtitle="Organizations that support our community projects."
            centered
          />
          
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg flex items-center justify-center w-48 h-24"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-500 font-medium">Uganda Football Association</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg flex items-center justify-center w-48 h-24"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-500 font-medium">Ministry of Education</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg flex items-center justify-center w-48 h-24"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-500 font-medium">Highland Coffee Co.</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg flex items-center justify-center w-48 h-24"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-500 font-medium">Bwindi Community Trust</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg flex items-center justify-center w-48 h-24"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-500 font-medium">Football for Good</p>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Projects;