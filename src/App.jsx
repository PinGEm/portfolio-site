import styles from './App.module.css';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

import {useState, useEffect} from 'react';

function App() {

  

  return (
    <>
      <Header/>

      {/* --- Moving Elements --- */}
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

      <Footer/>
    </>
  )
}

export default App;
