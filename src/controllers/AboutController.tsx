import { EXPERIENCE, EDUCATION } from '../models/aboutModel';
import AboutView from '../views/AboutView';

export default function AboutController() {
  return <AboutView experience={EXPERIENCE} education={EDUCATION} />;
}
