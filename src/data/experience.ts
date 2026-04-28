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
    role: "Full-Stack Developer",
    company: "Personal Project",
    period: "2026 - Present",
    location: "Remote",
    description: "Ongoing development of an e-commerce and landing page for Classique Herbs using React, TypeScript, Tailwind CSS, and Django REST Framework.",
    highlights: [
      "Developing responsive frontend using React, TypeScript, and Tailwind CSS",
      "Building RESTful APIs with Django REST Framework",
      "Designing e-commerce features such as product listing and landing page",
      "Continuously improving UI/UX and system structure"
    ]
  },
  {
    "id": 2,
    "role": "Full-Stack Developer",
    "company": "Freelance",
    "period": "2024 - 2025",
    "location": "Remote",
    "description": "Architected a hybrid backend system for a facial recognition-based attendance application, leveraging Django REST Framework for core business logic and FastAPI for high-performance biometric processing.",
    "highlights": [
      "Built Android mobile applications using React Native and Expo",
      "Developed robust backend services using Django REST Framework for attendance logic and user management",
      "Engineered a dedicated FastAPI microservice to handle low-latency facial recognition inference"
    ]
  },
  {
    "id": 3,
    "role": "IT Intern (General Office Services)",
    "company": "Municipal Government of Libungan",
    "period": "February 2025 – May 2025",
    "location": "Libungan, Philippines",
    "description": "Streamlined document lifecycle management for government records by applying database principles and automation, transitioning physical workflows toward digital efficiency.",
    "highlights": [
      "Categorized and indexed essential financial records, including PRs, CAFOAs, POs, and DVs, utilizing structured data schemas for improved retrieval efficiency",
      "Developed Python scripts to automate the organization of digital document metadata, reducing manual entry errors",
      "Managed and maintained data integrity of government records, preparing datasets for future migration into SQL-based relational databases",
      "Ensured regulatory compliance and accessibility by implementing systematic filing protocols for sensitive government documents"
    ]
  },
  {
    id: 4,
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2023 - 2025",
    location: "Remote",
    description: "Built a full-stack booking system with a .NET MAUI Android app and ASP.NET Web API backend, following clean architecture principles.",
    highlights: [
      "Built cross-platform mobile app using .NET MAUI (Android)",
      "Developed backend services with ASP.NET Web API and SQL Server",
      "Applied clean architecture using repository pattern and MVC controllers",
      "Used stored procedures for efficient data handling"
    ]
  },
  {
    id: 5,
    role: "Student Developer",
    company: "Academic / Capstone Project",
    period: "2023 - 2025",
    location: "Remote",
    description: "Built a localized flood detection and early warning system using IoT and machine learning, with a .NET MAUI Android app and ASP.NET Web API backend.",
    highlights: [
      "Built Android mobile app using .NET MAUI for real-time alerts and monitoring",
      "Developed backend REST APIs using ASP.NET Web API and SQL Server",
      "Integrated IoT data for environmental monitoring and flood detection",
      "Implemented machine learning-based approach for early warning prediction"
    ]
  },
  {
    id: 6,
    role: "Student Developer",
    company: "Academic Project",
    period: "2023 - 2024",
    location: "Pob 5, Midsayap, Cotabato",
    description: "Developed a web-based booking system for Southern Christian College facilities using Django and SQLite to manage room and facility reservations.",
    highlights: [
      "Built backend system using Django",
      "Designed and managed database using SQLite",
      "Implemented facility booking, scheduling, and availability features",
      "Created system for managing and organizing reservations"
    ]
  }
];
