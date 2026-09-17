import { useState } from 'react';
import { NAV_LINKS } from '../models/navModel';
import NavView from '../views/NavView';

export default function NavController() {
  const [open, setOpen] = useState(false);

  return (
    <NavView
      links={NAV_LINKS}
      open={open}
      onToggle={() => setOpen(!open)}
      onLinkClick={() => setOpen(false)}
    />
  );
}
