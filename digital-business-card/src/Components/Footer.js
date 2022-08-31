import React from 'react';
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

function Footer () {
    return (
        <footer >
            <div className='Icons'>
                <div className='Social'><FaFacebook /></div>
                <div className='Social'><FaGithub /></div>
                <div className='Social'><FaTwitter /></div>
                <div className='Social'><FaLinkedin /></div>
            </div>
        </footer>
    )
}

export default Footer;
