import styles from './background.module.css';

import {useState, useEffect} from 'react';

function Background(){

    const [mousePos, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    
    return(
        <>
            <div className = {styles.baseMoveElement + " " + styles.firstElem}></div>
            <div className = {styles.baseMoveElement + " " + styles.secondElem}></div>
            <div className = {styles.baseMoveElement + " " + styles.thirdElem}></div>
            <div className = {styles.baseMoveElement + " " + styles.fourthElem}></div>
            <div className = {styles.baseMoveElement + " " + styles.fifthELem}></div>
            <div className = {styles.baseMoveElement + " " + styles.sixthElem}></div>
            <div className = {styles.baseMoveElement + " " + styles.seventhElem}></div>
            <div className = {styles.baseMoveElement + " " + styles.eightElem}></div>
            <div className = {styles.baseMoveElement + " " + styles.ninthElem}></div>
            <div className = {styles.baseMoveElement + " " + styles.tenthElem}></div>
            <div className = {styles.baseMoveElement + " " + styles.eleventhElem}></div>
            <div className = {styles.baseMoveElement + " " + styles.twelvthElem}></div>
            <div className = {styles.baseMoveElement + " " + styles.tirteenthElem}></div> 
            <div className = {styles.baseMoveElement + " " + styles.fourteenthElem}></div>
            <div className = {styles.baseMoveElement + " " + styles.fifteenthElem}></div>
            <div className = {styles.baseMoveElement + " " + styles.sixteenthElem}></div>
            <div className = {styles.baseMoveElement + " " + styles.seventeenthElem}></div>
            <div className = {styles.baseMoveElement + " " + styles.eighteenthElem}></div>
            <div className = {styles.baseMoveElement + " " + styles.nineteenthElem}></div>

            <div style={{
                position: 'fixed',
                top: mousePos.y,
                left: mousePos.x,
                height: '22vw',
                width: '22vw',
                backgroundImage: 'radial-gradient(hsla(207, 100%, 57%, 0.125), hsla(219, 100%, 31%, 0.125))',
                filter: 'blur(40px)',
                borderRadius: '50%',
                pointerEvents: 'none',
                transform: 'translate(-30%, -30%)',
            }}/>
        </>
    )
}

export default Background;