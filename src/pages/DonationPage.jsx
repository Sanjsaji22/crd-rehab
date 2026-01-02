// src/pages/DonationPage.jsx (Updated with QR Code Section)

import React from 'react';

// Path to your QR code image file (must be placed in the public folder)
const QR_CODE_PATH = '/crd_upi_qr.png';

const DonationPage = () => {
    // Styling constants from Home.jsx
    const tableStyle = {
        key: { 
            padding: '10px', 
            borderBottom: '1px solid #eee', 
            fontWeight: 'bold', 
            width: '35%' 
        },
        value: { 
            padding: '10px', 
            borderBottom: '1px solid #eee', 
            color: 'var(--accent-red)', 
            fontWeight: 'bold' 
        }
    };

    return (
        <div style={{ padding: '20px', margin: 'auto' }}>
            <div style={{ maxWidth: '850px', margin: 'auto' }}>
                <h2 style={{ textAlign: 'center', color: 'var(--primary-blue)', marginBottom: '30px' }}>🤝 Support Our Mission: Dedicated Donation Page</h2>
                
                <p style={{ fontSize: '1.1em', marginBottom: '30px', textAlign: 'center' }}>
                    This is the dedicated donation page, separated from the main content to focus user attention entirely on the transaction details. Your contribution directly enables us to provide specialized therapy and vocational training.
                </p>

                {/* --- UPI QR Code Section (NEW) --- */}
                <section style={qrSectionStyle}>
                    <h3 style={{ color: 'var(--accent-red)', marginBottom: '15px' }}>Scan & Donate Instantly (UPI)</h3>
                    <div style={qrContainerStyle}>
                        <img 
                            src={QR_CODE_PATH} 
                            alt="UPI QR Code for Donations" 
                            style={qrImageStyle}
                        />
                        <p style={{ marginTop: '15px', fontWeight: 'bold' }}>
                            OR Use UPI ID: crdcsiskd@sbi
                        </p>
                    </div>
                </section>
                
                {/* --- Bank Transfer Details --- */}
                <section style={{ marginBottom: '40px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', backgroundColor: 'white' }}>
                    <h3>Online/Bank Transfer Details</h3>
                    
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
                        <tbody>
                            <tr>
                                <td style={tableStyle.key}>Account Name:</td>
                                <td style={tableStyle.value}>CENTRE FOR REHABILITATION OF THE DISABLED</td>
                            </tr>
                            <tr>
                                <td style={tableStyle.key}>Bank Name:</td>
                                <td style={tableStyle.value}>SBI BANK</td>
                            </tr>
                            <tr>
                                <td style={tableStyle.key}>Account Number:</td>
                                <td style={tableStyle.value}>10347395921</td>
                            </tr>
                            <tr>
                                <td style={tableStyle.key}>IFSC Code:</td>
                                <td style={tableStyle.value}>SBIN0007898</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section style={{ backgroundColor: 'var(--light-grey)', padding: '20px', borderRadius: '8px', borderLeft: '5px solid var(--primary-blue)' }}>
                    <h3>Tax Exemption and Receipt</h3>
                    <p>
                       Support a Child. Change a Life.

Your generosity directly supports therapy, education and rehabilitation services for differently-abled children.

₹500 – Therapy Support

Helps fund a single physiotherapy or speech therapy session for a child.

₹1,000 – Medical & Nutrition Care

Provides essential medicines, nutritional supplements and basic healthcare support.

₹2,500 – Education Assistance

Supports special education materials, learning aids and school resources.

₹5,000 – Rehabilitation Kit

Covers assistive devices, therapy tools and mobility aids for a child.

₹10,000 – Sponsor a Child (Partial)

Contributes towards residential care, therapy and education for one child.

Custom Donation

Any amount you contribute helps us move closer to building an inclusive and compassionate society.

Donation Trust Note

CRD is a charitable institution under the Church of South India – South Kerala Diocese. All donations are used exclusively for rehabilitation, education and care programs.
                    </p>
                </section>
            </div>
        </div>
    );
};

// --- QR Code Specific Styles ---
const qrSectionStyle = {
    textAlign: 'center',
    marginBottom: '40px',
    padding: '25px',
    backgroundColor: '#fff0f0', // Light red background to draw attention
    borderRadius: '12px',
    border: '2px dashed var(--accent-red)',
};

const qrContainerStyle = {
    display: 'inline-block',
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

const qrImageStyle = {
    width: '200px',
    height: '200px',
    display: 'block',
    margin: '0 auto',
};


export default DonationPage;