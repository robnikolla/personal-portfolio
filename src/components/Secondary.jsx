import React from 'react'
import {AiOutlineFolder} from 'react-icons/ai';
import {FiGithub} from 'react-icons/fi'
import {BsFileEarmarkCodeFill} from 'react-icons/bs'


const OtherProject = () => {
    return (
        <div className="secproject">
            <div className="topsec">
             
             <a href="" className="projgitbtn" style={{padding:"1rem",fontSize:"2.5rem"}} ><BsFileEarmarkCodeFill className="gitbtn"/></a>
            <a href="" className="projgitbtn" style={{padding:"1rem",fontSize:"1.4rem"}} ><FiGithub className="gitbtn"/></a>
            </div>
            <h3 className="secprojectname">Title</h3>
            <p className="secprojectdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum est cum illum labore optio explicabo atque placeat praesentium, sequi ex.</p>
            <p style={{color:"var(--slate)",padding:"15px",fontSize:"0.9rem"}}><code>ReactJS Firebase</code></p>   
        </div>
    )
}
const Secondary=()=> {



    return <div className="secondarycontainer">


        <div className="secprojects">
        <h3 style={{color:"var(--creme )",fontSize:"1.6rem",textAlign:"center"}}>Other noteworthy projects</h3>  
        <div className="secprojlist">
            <OtherProject></OtherProject>
            <OtherProject></OtherProject>
            <OtherProject></OtherProject>
            </div>   


        </div>
    </div>;

}

export default Secondary;