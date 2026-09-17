import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { NavLink } from '../models/navModel';

interface NavViewProps {
  links: NavLink[];
  open: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
}

export default function NavView({ links, open, onToggle, onLinkClick }: NavViewProps) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLang = () => {
    i18n.changeLanguage(currentLang === 'en' ? 'de' : 'en');
  };

  const getLabel = (link: NavLink) => {
    if (link.href === '#home') return t('nav.home');
    if (link.href === '#about') return t('nav.about');
    if (link.href === '#contact') return t('nav.contact');
    return link.label;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-foreground">
          ZC
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {getLabel(link)}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            {currentLang === 'en' ? 'DE' : 'EN'}
          </button>
        </div>
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            {currentLang === 'en' ? 'DE' : 'EN'}
          </button>
          <button
            type="button"
            className="p-2 text-foreground"
            onClick={onToggle}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              onClick={onLinkClick}
            >
              {getLabel(link)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
