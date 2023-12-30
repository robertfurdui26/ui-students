import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ maxWidth: '600px', marginTop: '50px ', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', backgroundColor: 'black' }}>
      <h2 style={{ color: 'white', fontSize: '24px', marginBottom: '20px' }}>Contact Us</h2>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: 'white', fontSize: '18px', marginBottom: '10px' }}>Contact Information</h2>
        <p style={{ color: 'white' }}>
          <strong>Email:</strong> info@example.com
        </p>
        <p style={{ color: 'white' }}>
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p style={{ color: 'white' }}>
          <strong>Address:</strong> 123 Main Street, Cityville, State, 12345
        </p>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h2 style={{ color: 'white', fontSize: '18px', marginBottom: '10px' }}>About Us</h2>
        <p>
          Welcome to our website! We are dedicated to providing quality products
          and excellent customer service. If you have any questions or concerns,
          please feel free to reach out to us using the contact information above.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
