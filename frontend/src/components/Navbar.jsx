import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300">
            Acerca de
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
