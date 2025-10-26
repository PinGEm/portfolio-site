import pfp from '../assets/pfp.svg';
import resume_download from '../assets/resume.pdf'
import styles from './Header.module.css';

function Header()
{
    return(
        <header>
            <div className={styles.logo}>
                <img src={pfp}></img>

                <div className={styles.text}>
                    <h1>Marcus Timothy Ureta</h1>
                    <h2>Programming Student</h2>
                </div>
            </div>

            <nav>
                <a href="" id={styles.selected}>Home</a>
                <a href="">Projects</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </nav>

            <button>
                <a href={resume_download} download="Ureta - Resume">Resume</a>
            </button>
        </header>
    )
}

export default Header;