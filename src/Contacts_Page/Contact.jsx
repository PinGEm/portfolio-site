import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Background from '../Background.jsx';
import pageStyle from './Contact.module.css';

import Contacts from './socialSection.jsx';

import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';
import linkedin from '../assets/Linkedin.svg';
import mail from '../assets/Mail.svg';

import facebook_selected from '../assets/Facebook_SELECT.svg';
import instagram_selected from '../assets/Instagram_SELECT.svg';
import linkedin_selected from '../assets/Linkedin_SELECT.svg';
import mail_selected from '../assets/Mail_SELECT.svg';

function Contact() {

  return (
    <>
      <Header/>
      <Background/>
      {/* Landing Page */}
      <div className={pageStyle.page}>
        <div className={pageStyle.socialSide}>
          <h1>Contact Marcus Here!</h1>
          <div className={pageStyle.socials}>
            <Contacts tag="@macky.ureta" normImg={facebook} hoverImg={facebook_selected} link="https://facebook.com/macky.ureta"/>
            <Contacts tag="@marcus__uretaah" normImg={instagram} hoverImg={instagram_selected} link="https://www.instagram.com/marcus__uretaah/#"/>
            <Contacts tag="@Marcus Ureta" normImg={linkedin} hoverImg={linkedin_selected} link="https://www.linkedin.com/in/marcus-ureta-858607382/"/>
            <Contacts tag="marcustimothy.ureta@gmail.com" normImg={mail} hoverImg={mail_selected}/>
          </div>
        </div>

        <p id={pageStyle.rightText}>
          Feel free to reach through any of the following platforms if you’re interested in commissioning me for your future project. I specialize in building websites and graphical software. We can discuss about further details when messaged! <br/><br/> 
          <i>Status: <span className={pageStyle.available}>Available!</span></i>
        </p>
      </div>

      {/* Skills Page */}
      <Footer/>
    </>
  )
}

export default Contact;
