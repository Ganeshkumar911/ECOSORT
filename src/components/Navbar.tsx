import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold">EcoSort</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-green-300 transition-colors">
              Home
            </Link>
            <Link to="/sorting-guide" className="hover:text-green-300 transition-colors">
              Sorting Guide
            </Link>
            <Link to="/tracking" className="hover:text-green-300 transition-colors">
              Waste Tracking
            </Link>
            <Link to="/centers" className="hover:text-green-300 transition-colors">
              Recycling Centers
            </Link>
            <Link to="/education" className="hover:text-green-300 transition-colors">
              Learn
            </Link>
            <Link to="/profile" className="hover:text-green-300 transition-colors">
              Profile
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-100 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/sorting-guide" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sorting Guide
            </Link>
            <Link 
              to="/tracking" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Waste Tracking
            </Link>
            <Link 
              to="/centers" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Recycling Centers
            </Link>
            <Link 
              to="/education" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </Link>
            <Link 
              to="/profile" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;