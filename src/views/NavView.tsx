import { Menu, X } from 'lucide-react';
import type { NavLink } from '../models/navModel';

interface NavViewProps {
  links: NavLink[];
  open: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
}

export default function NavView({ links, open, onToggle, onLinkClick }: NavViewProps) {
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
              {link.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={onToggle}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
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
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
