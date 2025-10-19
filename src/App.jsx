import Testimonals from './sections/Testimonals'
import About from './sections/About'
import Hero from './sections/Hero'
import Project from './sections/Project'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      <Hero />
      <About />
      <TechStack />
      <Project />
      <Testimonals />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App