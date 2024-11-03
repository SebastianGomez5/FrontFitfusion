// src/components/GoogleLoginButton.jsx
import React from 'react';
import googleLogo from '../assets/googleLogo.png'; // Importar el logo de Google

const GoogleLoginButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <img src={googleLogo} alt="Google Logo" className="w-6 h-6"/>
    </button>
  );
};

export default GoogleLoginButton;
