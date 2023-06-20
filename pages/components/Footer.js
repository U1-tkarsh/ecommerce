import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-image">
          <img
            className="image pt-1 w-100"
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAboutUs.085fb7a2.png&w=1920&q=100"
            alt=""
          />
        </div>
        <div className="footer-content ">
          <img
            className="logo"
            src="https://zetapp.in/_next/static/media/zet_logo_white.04e35c15.svg"
            alt="zindagi set"
          />
          <hr className="hr" />
          <div className="row text-white">
            <div className="col">
              <p className="footer-heading">Company</p>
              <Link className="text-white text-decoration-none" href="http://localhost:3000/About">About Us</Link>
              <p>Partner with us</p>
              <p>Blog</p>
            </div>
            <div className="col">
              <p className="footer-heading">Legal</p>
              <Link className="text-white text-decoration-none" href="https://zetapp.in/privacy-policy"> Privacy Policy</Link>
              <br />
              <Link className="text-white text-decoration-none" href="https://zetapp.in/terms-of-use">Terms of Use</Link>
            </div>
            <div className="col">
              <p className="footer-heading">Contact</p>
              <div className="contact-info">
                <img
                  className="contact-icon"
                  src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEmailIcon.58cee685.png&w=32&q=75"
                  alt=""
                />
                <Link className="text-white text-decoration-none" href="https://mail.google.com/mail/u/0/?fs=1&to=hi@zetapp.in&tf=cm">hi@zetapp.in</Link>
              </div>
              <div className="contact-info">
                <img
                  className="contact-icon"
                  src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPhoneIcon.dcc030db.png&w=32&q=75"
                  alt=""
                />
                <p>+91-7417274072</p>
              </div>
            </div>
            <div className="col">
              <p className="footer-heading">Social</p>
              <div className="social-icons">
              <Link className="text-white text-decoration-none" href="https://www.linkedin.com/company/zetapp-in/">
                <img
                  className="social-icon"
                  src="https://zetapp.in/_next/static/media/linkedin.99e56649.svg"
                  alt=""
                />
                </Link>
                <Link className="text-white text-decoration-none" href="https://www.instagram.com/zetapp.in/">
                <img
                  className="social-icon"
                  src="https://zetapp.in/_next/static/media/instagram.146ba33a.svg"
                  alt=""
                />
                </Link>
                <Link className="text-white text-decoration-none" href="https://www.facebook.com/zetapp.in/">
                <img
                  className="social-icon"
                  src="https://zetapp.in/_next/static/media/facebook.cccadfff.svg"
                  alt=""
                />
                </Link>
                <Link className="text-white text-decoration-none" href="https://web.telegram.org/k/#@GetOneCode">
                <img
                  className="social-icon"
                  src="https://zetapp.in/_next/static/media/TelegramImg.2d51b03f.svg"
                  alt=""
                />
                </Link>
                <Link className="text-white text-decoration-none" href="https://chat.whatsapp.com/HRlwYwVYRuaBuH3bRBrgMj">
                <img
                  className="social-icon"
                  src="https://zetapp.in/_next/static/media/WhatsappImg.a5c0a9a6.svg"
                  alt=""
                />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
