import React from 'react';
import { Nav } from './Navbar.elements';


const Navbar = () => {
    return (
        <>
           <Nav>
                <div className="obj"></div>
                <div><h5><a href="https://github.com/gblvil">ABOUT</a></h5></div>
                <div><h5><a href="https://official-joke-api.appspot.com/random_joke">API</a></h5></div>
                <div><h5><a href="https://github.com/gblvil">CONTACTS</a></h5></div>
           </Nav>
        </>
    )
}

export default Navbar
