import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/App.css';
import NavBar from './component/NavBar';
import ProductCard from './component/ProductCard';
import Footer from './component/Footer';
import Cart from './component/Cart';
// import ProductDetail from './component/ProductDetail';
import {DarkModeContext} from './context/DarkModeContext';

export default function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div  style={{
          backgroundColor: darkMode ? 'black' : 'white',
          color:  darkMode ? 'white' : 'black',
        }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ProductCard />} />
            {/* <Route exact path="/productdetail" element={<ProductDetail />} /> */}
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
}


