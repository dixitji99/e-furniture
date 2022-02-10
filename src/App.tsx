
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home/Home';
import Page404 from './Components/NotFound/Page404';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Product from './Components/Product/Product';
import AllFurnitures from './Components/Furniture/AllFurnitures';
import AboutUs from './Components/About_us/AboutUs';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/Wishlist/Wishlist';

function App() {
  return (
    <div className='app-border'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='e-furniture/' element={<Home />} />
          <Route path='login/' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/e-furniture/furniture/:id' element={<Product />} />
          <Route path='/e-furniture/furniture' element={<AllFurnitures />} />
          <Route path='/e-furniture/about' element={<AboutUs />} />
          <Route path='/e-furniture/cart' element={<Cart />} />
          <Route path='/e-furniture/wishlist' element={<Wishlist />} />
          <Route path='*' element={<Page404 />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
