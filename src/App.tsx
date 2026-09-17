import './App.css';
import NavController from './controllers/NavController';
import HomeController from './controllers/HomeController';
import AboutController from './controllers/AboutController';
import ContactController from './controllers/ContactController';

function App() {
  return (
    <div className="min-h-screen">
      <NavController />
      <main className="pt-16">
        <HomeController />
        <AboutController />
        <ContactController />
      </main>
    </div>
  );
}

export default App;

