import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Background from '../Background.jsx';
import pageStyle from './Project.module.css';
import { useState } from 'react';

import Card from './Card.jsx';

// HEADER IMAGES
import mm_boy from '../assets/marshmallow_boy.svg';
import js_cpa from '../assets/jigsaw_cpa.svg';
import new_pf from '../assets/new_portfolio.svg';
import is from '../assets/inventory_system.svg';
import pw from '../assets/product_website.svg';
import gc from '../assets/grades_calc.svg';
import pc from '../assets/pawcation_app.svg';
import vd from '../assets/valentines.svg';
import calc from '../assets/calculator.svg';
import jsPA from '../assets/prototype_jsp.svg';
import os from '../assets/ordering_site.svg';
import op from '../assets/old_portfolio.svg';
import wg from '../assets/workout_game.svg';
import si from '../assets/student_infoapp.svg';
import tt from '../assets/truth_table.svg';
import ba from '../assets/basic_algorithm.svg';

function Project() {

  const[filter, setFilter] = useState('best');

  const handleFilter = (type) => setFilter(type);

  return (
    <>
      <Header/>
      <Background/>
      <div className={pageStyle.page}>
        <h1>My Projects</h1>
        <p>Showcase of all my web development and software development projects over the year</p>
        <div className={pageStyle.tabList}>
          <button className={pageStyle.bestButton + ' ' + `${filter === 'best' ? pageStyle.selected : undefined}`} onClick={() => handleFilter('best')} >⭐ Best Works (3)</button>
          <button className={`${filter === 'all' ? pageStyle.selected : undefined}`} onClick={() => handleFilter('all')}>🖥️ All (16)</button>
          <button className={`${filter === 'websites' ? pageStyle.selected : undefined}`} onClick={() => handleFilter('websites')}>🌐 Websites (7)</button>
          <button className={`${filter === 'programs' ? pageStyle.selected : undefined}`} onClick={() => handleFilter('programs')}>⚙️ Programs (9)</button>
        </div>

        <div className={pageStyle.cards}>
          <Card image={mm_boy} header="Marshmallow Boy" 
            description="Marshmallow Boy is a 2D platformer inspired by Celeste (2018) made using the Unity Game Engine. My role as the sole developer was to handle all the programming, sprite art, audio and game design." 
            tech1="C#" tech2="Unity" link="https://pingem.itch.io/marshmallow-boy"
            showState= {filter === 'all' || filter === 'programs' || filter === 'best'}/>
            
          <Card image={js_cpa} header="Jigsaw Coding Application" 
            description="An eductional jigsaw puzzle game where players solve puzzles through code to learn C#. I designed and implemented the game's custom scripting language and contributed to the UI design." 
            tech1="C#" tech2="Unity" link="https://drive.google.com/file/d/1wWsPa6-_yvFDUQLTBhGtKKnvSpHpam4i/view"
            showState= {filter === 'all' || filter === 'programs' || filter === 'best'} />

          <Card image={new_pf} header="Portfolio Site" 
            description="A redesigned portfolio site showcasing my previous work, skills, and abilities to potential clients. As the sole full-stack developer, I built and designed the entire site from scratch with a focus on interactivity." 
            tech1="React" tech2="JS" link="https://marcusureta-portfolio.vercel.app/"
            showState= {filter === 'all' || filter === 'websites' || filter === 'best'}/>

          <Card image={is} header="Inventory System Application" 
            description="A Windows Presentation Foundation application for managing inventory, allowing users to view, add, and remove items. As the sole developer, I designed and developed the entire application from scratch." 
            tech1="C#" tech2="WPF" link="https://drive.google.com/drive/folders/1zwt6VIO2fI8EtXs3CNvMtFtAEvwXpRLY"
            showState= {filter === 'all' || filter === 'programs'}/>
          
          <Card image={pw} header="Product Site" 
            description="A promotional website for a product I made called 'RootTap' featuring a sign-up form. As the sole full-stack developer, I implemented a fully functional, and visually appealing site from scratch using HTML, CSS, and JS." 
            tech1="JS" tech2="HTML/CSS" link="https://github.com/PinGEm/Web-Design-QA"
            showState= {filter === 'all' || filter === 'websites'}/>
          
          <Card image={gc} header="Grades Calculator Application" 
            description="A Unity application for calculating a students' overall grades and storing it persistently inside the app. As the sole developer, I designed and implemented all the features and UI elements for the software." 
            tech1="C#" tech2="Unity" link="https://drive.google.com/drive/folders/1Raabl_nHJK7lZubJi3youaP2prnynPJQ"
            showState= {filter === 'all' || filter === 'programs'}/>

          <Card image={pc} header="Pawcation Application" 
            description="A prototype Windows Form application that searches for pet-friendly locations for travelling. Acting as the only developer, I implemented the core features of the program along with contributing to UI design." 
            tech1="C#" tech2="WinForm" link="https://github.com/PinGEm/Pawcation"
            showState= {filter === 'all' || filter === 'programs'}/>

          <Card image={vd} header="Valentine's Day Site" 
            description="A small web-project made for Valentine's Day built for fun featuring smooth CSS transitions. My role as the sole full-stack developer was to design the user-interface along with implementation of core features." 
            tech1="JS" tech2="HTML/CSS" link="https://github.com/PinGEm/Valentines-Day-Site/tree/main"
            showState= {filter === 'all' || filter === 'websites'}/>

          <Card image={calc} header="Calculator Site" 
            description="A responsive calculator webpage supporting full PEMDAS operations through an interactive and user-friendly interface. As the sole full-stack developer, I designed the UI and developed all features using PhP." 
            tech1="PhP" tech2="CSS" link="https://github.com/PinGEm/Web-Design--Q4_PT1---Calculator"
            showState= {filter === 'all' || filter === 'websites'}/>

          <Card image={jsPA} header="Prototype of Jigsaw Code" 
            description="A prototype of the 'Jigsaw Coding Software,' built in just one day. The puzzle is solved using code blocks instead of typing code. As the sole developer, I designed the interface and implemented the core functionality." 
            tech1="C#" tech2="WinForm" link="https://github.com/PinGEm/Prototype-WorkshopPainting-Application"
            showState= {filter === 'all' || filter === 'programs'}/>

          <Card image={os} header="PHP Ordering Site" 
            description="An interactive and responsive ordering webpage for the 'McJollibee' menu. As the sole full-stack developer, I implemented all the features and designed the user-friendly interface." 
            tech1="PhP" tech2="CSS" link="https://github.com/PinGEm/WebDesign_PT2_PT3"
            showState= {filter === 'all' || filter === 'websites'}/>

          <Card image={op} header="Old Portfolio Site" 
            description="An old portfolio site showcasing who I am and what my previous works are. Serving as the exclusive full-stack developer for this project, I designed and implemented all the features for this site." 
            tech1="JS" tech2="HTML/CSS" link="https://github.com/PinGEm/Portofolio-Part-2"
            showState= {filter === 'all' || filter === 'websites'}/>

          <Card image={wg} header="Workout Game" 
            description="A cookie-clicker web game developed for 'FitTech' to feature as a product on their company website. I served as the sole developer, responsible for the accessible user-interface and core feature implementation." 
            tech1="JS" tech2="HTML/CSS" link="https://github.com/PinGEm/Workout-Game"
            showState= {filter === 'all' || filter === 'websites'}/>

          <Card image={si} header="Student Information App" 
            description="A Unity application that allows users to enter and view student details such as name, date of birth, and age. As the only developer, I was in charge for both the UI design and core programming." 
            tech1="C#" tech2="Unity" link="https://github.com/PinGEm/Student-Information-Application"
            showState= {filter === 'all' || filter === 'programs'}/>

          <Card image={tt} header="Truth Table Program" 
            description="A problem-solving program that generates arguments from logical statements using a custom table wrapper and minimal libraries. Sole developer responsible of implementing its core features." 
            tech1="C++" link="https://github.com/PinGEm/QA-1-Programming-Languages-2"
            showState= {filter === 'all' || filter === 'programs'}/>

          <Card image={ba} header="Basic Algorithm Program" 
            description="A number-sorting program offering two algorithm options using minimal libraries, featuring a custom logging system. Serving as the sole developer, I implemented the core features for the program." 
            tech1="C++" link="https://github.com/PinGEm/Programming-Languages-2-PT-5"
            showState= {filter === 'all' || filter === 'programs'}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Project;
