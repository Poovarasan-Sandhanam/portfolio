
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import InitializeAnalytics from './utils/analytics';
import { useEffect } from 'react';

function App() {

  // Initialize Google Analytics
  useEffect(() => {
    InitializeAnalytics();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />

    </div>
  )
}

export default App
