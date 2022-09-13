import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function NavBar({ data, setData }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const cart = useSelector((state) => state.handleCart);

  /**
   * dark mode and light mode onclick
   */
  const handleClick = () => {
    toggleDarkMode();
  };

  /**
  *  filter product category (men and women)
  * @param {string} cat 
  */
  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setData(updateList);
  };
  
  return (
    <div className={darkMode ? ('text-white') : ('text-dark')}>
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
            <div className="btn btn_outline ">
              <i className="fa fa-shopping-cart bg-red" />
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
            <ul style={{ cursor: 'pointer', border: 'none' }}>
              <Link to='/' ><li className='text-decoration-none'>Home</li></Link>
              <li onClick={() => filterProduct("men's clothing")} >Men</li>
              <li onClick={() => filterProduct("women's clothing")}>Women</li>
              <li>About</li>
            </ul>
          </div>
          <div className="menu_icons">
            <span className="material-symbols-outlined">favorite</span>
            <div className="vert_devider" />
            <div>
              <button
                type="button"
                id="toggle"
                className={darkMode ? (`material-symbols-outlined `) : (`material-symbols-outlined `)}
                onClick={handleClick}
              >
                switch
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '-20px' }} />
      {/* <!--  Navbar  --> */}
    </div>
  );
}

export default NavBar;
