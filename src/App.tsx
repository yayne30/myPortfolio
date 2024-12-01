import 'aos/dist/aos.css';  // Import AOS styles
import AOS  from 'aos'
import { useEffect } from 'react';
import Header from './components/header/header';
import Hero2 from './components/hero/hero2';
import Projects from './components/projects/projects';
import Rules from './components/designrules/rules';
import ToolKit from './components/toolkit/toolkit';
import ContactMe from './components/contactme/contact';
import { Analytics } from "@vercel/analytics/react"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,  // Animation duration in milliseconds
      once: false       // Whether animation should happen only once
    });
  }, []);
  
  return (
    <div className='bg-moving-gradient'>
      <Analytics />
      <Header />
      <div>
        <section id='about' data-aos="fade-up">
          <Hero2 />
        </section>
        <section id='projects' data-aos="fade-up">
          <Projects />
        </section>
        <section id='rules' data-aos="fade-up">
          <Rules />
        </section>
        <section id='toolKit' data-aos="fade-up">
          <ToolKit />
        </section>
        <section id='contactMe' data-aos="fade-up">
          <ContactMe />
        </section>
      </div>
    </div>
  );
}
export default App;
