export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  proficiency: number; // >= 80 = Advanced, else Intermediate
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface PortfolioData {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  openToWork: boolean;
  avatarUrl: string;
  socialLinks: SocialLink[];
  projects: Project[];
  skills: Skill[];
}

const portfolio: PortfolioData = {
  name: 'Manoj Rawat',
  initials: 'MR',
  role: 'Java & Python Developer',
  tagline: 'Building robust backend systems and automation tools with Java and Python.',
  bio: 'I am a Java and Python developer with a passion for building scalable backend services, REST APIs, and automation scripts. I enjoy solving complex engineering problems with clean, maintainable code.',
  email: 'manojrawat123@gmail.com',
  location: 'Bengaluru, India',
  openToWork: true,
  avatarUrl: '/avatar.jpg',
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/manojrawat' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/manojrawat' },
  ],
  projects: [
    {
      id: 1,
      title: 'Inventory Management System',
      description:
        'A full-featured inventory management application built with Spring Boot, featuring role-based access control, REST APIs, and a MySQL backend.',
      techStack: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
      repoUrl: 'https://github.com/manojrawat/inventory-management',
    },
    {
      id: 2,
      title: 'Web Scraper & Data Pipeline',
      description:
        'A Python-based scraper that extracts product data from e-commerce sites, cleans it with Pandas, and stores it in PostgreSQL for downstream analytics.',
      techStack: ['Python', 'BeautifulSoup', 'Pandas', 'PostgreSQL'],
      repoUrl: 'https://github.com/manojrawat/web-scraper-pipeline',
    },
    {
      id: 3,
      title: 'Task Automation CLI',
      description:
        'A command-line tool written in Python that automates repetitive file operations, sends email reports, and integrates with Google Sheets via the API.',
      techStack: ['Python', 'Click', 'Google Sheets API', 'SMTP'],
      repoUrl: 'https://github.com/manojrawat/task-automation-cli',
    },
    {
      id: 4,
      title: 'Microservices Chat App',
      description:
        'A real-time chat application built as a set of Java microservices using Spring Cloud, Kafka for messaging, and Docker for containerisation.',
      techStack: ['Java', 'Spring Cloud', 'Kafka', 'Docker'],
      repoUrl: 'https://github.com/manojrawat/microservices-chat',
    },
  ],
  skills: [
    { name: 'Java', category: 'backend', proficiency: 90 },
    { name: 'Spring Boot & Spring MVC', category: 'backend', proficiency: 88 },
    { name: 'Python', category: 'backend', proficiency: 88 },
    { name: 'REST API Design', category: 'backend', proficiency: 85 },
    { name: 'SQL & Databases', category: 'backend', proficiency: 80 },
    { name: 'Data Processing (Pandas / NumPy)', category: 'backend', proficiency: 78 },
    { name: 'Docker & Containerisation', category: 'tools', proficiency: 72 },
    { name: 'Git & GitHub', category: 'tools', proficiency: 90 },
    { name: 'Apache Kafka', category: 'tools', proficiency: 68 },
    { name: 'Linux & Shell Scripting', category: 'tools', proficiency: 70 },
  ],
};

export default portfolio;
