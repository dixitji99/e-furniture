
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='app-border'>
      <Router>
        <Navbar />

        <Routes>
          <Route path='e-furniture/' element={<Home />} ></Route>
          <Route path='login/' element={<Login />} ></Route>
          <Route path='/' element={<Home />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
