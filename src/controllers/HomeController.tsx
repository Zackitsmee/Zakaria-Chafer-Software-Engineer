import { TECH_STACK } from '../models/homeModel';
import HomeView from '../views/HomeView';

export default function HomeController() {
  return <HomeView techStack={TECH_STACK} />;
}
