import React from 'react'
import './contact.scss'
import fb from '../images/icon-facebook.svg'
import pin from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'
import arrow from '../images/icon-share.svg'

const Contact = () => {

  const handleClick = () => {
    let contactArrow = document.querySelector('.contact');
    let shareDiv = document.querySelector('.share');
    contactArrow.classList.toggle('clicked');
    shareDiv.classList.toggle('visible');

  };

  return (
    <div className='contact' onClick={handleClick}>
      <img src={arrow} alt='click arrow' />
      <div className='share'>
        <h2>share</h2>
        <img src={fb} alt='fb-icon' />
        <img src={twitter} alt='tw-icon' />
        <img src={pin} alt='pin-icon' />

      </div>
    </div>
  )
}
export default Contact;
