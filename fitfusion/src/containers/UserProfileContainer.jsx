/*
Este archivo manejará la lógica del perfil del usuario. Podría obtener datos del 
usuario desde una API y pasarlos al componente UserProfile.jsx.
*/
// src/containers/UserProfileContainer.jsx
import React, { useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';
import { fetchUserProfile, updateUserProfile } from '../services/api';

const UserProfileContainer = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserProfile = async () => {
      const userData = await fetchUserProfile();
      setUser(userData);
    };

    getUserProfile();
  }, []);

  const handleUpdate = async (updatedData) => {
    const updatedUser = await updateUserProfile(updatedData);
    setUser(updatedUser);
  };

  return user ? (
    <UserProfile user={user} />
  ) : (
    <p>Loading...</p>
  );
};

export default UserProfileContainer;
