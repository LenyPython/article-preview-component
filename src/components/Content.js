import React from 'react'
import './content.scss'
import Personal from './Personal'

const Content = ({title, content, name, date, avatar}) => {
  return (
    <div className='main'>
      <h1>{title}</h1>
      <main>
        <p>{content}</p>
      </main>
      <Personal
        name={name}
        date={date}
        avatar={avatar} />
    </div>
  )

}

export default Content;
