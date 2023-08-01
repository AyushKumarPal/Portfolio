import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Certification from './components/Certification';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (  
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/home" element={
      <>
        <Intro />
        <Skills/>
        <Education/>
        <Certification/>
      </>
      }/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  );
}

export default App;
