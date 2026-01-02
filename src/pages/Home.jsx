// src/pages/Home.jsx
import { Link } from "react-router-dom";

import React from 'react';
import ImageCarousel from '../components/ImageCarousel';

// FOOTER LINK STYLE
const footerLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  transition: 'opacity 0.3s'
};


// --- Gallery Images ---
const photoData = [
  { src: '/gallery/therapy_session.jpg', alt: 'Physiotherapy session', caption: 'Daily Physiotherapy Programs' },
  { src: '/gallery/vocational_training.jpg', alt: 'Residents learning skills', caption: 'Vocational Training Workshop' },
  { src: '/gallery/annual_day.jpg', alt: 'Annual Day celebration', caption: 'Annual Day Celebration 2024' },
  { src: '/gallery/campus_view.jpg', alt: 'View of the LMS compound campus', caption: 'LMS Compound Campus' },
  { src: '/gallery/group_activity.jpg', alt: 'Group engaging in recreational activity', caption: 'Group Recreational Activities' },
  { src: '/gallery/new_equipment.jpg', alt: 'New therapy equipment being used', caption: 'New Equipment Donation' },
];

// Simple Accordion Item
const AccordionItem = ({ icon, title, children, defaultOpen = false }) => {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <div className="accordion-item">
      <button
        className="accordion-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="accordion-icon">{icon}</span>
        <span className="accordion-title">{title}</span>
        <span className="accordion-toggle">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};


const Home = () => {
  return (
    <div style={{ padding: '0', margin: 'auto' }}>
      
      {/* =============================================== */}
      {/* 1. HOME - CAROUSEL */}
      {/* =============================================== */}
      <section id="home">
        <ImageCarousel />
      </section>

      {/* CTA CARDS */}
      <section style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }}>
          
          {/* CTA 1 */}
          <div style={callToActionStyle(true)}>
            <h3 style={{ color: 'var(--accent-red)' }}>Make a Difference Today</h3>
            <p>Your contribution supports training, therapy equipment, and rehabilitation services.</p>
            <a href="#donation" style={linkButtonStyle('var(--accent-red)', 'white')}>
              DONATE NOW
            </a>
          </div>

          {/* CTA 2 */}
          <div style={callToActionStyle(false)}>
            <h3 style={{ color: 'var(--primary-blue)' }}>See Our Impact</h3>
            <p>Discover our ongoing rehabilitation programs and services.</p>
            <a href="#programs" style={linkButtonStyle('var(--primary-blue)', 'white')}>
              VIEW PROGRAM
            </a>
          </div>

        </div>
      </section>


    {/* =============================================== */}
{/* ABOUT US SECTION */}
{/* =============================================== */}
<section
  id="about"
  style={{ padding: "60px 0", borderTop: "1px solid #ddd" }}
