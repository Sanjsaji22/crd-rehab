import React, { useEffect, useState } from "react";
import "./ImageCarousel.css";

const slides = [
  {
    src: "/assets-hero/hero-main.png",
    caption: "A Peaceful Healing Environment",
  },
  {
    src: "/assets-hero/group-activity.png",
    caption: "Inclusive Rehabilitation Programs",
  },
  {
    src: "/assets-hero/annual-event.png",
    caption: "Empowering Lives Through Care",
  },
  {
    src: "/assets-hero/garden-view.png",
    caption: "Empowering Lives Through Care",
  },
  {
    src: "/assets-hero/garden-view2.jpg",
    caption: "Empowering Lives Through Care",
  },
  {
    src: "/assets-hero/garden-view3.jpg",
    caption: "Empowering Lives Through Care",
  },
  {
    src: "/assets-hero/garden-view4.jpg",
    caption: "Empowering Lives Through Care",
  },
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-container">

      {/* ================= HERO OVERLAY ================= */}
      <div className="carousel-hero-overlay">
        <div className="carousel-hero-content">

          <img
            src="/skd-logo.png"
            alt="South Kerala Diocese"
            className="carousel-hero-logo"
          />

          <h1 className="carousel-hero-title">
            Centre for Rehabilitation of the Disabled
          </h1>

          <p className="carousel-hero-subtitle">
            Empowering Lives • Restoring Dignity
          </p>

          <a href="/donation-page" className="carousel-hero-btn">
            Donate Now
          </a>

        </div>
      </div>

      {/* ================= SLIDES ================= */}
      <div
        className="carousel-slider"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div className="carousel-slide" key={i}>
            <img
              src={slide.src}
              alt={slide.caption}
              className="carousel-image"
            />
          </div>
        ))}
      </div>

      {/* ================= DOTS ================= */}
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`indicator-dot ${i === index ? "active-dot" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
