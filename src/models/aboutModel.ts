export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
}

export interface EducationItem {
  period: string;
  title: string;
  institution: string;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: 'Sep 2025 – Aug 2026',
    title: 'Full-Stack Developer',
    company: 'DataStory, Casablanca',
    description:
      'Designed and implemented scalable REST APIs with Node.js (Express) to improve backend modularity and response consistency. Built dynamic, component-based frontend applications with Angular, React, and TypeScript. Wrote unit tests with Jest and automated E2E testing with Selenium and Postman. Managed version control and team collaboration via Git and GitHub using branching strategies and code reviews.',
  },
  {
    period: 'Apr 2025 – May 2025',
    title: 'Full-Stack Developer',
    company: 'CMT Telecom et Communication, Casablanca',
    description:
      'Managed and customized e-commerce operations with Shopify, including product management, storefront optimization, and UX improvements. Administered web hosting infrastructure and DNS settings to ensure stable website availability.',
  },
  {
    period: 'Jan 2023 – May 2023',
    title: 'Full-Stack Developer',
    company: 'HB Solutions, Rabat',
    description:
      'Handled hardware maintenance, system troubleshooting, and IT management across the company infrastructure. Developed and maintained web solutions with WordPress and various CMS platforms for reliable customer-facing websites. Collaborated on technical projects with an analytical approach to solve complex IT infrastructure problems.',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    period: '2026 – Present',
    title: 'Master of Software Engineering and Artificial Intelligence',
    institution: 'FH OÖ – University of Applied Sciences Upper Austria, Campus Hagenberg',
  },
  {
    period: 'Sep 2021 – Jun 2025',
    title: 'Bachelor of Science in Computer Engineering',
    institution: 'National University of Kryvyi Rih, Ukraine • 240 ECTS',
  },
];
