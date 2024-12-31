import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoreVertical } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="py-4 px-4 lg:px-8 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">XPOVIO</span>
        </Link>
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MoreVertical className="w-6 h-6" />
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:space-x-8 absolute lg:relative top-full left-0 right-0 bg-black lg:bg-transparent p-4 lg:p-0`}>
          <Link 
            to="/work" 
            className={`block lg:inline-block py-2 lg:py-0 hover:text-orange-500 ${isActive('/work') ? 'text-orange-500' : ''}`}
          >
            Work
          </Link>
          <Link 
            to="/services" 
            className={`block lg:inline-block py-2 lg:py-0 hover:text-orange-500 ${isActive('/services') ? 'text-orange-500' : ''}`}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className={`block lg:inline-block py-2 lg:py-0 hover:text-orange-500 ${isActive('/about') ? 'text-orange-500' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`block lg:inline-block py-2 lg:py-0 hover:text-orange-500 ${isActive('/contact') ? 'text-orange-500' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;