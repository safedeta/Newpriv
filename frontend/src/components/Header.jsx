import React from 'react';
import Navbar from './Navbar.jsx';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center">
        <h1 className="text-3xl font-bold text-left">Sitio muy epico</h1>
        <div className='flex-1 flex justify-left'>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
