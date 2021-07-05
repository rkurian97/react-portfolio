import React from 'react';
import {SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarLink, SideBarMenu} from './SideBarElements'

function Sidebar({isOpen, toggle}) {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="/about" onClick={toggle}> About Me </SideBarLink>
                    <SideBarLink to="/project" onClick={toggle}> My Projects </SideBarLink>
                    <SideBarLink to="/contact" onClick={toggle}> Contact Me </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default Sidebar
