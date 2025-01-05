// src/components/Nav.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/loggo.svg';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`bg-[#9B2D20] px-4 lg:p-4 lg:flex lg:justify-between z-50 w-full top-0 sticky transition-all duration-300 ${
        isMenuOpen ? 'h-[100vh]' : 'h-[10vh]'
      }`}
    >
      {/* Logo Section */}
      <div className="flex justify-between items-center h-[10vh] w-full ">
        <Link to="/" className="relative h-full w-full lg:mb-14 overflow-hidden">
          <img
            src={logo}
            alt="Logo"
            className="object-contain h-[11vh] lg:h-[14vh] absolute left-0"
          />
        </Link>

        {/* Hamburger Icon */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {!isMenuOpen ? (
            <div className="space-y-1">
              <div className="w-6 h-1 bg-mainText"></div>
              <div className="w-6 h-1 bg-mainText"></div>
              <div className="w-6 h-1 bg-mainText"></div>
            </div>
          ) : (
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <div className="w-6 h-1 bg-mainText transform rotate-45 absolute"></div>
              <div className="w-6 h-1 bg-mainText transform -rotate-45 absolute"></div>
            </div>
          )}
        </div>
      </div>

      {/* Menu Links */}
      <div
        className={`lg:flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-10 mt-5 lg:mt-0 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col items-center lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10">
          <li>
            <Link
              to="/"
              className="text-lg font-karla text-background"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="text-lg font-karla text-background"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-lg font-karla text-background"
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
