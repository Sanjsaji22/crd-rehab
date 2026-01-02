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
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ===== TOP HEADER ===== */}
      <header className="main-header">
        <div className="header-content">

          {/* LOGOS (ONE ROW) */}
          <div className="header-logos">
            <img src={SKD_LOGO} alt="SKD Logo" className="header-logo-img" />
            <img src={CSI_LOGO} alt="CSI Logo" className="header-logo-img" />
          </div>

          {/* TITLE */}
          <div className="header-title">
            <h1>CENTRE FOR REHABILITATION OF THE DISABLED</h1>
            <h2>(Church of South India – South Kerala Diocese)</h2>
            <p>LMS Compound, PMG, Thiruvananthapuram, Kerala</p>
          </div>

        </div>
      </header>

      {/* ===== STICKY NAV ONLY ===== */}
      <nav className="main-nav">
        <ul>
          <li><button onClick={() => goToSection("home")}>HOME</button></li>
          <li><button onClick={() => goToSection("about")}>ABOUT US</button></li>
          <li><button onClick={() => navigate("/officers")}>OFFICERS</button></li>
          <li><button onClick={() => goToSection("programs")}>PROGRAMS</button></li>
          <li><button onClick={() => goToSection("gallery")}>GALLERY</button></li>
          <li><button onClick={() => goToSection("contact")}>CONTACT</button></li>

          <li className="donation-item">
            <button className="donation-btn" onClick={() => navigate("/donation-page")}>
              DONATE
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
