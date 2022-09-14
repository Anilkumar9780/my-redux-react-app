import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action/action";
import { Link } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Select, FormHelperText, FormControl, InputLabel, MenuItem } from '@mui/material';


function ProductCard({ data }) {
  const [product, setProduct] = useState([]);
  const [loadMore, setLoadMore] = useState(12);
  const [searched, setSearched] = useState('');
  const [selected, setSelected] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);

  /**
   * 
   * @param {string} event 
   */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   * set the Product in others state
   */
  useEffect(() => {
    setProduct(data);
  }, [data])

  /**
   * Load More Button 
   */
  const handleLoadMore = () => {
    setLoadMore(next => next + 4)
  };

  /**
   * add to cart product
   * @param {string} product 
   */
  const addProduct = (id) => {
    dispatch(addCart(id));
  };

  /**
  * 
  * @param {string} searchedVal 
  */
  const handleOnSearchFolderName = (searchedVal) => {
    const searchProductName = data.filter((products) => {
      return products.title.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setProduct(searchProductName);
  };

  /**
   * search value cancel
   */
  const cancelSearch = () => {
    setSearched("");
    handleOnSearchFolderName(searched);
  };

  /**
   * sorting by Name Ascending Orders
   */
  const sortAscending = () => {
    const ascending = [...data];
    const sorting = ascending.sort((a, b) => a.price > b.price ? 1 : -1);
    setProduct(sorting);
  };

  /**
  * Sorting by Name Descending Oders
  */
  const sortDescending = () => {
    const sortbyDescending = [...data];
    const sort = sortbyDescending.sort((a, b) => a.price > b.price ? -1 : 1);
    setProduct(sort);
  };

  /**
   * 
   * @param {string} event traget value in input box
   */
  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };
  /**
   *  filter product category (men and women)
   * @param {string} cat 
   */
  const filterProduct = (cat) => {
    const filterProductCategory = data.filter((x) => x.category === cat);
    setProduct(filterProductCategory);
    setAnchorEl(null);
  };
  return (
    <div>
      {/* <!-- Content ---> */}
      <div className="bg-primary py-5" style={{ marginTop: '30px' }}>
        <div className="container py-5 text-light">
          <h1 className="display-1">
            Best products &
            <br />
            {' '}
            Brands in our store
          </h1>
          <p className="lead">Trendy Products, Factory Prices, Excellent Service</p>
          <span role="button" className="btn btn-warning py-2 px-3 fs-5 text-light" >Purchase now</span>
          {' '}
          <span role="button" className="btn btn-light text-dark p-2 fs-5">Learn more</span>
        </div>
      </div>
      <div className='py-2'>
        <hr />
        <div className='categoryMenuDropdown' style={{ marginLeft: '30px', width: '150px' }} >
          <Button
            style={{ backgroundColor: 'lightgrey', border: 'none', padding: '10px', borderRadius: '5px' }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Category &nbsp;<i className="fa fa-arrow-down" style={{ fontSize: '15px' }} />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
          <MenuItem onClick={() => filterProduct(data)}>All</MenuItem>
            <MenuItem onClick={() => filterProduct("men's clothing")}> Men's clothing</MenuItem>
            <MenuItem onClick={() => filterProduct("women's clothing")}> Women's clothing</MenuItem>
            <MenuItem onClick={() => filterProduct("jewelery")}> Jewelery</MenuItem>
            <MenuItem onClick={() => filterProduct("electronics")}> Electronics</MenuItem>
          </Menu>
        </div>
        <SearchBar
          style={{ width: '600px', marginLeft: '370px', marginTop: '-48px' }}
          className='serachbar'
          value={searched}
          onChange={(searchVal) => handleOnSearchFolderName(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <FormControl
          style={{ fontSize: '10px', marginTop: '-65px', marginLeft: '1180px' }}
          size='small'
          variant='standard'
        >
          <InputLabel>Sort by</InputLabel>
          <Select value={selected} onChange={selectionChangeHandler}>
            <MenuItem onClick={sortAscending} value={3}>Low to hight</MenuItem>
            <MenuItem onClick={sortDescending} value={4}>Hight to low</MenuItem>
          </Select>
          <FormHelperText>Sort By Price</FormHelperText>
        </FormControl>
        <hr style={{ marginTop: '-14px' }} />
      </div>
      {/* <!--   Product section   --> */}
      <div className="py-5">
        <div className="container">
          <h3 className="fw-bold mb-sm-3 mb-md-5 text-center text-md-start">New products</h3>
          <div className="row g-3 d-flex justify-content-evenly">
            {/* <!--First Card---> */}
            {product?.slice(0, loadMore).map((product) => {
              return <div key={product.id} className="col-md-3">
                <div className="card" style={{ width: '17rem' }}>
                  <Link to={`/productinfo/${product.id}`}>
                    <img className="img text-center" src={product.image}
                      alt={product.title}
                      width="100%" height="240px" />
                  </Link>
                  <div className="card-body">
                    <hr />
                    <h5 className="card-title text-dark">$ {product.price}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{product.title.substring(0, 12)}</h6>
                    <button type='button' onClick={() => addProduct(product)} className="btn btn-primary card-link py-2 px-4">Add to card</button>
                    <span className="btn btn-outline-primary card-link">
                      {' '}
                      <i className="fa fa-heart" />
                    </span>
                  </div>
                </div>
              </div>
            })}
            {/* <!--First Card---> */}
          </div>
        </div>
        {/* <!--  New section --> */}
        <div className="py-5 px-3">
          <div className="container py-5">
            {data.length > 0 ? (
              <button
                onClick={handleLoadMore}
                className='btn btn-outline-primary text-center'
              >Load More...
              </button>) : (<div />)}
            <hr />
            <h3 className="fw-bold  text-center text-md-start mb-3">Why choose Us?</h3>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-center">
                <div className="bg-white shadow-sm rounded-circle p-3">
                  <i className="fa fa-money fs-1 text-primary" />
                </div>
                <div className="ms-3 mt-md-5">
                  <h6 className="h6 fw-bold">Reasonable prices</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-center">
                <div className="bg-white shadow-sm rounded-circle p-3">
                  <i className="fa fa-star  fs-1 text-primary" />
                </div>
                <div className="ms-3 mt-md-5">
                  <h6 className="h6 fw-bold">
                    Best quality
                  </h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 d-flex align-items-center">
                <div className="bg-white shadow-sm rounded-circle p-3">
                  <i className="fa fa-plane  fs-1 text-primary" />
                </div>
                <div className="ms-3 mt-md-5">
                  <h6 className="h6 fw-bold">Worldwide shipping</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-center">
                <div className="bg-white shadow-sm rounded-circle p-3">
                  <i className="fa fa-users  fs-1 text-primary" />
                </div>
                <div className="ms-3 mt-md-5">
                  <h6 className="h6 fw-bold">Customer satisfaction</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-center">
                <div className="bg-white shadow-sm rounded-circle p-3">
                  <i className="fa fa-thumbs-up  fs-1 text-primary" />
                </div>
                <div className="ms-3 mt-md-5">
                  <h6 className="h6 fw-bold">Happy customers</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-center">
                <div className="bg-white shadow-sm rounded-circle p-3">
                  <i className="fa fa-sitemap fs-1 text-primary" />
                </div>
                <div className="ms-3 mt-md-5">
                  <h6 className="h6 fw-bold">Thousand items</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* <!-- Footer --> */}
      </div>
    </div>
  );
}
export default ProductCard;
