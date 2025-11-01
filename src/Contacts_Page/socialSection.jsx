import {useState} from 'react';
import pageStyle from './Contact.module.css';

function socialSection({tag, normImg, hoverImg, alt, link}){
    const[hoverState, setHoverState] = useState(false);

    const handleMouseEnter = () => {
        console.log("mouse entered");
        setHoverState(true);
    }

    const handleMouseLeave = () => {
        console.log("mouse left");
        setHoverState(false);
    }

    return(
        <div className={pageStyle.social}>
            <a href={link}>
                <img src={hoverState ? hoverImg : normImg}
                    alt = {alt}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                </img>

                <p>{tag}</p>
            </a>
        </div>
    )
}

export default socialSection;