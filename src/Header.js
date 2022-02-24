import { IconButton } from '@material-ui/core';
import { Forum, Person } from '@material-ui/icons';
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        
        <IconButton>
            <Person font-size="large" className="header_icon" />
        </IconButton>

        <img className='header_logo'
            src='images/tinder_logo.png' alt='header logo'/>
        
        <IconButton>
            <Forum font-size="large" className='header_icon' />
        </IconButton>

    </div>
  )
}

export default Header