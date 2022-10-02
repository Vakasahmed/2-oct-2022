import React from 'react';
import moon from '../Images/half-moon-icon.png';
import speaker from '../Images/speaker-icon.png';
import message from '../Images/Messages-icon.png';

function RightFooter() {
  return (
    <div className='right'>
        <img src={moon} alt='moon'/>
        <span className='flex'>27°C ^</span>
        <img src={speaker} alt='sound'/>
        <span className='flex'>ENG</span>
        <span className='time'>
        <span>13:30</span>
        <span>02/10/2022</span>
        </span>
        <img src={message} alt='message'/>
    </div>
  )
}

export default RightFooter;