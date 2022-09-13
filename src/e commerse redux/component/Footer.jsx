import React from 'react';
import '../css/App.css';

export default function Footer() {
  return (
    <div>
      <div className="py-5">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-12 col-lg-3 mb-3">
              <div className="">
                <i className="fa fa fa-shopping-bag fs-1 text-primary shadow rounded-circle p-3 bg-white" />
                <p style={{
                  marginLeft: '80px', fontSize: '35px', marginTop: '-60px', fontFamily: 'FontAwesome', fontWeight: '100px',
                }}
                >
                  E-Shop
                </p>
              </div>
              <p className="mt-4">
                © 2020- 2021 Copyright.
                <br />
                All rights reserved.
              </p>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2 cursor-pointer">
              <h6 className="h6 fw-bold">Store</h6>
              <span className="text-decoration-none cursor-pointer">About us</span><br />
              <span className="text-decoration-none cursor-pointer">Find stories</span><br />
              <span className="text-decoration-none cursor-pointer">Categories</span><br />
              <span className="text-decoration-none cursor-pointer">Blogs</span>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2 cursor-pointer">
              <h6 className="h6 fw-bold">Store</h6>
              <span className="text-decoration-none cursor-pointer">About us</span><br />
              <span className="text-decoration-none cursor-pointer">Find stories</span><br />
              <span className="text-decoration-none cursor-pointer">Categories</span><br />
              <span className="text-decoration-none cursor-pointer">Blogs</span>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2 cursor-pointer">
              <h6 className="h6 fw-bold">Store</h6>
              <span className="text-decoration-none cursor-pointer">About us</span><br />
              <span className="text-decoration-none cursor-pointer">Find stories</span><br />
              <span className="text-decoration-none cursor-pointer">Categories</span><br />
              <span className="text-decoration-none cursor-pointer">Blogs</span>
            </div>
            <div className="col-lg-3 mt-3 mt-lg-0 cursor-pointer" >
              <h6 className="h6 fw-bold">Newsletter</h6>
              <p>Stay in touch with latest updates about our products and offers</p>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" />
                &nbsp;
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="button">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
