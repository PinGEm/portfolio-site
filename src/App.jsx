import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Background from './Background.jsx';
import pageStyle from './HomePage.module.css';

import pfp from './assets/pfp.svg';
function App() {

  return (
    <>
      <Header/>
      <Background/>
      {/* Home Page */}
      <div className={pageStyle.section}>
        <div className={pageStyle.introText}>
          <h1>Hello! I'm Marcus Timothy Ureta!</h1>
          <h2>Programming Student at CIIT SHS</h2>
          <p>A proficient programming student with specializations in Software, Gaming, and Web Development</p>
        </div>

        <img src={pfp}></img>
      </div>
      <Footer/>
    </>
  )
}

export default App;
