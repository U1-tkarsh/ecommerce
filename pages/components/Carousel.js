const Carousels = ({ slides }) => {
  return (
    <div>
      {/* <div className="Morning">
        <img className=" float-end img-fluid d-none d-lg-block me-5" src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroImgNew.d1d917dd.png&w=750&q=75" alt="" srcset="" />
      </div> */}
      <div
        className="container text-center mb-5"
        style={{ backgroundColor: " rgb(233, 244, 255)" }}
      >
        <br />
        <br />
        <div className="Morning">
          <img
            className=" float-end img-fluid d-none d-lg-block me-5"
            src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroImgNew.d1d917dd.png&w=750&q=75"
            alt=""
            srcset=""
          />
        </div>
        <h2 style={{ fontSize: "40px", fontWeight: "900", lineHeight: "52px", marginBottom: "12px"}} className="boldest text-black">Become a Financial Advisor and</h2>
        <h2 style={{color: "rgb(38, 78, 255)", fontSize: "40px", fontWeight: "900", lineHeight: "48px"}}>Earn Rs.1 Lakh/Month</h2>
        <br />
        <div>
          <p >No investment required</p>
        </div>
        <br />
        <div>
          <img
            src="	https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"
            alt=""
            srcset=""
          />
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className="boldest container text-center pt-5 ">
        <h5>Top Brands on ZET</h5>
      </div>
      <div className="container ">
      <p className="text-center container">We are trusted by best brand in the country</p>
      </div>
      <div className="logos ">
        <div className="logos-slide">
          <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAufin.1cae185f.png&w=256&q=75" />
          <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBajaj.6a41ddf3.png&w=256&q=75" />
          <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIdfc.c2795d1e.png&w=256&q=75" />
          <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIndusInd.7f678225.png&w=256&q=75" />
          <img src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBOB.d87af468.png&w=256&q=75" />
          <img src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAmex.7272fe32.png&w=256&q=75" />
        </div>

        <div className="logos-slide">
          <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAufin.1cae185f.png&w=256&q=75" />
          <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBajaj.6a41ddf3.png&w=256&q=75" />
          <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIcici.b8108647.png&w=256&q=75" />
          <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIdfc.c2795d1e.png&w=256&q=75" />
          <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIndusInd.7f678225.png&w=256&q=75" />
          <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAmex.7272fe32.png&w=256&q=75" />
          <img src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBOB.d87af468.png&w=256&q=75" />
        </div>
      </div>
    </div>
  );
};

export default Carousels;
