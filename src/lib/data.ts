export const personalInfo = {
  name: "Sadini Pathirana",
  title: "Software Developer | AI/ML Engineer",
  tagline: "Building intelligent systems and innovative software solutions",
  email: "contactsadini@gmail.com",
  phone: "+94 76 3633550",
  github: "https://github.com/sadinipathirana",
  linkedin: "https://www.linkedin.com/in/sadini98/",
  resumeUrl: "/resume.pdf",
  resumeDownloadName: "Resume.pdf",
  profileImage: "/profile.png",
  profileImageAlt: "Sadini Pathirana — Software Developer",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python"],
    icon: "code",
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript"],
    icon: "globe",
  },
  {
    title: "Frameworks",
    skills: ["MERN"],
    icon: "layers",
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
    icon: "database",
  },
  {
    title: "Operating Systems",
    skills: ["Linux"],
    icon: "terminal",
  },
  {
    title: "Cloud Platforms",
    skills: ["AWS"],
    icon: "cloud",
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker"],
    icon: "container",
  },
];

export type ProjectCategory = "AI/ML" | "Full Stack" | "QA";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  githubUrl: string;
  role?: string;
}

export const projects: Project[] = [
  {
    title: "TourAI | Final Year Research Project",
    category: "AI/ML",
    description:
      "Developed an AI-powered tourism solution to enhance revenue and traveler experiences in Sri Lanka. The system integrated fake review detection, sentiment analysis, and place recommendation to improve reliability and personalization. Understanding tourist preferences through sentiment analysis and recommending personalized travel places according to weather and user budget — real-time insights drive better resource allocation, marketing strategies, and service improvements.",
    technologies: [
      "Machine Learning (ML)",
      "Python",
      "Graph Convolutional Networks (GCN)",
    ],
    githubUrl: "https://github.com/sadinipathirana/Final-Year-Project",
  },
  {
    title: "AI Chat Application",
    category: "AI/ML",
    description:
      "A single page chat application with a React frontend and FastAPI backend. It uses Google Gemini via LangChain for conversation AI, with SQLite for chat history and session management.",
    technologies: [
      "FastAPI",
      "Python",
      "LangChain (Gemini)",
      "SQLite",
      "React",
      "TailwindCSS",
      "Axios",
    ],
    githubUrl: "https://github.com/sadinipathirana/Simple-AI-Chat-Application",
  },
  {
    title: "DocuChat AI",
    category: "AI/ML",
    description:
      "An offline AI-powered chatbot that can read and answer questions from PDF documents. The system processes uploaded files, extracts relevant information, and enables interactive question-answering, allowing users to quickly retrieve insights from documents while ensuring data privacy.",
    technologies: [
      "Python",
      "Flask",
      "LangChain",
      "GPT4All",
      "FAISS",
      "HuggingFace Sentence Transformers",
    ],
    githubUrl: "https://github.com/sadinipathirana/DocChat-AI",
  },
  {
    title:
      "Blockchain Based Vehicle Registration & Ownership Management System",
    category: "Full Stack",
    description:
      "The Vehicle Registration and Ownership Management System is an application that facilitates digitizing the system of registering and transferring vehicle ownership with the use of Blockchain Technology. It enables the conversion of physical assets into digital assets. Users who want to sell or buy vehicles in a secure manner can use this application.",
    technologies: [
      "Indy Blockchain",
      "Django",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
      "Docker Compose",
      "Docker",
    ],
    githubUrl: "https://github.com/sadinipathirana/L2-Software-Project",
  },
  {
    title: "Payroll Management System",
    category: "Full Stack",
    description:
      "A comprehensive payroll management system that automates employee salary processing and leave management. The system streamlines HR operations by handling salary calculations, leave tracking, employee records, and report generation, ensuring accuracy, transparency, and efficiency in payroll workflows.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Next.js", "Sass"],
    githubUrl: "https://github.com/sadinipathirana/PayrollBackend",
  },
  {
    title: "Book Management System",
    category: "QA",
    description:
      "A book management system using a Spring Boot REST API to streamline book data management. The system is tested with Cucumber for behavior-driven development and Cypress for end-to-end testing to ensure reliability and functionality. The integration of these testing frameworks enhances test coverage, ensuring accurate and efficient management of book records.",
    technologies: ["Spring Boot", "Cypress", "Cucumber"],
    githubUrl: "https://github.com/sadinipathirana/qa-group-app",
  },
];

export const experience = [
  {
    title: "Software Engineer Intern",
    company: "6IXSENSES Digital Transformation Inc, Canada",
    period: "Internship",
    highlights: [
      "Actively contributed to Payroll System, developed and optimized server-side functionalities using Node.js and Express.js. Implemented RESTful APIs for automated salary sheet generation.",
      "Managed payroll data with MongoDB, ensuring data integrity and security while designing and maintaining schemas for employee and salary records.",
      "Designed and developed interactive payroll management interfaces with Next.js and styled them using Sass for a visually appealing design.",
    ],
  },
];

export const education = {
  degree: "B.Sc. (Hons) in Information Technology",
  institution: "University of Moratuwa, Sri Lanka",
};
