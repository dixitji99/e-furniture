import './Navbar.scss'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className='navbar__logo-name'>
                    Furni
                </div>
                <div className="navbar__nav-links">
                    <ul>
                        {/* <li>Home</li>
                        <li>About us</li>
                        <li>Furniture</li>
                        <li>Blog</li>
                        <li>Contact us</li> */}
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About us</Link></li>
                        <li><Link to='/'>Furniture</Link></li>
                        <li><Link to='/'>Blog</Link></li>
                        <li><Link to='/'>Contact us</Link></li>
                    </ul>
                </div>
                <div className="navbar__login-button">
                    <button className='navbar__login-button--round-button'>Login</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
