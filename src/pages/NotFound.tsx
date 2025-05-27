import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <Container>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center py-16">
        <h1 className="font-heading font-bold text-6xl text-primary-700 mb-6">404</h1>
        <h2 className="font-heading font-semibold text-3xl text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button variant="primary" to="/" className="flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;