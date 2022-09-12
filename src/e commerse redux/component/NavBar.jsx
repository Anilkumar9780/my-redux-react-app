import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Select, FormHelperText, FormControl, InputLabel, MenuItem } from '@mui/material';


function NavBar({ filterProduct, data, setData }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const cart = useSelector((state) => state.handleCart);
  const [selected, setSelected] = useState();

  /**
   * dark mode and light mode onclick
   */
  const handleClick = () => {
    toggleDarkMode();
  };


  /**
   * sorting by Name Ascending Orders
   */
  const sortAscending = () => {
    const ascending = [...data];
    const sorting = ascending.sort((a, b) => a.price > b.price ? 1 : -1);
    setData(sorting);
  };

  /**
  * Sorting by Name Descending Oders
  */
  const sortDescending = () => {
    const sortbyDescending = [...data];
    const sort = sortbyDescending.sort((a, b) => a.price > b.price ? -1 : 1);
    setData(sort);
  };

  /**
   * 
   * @param {string} event traget value in input box
   */
  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };
  return (
    <div className={darkMode ? 'text-white' : 'text-dark'}>
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
            <ul style={{ cursor: 'pointer' }}>
              <Link to='/' ><li>Home</li></Link>
              <li onClick={() => filterProduct("men's clothing")} >Men</li>
              <li onClick={() => filterProduct("women's clothing")}>Women</li>
              <li>About</li>
            </ul>
          </div>
          <div className="menu_icons">
            <span className="material-symbols-outlined">favorite</span>
            <div className="vert_devider" />
            <FormControl
              style={{ fontSize: '10px', marginTop: '-18px', marginLeft: '30px' }}
              size='small'
              variant='standard'
            >
              <InputLabel>Sort by</InputLabel>
              <Select value={selected} onChange={selectionChangeHandler}>
                <MenuItem onClick={sortAscending} value={2}>Low to hight</MenuItem>
                <MenuItem onClick={sortDescending} value={3}>Hight to low</MenuItem>
              </Select>
              <FormHelperText>Sort By Price</FormHelperText>
            </FormControl>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '-60px' }}>
        <div>
          <button
            type="button"
            id="toggle"
            className={darkMode ? `btn btn-outline-dark` : `btn btn-outline-white`}
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