>
  <div style={{ maxWidth: "1000px", margin: "auto" }}>

    <h2
      style={{
        textAlign: "center",
        color: "var(--primary-blue)",
        marginBottom: "35px",
      }}
    >
      Centre for Rehabilitation of the Differently Abled (CRD)
    </h2>

    {/* ACCORDION ITEMS */}

    <AccordionItem icon="🏛️" title="About CRD" defaultOpen>
      <p>
        The <strong>Centre for Rehabilitation of the Differently Abled (CRD)</strong> is a charitable
        institution under the <strong>South Kerala Diocese of the Church of South India (CSI)</strong>.
        Established in <strong>April 1974</strong> with five polio-affected children, the Centre has
        grown into a comprehensive rehabilitation institution serving children with physical and
        intellectual disabilities.
      </p>
      <p>
        In 2002, the former Polio Home was integrated with the Cerebral Palsy Home and renamed as CRD,
        reflecting its inclusive vision and commitment to holistic care.
      </p>
    </AccordionItem>

    <AccordionItem icon="🎯" title="Vision & Mission" defaultOpen>
      <p>
        CRD is devoted to the total rehabilitation of differently abled children—physically,
        intellectually, emotionally, socially, and vocationally—enabling them to live dignified,
        independent, and meaningful lives within mainstream society.
      </p>
    </AccordionItem>

    <AccordionItem icon="🏘️" title="Community Institution Based Intervention (CIBI)" defaultOpen>
      <p>
        The <strong>Community Institution Based Intervention Programme (CIBI)</strong>, launched in
        April 2010, extends rehabilitation services beyond institutional care by supporting children
        within their communities.
      </p>
      <p>
        At present, over <strong>200 children</strong> are supported through CIBI, while
        <strong> 97 children</strong> are under CRD’s residential care programme, including children
        with cerebral palsy and intellectual disabilities.
      </p>
    </AccordionItem>

    <AccordionItem icon="🏥" title="Education & Rehabilitation Services" defaultOpen>
      <ul>
        <li>Physiotherapy</li>
        <li>Occupational Therapy</li>
        <li>Speech & Language Therapy</li>
        <li>Special Education</li>
        <li>Vocational Training & Job Placement</li>
        <li>Recreational & Cultural Activities</li>
      </ul>
    </AccordionItem>

    <AccordionItem icon="🏆" title="Major Achievements" defaultOpen>
      <p>
        Over the past five decades, CRD has provided educational and social rehabilitation to more
        than <strong>650 children</strong>. Many beneficiaries have gone on to attain higher
        qualifications and secure employment in government services, banks, railways, and other
        institutions.
      </p>
    </AccordionItem>

    <AccordionItem icon="🧠" title="Specialised Departments" defaultOpen>
      <ul>
        <li>Physiotherapy Department with modern rehabilitation equipment</li>
        <li>Occupational Therapy Department</li>
        <li>Speech Therapy & Audiology Department</li>
        <li>Early Intervention Programme</li>
        <li>Ortho-Splint Workshop</li>
      </ul>
    </AccordionItem>

    <AccordionItem icon="🎓" title="Education, Culture & Skill Development" defaultOpen>
      <p>
        CRD runs its own school with a consistent 100% pass record in SSLC examinations. The Centre
        also houses a well-stocked library known as <strong>“The Lighthouse”</strong>, a
        government-recognised Computer Training Centre, and the unique
        <strong> Wheelchair Brass Band</strong>.
      </p>
    </AccordionItem>

    <AccordionItem icon="🚀" title="Future Endeavours" defaultOpen>
      <ul>
        <li>Outpatient Departments – Paediatric, Rehabilitation, Neurology & Homeopathy</li>
        <li>Expanded Therapy & Wellness Centres</li>
        <li>Vocational Higher Secondary School</li>
      </ul>
    </AccordionItem>

    <AccordionItem icon="🤝" title="How You Can Help" defaultOpen>
      <p>
        The growing needs of the community require continued support. Financial assistance, therapy
        equipment, walking aids, and infrastructure development help CRD reach more children in need.
        Every contribution—big or small—makes a meaningful difference.
      </p>
    </AccordionItem>

    <AccordionItem icon="✝️" title="Faith, Compassion & Service" defaultOpen>
      <p>
        Guided by Christian values, CRD believes in service with dignity, love in action, and hope
        through compassionate care for every child entrusted to the Centre.
      </p>
    </AccordionItem>

  </div>
</section>


{/* =============================================== */}
{/* 3. PROGRAMS & SERVICES */}
{/* =============================================== */}
<section
  id="programs"
  style={{
    padding: "60px 0",
    borderTop: "1px solid #ddd",
    backgroundColor: "#f9fafc"
  }}
>
  <div style={{ maxWidth: "1100px", margin: "auto", padding: "0 20px" }}>
    
    <h2
      style={{
        textAlign: "center",
        color: "var(--primary-blue)",
        marginBottom: "15px"
      }}
    >
      Rehabilitation Programs & Services
    </h2>

    <p
      style={{
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto 50px",
        color: "var(--text-medium)",
        fontSize: "1.3em"
      }}
    >
      The Centre for Rehabilitation of the Disabled (CRD) offers comprehensive,
      multidisciplinary programs aimed at the physical, intellectual, emotional,
      and social development of persons with disabilities.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "30px"
      }}
    >
      {/* PROGRAM 1 */}
      <div style={programCardStyle}>
        <h3 style={programTitleStyle}>Physiotherapy & Medical Rehabilitation</h3>
        <p>
          Individualised physiotherapy and medical rehabilitation services
          designed to improve mobility, strength, posture, balance, and
          functional independence.
        </p>
      </div>

      {/* PROGRAM 2 */}
      <div style={programCardStyle}>
        <h3 style={programTitleStyle}>Occupational & Speech Therapy</h3>
        <p>
          Therapeutic interventions focusing on fine motor skills, daily living
          activities, communication abilities, speech development, and language
          enhancement.
        </p>
      </div>

      {/* PROGRAM 3 */}
      <div style={programCardStyle}>
        <h3 style={programTitleStyle}>Special Education & Early Intervention</h3>
        <p>
          Structured educational programs including Individual Education Plans
          (IEP) and early intervention services for children with developmental
          delays and learning challenges.
        </p>
      </div>

      {/* PROGRAM 4 */}
      <div style={programCardStyle}>
        <h3 style={programTitleStyle}>Vocational Training & Skill Development</h3>
        <p>
          Training in vocational skills and pre-employment activities aimed at
          enabling economic independence and social integration in adulthood.
        </p>
      </div>

      {/* PROGRAM 5 */}
      <div style={programCardStyle}>
        <h3 style={programTitleStyle}>Psychological Counselling & Guidance</h3>
        <p>
          Professional counselling services for children and parents addressing
          emotional wellbeing, behavioural concerns, parental guidance, and
          mental health support.
        </p>
      </div>

      {/* PROGRAM 6 */}
      <div style={programCardStyle}>
        <h3 style={programTitleStyle}>Community-Based Rehabilitation (CIBI)</h3>
        <p>
          Outreach programs that extend rehabilitation, therapy, and training
          services to children and families in the community through trained
          community-based educators.
        </p>
      </div>
    </div>
  </div>
