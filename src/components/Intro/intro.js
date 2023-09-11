import React from 'react'
import'./intro.css';
import bg from '../../assets/image.png';
import btnimg from '../../assets/hireme.png';
import {Link} from 'react-scroll';



const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introtext'>I'm <span className="introName">Archit</span><br/>Web Devloper</span>
            <p className='txt'>I am skilled web devloper</p>
            <Link><button className='btn'><img src={btnimg} alt="" className='btnimg'/>Hire me </button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg'/>
    </section>
  )
}

export default Intro;
