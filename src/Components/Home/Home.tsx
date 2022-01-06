import './Home.scss'
import chair2 from '../../assets/chair2.jpeg';
import product1 from '../../assets/product1.jpg';
import chair3 from '../../assets/chair3.jpeg';
import chair4 from '../../assets/chair4.jpeg';

const Home = () => {
    return (
        <>
            <div className='home-page-top'>
                <div className="home-page-top__main-heading">
                    <h1>Furniture that everyone Loves</h1>
                </div>
                <div className="home-page-top__sub-heading">
                    <h6 className='home-page-top__sub-heading--small-text'>We have 50,000+ Reviews and our customers trust on our Furniture and Quality Products.</h6>
                </div>
                <div className="home-page-top__buttons">
                    <button className='home-page-top__buttons--round-button home-page-top__buttons--dark-button'>Buy Now</button>
                    <button className='home-page-top__buttons--round-button home-page-top__buttons--light-button'>Explore</button>
                </div>
            </div>
            <div className='home-page-bottom'>
                <div className="home-page-bottom__column-1">
                    <h3 className='home-page-bottom__column-1--big-text'>Why we are best in the country</h3>
                    <p className='home-page-bottom__column-1--small-text'>We have 50,000+ reviews and our Customers trust on our Quality product and trust own our product. If you order more than 3,000 Rs we can deliver products at free of cost.</p>
                    <button className='home-page-bottom__column-1--circular-arrow'>&#x21AA;</button>
                </div>
                <div className="home-page-bottom__column-2">
                    <img src={chair4} alt="" />
                    <h5 className='home-page-bottom__column-2--prod-name'>Green Sofa Chair</h5>
                    <h3 className='home-page-bottom__column-2--prod-price'>₹14,560 </h3>
                </div>
                <div className="home-page-bottom__column-2">
                    <img src={product1} alt="" />
                    <h5 className='home-page-bottom__column-2--prod-name'>Saguaro with Wooden stand</h5>
                    <h3 className='home-page-bottom__column-2--prod-price'>₹ 1,200 </h3>

                </div>
                <div className="home-page-bottom__column-2">
                    <img src={chair3} alt="" />
                    <h5 className='home-page-bottom__column-2--prod-name'>Corn tree wit Wooden rack</h5>
                    <h3 className='home-page-bottom__column-2--prod-price'>₹ 900 </h3>

                </div>
            </div>
        </>

    )
}

export default Home
