import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action/action";

function ProductCard() {
  const [data, setData] = React.useState([]);
  console.log(data)
  React.useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products`);
      setData(await res.json());
    };
    getProduct();
  }, []);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
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
          <span href="#" role="button" className="btn btn-warning py-2 px-3 fs-5 text-light" style={{ backgroundColor: '#ff8100' }}>Purchase now</span>
          {' '}
          <span href="#" role="button" className="btn btn-light text-dark p-2 fs-5">Learn more</span>
        </div>
      </div>
      {/* <!--   Product section   --> */}
      <div className="py-5">
        <div className="container">
          <h3 className="fw-bold mb-sm-3 mb-md-5 text-center text-md-start">New products</h3>
          <div className="row g-3 d-flex justify-content-evenly">
            {/* <!--First Card---> */}
            {data.map((product) => {
              return <div key={product.id} className="col-md-3">
                <div className="card" style={{ width: '18rem' }}>
                  <Link to="/productdetail">
                    <img className="img" src={product.image}
                      alt={product.title}
                      width="100%" height="240px" />
                  </Link>
                  <div className="card-body">
                    <hr />
                    <h5 className="card-title">$ {product.price}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{product.title}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Camera - Black</h6>
                    <button type='button' onClick={() => addProduct(product)}  className="btn btn-primary card-link py-2 px-4">Add to card</button>
                    <span href="#" className="btn btn-outline-primary card-link">
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
            <hr />
            <h3 className="fw-bold  text-center text-md-start mb-3">Why choose Us?</h3>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-center">
                <div className="bg-white shadow-sm rounded-circle p-3">
                  <i className="fa fa-money fs-1 text-primary" />
                </div>
                <div className="ms-3 mt-md-5">
                  <h6 className="h6 fw-bold">Reasonable prices</h6>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
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
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 d-flex align-items-center">
                <div className="bg-white shadow-sm rounded-circle p-3">
                  <i className="fa fa-plane  fs-1 text-primary" />
                </div>
                <div className="ms-3 mt-md-5">
                  <h6 className="h6 fw-bold">Worldwide shipping</h6>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-center">
                <div className="bg-white shadow-sm rounded-circle p-3">
                  <i className="fa fa-users  fs-1 text-primary" />
                </div>
                <div className="ms-3 mt-md-5">
                  <h6 className="h6 fw-bold">Customer satisfaction</h6>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-center">
                <div className="bg-white shadow-sm rounded-circle p-3">
                  <i className="fa fa-thumbs-up  fs-1 text-primary" />
                </div>
                <div className="ms-3 mt-md-5">
                  <h6 className="h6 fw-bold">Happy customers</h6>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-center">
                <div className="bg-white shadow-sm rounded-circle p-3">
                  <i className="fa fa-sitemap fs-1 text-primary" />
                </div>
                <div className="ms-3 mt-md-5">
                  <h6 className="h6 fw-bold">Thousand items</h6>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
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