</section>

  
<section id="gallery" className="ngo-gallery-section">
  <div className="ngo-gallery-container">
    
    <h2 className="ngo-gallery-title">
      Photo Gallery
    </h2>

    <p className="ngo-gallery-subtitle">
      A glimpse into our rehabilitation programs, activities, and campus life
    </p>

    <div className="ngo-gallery-grid">
      {photoData.map((photo, index) => (
        <div className="ngo-gallery-card" key={index}>
          
          <div className="ngo-gallery-image-wrapper">
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
            />
          </div>

          <div className="ngo-gallery-caption">
            {photo.caption}
          </div>

        </div>
      ))}
    </div>

  </div>
</section>


      {/* =============================================== */}
      {/* 5. DONATION */}
      {/* =============================================== */}
      <section id="donation" style={{ padding: '40px 0', borderTop: '1px solid #ddd' }}>
        <div style={{ maxWidth: '850px', margin: 'auto' }}>
          
          <h2 style={{ textAlign: 'center', color: 'var(--primary-blue)' }}>
            🤝 Support Our Mission: Donate Today
          </h2>

          <section style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginTop: '20px' }}>
            <h3>Bank / Online Transfer Details</h3>
            <p><b>Account Name:</b> CENTRE FOR REHABILITATION OF THE DISABLED</p>
            <p><b>Account Number:</b> 103473921</p>
            <p><b>IFSC Code:</b> SBIN0007898</p>
          </section>

        </div>
      </section>


      {/* =============================================== */}
      {/* 6. CONTACT + MAP */}
      {/* =============================================== */}
      {/* ========================================================= */}
{/* 7. CONTACT US SECTION (ID: contact) */}
{/* ========================================================= */}
<section id="contact" className="contact-section">
  <div className="contact-container">

    {/* LEFT – CONTACT FORM */}
    <div className="contact-form-card">
      <h2>Fill in the Form below to send us a message</h2>

      <form>
        <label>Name</label>
        <input type="text" placeholder="Name" />

        <label>Email</label>
        <input type="email" placeholder="Email" />

        <label>Phone</label>
        <input type="text" placeholder="Phone" />

        <label>Address</label>
        <textarea rows="3" placeholder="Address"></textarea>

        <label>Comments / Questions / Message</label>
        <textarea rows="4" placeholder="Message"></textarea>

        <button type="submit" className="contact-submit">
          Send Message
        </button>
      </form>
    </div>

    {/* RIGHT – MAP + DETAILS */}
    <div className="contact-info-card">
      <iframe
        title="CRD Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.8953153578335!2d76.94589257454845!3d8.534839891822763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bfe1464731a5%3A0x296a267c4613c7c!2sLMS%20Compound!5e0!3m2!1sen!2sin!4v1701389025870!5m2!1sen!2sin"
        width="100%"
        height="320"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>

      <div className="contact-details">
        <h3>Centre for Rehabilitation of the Disabled</h3>
        <p>
          LMS Compound, PMG, Palayam<br />
          Thiruvananthapuram<br />
          Kerala, India
        </p>

        <p><strong>Phone:</strong> +91 9061766293</p>
        <p><strong>Email:</strong> revsjr@live.com</p>
      </div>
    </div>

  </div>
