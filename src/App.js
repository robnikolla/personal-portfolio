import './App.css';
import './train.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Secondary from './components/Secondary';
import Contact from './components/contact';




function App() {
  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <About></About>
     <Projects />
     <Secondary></Secondary>
     <Contact></Contact>
    
     
     
    </>
    
  );
}

export default App;
