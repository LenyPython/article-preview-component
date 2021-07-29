
import React from 'react'
import fb from '../images/icon-facebook.svg'
import pin from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'
import './Share.scss'

const Share = () => {
  return (
    <div className='share'>
      <h2>share</h2>
      <img src={fb} alt='fb-icon' />
      <img src={twitter} alt='tw-icon' />
      <img src={pin} alt='pin-icon' />
    </div>
  )
}

export default Share;
