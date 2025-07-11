
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience/>
        <Contact />
       
    </div>
  )
}

export default App
