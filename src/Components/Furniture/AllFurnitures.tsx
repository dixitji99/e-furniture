import { useSelector } from 'react-redux';
import './AllFurnitures.scss';
import { getAllFurnitures } from '../../redux/slicer/furnituresDataSlice';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

function AllFurnitures() {
    const furnitures = useSelector(getAllFurnitures);

    return (<>
        <div className='product-spec'>
            {
                furnitures.map(product => (
                    <>
                        <Link to={`/e-furniture/furniture/${product.name.toLowerCase()}`} ><ProductCard product={product} key={product.id} /></Link>
                    </>
                ))
            }
        </div>

    </>);
}

export default AllFurnitures;
