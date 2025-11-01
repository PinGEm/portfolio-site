import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Background from '../Background.jsx';
import pageStyle from './About.module.css';

import pfp from '../assets/aboutme_pfp.svg';

function About() {

  return (
    <>
      <Header/>
      <Background/>
      {/* Landing Page */}
      <div className={pageStyle.page}>
        <div className={pageStyle.textSide}>
          <h1>About<br></br> Marcus Ureta</h1>
          <p>A passionate Computer Science student at CIIT SHS Inc with a focus on software, web, and game development.</p>
          <p>Skilled in using CSS, JS, C#, and C++ to develop websites and various graphical software. Interests in gaming, exercising, and programming.</p>
          <p>Looking for an innovative and positive work environment with the goal of delivering high quality products.</p>
        </div>
        

        <div className={pageStyle.pictureSide}>
          <img src={pfp}></img>
          <h2>Marcus Ureta</h2>
          <h3>Software and Web Developer</h3>
        </div>
      </div>

      {/* Skills Page */}
      <Footer/>
    </>
  )
}

export default About;
