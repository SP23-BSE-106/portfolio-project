export type Project = {
  image: string;
  title: string;
  description: string;
  skills: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    image: '/images/Cleveroad.jpg',
    title: 'E-Commerce Website',
    description: 'Modern online store with product filtering, cart, and payment system.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#',
  },
  {
    image: '/images/Capture d\'écran 2025-10-22 182207.png',
    title: 'Portfolio Website',
    description: 'Personal portfolio to showcase design and coding projects.',
    skills: ['HTML', 'CSS', 'Bootstrap'],
    github: '#',
    live: '#',
  },
  {
    image: '/images/Weather Forecast Dashboard.jpg',
    title: 'Weather App',
    description: 'Responsive app showing real-time weather data using API integration.',
    skills: ['HTML', 'CSS', 'API'],
    github: '#',
    live: '#',
  },
  {
    image: '/images/WordPress dashboard design concept.jpg',
    title: 'Blog Website',
    description: 'Clean and simple blogging platform with markdown support.',
    skills: ['HTML', 'Tailwind', 'JavaScript'],
    github: '#',
    live: '#',
  },
  {
    image: '/images/Game Dashboard Design.jpg',
    title: 'Game Landing Page',
    description: 'Landing page for a game with animations and parallax effects.',
    skills: ['HTML', 'CSS', 'GSAP'],
    github: '#',
    live: '#',
  },
  {
    image: '/images/Task manager app.jpg',
    title: 'Task Manager',
    description: 'Task tracking web app with CRUD features and clean UI.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#',
  },
];
