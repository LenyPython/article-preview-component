import React from 'react'
import './contact.scss'
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
    </div>
  )
}
export default Contact;
