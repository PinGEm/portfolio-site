import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Background from '../Background.jsx';
import pageStyle from './event.module.css';
import { useState } from 'react';

// Week 10 Images
import moodboard from '../assets/Week_10/mood_board.svg';
import w10_parti from '../assets/Week_10/proof_of_partici_w10.svg';
import w10_poc from '../assets/Week_10/proof_of_com_w10.svg';

// Weeks 11-12 Images
import draft_tick from '../assets/Week_11/ticket_draft_w11.svg';
import w11_parti from '../assets/Week_11/proof_of_partici_w11.svg';
import revised_tick from '../assets/Week_11/revised_ticket_w12.svg';

// Weeks 13 Images
import moodboard_dk from '../assets/Week_13/dk_moodboard.svg';
import w13_partici from '../assets/Week_13/proof_of_partici_w13.svg';
import teaser_poster from '../assets/Week_13/teaser_poster.svg';

// Week 15 Images
import border_layout from '../assets/Week_15/border_layout.svg';
import pb_moodboard from '../assets/Week_15/playbill_moodboard.svg';
import school_personnel from '../assets/Week_15/school_personnel.svg';
import margin_layout from '../assets/Week_15/margin_layout.svg';
import chars_kk from '../assets/Week_15/side_main_chars.svg';
import synopsis_kk from '../assets/Week_15/synopsis.svg';

// Week 16 Images
import creatives from '../assets/Week_16/creatives.svg';
import new_chars_kk from '../assets/Week_16/new_chars.svg';
import prod_team from '../assets/Week_16/prod_team.svg';
import tech_team from '../assets/Week_16/tech.svg';

// Week 17 Images
import tv_logistics from '../assets/Week_17/tech_voc_logistics.svg';
import tv_marketing from '../assets/Week_17/tech_voc_marketing.svg';
import foreword from '../assets/Week_17/foreword.svg';



