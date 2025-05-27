import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-700 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Trophy className="h-8 w-8 text-accent-400" />
              <span className="font-heading font-bold text-xl">Gorilla Highland SC</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Elevating Talent from the Highlands
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="https://instagram.com" className="text-gray-300 hover:text-accent-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-accent-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" className="text-gray-300 hover:text-accent-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="text-gray-300 hover:text-accent-400 transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-accent-400 transition-colors">Our Team</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-accent-400 transition-colors">News</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-accent-400 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-gray-300 hover:text-accent-400 transition-colors">Get Involved</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-accent-400 transition-colors">Shop</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-400 mt-0.5" />
                <span className="text-gray-300">
                  Kisoro District, Uganda<br />
                  Bwindi Impenetrable Forest Region
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-400" />
                <span className="text-gray-300">+256 7XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-400" />
                <a href="mailto:info@gorillasc.org" className="text-gray-300 hover:text-accent-400 transition-colors">
                  info@gorillasc.org
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates and news.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-md bg-primary-800 border border-primary-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-400"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-accent-400 hover:bg-accent-500 text-primary-900 font-medium px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-primary-600 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Gorilla Highland Sports Club. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-accent-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-accent-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;