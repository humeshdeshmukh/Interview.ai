// src/components/UserProfile/UserProfile.tsx
import React, { useState } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import './UserProfile.css';

interface UserProfileProps {
  name: string;
  email: string;
  profilePicture: string;
  bio?: string;
  location?: string;
  website?: string;
  phone?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  stats?: {
    followers: number;
    following: number;
    posts: number;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  profilePicture,
  bio,
  location,
  website,
  phone,
  socialLinks,
  stats,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBio, setEditedBio] = useState(bio || '');

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedBio(e.target.value);
  };

  const handleSaveClick = () => {
    // Save the edited bio to the state or backend
    // Implement the save logic here
    setIsEditing(false);
  };

  return (
    <div className="user-profile-container mt-5">
      <Card className="user-profile-card">
        <Card.Body>
          <div className="d-flex align-items-center mb-4">
            <img
              src={profilePicture}
              alt={`${name}'s profile`}
              className="profile-picture rounded-circle"
            />
            <div className="ms-3">
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
            </div>
          </div>

          <ListGroup variant="flush">
            {location && <ListGroup.Item>Location: {location}</ListGroup.Item>}
            {website && (
              <ListGroup.Item>
                Website: <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
              </ListGroup.Item>
            )}
            {phone && <ListGroup.Item>Phone: {phone}</ListGroup.Item>}

            {stats && (
              <ListGroup.Item>
                <div className="d-flex justify-content-between">
                  <span>Followers:</span> <span>{stats.followers}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Following:</span> <span>{stats.following}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Posts:</span> <span>{stats.posts}</span>
                </div>
              </ListGroup.Item>
            )}

            {socialLinks && (
              <ListGroup.Item>
                <h5>Social Links</h5>
                <div className="d-flex flex-column">
                  {socialLinks.facebook && (
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                  )}
                  {socialLinks.twitter && (
                    <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                      Twitter
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  )}
                  {socialLinks.instagram && (
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  )}
                </div>
              </ListGroup.Item>
            )}

            <ListGroup.Item>
              <h5>Bio</h5>
              {isEditing ? (
                <>
                  <textarea
                    className="form-control mb-2"
                    value={editedBio}
                    onChange={handleBioChange}
                  />
                  <Button variant="primary" onClick={handleSaveClick}>
                    Save
                  </Button>
                </>
              ) : (
                <>
                  <p>{bio || 'No bio available'}</p>
                  <Button variant="secondary" onClick={handleEditClick}>
                    Edit Bio
                  </Button>
                </>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserProfile;
