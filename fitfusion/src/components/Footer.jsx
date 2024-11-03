// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    { name: 'Términos y Condiciones', path: '/terms' },
    { name: 'Preguntas Frecuentes', path: '/faq' },
    { name: 'Quiénes Somos', path: '/about' },
  ];

  return (
    <footer className="bg-black text-blanco flex items-center justify-between p-4 mt-auto">
      {/* Copyright */}
      <div>
      <p className="text-sm text-whiteText">© {new Date().getFullYear()} Fitfusion. Todos los derechos reservados.</p>
      </div>
      {/* Enlaces del footer */}
      <nav className="">
        <ul className="flex space-x-4">
          {footerLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="text-whiteText hover:underline"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;