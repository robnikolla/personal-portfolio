import React from 'react'


const Contact = () =>{
    return <div>
        <div className="contactdiv" id="contactdiv">
        {/* <p style={{color:"var(--creme)",textAlign:"center",fontSize:"1rem"}}><code>Contact</code></p> */}
        <h3 style={{fontSize:"3rem",color:"white",margin:"0"}}>Get In Touch</h3>
        <p className="contactdesc">Currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, Ill try my best to get back to you!</p>
        <br />
        <a href="#" className="contactbtn2" href="mailto: nikollarobert8@gmail.com"> Contact</a>


        
    </div>
    <p style={{color:"var(--creme)",padding:"15px",marginBottom:"7px",textAlign:"center"}}><code>Built by: Robert Nikolla - 2022</code></p></div>
}

export default Contact;