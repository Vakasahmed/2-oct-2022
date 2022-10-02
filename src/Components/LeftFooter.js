import React from 'react';
import window from '../Images/window.png';
import file from '../Images/file-manager-icon.png';
import chrome from '../Images/Google-Chrome-icon.png';
import playstore from '../Images/play-playstore-icon.png';
import edge from '../Images/Internet-Explorer-icon.png';
import whatsapp from '../Images/WhatsApp-icon.png';
import whatsappMessage from '../Images/whatsapp-message2.jpg';
import satellite from '../Images/satellite.png';

function LeftFooter() {
  return (
    <div className='left'>
        <img src={window} alt='window'/>
        <input placeholder='🔎 Type here to search'/>
        <img src={file} alt='file'/>
        <img src={chrome} alt='chrome'/>
        <img src={playstore} alt='PlayStore'/>
        <img src={edge} alt='edge'/>
        <img src={whatsapp} alt='whatsapp'/>
        <img src={satellite} alt='Satellite'/>
        <div className='message'>
        <img  className='whatsapp' src={whatsappMessage} alt='whatsappMessage'/>
          <hr/>  
        </div>
        
    </div>
  )
}

export default LeftFooter;