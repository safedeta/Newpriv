import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">¡Bienvenido a La Pagina Web mas Pinche Epica De la Historia!</h1>
      
      <p className="text-lg text-gray-700 mb-6 text-center">
        Esta es la página principal de nuestra Pagina Web mas Pinche Epica De la Historia!. Para conocernos mas a fondo puedes darle click y explorar.
      </p>

      <a href="https://youtu.be/VZzSBv6tXMw?si=rQEEvsqPctKepMGr" target="_blank" /* Nueva pestaña */ rel="noopener noreferrer">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Conocenos
        </button>
      </a>
    </div>
  );
};

export default Home;

