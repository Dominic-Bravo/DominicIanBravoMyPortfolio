export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image?: string;
  images?: string[]; // Array of screenshot URLs
  liveLink?: string;
  githubLink?: string;
  year: number;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    longDescription: "A complete e-commerce platform built with React, TypeScript, and Django. Features include product catalog, shopping cart, order management, and Stripe payment integration. Deployed with Docker and PostgreSQL.",
    tags: ["React", "TypeScript", "Django", "PostgreSQL", "Stripe"],
    images: ["/screenshots/ecommerce-1.png", "/screenshots/ecommerce-2.png", "/screenshots/ecommerce-3.png"],
    year: 2024,
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Real-time collaborative task management with live updates",
    longDescription: "A real-time task management application with collaborative features. Built with React, WebSockets, and FastAPI backend. Users can create projects, assign tasks, and see live updates across team members.",
    tags: ["React", "FastAPI", "WebSocket", "Redis", "Real-time"],
    year: 2024,
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern personal portfolio with dark mode support",
    longDescription: "A sleek portfolio website showcasing projects and skills. Built with React, Tailwind CSS, and TypeScript. Features include smooth animations, dark mode, and responsive design for all devices.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    year: 2024,
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Real-time data visualization and analytics dashboard",
    longDescription: "An analytics dashboard displaying real-time metrics and insights. Built with React for the frontend and Django with Redis for caching. Includes interactive charts using Chart.js and comprehensive filtering options.",
    tags: ["React", "Django", "Chart.js", "Redis", "PostgreSQL"],
    year: 2023,
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    id: 5,
    title: "Weather App",
    description: "Weather application with location-based forecasts",
    longDescription: "A weather application that provides real-time weather data and forecasts. Integrates with OpenWeather API and features location-based search, detailed weather metrics, and beautiful visualizations.",
    tags: ["React", "TypeScript", "API Integration", "Geolocation"],
    year: 2023,
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "Content management system for blogging",
    longDescription: "A full-featured blogging platform with CMS capabilities. Built with Django backend and React frontend. Features include rich text editing, categories, comments, and SEO optimization.",
    tags: ["React", "Django", "PostgreSQL", "Rich Text Editor"],
    year: 2023,
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  }
];
