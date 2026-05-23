import React from 'react'
import "./card.css"

export default function Card(character) {
  return (<div className='card'>
  <img src={character.img}/>
    <div className='band'>
      <h1>{character.name}</h1>
      <h3>{character.band}</h3>
    </div>
  <button onClick={() => {
    alert(`Now playing ${character.name} from ${character.band}!`)
  }}>▶️</button>
  </div>
  )
}
