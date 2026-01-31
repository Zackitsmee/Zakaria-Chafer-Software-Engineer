import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-16">
        <Home />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
