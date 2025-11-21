import pfp from '../assets/pfp.svg';
import resume_download from '../assets/resume.pdf'
import styles from './Header.module.css';

import {NavLink} from "react-router-dom"

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
                <NavLink to="/" className={({isActive}) => (isActive ? styles.selected : undefined)}>
                    Home
                </NavLink>

                <NavLink to="/project" className={({isActive}) => (isActive ? styles.selected : undefined)}>
                    Projects
                </NavLink>

                <NavLink to="/about" className={({isActive}) => (isActive ? styles.selected : undefined)}>
                    About
                </NavLink>

                <NavLink to="/contact" className={({isActive}) => (isActive ? styles.selected : undefined)}>
                    Contact
                </NavLink>

                <NavLink to="/event" className={({isActive}) => (isActive ? styles.selected : undefined)}>
                    Event
                </NavLink>
            </nav>

            <button>
                <a href={resume_download} download="Ureta - Resume">Resume</a>
            </button>
        </header>
    )
}

export default Header;