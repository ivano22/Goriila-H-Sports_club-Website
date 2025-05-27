import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Trophy, ChevronRight, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import NewsCard from '../components/news/NewsCard';
import PlayerCard from '../components/player/PlayerCard';

const Home: React.FC = () => {
  // Mock data
  const featuredNews = [
    {
      id: 1,
      title: 'Gorilla Highland SC wins regional championship',
      excerpt: 'Our team secured a decisive victory in the regional tournament, bringing the trophy home for the third consecutive year.',
      date: 'May 15, 2025',
      imageUrl: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'gorilla-highland-sc-wins-regional-championship',
    },
    {
      id: 2,
      title: 'New Coach Appointed',
      excerpt: 'Coach John Musoke brings international experience to our team, aiming to elevate our performance to new heights.',
      date: 'May 1, 2025',
      imageUrl: 'https://images.pexels.com/photos/6077982/pexels-photo-6077982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'new-coach-appointed',
    },
    {
      id: 3,
      title: 'Youth Academy Launches New Training Program',
      excerpt: 'Our youth development program introduces innovative training techniques to nurture the next generation of football talent.',
      date: 'April 22, 2025',
      imageUrl: 'https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'youth-academy-launches-new-training-program',
    },
  ];

  const featuredPlayers = [
    {
      id: 1,
      name: 'David Kato',
      position: 'Striker',
      bio: 'A prolific goal scorer and club top scorer in 2024.',
      photoUrl: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      name: 'Simon Mugisha',
      position: 'Midfielder',
      bio: 'Playmaker with exceptional vision and passing ability.',
      photoUrl: 'https://images.pexels.com/photos/7772913/pexels-photo-7772913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: "linear-gradient(rgba(30, 58, 41, 0.7), rgba(30, 58, 41, 0.9)), url('https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/60"></div>
        <Container className="relative z-10 py-24 md:py-36 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              Gorilla Highland Sports Club
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Elevating Talent from the Highlands
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" to="/get-involved">
                Join the Club
              </Button>
              <Button variant="outline" size="lg" to="/shop" className="border-white text-white hover:bg-white hover:text-primary-700">
                Shop Now
              </Button>
            </div>
          </motion.div>
        </Container>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ChevronRight className="h-8 w-8 text-white rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Football team" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-700 mb-6">
                Uganda's Premier Football Club
              </h2>
              <p className="text-gray-700 mb-6">
                Founded in 2012, Gorilla Highland Sports Club has grown to become one of Uganda's most promising football 
                clubs. Based in the beautiful highlands near Bwindi Impenetrable Forest, our club combines athletic 
                excellence with community development.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Trophy className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-primary-700">Our Mission</h3>
                    <p className="text-gray-600">To empower youth through sports and provide opportunities for talent development.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-primary-700">Our Vision</h3>
                    <p className="text-gray-600">A premier sports hub for highland talent in Africa, inspiring the next generation.</p>
                  </div>
                </div>
              </div>
              <Button variant="primary" to="/about">
                Learn More About Us
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Featured Players */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeading 
            title="Meet Our Star Players" 
            subtitle="The talent and dedication of our players drive our success on and off the field."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredPlayers.map(player => (
              <PlayerCard key={player.id} {...player} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="primary" to="/team">
              View All Players
            </Button>
          </div>
        </Container>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading 
            title="Latest News" 
            subtitle="Stay updated with the latest happenings at Gorilla Highland Sports Club."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredNews.map(news => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="primary" to="/news">
              View All News
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative text-white"
        style={{
          backgroundImage: "linear-gradient(rgba(230, 57, 70, 0.8), rgba(230, 57, 70, 0.9)), url('https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
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
                Be Part of Our Journey
              </h2>
              <p className="text-xl mb-8">
                Join us as a player, volunteer, sponsor, or fan. Together, we can make a difference in our community through the power of sports.
              </p>
              <Button variant="accent" size="lg" to="/get-involved">
                <span>Get Involved</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;