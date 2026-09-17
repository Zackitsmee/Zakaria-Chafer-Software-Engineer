import { Linkedin, Github, Mail, type LucideIcon } from 'lucide-react';

export interface ContactLink {
  name: string;
  href: string;
  icon: LucideIcon;
  description: string;
}

export const CONTACT_LINKS: ContactLink[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zakaria-chafer',
    icon: Linkedin,
    description: 'Connect professionally',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Zackitsmee',
    icon: Github,
    description: 'View my projects',
  },
  {
    name: 'Gmail',
    href: 'mailto:zakariachafer20@gmail.com',
    icon: Mail,
    description: 'zakariachafer20@gmail.com',
  },
];
