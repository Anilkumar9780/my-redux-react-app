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
  const [data, setData] = useState([]);
  const { darkMode } = useContext(DarkModeContext);
   
  /**
   * get the data using fack api
   */
  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
      setData(await res.json());
    };
    getProduct();
  }, []);
console.log(data);
  return (
    <div  className={darkMode ? ('bg-dark text-white') : ('bg-white text-dark')}>
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
