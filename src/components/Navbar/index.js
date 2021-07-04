import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
  } from './NavbarElements';

  import {FaGgCircle} from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                        <FaGgCircle size={56} style={{ fill: '#15cdfc' }}/>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/about" >
                        About Me
                    </NavLink>
                    <NavLink to="/project">
                        My Projects
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    )
}

export default Navbar
