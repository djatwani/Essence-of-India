import React from 'react'
import '../../styles/LandingPage/Section2Card.css'
import {AiFillStar} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function Section2Card(props) {
  const navigate = useNavigate();
  return (
    <div onClick={()=> navigate('/view/1')} className="cardContainer">
        <div className="imgCont">
            <img src={props.image} alt="" />
        </div>
        <div className="details">
            <span className="reviews">
                <AiFillStar className='icon-star'/> {props.rating} | {props.numReviews} reviews
            </span>
            <p>
            {props.desc}
            </p>
            <p>
            ₹{props.price}/<span>night</span>
            </p>
        </div>
    </div>
  )
}

export default Section2Card