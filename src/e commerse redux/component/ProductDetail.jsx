import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action/action";
import { Link, useParams } from 'react-router-dom';
import '../css/App.css';

function DetailPage() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  /**
   * product details get id
   */
  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      setProduct(await res.json());
    };
    getProduct();
  }, []);

  /**
   * add to cart dis
   */
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  return (
    <div>
      <div id="product" className="py-3">
        {product.images.map((image) =>
          <div>
            <img
              key={image}
              src={image}
              alt={product.title}
              className="product_images"
            />
          </div>)}
        <div className="product_details">
          <Link to="/">
            <div className="back border-0">
              <span className="material-symbols-outlined">chevron_left</span>
              <h6>
                Back to
                {' '}
                <span href="">{product.category}</span>
              </h6>
            </div>
          </Link>
          <h2> {product.title}</h2>
          <h3>$ {product.price}</h3>
          <div className="about">
            <p>
              Product rating :-
              {' '}
              <span>{product.rating && product.rating.rate} &nbsp;
                <i className="fa fa-star"></i>
              </span>
            </p>
            <p>
              Product category :-
              {' '}
              <span>{product.category}</span>
              {' '}
            </p>
          </div>
          <p>
            {product.description}
          </p>
          <div className="cta py-3">
            <Link to='/cart'>
              <button
                className="btn btn-outline-primary"
                onClick={() => addProduct(product)}
              >add to cart
              </button>
            </Link>
            <div className="btn btn_outline-secondary">
              <span className="material-symbols-outlined">favorite</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default DetailPage;
