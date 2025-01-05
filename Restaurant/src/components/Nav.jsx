// src/components/Nav.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpeg';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background/90 text-mainText p-4">
      {/* Logo or Site Name */}
      <div className="flex justify-between items-center">
        <div className="text-xl font-inika">
          <Link to="/">  
          <img src={logo} alt="Logo" className="w-32 h-auto" />
          </Link>
        </div>

        {/* Hamburger or X Icon */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {/* Show Hamburger Menu when isMenuOpen is false */}
          {!isMenuOpen ? (
            <div className="space-y-1">
              <div className="w-6 h-1 bg-mainText"></div>
              <div className="w-6 h-1 bg-mainText"></div>
              <div className="w-6 h-1 bg-mainText"></div>
            </div>
          ) : (
            // Show Close (X) Icon when isMenuOpen is true
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <div className="w-6 h-1 bg-mainText transform rotate-45 absolute"></div>
              <div className="w-6 h-1 bg-mainText transform -rotate-45 absolute"></div>
            </div>
          )}
        </div>
      </div>

      {/* Menu Links */}
      <div className={`lg:flex mt-5 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col lg:flex-row items-center space-y-4 lg:space-x-6">
          <li>
            <Link
              to="/"
              className="text-lg font-karla text-secondary lg:text-mainText lg:hover:text-secondary"
              onClick={() => setIsMenuOpen(false)} // Close menu when link clicked
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="text-lg font-karla text-secondary lg:text-mainText lg:hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-lg font-karla text-secondary lg:text-mainText lg:hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
