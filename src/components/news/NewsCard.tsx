import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NewsProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
}

const NewsCard: React.FC<NewsProps> = ({ title, excerpt, date, imageUrl, slug }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/news/${slug}`} className="block h-52">
        <div className="h-full">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
          />
        </div>
      </Link>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <Link to={`/news/${slug}`} className="block flex-grow">
          <h3 className="font-heading font-semibold text-xl text-primary-700 hover:text-primary-600 transition-colors mb-3">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        </Link>
        <Link 
          to={`/news/${slug}`}
          className="text-secondary-600 hover:text-secondary-700 font-medium inline-flex items-center transition-colors mt-auto"
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default NewsCard;