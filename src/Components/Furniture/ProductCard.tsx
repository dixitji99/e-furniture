import { AiOutlineHeart } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { furnitures } from '../../model/furnitures';
import './ProductCard.scss'

interface PropType {
    product: furnitures;
}

function ProductCard({ product }: PropType) {
    return (
        <div className='product-card'>
            <img src={product.image} alt={product.name} className='product-card__product-image' />
            <div className="product-card__product-details">
                <h4 className='product-card__product-name'>{product.name}</h4>
                <span className='product-card__rating-stars'>
                    <FaStar className='product-card__rating-stars--checked' />
                    <FaStar className='product-card__rating-stars--checked' />
                    <FaStar className='product-card__rating-stars--checked' />
                    <FaStar className='product-card__rating-stars--checked' />
                </span>
                <h3 className='product-card__product-price'>₹{product.price}</h3>
            </div>
        </div>
    );
}

export default ProductCard;
