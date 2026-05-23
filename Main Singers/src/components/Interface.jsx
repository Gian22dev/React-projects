import Card from "./Card.jsx"
import "./interface.css"

export default function Interface() {
  const characters = [
    {
      name: "Hayley",
      band: "Paramore",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bl4LtFRHAuuz5WRBqeZ1Qxy0oHQLlL0skw&s"
    }, {
      name: "Vic Fuentes",
      band: "Pierce The Veil",
      img: "https://pbs.twimg.com/profile_images/1863969135899836416/ITTtxc28_400x400.jpg"
    }, {
      name: "Anastasia",
      band: "The Haunt",
      img: "https://i.scdn.co/image/ab67616d0000b2730086e013c4e194a5f9f03429"
    }
  ]
  return (<>
    <h1 id="title">Main Singers!</h1>
    <div className="interface">
      {characters.map((character) => {
        return <>
        <Card img = {character.img} name = {character.name} band = {character.band}></Card>
        </>
      })}
      
    </div>
  </>)
}
