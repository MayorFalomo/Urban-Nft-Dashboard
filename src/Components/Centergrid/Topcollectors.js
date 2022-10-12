import React from 'react'
import './Topcollectors.css'

const Topcollectors = ({collected}) => {
  return (
      <div className='CollectorsCard' >
          <div className='topCard'>
              <h4>{collected.id} </h4>
                <div><img src={collected.imagery} alt='img' /> </div>
              <div className='CardName'>
                  <h3> {collected.artName} </h3>
                  
                    < div className='eth'>
                  <h4>{collected.name} </h4>
                  <img src={collected.ethereum} alt='img' />
                  <p>{collected.bid} </p>
                  </div>
                  </div>
          </div>
    </div>
  )
}

export default Topcollectors