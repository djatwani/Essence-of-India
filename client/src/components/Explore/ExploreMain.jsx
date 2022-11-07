import React from 'react'
import ExploreCity from '../../components/Explore/ExploreCity'
import '../../styles/Explore/ExploreMain.css'
import ExploreTop from './ExploreTop'
import cardImg1 from '../../assets/img1.png'
import Raj from '../../assets/rajasthan1.png'


function ExploreMain() {
  return (
    <div className='exploreMain'>
      <ExploreTop state={'Rajasthan'} image={Raj}/>
      <ExploreCity city={'Mount Abu'} image={cardImg1} desc={'Santila, Countryside Homestay, Kasauli Hills'} rating={4.5} numReviews={4} price={1999} />
    </div>
  )
}

export default ExploreMain