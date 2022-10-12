import React, {useState } from 'react'
import './Nftcard.css'
import { GrFavorite } from 'react-icons/gr'
import { FcLike, } from 'react-icons/fc'


const Nftcard = ({ data }) => {

  const [like, setLike] = useState( false)


  const handleLike = () => {
    setLike(!like)
  }

    return (
      <div className='Nftcard' >
        <div className='nftImage' ><img src={data.imagery} alt='img' /></div>
        <div className='flexName' >
        <h3>{data.artName} </h3>
          {like ?  (<button onClick={handleLike} >{<FcLike className={like ? 'liked active' : 'liked'} />} </button>)
          :
            (<button onClick={handleLike} >{<GrFavorite className={like ? 'liked active' : 'liked'} />} </button>)}
          </div>
        <p>{data.name} </p>
        <div className='flexBid'>
          <h3>Last Bid </h3>
          <h4>1.57 ETH </h4>
          </div>
        <button className='bidBtn' >Place a bid </button>
        </div>
  )
}

export default Nftcard