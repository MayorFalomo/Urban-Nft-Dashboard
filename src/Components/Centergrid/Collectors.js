import React, { useState } from 'react'
import Topcollectors from './Topcollectors'

const Collectors = () => {
     const [collections, setCollections] = useState([
        {
            id: '#1',
            imagery: 'king.svg',
            artName: 'Crypto King',
             name: 'Floor Price',
             ethereum: 'eth.svg',
            bid: 20,
            category: 'Over last 7days'
        },
        {
            id: '#2',
            imagery: 'meme.svg',
            artName: 'Meme',
             name: 'Floor Price',
             ethereum: 'eth.svg',
            bid: 21,
            category: 'Over last 7days'
        },
        {
            id: '#3',
            imagery: 'mob.svg',
            artName: 'Mob',
             name: 'Floor Price',
             ethereum: 'eth.svg',
            bid: 16,
            category: 'Over last 7days'
        },
        {
            id: '#4',
            imagery: 'coup.svg',
            artName: 'Coup',
             name: 'Floor Price',
             ethereum: 'eth.svg',
            bid: 24,
             category: 'Over last 7days'
        },
        {
            id: '#5',
            imagery: 'frendz.svg',
            artName: 'Friendz',
             name: 'Floor Price',
             ethereum: 'eth.svg',
            bid: 18,
            category: 'Over last 7days'
        },
        {
            id: '#6',
            imagery: 'omo.svg',
            artName: 'Kaladin',
             name: 'Floor Price',
             ethereum: 'eth.svg',
            bid: 20,
            category: 'Over last 7days'
        },
        {
            id: '#7',
            imagery: 'king.svg',
            artName: 'Destructor Pro',
             name: 'Floor Price',
             ethereum: 'eth.svg',
            bid: 20,
            category: '1 week'
        },
        {
            id: '#8',
            imagery: 'coup.svg',
            artName: 'Pirate',
             name: 'Floor Price',
             ethereum: 'eth.svg',
            bid: 20,
            category: '1 year'
        },
        {
            id: '#9',
            imagery: 'meme.svg',
            artName: 'The Hammer',
             name: 'Floor Price',
             ethereum: 'eth.svg',
            bid: 20,
            category: '1 week',
        },
        {
            id: '#10',
            imagery: 'king.svg',
            artName: 'Valera Dent',
             name: 'Floor Price',
             ethereum: 'eth.svg',
            bid: 20,
            category: 'Over 1 month',
        },
        {
            id: '#11',
            imagery: 'coup.svg',
            artName: 'Iron Prince',
             name: 'Floor Price',
             ethereum: 'eth.svg',
            bid: 20,
            category: 'Over 1 month',
        },
        {
            id: '#12',
            imagery: 'frendz.svg',
            artName: 'Artemis Fowl',
             name: 'Floor Price',
             ethereum: 'eth.svg',
            bid: 20,
            category: '1 year',
        },
        {
            id: '#13',
            imagery: 'meme.svg',
            artName: 'Harry Potter',
             name: 'Floor Price',
             ethereum: 'eth.svg',
            bid: 20,
            category: '1 week',
        },
        {
            id: '#14',
            imagery: 'frendz.svg',
            artName: 'Aurora',
             name: 'Floor Price',
             ethereum: 'eth.svg',
            bid: 20,
            category: 'Over 1 month',
        },
        {
            id: '#15',
            imagery: 'mob.svg',
            artName: 'Percy Jackson',
             name: 'Floor Price',
             ethereum: 'eth.svg',
            bid: 20,
            category: '1 year',
        },
        
    ])

    const [currentCollection, setCurrentCollection] = useState('All')
 const handleCurrent = (e) => {
        setCurrentCollection(e.target.value)
    }
  return (
      <div className='collectorsContain' >
          <div className='flexTrending'>
              <div><h2>Top Collections </h2></div>                                  
                  <select onChange={handleCurrent} >
    <option  value="All" >All </option>
    <option  value="Over Last 7days" >Over Last 7days </option>
    <option   value="1 week" >1 week</option>
    <option  value="Over 1 month">Over 1 month</option>
    <option  value="1 year">1 year</option>
                  </select>
          </div>
          <div className='filterItems'>
          {collections.filter((collect) => {
               if (currentCollection === 'All') {
                  return collect
              }
              else if (collect.category.toLowerCase().includes(currentCollection.toLowerCase())
              ) {
                  return collect;
              }
          }).map((collected, index) => {
              return (
                <div className='mainContainer' key={index} >
                  <Topcollectors  collected={collected} />
                  </div>
              )
          })}
              </div>
    </div>
  )
}

export default Collectors