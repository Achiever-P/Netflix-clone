import React from 'react'
import './Notitlec.css'
import cards_no from '../assets/cards/cards_no'

const Notitlec = ({title, category}) => {

  return (
    <div className='cards'>
      <h2>{title?title:"Top 10 Movies"}</h2>
      <div className='list'>
        {cards_no.map((card, index)=>{
          return <div className='card' key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
            </div>
        })}
      </div> 
    </div>
  )
}

export default Notitlec
