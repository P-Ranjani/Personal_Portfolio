import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/common/LoadingScreen/LoadingScreen';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import BackToTop from './components/common/BackToTop/BackToTop';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Projects from './components/sections/Projects/Projects';
import Certifications from './components/sections/Certifications/Certifications';
import Education from './components/sections/Education/Education';
import Contact from './components/sections/Contact/Contact';

import personalData from './data/personal.json';
import skillsData from './data/skills.json';
import projectsData from './data/projects.json';
import certificationsData from './data/certifications.json';
import educationData from './data/education.json';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <a href="#home" className="skip-link">
            Skip to main content
          </a>

          <Navbar navLinks={personalData.navLinks} name={personalData.name} />

          <main>
            <Hero personal={personalData} />
            <About personal={personalData} />
            <Skills data={skillsData} />
            <Projects data={projectsData} />
            <Certifications data={certificationsData} />
            <Education data={educationData} />
            <Contact personal={personalData} />
          </main>

          <Footer personal={personalData} navLinks={personalData.navLinks} />
          <BackToTop />
        </>
      )}
    </ThemeProvider>
  );
}
