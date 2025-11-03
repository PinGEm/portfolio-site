import styles from './Footer.module.css';

import facebook from '../assets/Facebook.svg';
import github from '../assets/Github.svg';
import instagram from '../assets/Instagram.svg';
import linkedin from '../assets/Linkedin.svg';
import mail from '../assets/Mail.svg';

import facebook_selected from '../assets/Facebook_SELECT.svg';
import github_selected from '../assets/Github_SELECT.svg';
import instagram_selected from '../assets/Instagram_SELECT.svg';
import linkedin_selected from '../assets/Linkedin_SELECT.svg';
import mail_selected from '../assets/Mail_SELECT.svg';

import Logo from './imageLogo.jsx';
import {Link} from "react-router-dom"

function Footer()
{

    return(
        <footer>
            <div className={styles.section_one}>
                <h1>Marcus Timothy T. Ureta</h1>
                <h2>Proficient Programming Student</h2>
            </div>

            <div className={styles.section}>
                <h1>Quick Links</h1>

                <div className={styles.links}>
                    <Link to="/project">
                        Projects
                    </Link>
                    
                    <Link to="/about">
                        About
                    </Link>

                    <Link to="/contact">
                        Contact
                    </Link>
                </div>
            </div>

            <div className={styles.socials}>
                <h1>Socials</h1>

                <div className={styles.social}>
                    <a href="https://facebook.com/macky.ureta">
                        <Logo normImage={facebook} hoverImg={facebook_selected} alt="facebook profile"/>
                    </a>
                    <a href="https://github.com/PinGEm">
                        <Logo normImage={github} hoverImg={github_selected} alt="github profile"/>
                    </a>
                    <a href="https://www.instagram.com/marcus__uretaah/#">
                        <Logo normImage={instagram} hoverImg={instagram_selected} alt="instagram profile"/>
                    </a>
                    <a href="https://www.linkedin.com/in/marcus-ureta-858607382/">
                        <Logo normImage={linkedin} hoverImg={linkedin_selected} alt="linkedin profile"/>
                    </a>
                    <a href="mailto:marcustimothy.ureta@gmail.com">
                        <Logo normImage={mail} hoverImg={mail_selected} alt="email"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;