function Event_Production()
{
    const[filter, setFilter] = useState('w10');

    const handleFilter = (type) => {
        setFilter('disable');
        setFilter(type);
    }

    return(
    <>
        <Header/>
        <Background/>

        <div className={pageStyle.page}>
            <h1>Event Production</h1>
            <p>As a member of the Logistics team, I was responsible for creating the marketing materials for Prinsesang Mariposa as well as designing the ticket and playbill layouts for Dulaang Kayumutiara.</p>

            <div className={pageStyle.selectionList}>
                <button className={`${filter === 'w10' ? pageStyle.selected : undefined}`} onClick={() => handleFilter('w10')}>
                    Week 10 | 
                </button>
                
                <button className={`${filter === 'w11-12' ? pageStyle.selected : undefined}`} onClick={() => handleFilter('w11-12')}>
                    Week 11 - 12 | 
                </button>

                <button className={`${filter === 'w13' ? pageStyle.selected : undefined}`} onClick={() => handleFilter('w13')}>
                    Week 13 | 
                </button>

                <button className={`${filter === 'w15' ? pageStyle.selected : undefined}`} onClick={() => handleFilter('w15')}>
                    Week 15 | 
                </button>

                <button className={`${filter === 'w16' ? pageStyle.selected : undefined}`} onClick={() => handleFilter('w16')}>
                    Week 16 | 
                </button>

                <button className={`${filter === 'w17' ? pageStyle.selected : undefined}`} onClick={() => handleFilter('w17')}>
                    Week 17 | 
                </button>

                <button className={`${filter === 'sum_refl' ? pageStyle.selected : undefined}`} onClick={() => handleFilter('sum_refl')}>
                    Summary & Reflection
                </button>
            </div>

            <div className={pageStyle.week10 + " " + `${filter === 'w10' ? undefined : pageStyle.disable}`}>
                <div className={pageStyle.imageSelection}>
                    <img src={moodboard}></img>
                    <img src={w10_parti}></img>
                    <img src={w10_poc}></img>
                </div>

                <h2>Week Summary:</h2>
                <p>During week 10, I was in charge of assisting in the creation of the moodboard to be used for the posters and marketing materials for Prinsesang Mariposa. Attached images show my contributions and proof of work and communication back then.</p>
            </div>

            <div className={pageStyle.week11 + " " + `${filter === 'w11-12' ? undefined : pageStyle.disable}`}>
                <div className={pageStyle.imageSelection}>
                    <img src={draft_tick}></img>
                    <img src={revised_tick}></img>
                    <img src={w11_parti}></img>
                </div>

                <h2>Week Summary:</h2>
                <p>During Weeks 11-12, I was in charge of creating the ticket design layout for the Dulaang Kayumutiara play overall. I worked on this task alongside with my teammate, Theo 'Feliz' Baja. By Week 12, I had finalized the overall ticket design layout for the play.</p>
            </div>

            <div className={pageStyle.week13 + " " + `${filter === 'w13' ? undefined : pageStyle.disable}`}>
                <div className={pageStyle.imageSelection}>
                    <img src={moodboard_dk}></img>
                    <img src={w13_partici}></img>
                    <img src={teaser_poster}></img>
                </div>

                <h2>Week Summary:</h2>
                <p>During Week 13, I contributed to our group's Dulaang Kayumutiara teaser poster alongside Warleyne Casanova. I also finalized the ticket design and helped with the color pallete and moodboard for the Kayumutiara playbill design.</p>
            </div>

            <div className={pageStyle.week15 + " " + `${filter === 'w15' ? undefined : pageStyle.disable}`}>
                <div className={pageStyle.imageSelection}>
                    <img src={border_layout}></img>
                    <img src={pb_moodboard}></img>
                    <img src={school_personnel}></img>
                    <img src={margin_layout}></img>
                    <img src={chars_kk}></img>
                    <img src={synopsis_kk}></img>
                </div>

                <h2>Week Summary:</h2>
                <p>During Week 15, I helped out with the Creatives Team in creating the design layouts for the Dulaang Kayumutiara playbill. I gave inspirations for the border, moodboard, and page layout featuring the school personnel to help shape the design layout of the playbill. I also started to work on the overall layout design of the playbill, creating the border margins, synopsis and character pages for Kalawanging Korona.</p>
            </div>

            <div className={pageStyle.week16 + " " + `${filter === 'w16' ? undefined : pageStyle.disable}`}>
                <div className={pageStyle.imageSelection}>
                    <img src={creatives}></img>
                    <img src={new_chars_kk}></img>
                    <img src={prod_team}></img>
                    <img src={tech_team}></img>
                </div>

                <h2>Week Summary:</h2>
                <p>During Week 16, I continued working and finalizing the playbill pages for Kalawanging Korona. I revised and finalized the main character pages, then I assisted in the creation of the creatives, production and technical team of Kalawanging Korona.</p>
            </div>
            
            <div className={pageStyle.week17 + " " + `${filter === 'w17' ? undefined : pageStyle.disable}`}>
                <div className={pageStyle.imageSelection}>
                    <img src={tv_logistics}></img>
                    <img src={foreword}></img>
                    <img src={tv_marketing}></img>
                </div>

                <h2>Week Summary:</h2>
                <p>During Week 17, I completed the remaining playbill pages for Kalawanging Korona and began working on the foreword layout. I designed the pages for the tech-voc team involved in the production and then proceeded to develop the foreword’s page design.</p>
            </div>

            <div className={pageStyle.week17 + " " + `${filter === 'sum_refl' ? undefined : pageStyle.disable}`}>
                <h2>Reflection: </h2>
                <p>From my work on the Dulaang Kayumutiara play, I learned about the challenges and complexities involved in creating marketing materials for an event. This experience showed me how essential collaboration and careful planning are when working on a group project, especially one of this scale. As a result, I’ve developed stronger time-management and critical-thinking skills that I now apply to my everyday life. It taught me how to be independently autonomous when needed, but it also showed me how to ask other people for help when needed.</p>
                <h2>Summary: </h2>
                <p>My role as a Logistics Member of 12-Java allowed me to create a range of creative and engaging materials for the Dulaang Kayumutiara play. Through this experience, I developed strong teamwork skills and learned how to collaborate with others in a team environment. I was able to follow orders consistently to create high-quality outputs to support event production.</p>
            </div>
        </div>

        <Footer/>

    </>
    )
}

export default Event_Production;