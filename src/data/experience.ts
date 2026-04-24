export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Full-Stack Developer",
    company: "TechWave Studio",
    period: "2023 - Present",
    location: "Remote",
    description: "Building scalable web applications, APIs, and internal tools for high-growth startups.",
    highlights: [
      "Led migration from monolith to microservices",
      "Built reusable component library with React and Tailwind",
      "Improved application performance by 35%"
    ]
  },
  {
    id: 2,
    role: "Backend Engineer",
    company: "Nova Systems",
    period: "2021 - 2023",
    location: "Remote",
    description: "Designed RESTful APIs and backend services with Python and Django for enterprise clients.",
    highlights: [
      "Implemented authentication and role-based access control",
      "Optimized database queries for large data sets",
      "Integrated CI/CD pipeline for automated deployments"
    ]
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Luma Labs",
    period: "2019 - 2021",
    location: "Remote",
    description: "Created polished user interfaces and interactive web experiences using React and TypeScript.",
    highlights: [
      "Built mobile-first landing pages with exceptional accessibility",
      "Implemented interactive data visualizations",
      "Collaborated closely with designers and product teams"
    ]
  }
];
