import React from 'react'
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from 'react-icons/fa';


const Hero = () => {

    return(<div class="hero" id="hero">
        <h1 class="headerh1">Hello, my name is <br /><span className="headerimportant"><code>Robert Nikolla</code></span></h1>
        <p class="herodesc">I am a Student and a Junior Software Developer who is mainly focused on full-stack Web Development, based in Kosovo.  </p>
        <br />
        <div class="btngroup">
            <div><a href="https://www.linkedin.com/in/robert-nikolla-3a8050244/" target="_blank" class="contactbtn"><FaLinkedin className="githubicon" style={{fontSize:"1.5rem"}}/> Connect </a></div>
            
            <div><a href="https://github.com/robnikolla" target="_blank" rel="noreferrer" class="githubbtn"><DiGithubBadge className="githubicon"/>  GitHub</a></div>
        </div>   



    </div>)

}


export default Hero;