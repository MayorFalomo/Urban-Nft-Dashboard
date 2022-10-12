import React from 'react'
import { BsBell } from 'react-icons/bs'
import { FaAngleDown } from 'react-icons/fa'
import Creators from './Creators'
import './Rightgrid.css'

const Rightgrid = ({clinks}) => {

    
  return (
      <div id='rightGridContainer' className={clinks ? "clinks active" : "clinks"} >
          <div className='bar'>
              <div className='headBar'>
                  <div className='notify'>
                  <p>{<BsBell />} </p>
                      <div className='number'> 5</div>
                  </div>
                  <div className='owner' >
                      <div className='profileImg' ><img src='resized.jpg' alt='img' /></div>
                      <p>Mayowa {<FaAngleDown/>} </p>
                  </div>

                  
              </div>
                <div className='Ebonycard'>
          <div className='auction'>
              <div className='ebonyImg'><img src='ebony.svg' alt='img' /> </div>
              <div className='caption' ><h1>Live Auction </h1></div>
              <h4>3 days left </h4>
          </div>
          <h3>Ebony #2785 </h3>
          <p>10.15 ETH 1/1 </p>
          <div className='flexHighBtn'>
              <h5>Highest bid 3 WEIGHT </h5>
              <button>Buy now </button>
              </div>
              </div>
              <Creators/>
              </div>
    </div>
  )
}

export default Rightgrid