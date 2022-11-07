import React from 'react'
import '../../styles/HomestayView/ViewMain.css'
import img1 from '../../assets/img1.png'
import Desc from './Desc'
import ImageView from './ImageView'
import Review from './Review'

function ViewMain() {
  return (
    <div className='view-main'>
        <ImageView city={''} state={''} address={''} rating={4.5} review={4} img={img1}/>
        <Desc desc={"fdsgbsdfbjsdf"} price={1999} rating={4} review={4} checkIn={'12-10-12'} checkOut={'12-10-12'} guests={4}/>
        <Review rating={4} review={4} reviewDesc={'dsfdsfsd'} reviewName={'Rahul'} reviewMonth={'Jan'} reviewYear={'2002'}/>
    </div>
  )
}

export default ViewMain