// src/components/Header.jsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo_black from '../assets/Logo_black.png';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Agregar esto para poder navegar

    const handleLogout = () => {
        // Aquí puedes añadir la lógica para cerrar sesión, como limpiar datos de usuario
        console.log('Sesión cerrada');
        //onLogout(); // Llama a la función onLogout si es necesario
        navigate('/login'); // Redirige a la página de login
    };
  
    const navItems = [
      { name: 'Home', path: '/home' },
      { name: 'Rutinas', path: '/rutinas' },
      { name: 'Estadisticas', path: '/estadisticas' },
      { name: 'Perfil', path: '/perfil' },
    ];
  
    return (
      <header className="bg-black flex items-center justify-between p-4">
        {/* Logo y nombre */}
        <div className="flex items-center">
            <img src={Logo_black} alt="Fitfusion Logo" className="w-12 h-12 mr-4" />
            <h1 className="text-2xl font-bold text-whiteText">FitFusion</h1>
        </div>
  
        {/* Menú de navegación */}
        <nav>
          <ul className="flex space-x-4 text-white">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`px-3 py-2 rounded-md ${
                    location.pathname === item.path
                      ? 'bg-transparent border-greenlight text-white border-2'  // Estilo cuando está en la ruta seleccionada
                      : 'hover:bg-transparent hover:text-greenlight border-greenlight' // Estilo al pasar el cursor
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
              {/* Menú de navegación del footer */}
      <button
        onClick={handleLogout}
        className="bg-greenlight text-black px-4 py-2 mt-2 rounded hover:text-white"
      >
        Cerrar Sesion
      </button>
      </header>
    );
  };
  
  export default Header;