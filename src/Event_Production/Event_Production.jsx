import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Background from '../Background.jsx';
import pageStyle from './event.module.css';


// Week 10 Images
import moodboard from '../assets/Week_10/mood_board.svg';
import w10_parti from '../assets/Week_10/proof_of_partici_w10.svg';
import w10_poc from '../assets/Week_10/proof_of_com_w10.svg';


function Event_Production()
{
    return(
    <>
        <Header/>
        <Background/>

        <div className={pageStyle.page}>
            <h1>Event Production</h1>
            <p>As a member of the Logistics team, I was in charge of creating the marketing materials for Prinsesa Mariposa and playbill design layout of the Dulaang Kayumutiara.</p>

            <div className={pageStyle.selectionList}>
                <button className={pageStyle.selected}>Week 10 | </button>
                <button className={pageStyle.test1}>Week 11 | </button>
                <button>Week 12 | </button>
                <button>Week 13 | </button>
                <button>Week 15 | </button>
                <button>Week 16 | </button>
                <button>Week 17 | </button>
                <button>Week 18 | </button>
                <button>Summary</button>
            </div>

            <div className={pageStyle.imageSelection}>
                <img src={moodboard} className={pageStyle.test1}></img>
                <img src={w10_parti} className={pageStyle.test3}></img>
                <img src={w10_poc} className={pageStyle.test2}></img>
            </div>

            <p>During this week, I was in charge of assisting in the creation of the moodboard to be used for the posters and marketing materials for Prinsesang Mariposa. Attached images show my contributions and proof of work during the time.</p>
        </div>

        <Footer/>

    </>
    )
}

export default Event_Production;