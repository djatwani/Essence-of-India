import React from 'react'
import '../../styles/LandingPage/Section1Card.css'

function Section1Card(props) {
  return (
    <div style={{backgroundImage: `url(${props.image})`}} className="cardSection1">
        <p>
        True essence of a <br /> destination.
        </p>
    </div>
  )
}

export default Section1Card