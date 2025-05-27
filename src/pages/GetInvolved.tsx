import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Handshake, 
  ShoppingBag,
  CheckCircle
} from 'lucide-react';
import Container from '../components/ui/Container';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const GetInvolved: React.FC = () => {
  const volunteerOpportunities = [
    {
      title: 'Youth Coach',
      description: 'Assist in training and mentoring young players in our development programs.',
      commitment: 'Weekly (2-4 hours)',
      requirements: 'Basic football knowledge, experience working with children preferred',
    },
    {
      title: 'Event Coordinator',
      description: 'Help organize and run community events, tournaments, and fundraisers.',
      commitment: 'Monthly (varies by event)',
      requirements: 'Organizational skills, good communication',
    },
    {
      title: 'Administrative Support',
      description: 'Assist with office tasks, record keeping, and communication.',
      commitment: 'Flexible (4-10 hours per month)',
      requirements: 'Basic computer skills, attention to detail',
    },
    {
      title: 'Social Media Manager',
      description: 'Help manage club social media accounts and create engaging content.',
      commitment: 'Weekly (3-5 hours)',
      requirements: 'Experience with social media platforms, photography skills a plus',
    },
  ];

  const sponsorshipLevels = [
    {
      title: 'Bronze Sponsor',
      amount: 'UGX 500,000 - 1,000,000',
      benefits: [
        'Logo on club website',
        'Social media recognition',
        'Certificate of appreciation',
      ],
    },
    {
      title: 'Silver Sponsor',
      amount: 'UGX 1,000,001 - 3,000,000',
      benefits: [
        'All Bronze benefits',
        'Logo on team training kits',
        'Banner at home matches',
        'Match day program recognition',
      ],
    },
    {
      title: 'Gold Sponsor',
      amount: 'UGX 3,000,001 - 8,000,000',
      benefits: [
        'All Silver benefits',
        'Logo on match day jerseys',
        'Named sponsorship of a tournament',
        'VIP access to all home matches',
        'Featured in club newsletters',
      ],
    },
    {
      title: 'Platinum Partner',
      amount: 'UGX 8,000,001+',
      benefits: [
        'All Gold benefits',
        'Primary logo placement on all club materials',
        'Named sponsorship of main team or stadium',
        'Custom partnership benefits',
        'Exclusive events with players and staff',
      ],
    },
  ];

  return (
    <>
      <PageHeader 
        title="Get Involved" 
        subtitle="Join our mission to empower youth through sports in the highlands of Uganda."
        backgroundImage="https://images.pexels.com/photos/8985458/pexels-photo-8985458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Intro Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading 
              title="Join Our Community" 
              subtitle="There are many ways to support Gorilla Highland Sports Club and make a difference in the lives of young athletes."
              centered
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <motion.div 
                className="p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary-700 mb-2">Volunteer</h3>
                <p className="text-gray-600">Contribute your time and skills</p>
              </motion.div>
              
              <motion.div 
                className="p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary-700 mb-2">Donate</h3>
                <p className="text-gray-600">Support our programs financially</p>
              </motion.div>
              
              <motion.div 
                className="p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary-700 mb-2">Partner</h3>
                <p className="text-gray-600">Create strategic collaborations</p>
              </motion.div>
              
              <motion.div 
                className="p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary-700 mb-2">Shop</h3>
                <p className="text-gray-600">Purchase club merchandise</p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Volunteer Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/8847151/pexels-photo-8847151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Volunteers working with youth" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
            <div>
              <SectionHeading title="Volunteer With Us" />
              <p className="text-gray-700 mb-6">
                Volunteers are the backbone of our organization. Whether you have football expertise, administrative skills, 
                or simply a passion for helping youth, we have opportunities for you to make a meaningful contribution.
              </p>
              <p className="text-gray-700 mb-8">
                Our volunteers gain valuable experience, build connections within the community, and most importantly, 
                help create positive change in the lives of young people.
              </p>
              <Button variant="primary" to="/contact">
                Apply to Volunteer
              </Button>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-semibold text-xl text-primary-700 mb-3">{opportunity.title}</h3>
                <p className="text-gray-700 mb-4">{opportunity.description}</p>
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Time Commitment:</span> {opportunity.commitment}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Requirements:</span> {opportunity.requirements}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Donate Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Support Our Mission" />
              <p className="text-gray-700 mb-6">
                Your financial support helps us provide quality coaching, equipment, and opportunities for young athletes 
                in the highland regions of Uganda. Every contribution, regardless of size, makes a difference.
              </p>
              <p className="text-gray-700 mb-4">
                Donations help fund:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5" />
                  <span className="text-gray-700">Equipment and training facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5" />
                  <span className="text-gray-700">Youth scholarships and educational support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5" />
                  <span className="text-gray-700">Community outreach programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5" />
                  <span className="text-gray-700">Coach training and development</span>
                </li>
              </ul>
              <Button variant="primary" to="/contact">
                Make a Donation
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/3621121/pexels-photo-3621121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Youth players with equipment" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Sponsorship Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading 
            title="Sponsorship Opportunities" 
            subtitle="Partner with us to increase your brand visibility while supporting a meaningful cause."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {sponsorshipLevels.map((level, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-semibold text-xl text-primary-700 mb-3">{level.title}</h3>
                <div className="text-secondary-600 font-medium mb-4">{level.amount}</div>
                <h4 className="font-medium text-gray-700 mb-2">Benefits:</h4>
                <ul className="space-y-2 mb-4">
                  {level.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary-600 mt-0.5" />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              We also offer custom partnership opportunities tailored to your organization's goals and values. 
              Contact us to discuss how we can create a meaningful collaboration.
            </p>
            <Button variant="primary" to="/contact">
              Become a Sponsor
            </Button>
          </div>
        </Container>
      </section>
      
      {/* Shop Promo */}
      <section 
        className="py-16 relative bg-secondary-600 text-white"
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
                Shop Our Merchandise
              </h2>
              <p className="text-xl mb-8">
                Show your support by wearing our colors. Every purchase helps fund our community programs.
              </p>
              <Button variant="accent" size="lg" to="/shop">
                Visit Our Shop
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default GetInvolved;