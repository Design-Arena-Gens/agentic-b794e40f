"use client";

import React, { useState, useEffect } from 'react';
import ProfileCard from '@/components/ProfileCard';
import { Container, Button, Row, Col } from 'react-bootstrap';

interface User {
  id: number;
  name: string;
  age: number;
  bio: string;
  image: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const handleLike = () => {
    console.log('Liked user', users[currentUserIndex]);
    nextUser();
  };

  const handleDislike = () => {
    console.log('Disliked user', users[currentUserIndex]);
    nextUser();
  };

  const nextUser = () => {
    setCurrentUserIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  const currentUser = users[currentUserIndex];

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="mb-4">Tinder Clone</h1>
      {currentUser ? (
        <ProfileCard user={currentUser} />
      ) : (
        <p>Loading profiles...</p>
      )}
      {currentUser && (
        <div className="mt-4">
          <Row>
            <Col>
              <Button variant="danger" size="lg" onClick={handleDislike}>
                Dislike
              </Button>
            </Col>
            <Col>
              <Button variant="success" size="lg" onClick={handleLike}>
                Like
              </Button>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
}