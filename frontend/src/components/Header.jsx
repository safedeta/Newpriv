import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
      {/* Primer Renglón */}
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo y Nombre */}
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-2xl font-bold">Plataforma Educativa</span>
        </div>

        {/* Buscador */}
        <div className="flex-grow mx-6">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full py-2 px-4 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Login */}
        <div>
          <a
            href="#login"
            className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md transition duration-200"
          >
            Login
          </a>
        </div>
      </div>

      {/* Segundo Renglón */}
      <nav className="bg-gray-800">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <a
            href="#cursos"
            className="text-white hover:text-blue-300 text-lg font-semibold transition duration-200"
          >
            Cursos
          </a>
          <a
            href="#templates"
            className="text-white hover:text-blue-300 text-lg font-semibold transition duration-200"
          >
            Templates
          </a>
          <a
            href="#cuenta"
            className="text-white hover:text-blue-300 text-lg font-semibold transition duration-200"
          >
            Cuenta
          </a>
          <a
            href="#ejercicios"
            className="text-white hover:text-blue-300 text-lg font-semibold transition duration-200"
          >
            Ejercicios
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
