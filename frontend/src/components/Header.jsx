import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Mi Sitio Web</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Inicio
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                Acerca de
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
