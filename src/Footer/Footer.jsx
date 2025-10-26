import styles from './Footer.module.css';
import facebook from '../assets/Facebook.svg';
import github from '../assets/Github.svg';
import instagram from '../assets/Instagram.svg';
import linkedin from '../assets/Linkedin.svg';
import mail from '../assets/Mail.svg';


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
                    <a href="">Projects</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>
            </div>

            <div className={styles.socials}>
                <h1>Socials</h1>

                <div className={styles.social}>
                    <a href="https://facebook.com/macky.ureta"><img src={facebook}></img></a>
                    <a href="https://github.com/PinGEm"><img src={github}></img></a>
                    <a href="https://www.instagram.com/marcus__uretaah/#"><img src={instagram}></img></a>
                    <a href="https://www.linkedin.com/in/marcus-ureta-858607382/"><img src={linkedin}></img></a>
                    <a href=""><img src={mail}></img></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;