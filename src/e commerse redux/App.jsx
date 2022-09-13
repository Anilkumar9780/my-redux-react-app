import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/App.css';
import NavBar from './component/NavBar';
import ProductCard from './component/ProductCard';
import Footer from './component/Footer';
import Cart from './component/Cart';
import ProductDetail from './component/ProductDetail';
import { DarkModeContext } from './context/DarkModeContext';

export default function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [data, setData] = useState([]);
   
  /**
   * get the data using fack api
   */
  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://akestoreapi.com/products`);
      setData(await res.json());
    };
    getProduct();
  }, []);

  return (
    <div style={{
      backgroundColor: darkMode ? `black` : `white`,
      color: darkMode ? `white` : `black`,
    }}>
      <BrowserRouter>
        <NavBar data={data} setData={setData} />
        <Routes>
          <Route exact path="/" element={<ProductCard data={data} />} />
          <Route path="/productinfo/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

// https://codesandbox.io/s/7ommp?file=/src/reducers/index.js:0-2038
