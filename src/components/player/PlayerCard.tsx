import React from 'react';
import { motion } from 'framer-motion';

interface PlayerProps {
  id: number;
  name: string;
  position: string;
  bio: string;
  photoUrl: string;
}

const PlayerCard: React.FC<PlayerProps> = ({ name, position, bio, photoUrl }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-80">
        <img 
          src={photoUrl} 
          alt={`${name} - ${position}`} 
          className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-heading font-semibold text-xl text-primary-700">{name}</h3>
        <div className="inline-block bg-accent-400 text-primary-900 px-3 py-1 rounded-full text-sm font-medium mt-2 mb-4 self-start">
          {position}
        </div>
        <p className="text-gray-600 line-clamp-4">{bio}</p>
      </div>
    </motion.div>
  );
};

export default PlayerCard;