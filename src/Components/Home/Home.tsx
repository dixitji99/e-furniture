import './Home.scss';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFurnitures } from '../../redux/slicer/thumbnailProductsSlice';
import { getThumbnailFurnitures } from '../../redux/slicer/thumbnailProductsSlice'
import { setFurnitures } from '../../redux/slicer/furnituresDataSlice';

const Home = () => {
    
    const dispatch = useDispatch();
    const fetchThumbnail = async () => {
        await axios.get(`http://localhost:3001/thumbnail-product`)
            .then(response => response.data)
            .then(res => {
                dispatch(addFurnitures(res))
            });
    }
    const fetchAllFurnitures = async () => {
        await axios.get(`http://localhost:3001/furnitures`)
            .then(response => response.data)
            .then(res => {
                dispatch(setFurnitures(res));
            });
    }
    const thumbnails = useSelector(getThumbnailFurnitures);
    useEffect(() => {
        fetchThumbnail();
        fetchAllFurnitures();
    }, []);

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
                    <button className='home-page-top__buttons--round-button home-page-top__buttons--dark-button'><Link to={`/e-furniture/furniture`} >Buy Now</Link></button>
                    <button className='home-page-top__buttons--round-button home-page-top__buttons--light-button'>Explore</button>
                </div>
            </div>
            <div className='home-page-bottom'>
                <div className="home-page-bottom__column-1">
                    <h3 className='home-page-bottom__column-1--big-text'>Why we are best in the country</h3>
                    <p className='home-page-bottom__column-1--small-text'>We have 50,000+ reviews and our Customers trust on our Quality product and trust own our product. If you order more than 3,000 Rs we can deliver products at free of cost.</p>
                    <button className='home-page-bottom__column-1--circular-arrow'><Link to={`/e-furniture/furniture`} >&#x21AA;</Link></button>
                </div>
                {
                    thumbnails.map(product => (
                        <Link to={`/e-furniture/furniture/${product.name.toLowerCase()}`} className="home-page-bottom__column-2" key={product.id}>
                            <img src={product.image} className='home-page-bottom__image' alt="" />
                            <h5 className='home-page-bottom__column-2--prod-name'>{product.name}</h5>
                            <h3 className='home-page-bottom__column-2--prod-price'>₹{product.price} </h3>
                        </Link>
                    ))
                }
            </div>
        </>

    )
}

export default Home
