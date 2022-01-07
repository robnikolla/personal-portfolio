import React from 'react'
import { DiGithubBadge } from "react-icons/di";
import {MdMessage} from 'react-icons/md';



const Hero = () => {

    return(<div class="hero" id="hero">
        <h1 class="headerh1">Hello, my name is <br /><span className="headerimportant"><code>Robert Nikolla</code></span></h1>
        <p class="herodesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas at assumenda labore quibusdam exercitationem ducimus quidem, nemo necessitatibus rerum aspernatur voluptatem cumque laboriosam quam quis? Dolore fugit non molestias, commodi vero neque adipisci? Quo doloribus, ipsum impedit deleniti quisquam aperiam.</p>
        <br />
        <div class="btngroup">
            <div><a href="mailto: nikollarobert8@gmail.com" class="contactbtn">Contact</a></div>
            
            <div><a href="https://github.com/robnikolla" class="githubbtn"><DiGithubBadge className="githubicon"/>  GitHub</a></div>
        </div>   



    </div>)

}


export default Hero;