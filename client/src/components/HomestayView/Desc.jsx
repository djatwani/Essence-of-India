import React from 'react'
import '../../styles/HomestayView/Desc.css'
import { AiOutlineStar } from 'react-icons/ai'
import { BsPatchCheckFill } from 'react-icons/bs'

function Desc(props) {

  // const handleBooking = () => {

  // }

  return (
    <div className='desc-main'>
      <div className="popupCont">
        <div className="popup" id='pop'>
          <BsPatchCheckFill className='tick' />
          <h1>
            Booking Done!
          </h1>
        </div>
      </div>
      <div className='desc-top'>
        <div className='desc-items'>
          <div>Amenties</div>
          <div>Location</div>
          <div>Reviews</div>
        </div>
        <div top-border></div>
      </div>
      <div className='desc-content'>
        <div className='desc-left'>
          <div className='left-top'>
            <div>Homestays are perfect because they reflect the personal style of the hosts, and not of some corporate organizations where one shoe fits all.</div>
            <div>Choosing a homestay almost always means that you have someone who can guide you about the place better than any guidebook in the world.</div>
            <div>While there will always be a plethora of options to choose from, nothing really matches the warmth of a home-cooked meal.</div>
            <div className='left-top-bottom'></div>
          </div>
          <div className='left-bottom'>
            <div className='left-bottom-head'>Know Your Home</div>
            <div>{props.desc}</div>
          </div>
        </div>
        <div className='desc-right'>
          <div className='right-box'>
            <div className='pay-box-top'>
              <div className='box-top-items'><b>₹{props.price}/</b>night</div>
              <div className='box-top-items'><AiOutlineStar></AiOutlineStar>{props.rating} | {props.review} reviews</div>
            </div>
            <div className='pay-box-cont'>
              <div className='check-in-out'>
                <div className='check-in'>
                  <div className='check-in-name'>Check in</div>
                  <div className='check-in-value'>{props.checkIn}</div>
                </div>
                <div className='check-out'>
                  <div className='check-out-name'>Check Out</div>
                  <div className='check-out-value'>{props.checkOut}</div>
                </div>
              </div>
              <div className='guestsBox'>
                <div>Guests</div>
                <div>{props.guests}guests</div>
              </div>
            </div>
            <button onClick={() => {
              console.log('function hide');
              document.getElementById('pop').style.display = 'flex';
              setTimeout(() => {
                document.getElementById('pop').style.display = 'none';
              }, 2000);
            }} className='bookbutton'>
              Book Your Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Desc