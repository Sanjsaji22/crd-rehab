import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CSI_LOGO = "/csi-logo.png";
const SKD_LOGO = "/skd-logo.png";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ================= TOP HEADER (NOT STICKY) ================= */}
      <header className="main-header">
        <div className="header-content">

          {/* LOGOS (WRAPPED TO PREVENT OVERLAP ON MOBILE) */}
          <div className="header-logos">
            <img
              src={SKD_LOGO}
              alt="South Kerala Diocese Logo"
              className="header-logo-img"
            />

            <img
              src={CSI_LOGO}
              alt="Church of South India Logo"
              className="header-logo-img"
            />
          </div>

          {/* TITLE */}
          <div className="header-title">
            <h1>CENTRE FOR REHABILITATION OF THE DISABLED</h1>
            <h2>(Church of South India – South Kerala Diocese)</h2>
            <p>LMS Compound, PMG, Thiruvananthapuram, Kerala</p>
          </div>

        </div>
      </header>

      {/* ================= STICKY NAV (ONLY THIS IS STICKY) ================= */}
      <nav className="main-nav">
        <ul>
          <li><button onClick={() => goToSection("home")}>HOME</button></li>
          <li><button onClick={() => goToSection("about")}>ABOUT</button></li>
          <li><button onClick={() => navigate("/officers")}>OFFICERS</button></li>
          <li><button onClick={() => goToSection("programs")}>PROGRAMS</button></li>
          <li><button onClick={() => goToSection("gallery")}>GALLERY</button></li>
          <li><button onClick={() => goToSection("contact")}>CONTACT</button></li>

          {/* DONATION */}
          <li className="donation-item">
            <button
              className="donation-btn"
              onClick={() => navigate("/donation-page")}
            >
              DONATE
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

