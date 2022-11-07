import React from 'react'
import '../../styles/HomestayView/ImageView.css'
import img1 from '../../assets/img1.png'
import { AiFillStar } from 'react-icons/ai';

function ImageView(props) {
  return (
    <div className='ImageView'>
        <div className='ImageView-top'>
        <div className='place-name'>
        {props.city},{props.address}
        </div>
        <div className='review-place'>
            <div className='review point'><AiFillStar className='star'> </AiFillStar>{props.rating}</div>
            <div className='review num'>{props.review}reviews</div>
            <div className='review'>{props.city},{props.state}, India</div>
        </div>
        </div>
        <div className='place-images'>
            <div className='images-left'>
                <img src={props.img} className='img-left'></img>
            </div>
            <div className='images-right'>
                <div className='right-top'>
                <div className='img'><img src={props.img} className="img-right"></img></div>
                <div className='img'><img src={props.img} className="img-right"></img></div>
                </div>
                <div className='right-bottom'>
                <div className='img'><img src={props.img} className="img-right"></img></div>
                <div className='img'><img src={props.img} className="img-right"></img></div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ImageView