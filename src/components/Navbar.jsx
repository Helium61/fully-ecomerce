// Navbar.js
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar'; // Import Sidebar component

const Navbar = () => {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Open sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  // Close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="header px-6 py-3 bg-white relative z-20">
      <nav className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/admin" className="text-white hover:text-gray-300">Admin Panel</Link>
            <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
            <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-white hover:text-gray-300 flex items-center">
            <i className="fa fa-user"></i> <span className="hidden md:inline ml-2">Login/Register</span>
          </Link>
          <Link to="/search" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#e4e9f1" }} />
          </Link>
          <button onClick={openSidebar} className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff" }} />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMenu} className="text-white md:hidden">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-gray-800 p-4 space-y-4 md:hidden">
          <Link to="/home" className="block text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="block text-white hover:text-gray-300">About</Link>
          <Link to="/services" className="block text-white hover:text-gray-300">Services</Link>
          <Link to="/contact" className="block text-white hover:text-gray-300">Contact</Link>
        </div>
      )}

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </header>
  );
};

export default Navbar;