import React from 'react'
import Contact from './Contact'
import Share from './Share'
import './Personal.scss'

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
      <Share />
      <Contact />
    </div>
  )
}

export default Personal;
