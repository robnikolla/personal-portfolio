import React from 'react'
import Person from './person.png';
import {DiJsBadge,DiCss3,DiPhp,DiReact,DiMysql,DiWordpress,DiPython,DiJava,} from 'react-icons/di';
import {SiTailwindcss,SiFirebase} from 'react-icons/si'
const About = (props) => {
    return(
    <div className="about" id="about">
        <div className="aboutintro">
            <h3 style={{color:"white",fontSize:"2rem",textAlign:"center"}}><code>About me</code></h3>
        <p className="aboutdesc">
            Hi! My name is Robert, and I am from Kosovo.  I am native to Ferizaj. Currently, im pursuing at the UBT University. Im an 18 year old guy who wants to secure a job. My long term goal is by gaining work experience of many years in the field of coding. I would like to work in a nice position, contributing to the betterment of my workplace and society. I am a disciplined and motivated soul. Im always opened to learn new things whenever i get the chance. I believe in being realistic. 
        </p>
        </div>
        
         <div className="techstack">
             <h3 style={{color:"white",fontSize:"2rem",textAlign:"center"}}><code>Tech I've worked with</code></h3>
            <div className="icons">
                <div className="techicon">
                    <h3 className="techtext"><DiJsBadge className="icon"/><code>JavaScript</code></h3>
                </div>
                <div className="techicon">
                    <h3 className="techtext"><DiReact className="icon"/><code>ReactJS</code></h3>
                </div>
                <div className="techicon">
                    <h3><DiPhp className="icon"/><code>PHP</code></h3>
                </div>
                <div className="techicon">
                    <h3><DiWordpress className="icon"/><code>Wordpress</code></h3>
                </div>
                <div className="techicon">
                    <h3><DiPython className="icon"/><code>Python</code></h3>
                </div>
                <div className="techicon">
                    <h3><DiJava className="icon"/><code>Java</code></h3>
                </div>
                <div className="techicon">
                    <h3><DiCss3 className="icon"/><code>CSS</code></h3>
                </div>
                <div className="techicon">
                    <h3><SiTailwindcss className="icon"/><code>Tailwind</code></h3>
                </div>
                
                
                <div className="techicon">
                    <h3><DiMysql className="icon"/><code>MySQL</code></h3>
                </div>
                
                
                
            </div>
         </div>
        
    </div>
   
    
    )
    
}
export default About;