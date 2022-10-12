import React from 'react'
import './Leftgrid.css'
import {CgHome} from 'react-icons/cg'
import {RiAuctionLine} from 'react-icons/ri'
import {AiOutlineInbox, AiOutlineLogout} from 'react-icons/ai'
import {MdLightMode, MdLiveHelp, MdNightlight, MdOutlineFavoriteBorder} from 'react-icons/md'
import {BsPlusSquare} from 'react-icons/bs'
import {FaBitcoin} from 'react-icons/fa'
import {FaEthereum} from 'react-icons/fa'
import {RiExchangeDollarFill} from 'react-icons/ri'
import {FiSettings} from 'react-icons/fi'

const Leftgrid = ({click, changed, setChanged, handleChange}) => {
  return (
      <nav className={click ? "links active" : "links"}>
          <div className='subNav'>
          <ul className='firstMenu'>
          <li className='nftLogo'><img src='NftLogo.svg' alt='img' /> </li>
          <li className='house'>{<CgHome/>}  Dashboard </li>
          <li className='house'>{<RiAuctionLine/>}  Auctions</li>
          <li className='house'>{<AiOutlineInbox/>}  Inbox </li>
              <li className='house'>{<MdOutlineFavoriteBorder/>}  Favourites </li>
          </ul>
          <ul>
              <li>{<BsPlusSquare/>} Wallets </li>
              <li>{<FaBitcoin/>} BitCoin </li>
              <li>{<FaEthereum/>} Ethereum </li>
              <li>{<RiExchangeDollarFill/>} USD Coin </li>
          </ul>
          <ul>
              <li>{<FiSettings/>}  Settings </li>
                  <li>{<MdLiveHelp />}  Help & FAQ </li>
                  
                  {changed ? 
                      (<li> {<MdLightMode />} Light Mode
                          <div className='toggleContain'>
                              <div id='ball' onClick={handleChange} className={changed ? "ball active" : "ball"}></div>
                          </div>
                      </li>)
                  :
                  (<li> {<MdNightlight />} Dark Mode
                      <div className='toggleContain'>
                          <div id='ball' onClick={handleChange} className={changed ? "ball active" : "ball"}></div>
                      </div></li>)}
              </ul>
          </div>
          <div className='logOutSect'>
              <div className='sky'><img src='./sky.svg' alt='img' /> </div>
              <div className='balance'>
                  <h5>My Balance </h5>
                  <div className='eth'>
                      <img src='eth.svg' alt='img' />
                      <h4> 100.50</h4>
                      </div>
                  <p>Top up Balance </p>
                  </div>
          </div>
          <h5>{<AiOutlineLogout/>} LOG OUT </h5>
    </nav>
  )
}
export default Leftgrid