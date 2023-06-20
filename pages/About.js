import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Link from "next/link";

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Add animation class when element is in view
        } else {
          entry.target.classList.remove("animate"); // Remove animation class when element is out of view
        }
      });
    });

    // Select all the images to be animated
    const images = document.querySelectorAll(".founder-img");

    images.forEach((image) => {
      observer.observe(image); // Observe each image
    });

    return () => {
      observer.disconnect(); // Clean up the observer on component unmount
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "sticky",
          //   top: 0,
          //   left: 0,
          //   right: 0,
          //   bottom: 0,
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <img
          className="article fixed"
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOurMission.13d85461.png&w=3840&q=100"
          alt=""
          style={{
            display: "block",
            maxWidth: "100%",
            height: "30rem",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            // justifyContent: "center",
            color: "white",
            fontSize: "40px",
            fontWeight: "bold",
          }}
          className="mt-lg-5"
        >
          OUR MISSION
        </div>
        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            fontSize: "24px",
            // fontWeight: "bold",
          }}
          className="mb-md-4"
        >
          Enabling financial inclusion for the next billion Indians & making
          their Zindagi Set. Building a platform that enables you to sell
          financial products & earn up to Rs. 1 lakh every month.
        </div>
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            // justifyContent: "center",
            color: "white",
            fontSize: "28px",
            fontWeight: "bold",
          }}
          className="pt-md-5 mt-md-4"
        >
          EARN BETTER. LIVE BETTER.
        </div>
      </div>
      <div className="evolved ">
        <h2 className="text-center mt-5 bold">How we evolved over the years</h2>
        <img
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGrowth.abe5b7d8.png&w=1920&q=100"
          alt=""
          srcset=""
          className="about rounded mx-auto d-block "
        />
      </div>
      <div style={{ backgroundColor: "rgb(250, 251, 254)" }}>
        <h2 className="bold mt-5 pt-5 " style={{ paddingLeft: "20vw" }}>
          Got Featured
        </h2>
        <div className="d-flex justify-content-center align-items-center mt-5">
        <Link className="text-white text-decoration-none" href="https://economictimes.indiatimes.com/tech/funding/onecode-has-raised-13-million-in-fresh-funding-led-by-general-catalyst/articleshow/90571172.cms">
          <img
            style={{ width: "214px", marginRight: "10px" }}
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInc42.7697aec8.png&w=640&q=75"
            alt=""
            className="m-5"
          />
          </Link>
          <Link className="text-white text-decoration-none" href="https://inc42.com/buzz/fintech-startup-onecode-raises-13mn-in-series-a-round-led-by-general-catalyst/">
          <img
            style={{ width: "214px", marginRight: "10px" }}
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEconomicTimes.5724030e.png&w=640&q=75"
            alt=""
          />
          </Link>
          <Link className="text-white text-decoration-none" href="https://www.livemint.com/companies/start-ups/onecode-raises-5-million-led-by-sequoia-s-surge-and-nexus-venture-partners-11626329270757.html">
          <img
            style={{ width: "214px", marginRight: "10px" }}
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmint.410f3a1a.png&w=640&q=75"
            alt=""
          />
          </Link>
          <Link className="text-white text-decoration-none" href="https://yourstory.com/2022/03/funding-alert-onecode-series-a-general-catalyst-financial-services">
          <img
            style={{ width: "214px", marginRight: "10px" }}
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYourStory.1efabc81.png&w=640&q=75"
            alt=""
          />
          </Link>
          <Link className="text-white text-decoration-none" href="https://www.business-standard.com/article/companies/onecode-raises-5-mn-led-by-sequoia-capital-s-surge-nexus-venture-partners-121071500470_1.html">
          <img
            style={{ width: "214px", marginRight: "10px" }}
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBusinessStandard.047c592d.png&w=640&q=75"
            alt=""
          />
          </Link>
        </div>
      </div>

      <div>
        <br />
        <br />
        <br />
        <h2 className="ms-5 ps-5 bold">Meet the Investors</h2>
        <br />
        <div className="mx-5 row mt-5 ps-5 founder-section founder-images">
          <img
            style={{ width: "10px" }}
            className="col founder-img"
            src="		https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany1.41d5c5bd.png&w=640&q=75"
            alt=""
            srcset=""
          />
          <img
            style={{ width: "10px" }}
            className="col founder-img"
            src="		https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany2.3f604866.png&w=640&q=75"
            alt=""
            srcset=""
          />
          <img
            style={{ width: "10px" }}
            className="col founder-img"
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany3.c16095cb.png&w=640&q=75"
            alt=""
            srcset=""
          />
          <img
            style={{ width: "10px" }}
            className="col founder-img"
            src="		https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInvCompany4.9acb56c2.png&w=640&q=75"
            alt=""
            srcset=""
          />
        </div>
        <div className="row zet">
          <div className="ms-5 row">
            <div className="col text-center">
              <img
                style={{ width: "15vw" }}
                className="col m-sm-2 m-lg-5 "
                src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv1.1c87bc0c.png&w=640&q=75"
                alt=""
                srcset=""
              />
              <p>Kunal Shah</p>
            </div>
            <div className="col text-center">
              <img
                style={{ width: "15vw" }}
                className="m-sm-2 m-lg-5"
                src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv3.1779e0d4.png&w=640&q=75"
                alt=""
                srcset=""
              />
              <p>dsf</p>
            </div>
            <div className="col text-center">
              <img
                style={{ width: "15vw" }}
                className="m-sm-2 m-lg-5"
                src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv4.b9325fa0.png&w=640&q=75"
                alt=""
                srcset=""
              />
              <p>dsa</p>
            </div>
            <div className="col text-center">
              <img
                style={{ width: "15vw" }}
                className="col m-sm-2 m-lg-5 img-fluid d-none d-lg-block " //to display in lg screen
                src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv2.331b31f9.png&w=640&q=75"
                alt=""
                srcset=""
              />
              <p className="img-fluid d-none d-lg-block">sad</p>
            </div>
          </div>
          <div className="ms-5 row">
            {/* <div className="col text-center">
              <img
                style={{ width: "15vw" }}
                className=" m-sm-2 m-lg-5 img-fluid  d-lg-none" //to hide in lg screen
                src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv2.331b31f9.png&w=640&q=75"
                alt=""
                srcset=""
              />
              <p className=" img-fluid  d-lg-none">fds</p>
            </div> */}
            <div className="col text-center">
              <img
                style={{ width: "15vw" }}
                className="m-sm-2 m-lg-5"
                src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv5.2e962217.png&w=640&q=75"
                alt=""
                srcset=""
              />
              <p>sdfa</p>
            </div>
            <div className="col text-center">
              <img
                style={{ width: "15vw" }}
                className="m-sm-2 m-lg-5"
                src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv6.7a958b9d.png&w=640&q=75"
                alt=""
                srcset=""
              />
              <p>dsa</p>
            </div>
            <div className="col text-center">
              <img
                style={{ width: "15vw" }}
                className=" m-sm-2 m-lg-5 img-fluid d-none d-lg-block "
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv7.3b8a633d.png&w=640&q=75"
                alt=""
                srcset=""
              />
              <p className="img-fluid d-none d-lg-block">sda</p>
            </div>
            <div className="col text-center">
              <img
                style={{ width: "15vw" }}
                className=" m-sm-2 m-lg-5 img-fluid d-none d-lg-block "
                src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv8.bcbe6091.png&w=640&q=75"
                alt=""
                srcset=""
              />
              <p className="img-fluid d-none d-lg-block">dada</p>
            </div>
          </div>
          <div className="ms-5 row">
            <div className="col text-center">
              <img
                style={{ width: "15vw" }}
                className="col m-sm-2 m-lg-5 img-fluid  d-lg-none"
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv7.3b8a633d.png&w=640&q=75"
                alt=""
                srcset=""
              />
              <p className="img-fluid  d-lg-none">gsd</p>
            </div>
            <div className="col text-center">
              <img
                style={{ width: "15vw" }}
                className="col m-sm-2 m-lg-5  img-fluid  d-lg-none"
                src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInv8.bcbe6091.png&w=640&q=75"
                alt=""
                srcset=""
              />
              <p className="img-fluid  d-lg-none">dfsfd</p>
            </div>
          </div>
        </div>
      </div>

      <div className="founder-section" style={{background: "linear-gradient(168deg, rgb(233, 244, 255) 0%, rgb(255, 255, 255) 100%)"}}>
        <h2 className="text-center pt-5">Meet our Founders</h2>
        <p className="text-center pb-3">Few words from founders desk</p>
        <div className="row founder-images ms-5">
          <div className="col founder-image">
            <img
              className="founder-img"
              src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FManish.519c8845.png&w=640&q=75"
              alt=""
              srcset=""
            />
            <p className="m-0 p-0">
              Manish Shara
              <img
                src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkedIn.6d99003c.png&w=96&q=75"
                alt=""
                srcset=""
                className="ms-lg-5 ps-lg-5 "
              />
            </p>
              <p>Co- Founder & CEO</p>
          </div>
          <div className="col">
            <img
              className="founder-img"
              src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYash.126e24ca.png&w=640&q=75"
              alt=""
              srcset=""
            />
            <p className="m-0 p-0">
            Yash Desai
              <img
                src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkedIn.6d99003c.png&w=96&q=75"
                alt=""
                srcset=""
                className="ms-lg-5 ps-lg-5 "
              />
            </p>
              <p>Co- Founder</p>
          </div>
          <div className="col">
            <img
              className="founder-img"
              src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLokesh.ead063e7.png&w=640&q=75"
              alt=""
              srcset=""
            />
            <p className="m-0 p-0">
            Lokesh Agarwal
              <img
                src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkedIn.6d99003c.png&w=96&q=75"
                alt=""
                srcset=""
                className="ms-lg-5 ps-lg-5 "
              /></p>
              <p>CTO</p>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
