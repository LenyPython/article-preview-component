import React from 'react'
import Contact from './Contact'
import avatar from './images/avatar-michelle.jpg'

const Personal = () => {
  return (
    <div className='personal-wrapper'>
      <div id='avatar-wrapper'>
        <img src={avatar} alt='avatar' />
      </div>
      <div>
        <h2>Michelle Appleton</h2>
        <p>28 Jun 2020</p>
      </div>
      <Contact />
    </div>
  )
}

export default Personal;
