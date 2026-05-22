import React from 'react'
import "./card.css"

export default function Card(person) {
  return (<div className='card'>
  <h1>{person.name}</h1>
  <h3>{person.role}</h3>
  <button>Hire</button>
  </div>
  )
}
