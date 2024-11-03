// src/services/api.js
export const fetchUserProfile = async () => {
    const response = await fetch('/api/user-profile');
    const data = await response.json();
    return data;
  };
  
  export const updateUserProfile = async (updatedData) => {
    const response = await fetch('/api/user-profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    const data = await response.json();
    return data;
  };
  