import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import PlayerCard from '../components/player/PlayerCard';
import { fetchPlayers, Player } from '../services/api';

const Team: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const data = await fetchPlayers();
        setPlayers(data);
      } catch (err) {
        setError('Failed to load players');
      } finally {
        setIsLoading(false);
      }
    };

    loadPlayers();
  }, []);

  // Get unique positions for filter
  const positions = ['All', ...Array.from(new Set(players.map(player => player.position)))];
  
  // Filter players based on selected position
  const filteredPlayers = filter === 'All' 
    ? players 
    : players.filter(player => player.position === filter);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <>
      <PageHeader 
        title="Our Team" 
        subtitle="Meet the talented players who represent Gorilla Highland Sports Club."
        backgroundImage="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading 
            title="Player Roster" 
            subtitle="The dedicated athletes who represent our club on the field."
            centered
          />
          
          {/* Position Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {positions.map((position, index) => (
              <button
                key={index}
                onClick={() => setFilter(position)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === position 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {position}
              </button>
            ))}
          </div>
          
          {/* Players Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPlayers.map((player, index) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PlayerCard {...player} />
              </motion.div>
            ))}
          </div>
          
          {filteredPlayers.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No players found in this position.
            </div>
          )}
        </Container>
      </section>
      
      {/* Team Statistics */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading 
            title="Team Statistics" 
            subtitle="Performance metrics from the current season"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">28</div>
              <div className="text-gray-600">Matches Played</div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">18</div>
              <div className="text-gray-600">Victories</div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">52</div>
              <div className="text-gray-600">Goals Scored</div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">2nd</div>
              <div className="text-gray-600">League Position</div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Staff Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading 
            title="Coaching Staff" 
            subtitle="The dedicated professionals who train and develop our players"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md"
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
                <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mt-2 mb-4">
                  Head Coach
                </div>
                <p className="text-gray-600">Former national team player with over 15 years of coaching experience. Led the team to regional championship victory.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6321401/pexels-photo-6321401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Peter Nsubuga" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-primary-700">Peter Nsubuga</h3>
                <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mt-2 mb-4">
                  Assistant Coach
                </div>
                <p className="text-gray-600">Tactical specialist with a background in sports science. Focuses on player performance analysis and match strategy.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Christine Nambi" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-primary-700">Christine Nambi</h3>
                <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mt-2 mb-4">
                  Fitness Coach
                </div>
                <p className="text-gray-600">Certified strength and conditioning specialist responsible for player fitness, injury prevention, and rehabilitation.</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Team;