import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate web developer with experience in HTML,CSS,JS,React and Angular </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt="UIDesign" className='skillBarImg'/>
                <div className='skillBartxt'>
                    <h2>UI/UX Design</h2>
                    <p>DEMO TXT</p>
                </div>

            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
                <div className='skillBartxt'>
                    <h2>Web Design</h2>
                    <p>DEMO TXT</p>
                </div>

            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt="AppDesign" className='skillBarImg'/>
                <div className='skillBartxt'>
                    <h2>App Design</h2>
                    <p>DEMO TXT</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Skills;
