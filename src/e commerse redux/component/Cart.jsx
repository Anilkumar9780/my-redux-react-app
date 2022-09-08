import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { delCart, IncreaseQty, DecreaseQty } from "../redux/action/action";

export default function Cart() {
  const cart = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleclose = (product) => {
    dispatch(delCart(product));
  };

  const IncreaseQuantity = (product) => {
    dispatch(IncreaseQty(product));
  };

  const DecreaseQuantity = (product) => {
    dispatch(DecreaseQty(product));
  };
  
  const total = Object.values(cart)
  .reduce((result, cartItem) => result + cartItem.price*cartItem.qty, 0);
  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {cart.length}{' '}items</h5>
                </div>
                <div className="card-body">
                  {cart.length > 0 ? (cart.map((product) => {
                    return <div key={product.id} className="row">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-100"
                          />
                          <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p><strong>{product.title}</strong></p>
                        <p>Color: blue</p>
                        <p>Size: M</p>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm me-1 mb-2"
                          data-mdb-toggle="tooltip"
                          title="Remove product"
                          onClick={() => handleclose(product)}
                        >
                          <i className="fa fa-trash" />
                        </button>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxwidth: ' 300px' }}>
                          <button
                            type="button"
                            className="btn btn-primary px-3 me-2"
                            onClick={() => DecreaseQuantity(product)}
                          >
                            <i className="fa fa-minus" />
                          </button>
                          <div className="form-outline">
                            <input  name="quantity" value={product.qty} type="text" className="form-control" />
                            <span className="form-label" htmlFor="form1">Quantity</span>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary px-3 ms-2"
                            onClick={() => IncreaseQuantity(product)}
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                        <p className="text-start text-md-center">
                          <strong>${(product.price * product.qty).toFixed(2)}</strong>
                        </p>
                      </div>
                      <hr className="my-4" />
                    </div>
                  })) : (
                    <div>
                      <h2>Your Cart is Empty!</h2>
                      <hr className="my-4" />
                    </div>)}
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p><strong>We accept</strong></p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/pp-acceptance-large.png"
                    alt="Buy now with PayPal"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li
                      className="list-group-product d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                    >
                      Products
                      <span>$ {total}</span>
                    </li>
                    <li className="list-group-product d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li
                      className="list-group-product d-flex justify-content-between align-items-center border-0 px-0 mb-3"
                    >
                      <div>
                        <hr />
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span><strong>$ {total}</strong></span>
                    </li>
                  </ul>
                  <button type="button" className="btn btn-primary btn-lg btn-block">
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
}
