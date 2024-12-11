import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-black via-blue-900 to-blue-500 text-white min-h-screen">
      {/* Primera Fila */}
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-8">DE QUÉ TRATA ESTA PÁGINA</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Bloque 1 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Bloque 1</h3>
            <p className="text-gray-400">Contenido sobre el primer bloque.</p>
          </div>
          {/* Bloque 2 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Bloque 2</h3>
            <p className="text-gray-400">Contenido sobre el segundo bloque.</p>
          </div>
          {/* Bloque 3 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Bloque 3</h3>
            <p className="text-gray-400">Contenido sobre el tercer bloque.</p>
          </div>
        </div>
      </div>

      {/* Separador */}
      <hr className="border-gray-700 my-8 mx-auto w-2/3" />

      {/* Segunda Fila: Carrusel de Cursos */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Explora Nuestros Cursos</h2>
        <div className="container mx-auto px-6">
          <div className="flex gap-6 justify-center overflow-hidden">
            {/* Curso 1 */}
            <div className="flex-none w-60 bg-gray-800 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:ring-2 hover:ring-indigo-400">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="https://via.placeholder.com/240x150"
                  alt="Curso 1"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Curso 1</h3>
                <p className="text-gray-400 mt-2">Introducción a la Programación</p>
                <a
                  href="#"
                  className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
                >
                  Ver +
                </a>
              </div>
            </div>
            {/* Curso 2 */}
            <div className="flex-none w-60 bg-gray-800 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:ring-2 hover:ring-indigo-400">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="https://via.placeholder.com/240x150"
                  alt="Curso 2"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Curso 2</h3>
                <p className="text-gray-400 mt-2">Desarrollo Web Avanzado</p>
                <a
                  href="#"
                  className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
                >
                  Ver +
                </a>
              </div>
            </div>
            {/* Curso 3 */}
            <div className="flex-none w-60 bg-gray-800 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:ring-2 hover:ring-indigo-400">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="https://via.placeholder.com/240x150"
                  alt="Curso 3"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Curso 3</h3>
                <p className="text-gray-400 mt-2">Diseño de Interfaces</p>
                <a
                  href="#"
                  className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
                >
                  Ver +
                </a>
              </div>
            </div>
            {/* Curso 4 */}
            <div className="flex-none w-60 bg-gray-800 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:ring-2 hover:ring-indigo-400">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="https://via.placeholder.com/240x150"
                  alt="Curso 4"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Curso 4</h3>
                <p className="text-gray-400 mt-2">Análisis de Datos</p>
                <a
                  href="#"
                  className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
                >
                  Ver +
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
