import React from "react";
import Link from "next/link";
import { useEffect, useState } from 'react';

function Navbar() {

  const [isScreenSizeAboveMd, setIsScreenSizeAboveMd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeAboveMd(window.innerWidth >= 768); // Set the threshold according to your "md" breakpoint
    };

    handleResize(); // Call the function initially to set the initial value

    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup the event listener on component unmount
    };
  }, []);

  console.log(isScreenSizeAboveMd);

  return (
    <div>
      <nav className="p-0 navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img
              src="https://zetapp.in/_next/static/media/zet_new_logo.7adcc993.svg"
              style={{
                height: "7vh",
                color: "inherit",
              }}
            />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={` ${isScreenSizeAboveMd ? 'text-center' : 'position-absolute top-0 end-0'} collapse navbar-collapse mt-4 me-5`} id="navbarSupportedContent">
            <ul className={`navbar-nav ${isScreenSizeAboveMd ? 'ms-auto' : ''}`}>
              <li className="nav-item">
                <h5>
                  <Link className="evening nav-link active text-secondary" href="/">
                    Home
                  </Link>
                </h5>
              </li>
              <li className="nav-item">
                <h5>
                  <Link className="evening nav-link text-secondary" href="/About">
                    About Us
                  </Link>
                </h5>
              </li>
              <li className="nav-item">
                <h5>
                  <Link className="evening nav-link me-2 text-secondary" href="/Partner With Us">
                    Partner With Us
                  </Link>
                </h5>
              </li>
              <li className="nav-item">
                <h5>
                  <Link className="evening nav-link text-secondary" href="/Blog">
                    Blog
                  </Link>
                </h5>
              </li>
              <li  className="text-white nav-item">
                <h5>
                  <Link style={{backgroundColor: "#2075f0"}} className="evening nav-link text-white text-lg-secondary" href="/Download ZET">
                    Download ZET
                  </Link>
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
