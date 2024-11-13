import './App.css'
import ContactMe from './components/contactme/contact'
import Rules from './components/designrules/rules'
import Header from './components/header/header'
// import Hero from './components/hero/hero'
import Hero2 from './components/hero/hero2'
import Projects  from './components/projects/projects'
import ToolKit from './components/toolkit/toolkit'

function App() {

  return (
    <div className='bg-moving-gradient'>
    <Header />
    <div>
      <section id='about'>
        <Hero2 />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='projects'>
        <Rules />
      </section>
      <section id='projects'>
        <ToolKit />
      </section>
      <section id='projects'>
        <ContactMe />
      </section>
    </div>


   
      
    </div>
  )
}

export default App
