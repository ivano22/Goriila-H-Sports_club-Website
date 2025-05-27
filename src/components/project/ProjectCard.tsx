import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProjectProps {
  id: number;
  name: string;
  status: 'Ongoing' | 'Completed';
  description: string;
  imageUrl: string;
  slug: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ name, status, description, imageUrl, slug }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/projects/${slug}`}>
        <div className="h-64 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
          status === 'Ongoing' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
        }`}>
          {status}
        </div>
        <Link to={`/projects/${slug}`}>
          <h3 className="font-heading font-semibold text-xl text-primary-700 hover:text-primary-600 transition-colors mb-3">
            {name}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={`/projects/${slug}`}
          className="text-secondary-600 hover:text-secondary-700 font-medium inline-flex items-center transition-colors"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;