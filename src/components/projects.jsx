import React from 'react'
import Thumbnail from './placement.png';
import Pitchspoon from './pitchspoon.png'
import {FiGithub} from 'react-icons/fi'


const Project = (props) =>{
        return(
              <div className="project">
                      <img className="projthumbnail"src={props.thumbnail} alt="" />
                      <div className="projinfo">
                        <p style={{color:"var(--creme)",paddingRight:"10px",fontSize:"0.9rem",margin:"2px"}}><code>Featured Project</code></p>
                        <h2 className="projname">{props.name}</h2>
                        <p className="projdesc">A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
                        <p style={{color:"var(--slate)",paddingRight:"10px"}}><code>{props.techstack}</code></p>
                        <a href={props.githublink} className="projgitbtn"><FiGithub className="gitbtn"/></a>
                      </div>
                </div>
        )
}

const InvProject = (props) => {
        return(
                <div className="project">
                        <div className="invprojinfo">
                          <p style={{color:"var(--creme)",paddingLeft:"10px",fontSize:"0.9rem",margin:"2px"}}><code>Featured Project</code></p>
                          <h2 className="projname" style={{paddingLeft:"10px"}}>{props.name}</h2>
                          <p className="projdesc">A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
                          <p style={{color:"var(--slate)",paddingLeft:"10px"}}><code>{props.techstack}</code></p>
                          <a href={props.githublink} className="projgitbtn" ><FiGithub className="gitbtn"/></a>
                        </div>
                        <img className="projthumbnail"src={props.thumbnail} alt="" />
                        
                  </div>
                
          )
}

const Projects = (props) => {
        return(
           <div className="projectsdiv" id="projectsdiv">
               <div className="projcontainer">
                <h3 style={{color:"var(--creme )",fontSize:"1.6rem",textAlign:"center"}}>Heres some projects I've built.</h3>  
               <InvProject githublink="https://github.com/robnikolla/pitchspoon" thumbnail={Thumbnail} name="Pharmamag" techstack="PHP &nbsp; MySQL &nbsp; MaterializeCSS"></InvProject>
               <Project githublink="https://github.com/robnikolla/pitchspoon"thumbnail={Pitchspoon} name="Pitchspoon" techstack="Wordpress &nbsp; Custom Theme &nbsp; PHP"></Project>
                </div>
               

           </div>
           
        )
}
export default Projects;