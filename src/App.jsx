
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import PersonalProjects from './components/PersonalProjects'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'

function App() {
  return (
    <div className="min-h-screen bg-darkBlack">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <PersonalProjects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
    </div>
  )
}

export default App
