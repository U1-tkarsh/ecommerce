import React from "react";

function Cards() {
  return (
    <div className="container">
      <h2 className="text-center">Products on ZET</h2>
      <p className="text-center">We are trusted by the best brands in the country</p>
      <div className="row">
        <div className="col-md-6 col-lg-6 mb-3">
          <div className="card text-secondary p-4 custom1">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCC.28aa750d.png&w=828&q=75"
                  className="img-fluid rounded-start"
                  alt="Credit Card"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-dark">CREDIT CARDS</h5>
                  <p className="card-text">
                    100% Contactless Application Process with Instant Approval From Top Banks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 mb-3">
          <div className="card text-secondary p-4 custom2">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLoan.cadd88a9.png&w=828&q=75"
                  className="img-fluid rounded-start"
                  alt="Loan"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-dark">LOANS</h5>
                  <p className="card-text">
                    100% online process. Instant offers. Affordable Rate of Interest on loans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-6 mb-3">
          <div className="card text-secondary p-4 custom3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBNPL.3974f2b2.png&w=828&q=75"
                  className="img-fluid rounded-start"
                  alt="Buy Now Pay Later"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-dark">BUY NOW PAY LATER</h5>
                  <p className="card-text">
                    Short-term financing that allows consumers to make purchases and pay for them over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 mb-3">
          <div className="card text-secondary p-4 custom4">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAccountSave.69831c7c.png&w=828&q=75"
                  className="img-fluid rounded-start"
                  alt="Saving Account"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-dark">SAVING ACCOUNTS</h5>
                  <p className="card-text">
                    ZET offers a range of savings accounts that suit your personal banking needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
