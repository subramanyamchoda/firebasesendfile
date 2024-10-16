import React from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const App = () => {

  const sendEmail = () => {
    const templateParams = {
      user_name: 'John Doe',    // Hardcoded Name
      user_email: 'subramanymchoda50@gmail.com',  // Hardcoded Email
      message: 'text me'  // Hardcoded Message
    };

    emailjs.send('service_q9mc1gb', 'template_sqc4joo', templateParams, 'jN--TlZc4OPInknIx')
      .then((result) => {
          console.log('Email sent successfully:', result.text);
      }, (error) => {
          console.error('Error sending email:', error.text);
      });
  };

  return (
  
    <div className='container d-flex justify-content-center align-items-center vh-100'>
    <div className="card p-4 shadow">
      <h2>HELLO Every one</h2>
      <button onClick={sendEmail} className='btn btn-primary'>Send </button>
    </div>
    </div>
  );
};

export default App;
