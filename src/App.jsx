import './App.css';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx'

function App() {

    let root = document.documentElement;

    root.addEventListener("mousemove", e => {
        root.style.setProperty('--mouse-x', e.clientX + "px");
        root.style.setProperty('--mouse-y', e.clientY + "px")
    });


  return (
    <>
      <Header/>
      <Footer/>
    </>
  )
}

export default App
