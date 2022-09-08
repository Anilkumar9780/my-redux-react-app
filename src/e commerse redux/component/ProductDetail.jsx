import React from 'react';
import { Link } from 'react-router-dom';

function DetailPage() {
  return (
    <div>
      <div id="product" className="py-3">
        <div className="product_images" />
        <div className="product_details">
          <Link to="/">
            <div className="back border-0">
              <span className="material-symbols-outlined">chevron_left</span>
              <h6>
                Back to
                {' '}
                <span href="">Woman</span>
              </h6>
            </div>
          </Link>
          <h2>The Atelier Tailored Coat</h2>
          <h3>$499.00</h3>
          <div className="about">
            <p>
              Availability :
              <span>In stock</span>
            </p>
            <p>
              Product Code :
              {' '}
              <span>#4657</span>
            </p>
            <p>
              Tags :
              {' '}
              <span>Fashion, Hood, Classic</span>
              {' '}
            </p>
          </div>
          <p>
            Sleek, polished, and boasting an impeccably modern fit, this blue, 2-but-
            ton Lazio suit features a notch lapel, flap pockets, and accompanying flat
            front trousers—all in pure wool by Vitale Barberis Canonico.
          </p>
          <ul>
            <li>Dark blue suit for a tone-on-tone look</li>
            <li>Regular fit</li>
            <li>100% Cotton</li>
            <li>Free shipping with 4 days delivery</li>
          </ul>
          <span href="">Clear Selection</span>
          <div className="cta">
            <div className="btn btn_primary">add to cart</div>
            <div className="btn btn_outline_secondary">
              <span className="material-symbols-outlined">favorite</span>
              add to wishlist
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default DetailPage;
