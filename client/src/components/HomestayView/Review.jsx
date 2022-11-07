import React from 'react'
import ReviewCard from './ReviewCard'
import '../../styles/HomestayView/Review.css'
import { AiFillStar } from 'react-icons/ai'

function Review(props) {
  return (
    <div className='review-layout'>
      <div className='review-head'> <AiFillStar className='star'/> 4.5 | 4 reviews</div>
      <div className='cards'>
        <ReviewCard reviewDesc={props.reviewDesc} reviewName={props.reviewName} reviewMonth={props.reviewMonth} reviewYear={props.reviewYear} />
        <ReviewCard reviewDesc={props.reviewDesc} reviewName={props.reviewName} reviewMonth={props.reviewMonth} reviewYear={props.reviewYear} />
        <ReviewCard reviewDesc={props.reviewDesc} reviewName={props.reviewName} reviewMonth={props.reviewMonth} reviewYear={props.reviewYear} />
        <ReviewCard reviewDesc={props.reviewDesc} reviewName={props.reviewName} reviewMonth={props.reviewMonth} reviewYear={props.reviewYear} />
      </div>
    </div>
  )
}

export default Review