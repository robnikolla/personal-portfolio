import React from 'react'
import {DiJsBadge,DiCss3,DiPhp,DiReact,DiMysql,DiWordpress,DiPython,DiJava,} from 'react-icons/di';
import {SiTailwindcss, SiFirebase} from 'react-icons/si'
const About = (props) => {
    return(
    <div className="about" id="about">
        <div className="aboutintro">
            <h3 style={{color:"white",fontSize:"2rem",textAlign:"center"}}><code>About me</code></h3>
        <p className="aboutdesc">
        "Robert Nikolla is a student and software developer from Kosovo. He discovered his passion for programming during high school and has since dedicated himself to honing his skills. Robert is currently pursuing a degree in Computer Science and Engineering at UBT and is known for his fast learning abilities and strong interest in software engineering. He is a dedicated and ambitious individual who is always seeking to expand his knowledge and build new projects. With his drive and talent, Robert is eager to launch a career in software engineering and make his mark in the industry."
        </p>
        </div>
        
         <div className="techstack">
             <h3 style={{color:"white",fontSize:"2rem",textAlign:"center"}}><code>Tech I've fiddled with</code></h3>
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
                <div className="techicon">
                    <h3><SiFirebase className="icon"/><code>Firebase</code></h3>
                </div>
                
                
                
            </div>
         </div>
        
    </div>
   
    
    )
    
}
export default About;