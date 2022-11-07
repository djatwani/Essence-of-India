import React from 'react'
import '../../styles/LandingPage/LandingPage.css'
import Section2Card from './Section2Card'
import { AiOutlineArrowLeft ,AiOutlineArrowRight } from 'react-icons/ai'
import cardImg1 from '../../assets/card-img-1.png';
import cardImg2 from '../../assets/card-img-2.png';
import cardImg3 from '../../assets/card-img-3.png';
function Section2() {
  return (
    <div className="section2Cont">
      <div className="container">
        <div className="header">
          <h1>
            Best Homes, Near Your Destination
          </h1>
          <div className="underline">
          </div>
        </div>
        <div className="cardCont container">

          <AiOutlineArrowLeft className="prev" />

          <Section2Card image={cardImg1} desc={'Santila, Countryside Homestay, Kasauli Hills'} rating={4.5} numReviews={4} price={1999} />
          
          <Section2Card image={cardImg2} desc={'Santila, Countryside Homestay, Kasauli Hills'} rating={4.5} numReviews={4} price={1999} />

          <Section2Card image={cardImg3} desc={'Santila, Countryside Homestay, Kasauli Hills'} rating={4.5} numReviews={4} price={1999} />

          <AiOutlineArrowRight className="next" />
        </div>
        <div className="bottom">
          <button className="viewAll">
            View All <AiOutlineArrowRight/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Section2