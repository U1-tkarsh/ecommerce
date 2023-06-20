import React from "react";

function Grid() {
  return (
    <div className="container">
      <div className="float-start me-3 mt-5 content-to-hide d-none d-lg-block">
        <h5>Why Choose Us</h5>
        <p>Why we are loved by our customers</p>
        <img
          src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwhyUsHero.76b303ee.png&w=384&q=75"
          alt=""
        />
      </div>
      <div className="row">
      <div className="row">
        <div className="col">
          <img
            src="	https://zetapp.in/_next/static/media/zero_investment.d5743aab.svg"
            alt=""
            srcset=""
          />
          <h5>Zero Investment</h5>
          <p>Build your business without any investment</p>
        </div>
        <div className="col">
          <img
            src="	https://zetapp.in/_next/static/media/quick_payout.1d689e09.svg"
            alt=""
            srcset=""
          />
          <h5>Quick Payout</h5>
          <p>Direct Payout in your bank account in short time</p>
        </div>
      </div>

      <div className="row ">
        <div className="col">
          <img
            src="	https://zetapp.in/_next/static/media/Fin_products.0e8a0582.svg"
            alt=""
            srcset=""
          />
          <h5>Limitless Earnings</h5>
          <p>Direct Payout in your bank account in short time</p>
        </div>
        <div className="col">
          <img
            src="https://zetapp.in/_next/static/media/Icon_support.c8382fc1.svg"
            alt=""
            srcset=""
          />
          <h5>Training & Upskilling</h5>
          <p>Get trained by finance and sales experts</p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <img
            src="	https://zetapp.in/_next/static/media/customerSupport.5780cd23.svg"
            alt=""
            srcset=""
          />
          <h5>Customer Support</h5>
          <p>Access tools and content to build relationship</p>
        </div>

        <div className="col">
          <img
            src="https://zetapp.in/_next/static/media/financialProduct.1b3d6eec.svg"
            alt=""
            srcset=""
          />
          <h5>Financial Products</h5>
          <p>Trustworthy & high-rated products & categories</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Grid;
