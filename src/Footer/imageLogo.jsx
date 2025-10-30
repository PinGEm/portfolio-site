import {useState} from 'react';

function imageLogo({normImage, hoverImg, alt}){
    const[hoverState, setHoverState] = useState(false);

    const handleMouseEnter = () => {
        setHoverState(true);
    }

    const handleMouseLeave = () => {
        setHoverState(false);
    }

    return(
        <img src={hoverState ? hoverImg : normImage}
            alt = {alt}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
        </img>
    )
}

export default imageLogo;