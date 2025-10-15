import { NextResponse } from 'next/server';

const users = [
  {
    id: 1,
    name: 'Alice',
    age: 28,
    bio: 'Software engineer living in San Francisco.',
    image: 'https://i.pravatar.cc/300?u=alice',
  },
  {
    id: 2,
    name: 'Bob',
    age: 32,
    bio: 'Graphic designer and dog lover.',
    image: 'https://i.pravatar.cc/300?u=bob',
  },
  {
    id: 3,
    name: 'Charlie',
    age: 25,
    bio: 'Musician and coffee enthusiast.',
    image: 'https://i.pravatar.cc/300?u=charlie',
  },
  {
    id: 4,
    name: 'Diana',
    age: 30,
    bio: 'Yoga instructor and world traveler.',
    image: 'https://i.pravatar.cc/300?u=diana',
  },
];

export async function GET() {
  return NextResponse.json(users);
}
