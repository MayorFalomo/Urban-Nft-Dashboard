import React from 'react'
import {IoSearchOutline} from 'react-icons/io5'
import Trendingnft from './Trendingnft'
import './Centergrid.css'

const Centergrid = ({click, clinks, update ,updateMenu}) => {
    

  

  return (
      <div className='centerContainer'>
                  <div className='nftLogos'><img src='NftLogo.svg' alt='img' /> </div>  
          <div className='flexBurger'>
          <div className='searchInput'>
              <div className='searchText' ><input typeof='text' placeholder='Search, items, collections ' /></div>
              <div className='searchOutline' ><p>{<IoSearchOutline/>} </p></div>
          </div>
           <div id='hamburger' onClick={update} className={clinks ? 'hamBurgerMenu1 active' : 'hamBurgerMenu1'}>
                    <span id='bars1' className="bars1"></span>
                    <span id = 'bars2' className="bars1"></span>
                    <span id='bars3' className="bars1"></span>
              </div>
           <div id='hamburger' onClick={updateMenu} className={click ? 'hamBurgerMenu active' : 'hamBurgerMenu'}>
                    <span id='bars1' className="bars"></span>
                    <span id = 'bars2' className="bars"></span>
                    <span id='bars3' className="bars"></span>
              </div>
              </div>
          <h2>Top Auction </h2>
          <div className='HeroContainer'>
              <div className='rareNftImage'><img src='brownRectangle.svg' alt='img'></img> </div>
                <div className='rareNft'>
              <h1>COLLECT RARE </h1>
                  <div className='flexItem'>
                      <div className='relativeElement'>
                          <div className='nftWrite'><img src='nftText.svg' alt='img'></img> </div>
                          <h1>NFT </h1>
                          </div>
                      <h1>HERE </h1>
                      </div>
              </div>
              <button className='exploreBtn' >Explore Now</button>
               <div className='kissNft' ><img src='kissNft.svg' alt='img' /></div>
              <div className='slanted' ><img src='city.svg' alt='img' /> </div> 
          </div>
          <Trendingnft  />
          </div>
  )
}

export default Centergrid