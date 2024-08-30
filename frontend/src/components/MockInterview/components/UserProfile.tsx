import React from 'react';
import '../styles/UserProfile.css'; // Import custom styling

interface UserProfileProps {
  name: string;
  email: string;
  profilePicture: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, profilePicture }) => {
  return (
    <div className="user-profile">
      <h3>User Profile</h3>
      <div className="profile-header">
        <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
        <div className="profile-details">
          <h4>{name}</h4>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
