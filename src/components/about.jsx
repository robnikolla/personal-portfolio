import React from 'react'
import {DiJsBadge,DiCss3,DiPhp,DiReact,DiMysql,DiWordpress,DiPython,DiJava,} from 'react-icons/di';
import {SiTailwindcss} from 'react-icons/si'
const About = (props) => {
    return(
    <div className="about" id="about">
        <div className="aboutintro">
            <h3 style={{color:"white",fontSize:"2rem",textAlign:"center"}}><code>About me</code></h3>
        <p className="aboutdesc">
        Hi! I'm Robert. Currently, I'm a first-year student in UBT University(Computer Science and Engineering). I learned programming in Digital School in Ferizaj during high-school. I'm an 18-year-old student who is interested in pursuing a career in Software Development. My long-term goal is to gain work experience and sharpen my skills as a Software Developer. I'm always open to learning new things whenever I get the chance. I believe in being realistic.
          
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