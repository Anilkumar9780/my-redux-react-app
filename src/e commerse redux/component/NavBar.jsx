import React, {useContext} from 'react';
import {DarkModeContext} from '../context/DarkModeContext';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


function NavBar() {
  const cart = useSelector((state) => state.handleCart);
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
  const handleClick = () => {
      toggleDarkMode();
  }
  return (
    <div className={darkMode ?  'text-white': 'text-dark' }>
      {/* navbar */}
      <header>
        <div className="bg-white shadow rounded-circle p-3">
          <i className="fa fa-shopping-bag fs-1 text-primary" />
        </div>
        <div className="header_language" style={{ marginLeft: '-20px' }}>
          <p>E-Shop</p>
        </div>
        <div className="header_add-to-cart">
          <Link to="/cart">
            <div className="btn btn_outline">
              <i className="fa fa-shopping-cart " />
              {' '}
              Cart ({cart.length})
            </div>
          </Link>
        </div>
      </header>
      <div id="menu">
        <div className="wrapper">
          <div className="menu_drawer">
            <span className="material-symbols-outlined">menu</span>
          </div>
          <div className="menu_links">
            <ul>
              <li>Home</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
            </ul>
          </div>
          <div className="menu_icons">
            <span className="material-symbols-outlined">favorite</span>
            <div className="vert_devider" />
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            {' '}
            <span className="material-symbols-outlined">search</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '-60px' }}>
        <div>
          <button
            type="button"
            id="toggle"
            className={darkMode ? `btn btn-outline-dark` : `btn btn-outline-white`}
            // className="btn btn-outline-primary"
            onClick={handleClick}
          >
            Dark
            <div className="toggle-inner" />
          </button>
        </div>
      </div>
      {/* <!--  Navbar  --> */}
    </div>
  );
}

export default NavBar;
