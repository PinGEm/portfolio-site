

import { HashRouter, Routes, Route } from 'react-router-dom';
import Project from './Projects_Page/Project';
import About from './About_Page/About';
import Contact from './Contacts_Page/Contact';
import Home from './Home_Page/Home';


function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/project" element = {<Project/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/contact" element = {<Contact/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;
