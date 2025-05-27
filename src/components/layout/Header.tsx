import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Trophy, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-600 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <Trophy className="h-8 w-8 text-accent-400" />
          <span className="text-white font-heading font-bold text-xl md:text-2xl">Gorilla Highland SC</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-white hover:text-accent-400 transition-colors font-medium ${isActive ? 'text-accent-400' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-white hover:text-accent-400 transition-colors font-medium ${isActive ? 'text-accent-400' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/team" 
            className={({ isActive }) => 
              `text-white hover:text-accent-400 transition-colors font-medium ${isActive ? 'text-accent-400' : ''}`
            }
          >
            Team
          </NavLink>
          <NavLink 
            to="/news" 
            className={({ isActive }) => 
              `text-white hover:text-accent-400 transition-colors font-medium ${isActive ? 'text-accent-400' : ''}`
            }
          >
            News
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `text-white hover:text-accent-400 transition-colors font-medium ${isActive ? 'text-accent-400' : ''}`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/get-involved" 
            className={({ isActive }) => 
              `text-white hover:text-accent-400 transition-colors font-medium ${isActive ? 'text-accent-400' : ''}`
            }
          >
            Get Involved
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-white hover:text-accent-400 transition-colors font-medium ${isActive ? 'text-accent-400' : ''}`
            }
          >
            Contact
          </NavLink>
          <NavLink 
            to="/shop" 
            className="flex items-center gap-1 text-white bg-secondary-600 hover:bg-secondary-700 px-4 py-2 rounded-md transition-colors font-medium"
          >
            <ShoppingCart className="h-4 w-4" />
            Shop
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-primary-600 absolute w-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col p-4 space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-white hover:text-accent-400 transition-colors font-medium ${isActive ? 'text-accent-400' : ''}`
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `text-white hover:text-accent-400 transition-colors font-medium ${isActive ? 'text-accent-400' : ''}`
                }
                onClick={closeMenu}
              >
                About
              </NavLink>
              <NavLink 
                to="/team" 
                className={({ isActive }) => 
                  `text-white hover:text-accent-400 transition-colors font-medium ${isActive ? 'text-accent-400' : ''}`
                }
                onClick={closeMenu}
              >
                Team
              </NavLink>
              <NavLink 
                to="/news" 
                className={({ isActive }) => 
                  `text-white hover:text-accent-400 transition-colors font-medium ${isActive ? 'text-accent-400' : ''}`
                }
                onClick={closeMenu}
              >
                News
              </NavLink>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  `text-white hover:text-accent-400 transition-colors font-medium ${isActive ? 'text-accent-400' : ''}`
                }
                onClick={closeMenu}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/get-involved" 
                className={({ isActive }) => 
                  `text-white hover:text-accent-400 transition-colors font-medium ${isActive ? 'text-accent-400' : ''}`
                }
                onClick={closeMenu}
              >
                Get Involved
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `text-white hover:text-accent-400 transition-colors font-medium ${isActive ? 'text-accent-400' : ''}`
                }
                onClick={closeMenu}
              >
                Contact
              </NavLink>
              <NavLink 
                to="/shop" 
                className="flex items-center justify-center gap-1 text-white bg-secondary-600 hover:bg-secondary-700 px-4 py-2 rounded-md transition-colors font-medium"
                onClick={closeMenu}
              >
                <ShoppingCart className="h-4 w-4" />
                Shop
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;