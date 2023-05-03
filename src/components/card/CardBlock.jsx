import React from 'react'
import frontCard from "../../assets/card.png"
import "./CardBlock.scss"

export const CardBlock = ({ animating, onCardClick, card }) => {
  return (
    <>
        <div
          className='card-block'
          onClick={() => (!card?.flipped && !animating) && onCardClick( {card} )}
        >
            <div className={`card-block__inner ${ card?.flipped ?'card-block__inner--flipped' : ''}`}>
              <img className='card-block__front' src={ frontCard } alt="unknown card" />
              <img className='card-block__back' src={ card?.url } alt={ card?.title } />
            </div>

        </div>
    </>
  )
}
