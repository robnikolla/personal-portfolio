import React from 'react'


const Navbar = (props) => {
       

    return(
    

    <header className="primary-header">
        <div>
            <h3 className="logo"><code>Robert Nikolla</code></h3>
        </div>
        <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false"></button>
        <nav>
            <ul data-visible="false" id="primary-navigation"className="primary-navigation">
                <li ><code><a className='hvrwhite'href="#primary-header"><span aria-hidden="true">00</span>Home </a></code></li>
                <li ><code><a className='hvrwhite'href="#about"><span aria-hidden="true">01</span>About</a></code></li>
                <li ><code><a className='hvrwhite' href="#projectsdiv"><span aria-hidden="true">02</span>Projects</a></code></li>
                <li><code><a className='hvrwhite' href="#contactdiv"><span aria-hidden="true">03</span>Contact</a></code></li>
            </ul>
        </nav>
    </header>
       



    )
}

export default Navbar;