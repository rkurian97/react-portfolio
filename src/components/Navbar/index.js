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
                    <NavLink to="/about" activeStyle>
                        About Me
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to="/project" activeStyle>
                        My Projects
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    )
}

export default Navbar
