import React from 'react'
import Section2Card from '../../components/landing-page/Section2Card'
import cardImg1 from '../../assets/card-img-1.png';
import '../../styles/Explore/ExploreCity.css'

function ExploreCity() {
  return (
    < div className='exploreCity container'>
      <div className='ExploreCityMain'>
        <div className='ExploreCityHead'>
          Mount Abu
        </div>
        <div className="cardCont">
          <div className="ExploreCards">
            <Section2Card image={cardImg1} desc={'Santila, Countryside Homestay, Kasauli Hills'} rating={4.5} numReviews={4} price={1999} />
          </div>
          <div className="ExploreCards">
            <Section2Card image={cardImg1} desc={'Santila, Countryside Homestay, Kasauli Hills'} rating={4.5} numReviews={4} price={1999} />
          </div>
          <div className="ExploreCards">
            <Section2Card image={cardImg1} desc={'Santila, Countryside Homestay, Kasauli Hills'} rating={4.5} numReviews={4} price={1999} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ExploreCity