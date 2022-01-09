import React from 'react'
import { DiGithubBadge } from "react-icons/di";


const Hero = () => {

    return(<div class="hero" id="hero">
        <h1 class="headerh1">Hello, my name is <br /><span className="headerimportant"><code>Robert Nikolla</code></span></h1>
        <p class="herodesc">I am a Student and a Junior Software Developer who is mainly focused on full-stack Web Development, based in Kosovo.  </p>
        <br />
        <div class="btngroup">
            <div><a href="mailto: nikollarobert8@gmail.com" class="contactbtn">Contact</a></div>
            
            <div><a href="https://github.com/robnikolla" target="_blank" rel="noreferrer" class="githubbtn"><DiGithubBadge className="githubicon"/>  GitHub</a></div>
        </div>   



    </div>)

}


export default Hero;