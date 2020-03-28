import React from 'react'
import '../styles/Body.css'

const Body = (props) => {
  return (
    <div className='Body'>
      <h2>Work</h2>
      {props.data.work.map(each => (
        <div className='Item'>
          <div className='Item-general'>
            <h3>{each.company}</h3>
            <a href={each.website}>{each.website}</a>
            <p>{each.startDate} - {each.endDate}</p>
          </div>
          <div className='Item-description'>
            <h3>{each.position}</h3>
            <p>{each.summary}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Body
