

import { HashRouter, Routes, Route } from 'react-router-dom';
import Project from './Projects_Page/Project';
import About from './About_Page/About';
import Contact from './Contacts_Page/Contact';
import Home from './Home_Page/Home';
import Event from './Event_Production/Event_Production';

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/project" element = {<Project/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/event" element = {<Event/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;
