import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CSI_LOGO = "/csi-logo.png";
const SKD_LOGO = "/skd-logo.png";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const goToSection = (id) => {
    setMenuOpen(false);

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

  /* CLOSE MENU ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {/* ================= TOP HEADER ================= */}
      <header className="main-header">
        <div className="header-content">

          <div className="header-logo-left">
            <img src={SKD_LOGO} alt="SKD Logo" className="header-logo-img" />
          </div>

          <div className="header-title">
            <h1>CENTRE FOR REHABILITATION OF THE DISABLED</h1>
            <h2>(Church of South India – South Kerala Diocese)</h2>
            <p>LMS Compound, PMG, Thiruvananthapuram, Kerala</p>
          </div>

          <div className="header-logo-right">
            <img src={CSI_LOGO} alt="CSI Logo" className="header-logo-img" />
          </div>

        </div>
      </header>

      {/* ================= NAV BAR ================= */}
      <nav className="main-nav">
        <div className="nav-inner" ref={menuRef}>

          {/* HAMBURGER (MOBILE) */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><button onClick={() => goToSection("home")}>HOME</button></li>
            <li><button onClick={() => goToSection("about")}>ABOUT</button></li>
            <li><button onClick={() => { setMenuOpen(false); navigate("/officers"); }}>OFFICERS</button></li>
            <li><button onClick={() => goToSection("programs")}>PROGRAMS</button></li>
            <li><button onClick={() => goToSection("gallery")}>GALLERY</button></li>
            <li><button onClick={() => goToSection("contact")}>CONTACT</button></li>

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
