import './Navbar.scss'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';


function Navbar() {


    return (
        <>

            <div className="navbar">
                <div className='navbar__logo-name'>
                    Furni
                </div>
                <div className="navbar__side-navbar">
                    <Sidebar />
                </div>
                                
                <div className="navbar__nav-links">
                    <ul>
                        <li><Link to='e-furniture/'>Home</Link></li>
                        <li><Link to='e-furniture/about/'>About us</Link></li>
                        <li><Link to='e-furniture/furniture/'>Furnitures</Link></li>
                        <li><Link to='e-furniture/cart/'>Cart</Link></li>
                        <li><Link to='e-furniture/wishlist/'>Wishlist</Link></li>
                    </ul>
                </div>
                <div className="navbar__login-button">
                    <Link to='login/'><button className='navbar__login-button--round-button'>Login</button></Link>
                </div>

            </div>
        </>
    )
}

export default Navbar
