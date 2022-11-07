import React from 'react'
import '../../styles/LandingPage/Section3Card.css'
import {Link} from 'react-router-dom'

function Section3Card(props) {
  return (
    <Link to={props.link}>
      <div className="cardContainer">
        <div className="imgCont">
          <img src={props.image} alt="" />
        </div>
        <div className="details">
          <h1>
            {props.location}
          </h1>
          <p>
            '{props.desc}'
          </p>
        </div>
      </div>
    </Link>

  )
}

export default Section3Card