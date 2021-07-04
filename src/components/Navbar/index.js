import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
  } from './NavbarElements';

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                        Logo
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/about" >
                        About Me
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                    <NavLink to="/project">
                        My Projects
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    )
}

export default Navbar
