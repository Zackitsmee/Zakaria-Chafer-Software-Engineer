import { CONTACT_LINKS } from '../models/contactModel';
import ContactView from '../views/ContactView';

export default function ContactController() {
  return <ContactView links={CONTACT_LINKS} />;
}
