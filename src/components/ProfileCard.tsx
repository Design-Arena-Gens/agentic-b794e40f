import React from 'react';
import { Card } from 'react-bootstrap';

interface User {
  id: number;
  name: string;
  age: number;
  bio: string;
  image: string;
}

interface ProfileCardProps {
  user: User;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.image} />
      <Card.Body>
        <Card.Title>{user.name}, {user.age}</Card.Title>
        <Card.Text>{user.bio}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
