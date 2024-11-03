// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="profile-card">
      <img src={user.photo} alt="profile" />
      <h2>{user.name}</h2>
      <p>{user.weight} kg</p>
      <p>{user.height} cm</p>
    </div>
  );
};
export default UserProfile;
