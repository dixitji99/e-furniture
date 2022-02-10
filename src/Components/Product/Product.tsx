import { useState } from 'react';
import { AiOutlineStar, AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getAllFurnitures } from '../../redux/slicer/furnituresDataSlice';
import './Product.scss'

const Product = () => {
    const [whishlistChecked, setwhishlistChecked] = useState(false);
    const params = useParams();
    const product = useSelector(getAllFurnitures).find(prod => prod.name.toLowerCase() === params.id);
    return (
        <>
            <div className="product-description">
                <div className='product-description__image-block'>
                    <img src={product?.image} className='product-description__product-image' alt={product?.name} />
                </div>
                <div className="product-description__product-detail">
                        <AiOutlineHeart className={!whishlistChecked ? 'product-description__wishlist-icon product-description__wishlist-icon--checked' : 'product-description__wishlist-icon product-description__wishlist-icon--unchecked'} onClick={() => setwhishlistChecked(!whishlistChecked)} />
                        <AiFillHeart className={whishlistChecked ? 'product-description__wishlist-icon product-description__wishlist-icon--checked' : 'product-description__wishlist-icon product-description__wishlist-icon--unchecked'} onClick={() => setwhishlistChecked(!whishlistChecked)} />
                    <h3 className='product-description__product-detail--heading-text'>{product?.name}</h3>
                    <span className='product-description__rating-stars'>
                        <AiFillStar className='product-description__rating-stars--checked' />
                        <AiFillStar className='product-description__rating-stars--checked' />
                        <AiFillStar className='product-description__rating-stars--checked' />
                        <AiFillStar className='product-description__rating-stars--checked' />
                        <AiFillStar className='product-description__rating-stars--unchecked' />
                        {/* <AiOutlineStar className='product-description__rating-stars--checked'/> */}
                        <text className='product-description__rating-stars--small-text'>4.0</text>
                    </span>
                    <h2 className='product-description__product-detail--price-text'>₹{product?.price}</h2>
                    <span className='product-description__product-detail--small-text'><b>Color: </b>Green</span>
                    <span className='product-description__product-detail--small-text'><b>Weight: </b>{product?.weight}</span>
                    <button className='product-description__product-detail--round-button' onClick={() => alert('Functionality Yet To be added')}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Product
