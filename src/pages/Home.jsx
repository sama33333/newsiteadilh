npx update-browserslist-db@latest
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="d-flex mt-5 ps-5"> {/* Added padding to move content right */}
        <div className="col-sm-6 ms-5"> {/* Left margin adjusted */}
          <img
            src="https://cdn.glitch.global/94ce8094-2082-483e-8949-f3a4651ae83f/a89f7c20-27a2-4c6c-9a08-caa301574ad6.image.png"
            alt="meta"
            style={{ width: "5rem", height: "5rem" }} 
          />
          <h1 className="my-3 fs-1" style={{ fontSize: "3.5rem" }}> 
            Become <br /> Meta Verified
          </h1>

          <div style={{ marginBottom: "30px" }}></div>

          <Link
            to="/validation"
            className="border-0 text-white text-decoration-none"
            style={{
              background: "#0064e0",
              borderRadius: "100px",
              padding: "15px 50px", 
              fontSize: "1.2rem" 
            }}
          >
            Apply
          </Link>

          <p style={{ fontSize: "20px" }} className="mt-4">
            Grow your social presence with Meta Verified – a new subscription <br />
            bundle available for creators and businesses on Instagram and <br />
            Facebook.
          </p>

          <p className="py-3" style={{ fontSize: '19px' }}>
            Sign up now for creators
          </p>

          <p className="mt-4 mb-0">
            <span className="fw-semibold" style={{ fontSize: "18px" }}>Are you a business?</span> Get more
            information on
          </p>
          <Link style={{ fontSize: '16px' }}>
            Meta verified for businesses
          </Link>

          <p className="mt-4 font-italic" style={{ fontSize: "15px" }}>
            Features, availability, and pricing may vary by region.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
