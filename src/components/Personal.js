import React from 'react'
import Contact from './Contact'
import fb from '../images/icon-facebook.svg'
import pin from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'

const Personal = ({name, date, avatar}) => {
  return (
    <div className='personal-wrapper'>
      <div id='avatar-wrapper'>
        <img src={avatar} alt='avatar' />
        <div>
          <h2>{name}</h2>
          <p>{date}</p>
        </div>
      </div>
      <div className='share'>
        <h2>share</h2>
        <img src={fb} alt='fb-icon' />
        <img src={twitter} alt='tw-icon' />
        <img src={pin} alt='pin-icon' />
      </div>
      <Contact />
    </div>
  )
}

export default Personal;
