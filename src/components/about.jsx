import React from 'react'
import Person from './person.png';
import {DiJsBadge,DiCss3,DiPhp,DiReact,DiMysql,DiWordpress,DiPython,DiJava,} from 'react-icons/di';
import {SiTailwindcss,SiFirebase} from 'react-icons/si'
const About = (props) => {
    return(
    <div className="about" id="about">
        <div className="aboutintro">
            <h3 style={{color:"white",fontSize:"2rem",textAlign:"center"}}><code>About me</code></h3>
        <p className="aboutdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae, molestias culpa assumenda esse ullam, nesciunt debitis nam eaque et doloribus ipsam accusamus non eligendi qui consequuntur sapiente, error natus harum exercitationem magnam voluptas eveniet laborum. Fugit dolore illo, eos magni necessitatibus facilis accusamus veniam amet obcaecati qui sequi fugiat asperiores enim consequatur. Unde reiciendis vitae ratione. Magnam iure quas sunt officia facilis! Mollitia magnam vitae nobis ullam distinctio accusamus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatem, mollitia non omnis quas veniam nobis delectus nostrum illo assumenda!</p>
        </div>
        
         <div className="techstack">
             <h3 style={{color:"white",fontSize:"2rem",textAlign:"center"}}><code>Tech</code></h3>
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