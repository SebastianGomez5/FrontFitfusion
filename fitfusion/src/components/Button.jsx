// src/components/Button.jsx
import React from 'react';

const Button = ({ text, onClick, variant }) => {
  const variantClasses = {
    primary: 'active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out bg-greenlight rounded-xl p-3 text-black font-semibold w-full mb-5',
    secondary: 'active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out w-full bg-whiteText rounded-xl p-3 text-black font-semibold',
    onlyText: ' text-whiteText text-1xl underline',
    google: 'active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out w-full bg-whiteText rounded-xl p-3 text-black font-semibold',
  };

  return (
    <button className={`${variantClasses[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
