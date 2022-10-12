import React, { useState } from 'react'
import './Topcreators.css'

const Topcreators = ({ follow }) => {
    
    const [following, setFollowing] = useState(false)
    
    const handleClick = () => {
        setFollowing(!following)
    }
  return (
      <div className='topCreatorsContainer' >
          <div className='followCard'>
              <div><img src={follow.image} alt='img' /></div>
              <div className='names'>
                  <div>{follow.name} </div>
                  <div className='username' >{follow.username} </div>
              </div>
          </div>
          { following ? (<div className='followingBtn'><button onClick={handleClick} >Following </button> </div> ) : (<div className='followBtn' > <button onClick={handleClick} >Follow </button></div>)}
    </div>
  )
}

export default Topcreators