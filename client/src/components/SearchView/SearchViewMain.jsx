import React from 'react'
import ExploreCity from '../../components/Explore/ExploreCity'
import '../../styles/Explore/ExploreMain.css'
import '../../styles/SearchViewMain.css'
import cardImg1 from '../../assets/img2.png'
import Section2Card from '../landing-page/Section2Card'

function ExploreMain() {




    return (
        <div className='exploreMain'>
            <div className='ExploreTop2 container pt-4'>
                <div className='lists'>
                    <div className='price'>
                        <div class="dropdown">
                            <button class="dropbtn">Prices</button>
                            <div class="dropdown-content">
                                <div className='p-3'>Low to High</div>
                                <div className='p-3'>High to Low</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='top2-bottom'></div>
            </div>
            <div className="searchCardCont container">
                <div className="card">
                <Section2Card  image={cardImg1} rating={4.5} numReviews={4} desc={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem... '} price={499} />
                </div>
                <div className="card">
                <Section2Card image={cardImg1} rating={4.5} numReviews={4} desc={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem... '} price={499} />
                </div>
                <div className="card">
                <Section2Card image={cardImg1} rating={4.5} numReviews={4} desc={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem... '} price={499} />
                </div>
                <div className="card">
                <Section2Card  image={cardImg1} rating={4.5} numReviews={4} desc={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem... '} price={499} />
                </div>
                <div className="card">
                <Section2Card  image={cardImg1} rating={4.5} numReviews={4} desc={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem... '} price={499} />
                </div>
                <div className="card">
                <Section2Card  image={cardImg1} rating={4.5} numReviews={4} desc={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem... '} price={499} />
                </div>
            </div>
        </div>
    )
}

export default ExploreMain