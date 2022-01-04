import React from 'react'
import './Home.scss'
const Home = () => {
    return (
        <div className='home-page'>
            <div className="home-page__main-heading">
                <h1>Furniture that everyone Loves</h1>
            </div>
            <div className="home-page__sub-heading">
                <h6 className='home-page__sub-heading--small-text'>We have 5000+ Reviews and our customers trust on our Furniture and Quality Products.</h6>
            </div>
            <div className="home-page__buttons">
                <button className='home-page__buttons--round-button home-page__buttons--dark-button'>Buy Now</button>
                <button className='home-page__buttons--round-button home-page__buttons--light-button'>Explore</button>
            </div>
        </div>
    )
}

export default Home
