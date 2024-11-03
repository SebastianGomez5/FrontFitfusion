// src/components/InputField.jsx
import React from 'react';

const InputField = ({ type, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full p-3 mb-5 text-darkText border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${className}`}
    />
  );
};

export default InputField;
