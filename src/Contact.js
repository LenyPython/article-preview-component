import React from 'react'
import arrow from './images/icon-share.svg'
import fb from './images/icon-facebook.svg'
import pin from './images/icon-pinterest.svg'
import twitter from './images/icon-twitter.svg'

const Contact = () => {

  const handleClick = () => {
    let div = document.querySelector('contact');
    let menu = document.getElementById('share');
    div.classList.toggle('clicked');
    menu.classList.toggle('visible');

  };

  return (
    <div className='contact' onClick={handleClick}>
      <img src={arrow} alt='arrow' />
      <div id='share'>
        <h2>share</h2>
        <img src={fb} alt='fb-icon' />
        <img src={twitter} alt='tw-icon' />
        <img src={pin} alt='pin-icon' />

      </div>
    </div>
  )
}
export default Contact;
