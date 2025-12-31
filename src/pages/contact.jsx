import React from "react";


const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* LEFT – FORM */}
        <div className="contact-form-card">
          <h2>Fill in the Form below to send us a message</h2>

          <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type="text" placeholder="Name" />

            <label>Email</label>
            <input type="email" placeholder="Email" />

            <label>Phone</label>
            <input type="text" placeholder="Phone" />

            <label>Address</label>
            <textarea placeholder="Address" rows="3"></textarea>

            <label>Comments / Questions / Message</label>
            <textarea placeholder="Message" rows="4"></textarea>

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
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
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
  );
};

export default Contact;
