import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto text-center">
        {/* Logo o Nombre */}
        <h2 className="text-gray-100 text-lg font-semibold">
          Plataforma Educativa
        </h2>

        {/* Links de navegación */}
        <nav className="mt-4">
          <ul className="flex justify-center gap-6">
            <li>
              <a
                href="#"
                className="hover:text-gray-100 transition"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-100 transition"
              >
                Cursos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-100 transition"
              >
                Sobre nosotros
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-100 transition"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {/* Información de derechos reservados */}
        <p className="mt-6 text-sm">
          © 2024 Plataforma Educativa. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
