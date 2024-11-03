// src/components/FormLogin.jsx
import React, { useState } from 'react';
import Button from './Button';
import InputField from './InputField'; // Importar el componente InputField
import GoogleLoginButton from './GoogleLoginButton'; // Importar el componente GoogleLoginButton

const FormLogin = ({ onLogin, onSignup, onGoogleLogin, onPasswordReset }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Manejar el envío del formulario de inicio de sesión
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    onLogin(email, password); // Llamar a la función de login
  };

  // Manejar la creación de cuenta
  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Create account clicked');
    onSignup(); // Llamar a la función de crear cuenta
  };

  // Manejar el inicio de sesión con Google
  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    onGoogleLogin(); // Llamar a la función de Google login
  };

  // Manejar la recuperación de contraseña
  const handlePasswordReset = (e) => {
    e.preventDefault();
    console.log('Password reset clicked');
    onPasswordReset(); // Llamar a la función de recuperación de contraseña
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center w-full px-4'>
      {/* Contenedor del formulario */}
      <div className='mt-8 w-full max-w-xs md:max-w-sm lg:max-w-md'>
        <InputField
        type="email"
        placeholder="Username"
        value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4"
          />
          
        <Button text="Login" onClick={handleSubmit} variant="primary" />
        </div>
      
      <Button text="No tienes cuenta? Create una" onClick={handleSignup} variant="onlyText" />

      <div className='text-center mb-2'>
        <label className='text-lg text-whiteText font-semibold'> O continuar con</label> 
      </div>

        <div className='mb-3'>
            <GoogleLoginButton onClick={handleGoogleLogin} />
        </div>

      <Button text="Olvisate tu contraseña?" onClick={handlePasswordReset} variant="onlyText" />
    </form>
  );
};

export default FormLogin;