import React from 'react'
import '../../styles/LandingPage/LandingPage.css'
import Section3Card from './Section3Card'
import { AiOutlineArrowLeft ,AiOutlineArrowRight } from 'react-icons/ai';
import cardImg1 from '../../assets/rajasthan.png';
import { useNavigate } from 'react-router-dom';

function Section3() {
  const navigate = useNavigate();
  return (
    <div className="section2Cont">
      <div className="container">
        <div className="header">
          <h1>
          Explore Colors of India
          </h1>
          <div className="underline">
          </div>
        </div>
        <div className="cardCont container">
          <AiOutlineArrowLeft className="prev" />
          
          <Section3Card image={cardImg1} location={'Rajasthan'} link={`/explore/rajasthan`} desc={'Padharo mhare desh'} />
          <Section3Card image={cardImg1} location={'Rajasthan'} link={`/explore/rajasthan`} desc={'Padharo mhare desh'} />
          <Section3Card image={cardImg1} location={'Rajasthan'} link={`/explore/rajasthan`} desc={'Padharo mhare desh'} />
          
          <AiOutlineArrowRight className="next" />
        </div>
        <div className="bottom">
          <button className="viewAll" onClick={()=> navigate('/explore')}>
            View All <AiOutlineArrowRight/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Section3