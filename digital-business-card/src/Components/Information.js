import React from 'react';
import {FaLinkedin} from 'react-icons/fa'
import {FaRegEnvelope} from 'react-icons/fa'

function Information() {
    return (
      <main className='Information'>
        <img className='Profile' src={require('../Images/Profile.jpg')} alt='Sophie Kneeshaw Profile'></img>
        <div className='Overview'>
          <h1 className='Name'>Sophie Kneeshaw</h1>
          <h4 className='Career'>Aspiring Software Developer</h4>
          <h6 className='Website'>www.linkedin.com/in/sophierkneeshaw</h6>
        </div>
          <div className='Buttons'>
            <button className='Email'><i><FaRegEnvelope/></i>Email</button>
            <button className='LinkedIn'><i><FaLinkedin/></i>LinkedIn</button>
          </div>
      </main>
  
    );
  }
  
  export default Information;
