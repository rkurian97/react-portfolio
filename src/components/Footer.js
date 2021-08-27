import React from 'react'
import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80px',
            background: '#191919'
          }}>
            <a href='https://github.com/rkurian97' target='_blank' rel="noopener noreferrer">
                <AiFillGithub size={56}/>
            </a>
            <a href='https://www.linkedin.com/in/rohith-kurian-22ab991a8/' target='_blank' rel="noopener noreferrer">
                <AiFillLinkedin size={56} style={{ fill: '#15cdfc' }} />
            </a>
        </div>
    )
}

export default Footer;