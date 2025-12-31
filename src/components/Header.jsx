import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CSI_LOGO = "/csi-logo.png";
const SKD_LOGO = "/skd-logo.png";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToSection = (id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ================= TOP HEADER (NOT STICKY) ================= */}
      <div className="main-header">
        <div className="header-content">

          {/* LEFT LOGO */}
          <img
            src={SKD_LOGO}
            alt="South Kerala Diocese Logo"
            className="logo header-logo"
          />

          {/* TITLE */}
          <div className="header-title">
            <h1>CENTRE FOR REHABILITATION OF THE DISABLED</h1>
            <h2>(Church of South India – South Kerala Diocese)</h2>
            <p>LMS Compound, PMG, Thiruvananthapuram, Kerala</p>
          </div>

          {/* RIGHT LOGO */}
          <img
            src={CSI_LOGO}
            alt="Church of South India Logo"
            className="logo header-logo"
          />
        </div>
      </div>

      {/* ================= STICKY NAV BAR ================= */}
      <nav className="main-nav">
        <div className="nav-inner">

          {/* MOBILE MENU BUTTON */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* NAV LINKS */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><button onClick={() => goToSection("home")}>HOME</button></li>
            <li><button onClick={() => goToSection("about")}>ABOUT US</button></li>
            <li><button onClick={() => navigate("/officers")}>OFFICERS</button></li>
            <li><button onClick={() => goToSection("programs")}>PROGRAMS</button></li>
            <li><button onClick={() => goToSection("gallery")}>GALLERY</button></li>
            <li><button onClick={() => goToSection("contact")}>CONTACT</button></li>

            {/* DONATION */}
            <li className="donation-item">
              <button
                className="donation-btn"
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/donation-page");
                }}
              >
                DONATE
              </button>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
}
