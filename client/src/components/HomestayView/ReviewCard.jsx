import React from 'react'
import ReviewImage from '../../assets/reviewImage.png'
import '../../styles/HomestayView/ReviewCard.css'

function ReviewCard(props) {
  return (
    <div className='review-main'>
        <div className='review-top'>
            <div className='review-img'>
                <img src={ReviewImage}></img>
            </div>
            <div className='review-info'>
                <div className='review-name'>{props.reviewName}</div>
                <div className='review-time'>{props.reviewMonth} {props.reviewYear}</div>
            </div>
        </div>
        <div>{props.reviewDesc}</div>
    </div>
  )
}

export default ReviewCard