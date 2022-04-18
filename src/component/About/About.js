import React from 'react';
import mypic from '../images/pasport.jpg';
import './About.css';
const About = () => {
    return (
        <div style={{minHeight:'100vh'}}>
            <div className='about-me'>
                <div className='aboutme-description'>
                <h2 className='heading'>Hi, I am Tauhidul Islam Bhuiyan.</h2>    
                <p>I completed my bachelor degree form East West University from Computer Science & Engineering Department. At present I learn web development Particularly frontend technology. Aftertowards I also learn backend technology. Because I want to be a full stack web developer. And I want to do job minimum two years in this profession. Then I will shift to competitive programming. It's my passion that one day I will be a best programmer. I have a dream that one day I will take place in a giant company as a software engineer. So it is very essential to be a good programmer for geting a job in giant company such as Google, Facebook, Microsoft, Apple etc.</p>
                </div>
                <div className='img-div'>
                    <img className='img-resize' src={mypic} alt='pic'></img>
                </div>
            </div>
        </div>
    );
};

export default About;