</section>




      {/* =============================================== */}
      {/* 7. PROFESSIONAL FOOTER */}
      {/* =============================================== */}
      <footer style={{
        backgroundColor: 'var(--primary-blue)',
        color: 'white',
        padding: '40px 20px',
        marginTop: '50px'
      }}>
        
        <div style={{
          maxWidth: '1200px',
          margin: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>

          {/* About */}
          <div>
            <h3 style={{ marginBottom: '15px' }}>Centre For Rehabilitation Of The Disabled</h3>
            <p>
              An initiative of the CSI South Kerala Diocese, dedicated to therapy,
              skill training, and rehabilitation services for persons with disabilities.
            </p>
          </div>

          {/* Quick Links */}
<div>
  <h3 style={{ marginBottom: '15px' }}>Quick Links</h3>

  <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
    
    {/* Home (route) */}
    <li>
      <Link to="/" style={footerLinkStyle}>Home</Link>
    </li>

    {/* Officers (route) */}
    <li>
      <Link to="/officers" style={footerLinkStyle}>Officers</Link>
    </li>

    {/* Programs (same-page scroll) */}
    <li>
      <a href="#programs" style={footerLinkStyle}>Programs</a>
    </li>

    {/* Gallery (same-page scroll) */}
    <li>
      <a href="#gallery" style={footerLinkStyle}>Gallery</a>
    </li>

    {/* Donate (route) */}
    <li>
      <Link to="/donation-page" style={footerLinkStyle}>Donate</Link>
    </li>

  </ul>
</div>


          {/* Contact */}
          <div>
            <h3 style={{ marginBottom: '15px' }}>Contact Us</h3>
            <p>LMS Compound, PMG, Palayam</p>
            <p>Thiruvananthapuram, Kerala 695033</p>
            <p>Phone: <strong>+91 9061766293</strong></p>
            <p>Email: <a href="revsjr@live.com" style={footerLinkStyle}>info@crdtrivandrum.org</a></p>
          </div>

        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '30px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255,255,255,0.2)'
        }}>
          © {new Date().getFullYear()} Centre For Rehabilitation Of The Disabled | CSI South Kerala Diocese
        </div>

      </footer>


    </div>
  );
};


// ======================================================
// INLINE STYLE OBJECTS
// ======================================================

const callToActionStyle = (isRedBorder) => ({
  padding: '30px 20px',
  textAlign: 'center',
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: 'var(--shadow-subtle)', 
  borderTop: `5px solid ${isRedBorder ? 'var(--accent-red)' : 'var(--primary-blue)'}`,
});

const linkButtonStyle = (bgColor, textColor) => ({
  marginTop: '15px',
  padding: '12px 30px',
  backgroundColor: bgColor,
  color: textColor,
  borderRadius: '8px',
  fontWeight: 'bold',
  display: 'inline-block'
});

const aboutSectionStyle = {
  marginBottom: '30px',
  borderLeft: '4px solid var(--accent-red)',
  padding: '20px',
  borderRadius: '5px',
  backgroundColor: 'var(--section-bg)'
};

const aboutHeadingStyle = {
  color: 'var(--secondary-blue)',
  marginBottom: '10px'
};

const aboutLinkStyle = {
  marginTop: '10px',
  display: 'inline-block',
  color: 'var(--accent-red)',
  fontWeight: 'bold'
};

const programSectionStyle = {
  marginBottom: '30px',
  padding: '15px',
  backgroundColor: 'var(--section-bg)',
  border: '1px solid #ddd',
  borderRadius: '8px',
};

const programHeadingStyle = {
  color: 'var(--accent-red)',
  borderBottom: '2px solid #eee',
  marginBottom: '10px',
  paddingBottom: '5px'
};

const galleryGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
};

const galleryItemStyle = {
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: 'white',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
};

const galleryImageStyle = {
  width: '100%',
  height: '250px',
  objectFit: 'cover'
};

const galleryCaptionStyle = {
  textAlign: 'center',
  padding: '10px',
  fontSize: '0.95em',
  color: 'var(--text-medium)'
};

export default Home;
const programCardStyle = {
  backgroundColor: "white",
  padding: "30px 25px",
  borderRadius: "12px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  borderLeft: "5px solid var(--primary-blue)",
  transition: "transform 0.3s ease"
};

const programTitleStyle = {
  color: "var(--secondary-blue)",
  marginBottom: "12px",
  fontSize: "1.2em"
};
programCardStyle[':hover'] = {
  transform: "translateY(-4px)"
};
