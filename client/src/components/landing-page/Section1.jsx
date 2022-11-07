import React from 'react';
import '../../styles/LandingPage/LandingPage.css'
import Check from './Check'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Section1Card from './Section1Card';
import cardImg from '../../assets/homestay.png';
import { Link } from 'react-router-dom';

function Section1() {
    return (
        <div className="section2Cont">
            <div className="container">
                <div className="header">
                    <Check />
                </div>
                <div className="section1">
                    <Section1Card image={cardImg}/>
                </div>
                <div className="bottom findYourHome">
                    <Link className="viewAll" to='/search'>
                        Find Your Home <AiOutlineArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Section1