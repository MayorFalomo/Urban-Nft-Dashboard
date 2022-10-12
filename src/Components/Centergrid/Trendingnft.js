import React, { useRef, useState } from 'react'
import { GoTriangleDown } from 'react-icons/go'
import Nftcard from './Nftcard'
import './Trendingnft.css'
// import 'art1.svg'
// import { Slide} from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Collectors from './Collectors';



const Trendingnft = () => {

    const [nfts, setNfts] = useState([
        {
            id: 1,
            imagery: 'art1.svg',
            artName: 'Ready Players',
            name: '@Kaladin',
            category: 'Art'
        },
        {
            id: 2,
            imagery: 'art2.svg',
            artName: 'Ready Players',
            name: '@Kaladin',
            category: 'Art'
        },
        {
            id: 3,
            imagery: 'art3.svg',
            artName: 'Ready Players',
            name: '@Kaladin',
            category: 'Art'
        },
        {
            id: 4,
            imagery: 'art2.svg',
            artName: 'Ready Players',
            name: '@Kaladin',
            category: 'Trending'
        },
        {
            id: 5,
            imagery: 'art3.svg',
            artName: 'Ready Players',
            name: '@Kaladin',
            category: 'popular'
        },
        {
            id: 6,
            imagery: 'art1.svg',
            artName: 'Ready Players',
            name: '@Kaladin',
            category: 'Trending'
        },
        {
            id: 7,
            imagery: 'art2.svg',
            artName: 'Ready Players',
            name: '@Kaladin',
            category: 'Trending'
        },
        {
            id: 8,
            imagery: 'art1.svg',
            artName: 'Ready Players',
            name: '@Kaladin',
            category: 'popular'
        },
        {
            id: 9,
            imagery: 'art3.svg',
            artName: 'Ready Players',
            name: '@Kaladin',
            category: 'Trending'
        },
        {
            id: 10,
            imagery: 'art2.svg',
            artName: 'Ready Players',
            name: '@Kaladin',
            category: 'popular'
        },
    ])

    const [currentNft, setCurrentNft] = useState("All")


    const handleCurrent = (e) => {
        setCurrentNft(e.target.value)
    }
    
  return (
      <div className='trendingCard' >
          <div className='flexTrend'>
              <h1>FEATURED NFTs 🔥 </h1>                                  
                  <select onChange={handleCurrent} >
    <option  value="All" >All</option>
    <option   value="Trending" > Trending</option>
    <option  value="popular">Popular</option>
    <option  value="Art">Art</option>
                  </select>
          </div>

          <div className='sliderflex'>
          {nfts.filter((nft) => {
              if (currentNft === 'All') {
                  return nft
              }
              else if (nft.category.toLowerCase().includes(currentNft.toLowerCase())
              ) {
                  return nft;
              }
              
          }).map((data, index) => {
              return (
                      <Nftcard key={index} data={data} />
                      )
          })}
          </div>
          <Collectors/>
          </div>
  )
}

export default Trendingnft