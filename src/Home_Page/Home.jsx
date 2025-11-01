import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Background from '../Background.jsx';
import pageStyle from './HomePage.module.css';

import pfp from '../assets/pfp.svg';
function Home() {

  return (
    <>
      <Header/>
      <Background/>
      {/* Landing Page */}
      <div className={pageStyle.page}>
        <div className={pageStyle.introText}>
          <h1>Hello! I'm Marcus Timothy Ureta!</h1>
          <h2>Junior Developer Studying at CIIT SHS</h2>
          <p>A proficient programming student with specializations in Software, Gaming, and Web Development</p>
        </div>

        <img src={pfp}></img>
      </div>

      {/* Skills Page */}
      <Footer/>
    </>
  )
}

export default Home;
