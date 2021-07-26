import React from 'react'
import Contact from './Contact'

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
      <Contact />
    </div>
  )
}

export default Personal;
