import React, { useEffect, useState } from "react";

function Progressbar() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      id="carouselExampleControls"
      className="d-flex justify-content-center carousel slide"
      data-bs-ride="carousel"
    >
      <div className="rectangle">
        <div className="square">
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeeps1.2a271552.png&w=750&q=75"
            alt=""
            srcSet=""
          />
          <div className="carousel-inner">
            <h3 className="text-white font-weight-bold">THE ZET EFFECT</h3>
            <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`}>
              <h2 className="d-block w-100 para text-white font-weight-bold">
                We helped customers in more than 50 cities to get their first
                financial product
              </h2>
            </div>
            <div className={`carousel-item ${activeSlide === 1 ? "active" : ""}`}>
              <h2 className="d-block w-100 para text-white font-weight-bold">
                14 Lakh+ Financial Advisor across India are using ZET to
                increase their income.
              </h2>
            </div>
            <div className={`carousel-item ${activeSlide === 2 ? "active" : ""}`}>
              <h2 className="d-block w-100 para text-white font-weight-bold">
                More than ₹20 Cr earned by our Agents by selling Credit Cards
                and Loans
              </h2>
            </div>
          </div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Progressbar;
