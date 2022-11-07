import React from 'react'
import '../../styles/Explore/ExploreTop.css'

function ExploreTop(props) {
  return (
    <div className='explore'>
      <div className='ExploreTop'>
        <div className='ExploreTop1'>
        <div className='ExploreTop-left'>
            <div className='ExploreTop-head'>Explore Culture of {props.state}</div>
            <div className='ExploreTop-info'>A hotel can pamper you with luxury, but a homestay almost always gifts you with a story.</div>
          </div>
          <div className='ExploreTop-right'>
            <img src={props.image}></img>
          </div>
        </div>
        <div className='ExploreTop2'>
          <div className='lists'>
            <div className='price'>
              <div class="dropdown">
                <button class="dropbtn">Prices</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
            <div className='cities'>
              <div class="dropdown">
                <button class="dropbtn">Cities</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div>
          <div className='top2-bottom'></div>
        </div>
      </div>
    </div>
  )
}

export default ExploreTop