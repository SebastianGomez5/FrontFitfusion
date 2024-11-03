// src/pages/LoginPage.jsx
import React from 'react';
import FormLogin from '../components/FormLogin';
import PattyLogin from '../assets/PattyLogin.jpg';
import fitfusionLogo from '../assets/fitfusionLogo.png';

const LoginPage = () => {

  const handleLogin = (email, password) => {
    console.log("Login with:", email, password);
    // Aquí puedes agregar la lógica para manejar el login
  };

  const handleSignup = () => {
    console.log("Navigate to signup page");
    // Redirigir a la página de crear cuenta
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Aquí puedes integrar la lógica para el inicio de sesión con Google
  };

  const handlePasswordReset = () => {
    console.log("Navigate to password reset");
    // Redirigir a la página de recuperación de contraseña
  };

  return (
    <div className="flex w-full h-screen  ">
       {/* Este es el lado izquierdo*/}
      <div className="flex w-full lg:w-[38.2%] h-screen items-center justify-center  bg-black">
        <div className="w-full max-w-md"> {/* Contenedor máximo para ajustar el ancho */}
          <img src={fitfusionLogo} alt="Logo de Fitfusion" className="w-24 h-24 mb-6 mx-auto rounded-3xl" />
          <h2 className="text-2xl font-bold text-whiteText mb-6 text-center">FITFUSION</h2>
          <p className='text-lg text-white italic font-semibold text-center'>Entrena la mejor version de tí</p>
          <FormLogin
            onLogin={handleLogin}
            onSignup={handleSignup}
            onGoogleLogin={handleGoogleLogin}
            onPasswordReset={handlePasswordReset}
          />
        </div>
      </div>

        <div className="hidden lg:flex w-[61.8%] h-full items-center justify-center bg-white">
          {/* Imagen u otro contenido  */}
          <img src={PattyLogin} alt="Hombre Haciendo ejercicio" className="max-w-full max-h-full object-contain"/>
        </div>

      

    </div>
    
  );
};

export default LoginPage;