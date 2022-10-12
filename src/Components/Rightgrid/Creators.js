import React, { useState } from 'react'
import Topcreators from './Topcreators'

const Creators = () => {

    const follows = [
        {
            image: 'Crowns.svg',
            name: 'Kaladin Reborn',
            username: '@Fekixeffect'
        },
        {
            image: 'Cinderella.svg',
            name: 'Celeana Grey',
            username: '@Celeane'
        },
        {
            image: 'leinard studio.svg',
            name: 'Matt Cauthon',
            username: '@Matt'
        },
        {
            image: 'joe Adamu.svg',
            name: 'Brandon Guile ',
            username: '@Rand'
        },
    ]


  return (
      <div className='creatorsContainer' >
          <div className='create'>
              <h2>Top Creators </h2>
              <span>See More </span>
          </div>
          <div className='followContainer'>
              {follows.map((follow, index) => {
                return <Topcreators key={index} follow={follow} />  
              })}
          </div>
    </div>
  )
}

export default Creators