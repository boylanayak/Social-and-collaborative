export type Role = 'student' | 'teacher';

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: Role;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
}

export interface Reply {
  id: string;
  author: User;
  content: string;
  createdAt: string;
  likes: number;
}

export interface Topic {
  id: string;
  title: string;
  content: string;
  author: User;
  tags: Tag[];
  replies: Reply[];
  views: number;
  likes: number;
  isPinned: boolean;
  isLocked: boolean;
  createdAt: string;
}

export const currentUser: User = {
  id: 'u1',
  name: 'Alex Rivera',
  avatar: 'AR',
  role: 'student',
};

export const tags: Tag[] = [
  { id: 't1', name: 'General', color: 'bg-muted text-muted-foreground' },
  { id: 't2', name: 'CS101', color: 'bg-teacher/10 text-teacher' },
  { id: 't3', name: 'Math', color: 'bg-accent/20 text-accent-foreground' },
  { id: 't4', name: 'Physics', color: 'bg-student/10 text-student' },
  { id: 't5', name: 'Announcement', color: 'bg-destructive/10 text-destructive' },
  { id: 't6', name: 'Study Group', color: 'bg-primary/10 text-primary' },
  { id: 't7', name: 'Resources', color: 'bg-teacher/10 text-teacher' },
];

const users: User[] = [
  currentUser,
  { id: 'u2', name: 'Dr. Sarah Chen', avatar: 'SC', role: 'teacher' },
  { id: 'u3', name: 'Jordan Kim', avatar: 'JK', role: 'student' },
  { id: 'u4', name: 'Prof. Williams', avatar: 'PW', role: 'teacher' },
  { id: 'u5', name: 'Maya Patel', avatar: 'MP', role: 'student' },
];

export const topics: Topic[] = [
  {
    id: '1',
    title: 'Midterm exam schedule has been updated — please review',
    content: 'The midterm exam schedule for Spring 2026 has been revised. CS101 moves to March 30, Math 201 stays on April 2. Check the registrar portal for your personalized schedule. If you have conflicts, submit a request by March 29.\n\nKey changes:\n- CS101: Now March 30, 2:00 PM — Room 204\n- PHYS150: Now April 1, 10:00 AM — Hall B\n- All other exams unchanged',
    author: users[1],
    tags: [tags[4], tags[1]],
    replies: [
      { id: 'r1', author: users[2], content: 'Thanks for the heads up! Will there be a review session before the CS101 midterm?', createdAt: '2026-03-27T14:30:00Z', likes: 5 },
      { id: 'r2', author: users[1], content: 'Yes — review session on March 28 at 4 PM in Room 110. I\'ll post materials beforehand.', createdAt: '2026-03-27T15:00:00Z', likes: 12 },
      { id: 'r3', author: users[4], content: 'The PHYS150 change conflicts with my lab. How do I submit the conflict form?', createdAt: '2026-03-27T16:20:00Z', likes: 3 },
    ],
    views: 342,
    likes: 28,
    isPinned: true,
    isLocked: false,
    createdAt: '2026-03-27T10:00:00Z',
  },
  {
    id: '2',
    title: 'Study group for Linear Algebra — anyone interested?',
    content: 'Looking to form a study group for Math 201 (Linear Algebra). Planning to meet twice a week in the library. We\'d cover problem sets together and prep for the midterm.\n\nIdeal group size: 4-6 people. DM me or reply here if interested!',
    author: users[2],
    tags: [tags[2], tags[5]],
    replies: [
      { id: 'r4', author: users[4], content: 'Count me in! Tuesdays and Thursdays work best for me.', createdAt: '2026-03-26T20:00:00Z', likes: 2 },
      { id: 'r5', author: users[0], content: 'I\'m interested too. Can we do evenings? I have labs until 5.', createdAt: '2026-03-26T21:30:00Z', likes: 1 },
    ],
    views: 89,
    likes: 15,
    isPinned: false,
    isLocked: false,
    createdAt: '2026-03-26T18:00:00Z',
  },
  {
    id: '3',
    title: 'Best resources for learning Python data structures?',
    content: 'I\'m struggling with trees and graphs in CS101. The textbook isn\'t clicking for me. Does anyone have recommendations for:\n\n1. Video tutorials\n2. Interactive practice sites\n3. Supplementary textbooks\n\nI learn best with visual explanations. Thanks in advance!',
    author: users[4],
    tags: [tags[1], tags[6]],
    replies: [
      { id: 'r6', author: users[3], content: 'I highly recommend "Problem Solving with Algorithms and Data Structures using Python" by Miller & Ranum. It\'s free online and has interactive examples.', createdAt: '2026-03-25T11:00:00Z', likes: 18 },
    ],
    views: 156,
    likes: 22,
    isPinned: false,
    isLocked: false,
    createdAt: '2026-03-25T09:00:00Z',
  },
  {
    id: '4',
    title: 'Physics lab report template — updated for Spring 2026',
    content: 'I\'ve uploaded the updated lab report template to the course portal. Key changes from last semester:\n\n- New error analysis section required\n- Abstract now has a 150-word limit\n- References must use APA 7th edition\n\nPlease use this template starting with Lab 5.',
    author: users[3],
    tags: [tags[3], tags[4]],
    replies: [],
    views: 203,
    likes: 31,
    isPinned: true,
    isLocked: true,
    createdAt: '2026-03-24T08:00:00Z',
  },
  {
    id: '5',
    title: 'Campus hackathon this weekend — sign up now!',
    content: 'The annual Spring Hackathon is this Saturday-Sunday! 24 hours of coding, free food, and prizes.\n\nThemes: Education Tech, Sustainability, Health\nTeam size: 2-4\nRegistration closes Friday at midnight.\n\nSign up at hackathon.university.edu',
    author: users[0],
    tags: [tags[0], tags[1]],
    replies: [
      { id: 'r7', author: users[2], content: 'Looking for a teammate! I\'m strong in frontend (React/TypeScript). Anyone need a partner?', createdAt: '2026-03-26T10:00:00Z', likes: 7 },
      { id: 'r8', author: users[4], content: 'Jordan, I\'m in! I can handle the backend. Let\'s team up!', createdAt: '2026-03-26T10:30:00Z', likes: 4 },
    ],
    views: 278,
    likes: 45,
    isPinned: false,
    isLocked: false,
    createdAt: '2026-03-25T14:00:00Z',
  },
];
