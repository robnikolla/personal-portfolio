import React from 'react'
import {FiGithub} from 'react-icons/fi'
import {BsFileEarmarkCodeFill} from 'react-icons/bs'


const OtherProject = (props) => {
    return (
        <div className="secproject">
            <div className="topsec">
             
             <a  className="projgitbtn" style={{padding:"1rem",fontSize:"2.5rem"}} ><BsFileEarmarkCodeFill className="nbtn"/></a>
            <a href={props.githublink} target="_blank" className="projgitbtn" style={{padding:"1rem",fontSize:"1.4rem"}} ><FiGithub className="gitbtn"/></a>
            </div>
            <h3 className="secprojectname">{props.title}</h3>
            <p className="secprojectdesc">{props.description}</p>
            <p style={{color:"var(--slate)",padding:"15px",fontSize:"0.9rem"}}><code>{props.codebase}</code></p>   
        </div>
    )
}
const Secondary=()=> {



    return <div className="secondarycontainer">


        <div className="secprojects">
        <h3 style={{color:"var(--creme )",fontSize:"1.6rem",textAlign:"center"}}>Other noteworthy projects</h3>  
        <div className="secprojlist">
            <OtherProject title="Stock Manager" githublink="https://github.com/robnikolla/stock-manager" description="Stock Manager is a simple Java GUI App which is used to manage products data such as name, barcode, producer, amount of products. " codebase="JavaFX Scenebuilder"></OtherProject>
            <OtherProject title="React Spreadsheet" githublink="https://github.com/robnikolla/react-spreadsheet" description=" React Spreadsheet is a spreadsheet table with editeable cells. The table has these features: Row adding and removing, automatic calculation and rendering."codebase="ReactJS"></OtherProject>
            <OtherProject title="Personal Portfolio" githublink="https://github.com/robnikolla/personal-portfolio" description="The website youre looking at right now. The portfolio uses ReactJS and Styled Components and icons imported from npm packages." codebase="ReactJS"></OtherProject>
            </div>   


        </div>
    </div>;

}

export default Secondary;