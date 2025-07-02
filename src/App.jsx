import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <main className="min-h-screen p-6 md:p-12 space-y-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
