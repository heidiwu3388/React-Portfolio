// import dependencies
import React, {useState} from 'react';

// import images
import contactBackground from "../../assets/images/contactBackground.jpg";

// define styles for 'Contact' component
const styles = {
  container : {
      backgroundImage: `url(${contactBackground})`,
  },
  innerContainer: {
    maxWidth: "1200px",
  },
  contactForm: {
    backgroundColor:"rgb(18, 35, 153)",
    maxWidth:"700px",
    boxShadow: "15px 15px 10px rgba(0,0,0,0.5)",
    borderRadius: "5px",
  },
};

// define regex for email validation
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;


// ********* define component 'Contact' and export it as default *********
export default function Contact() {
  // define state variable for error message
  const [errorMessage, setErrorMessage] = useState("");
  
  // define functions for Name validation
  function validateName(e) {
    if (e.target.value.length <= 0) {
      setErrorMessage("Name is required.");
    } else {
      setErrorMessage("");
    }
  }

  // define functions for Email validation
  function validateEmail(e) {
    const email = e.target.value;
    if (email.length <= 0) {
      setErrorMessage("Email is required.");
    } else if (emailRegex.test(email) === false)
    {
      setErrorMessage("Invalid email.");
    } else {
      setErrorMessage("");
    }
  }

  // define functions for Name validation
  function validateMessage(e) {
    if (e.target.value.length <= 0) {
      setErrorMessage("Message is required.");
    } else {
      setErrorMessage("");
    }
  }

  // return JSX for 'Contact' component
  return (
    <div className="contain-fluid p-5" style={styles.container}>
      <div className="container-fluid" style={styles.innerContainer}>
        {/* title */}
        <div className="row" >
          <div className="col-12 d-flex justify-content-center">
            <h1 className='py-3 text-white'>
              Contact
            </h1>
          </div>
        </div>
        {/* contact form */}
        <div className="row d-flex justify-content-center" >
          <div className="col-12 p-5" style={styles.contactForm}>
            {/* <form action="https://formsubmit.co/heidiwu3388@yahoo.com" method="POST" onSubmit={handleSubmit}> */}
            <form action="https://formsubmit.co/heidiwu3388@yahoo.com" method="POST">
              {/* name */}
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label text-white">Name:</label>
                <input
                  name="name" 
                  onBlur={validateName}
                  type="text" 
                  className="form-control" 
                  id="inputName"
                  required
                />
              </div>
              {/* email */}
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label text-white">Email address:</label>
                <input
                  name="email"
                  onBlur={validateEmail}
                  type="email" 
                  className="form-control" 
                  id="inputEmail" 
                  placeholder="name@example.com"
                  required
                />
              </div>
              {/* message */}
              <div className="mb-3">
                <label htmlFor="inputMessage" className="form-label text-white">Message:</label>
                <textarea 
                  name="message"
                  onBlur={validateMessage}
                  className="form-control" 
                  id="inputMessage" 
                  rows="3"
                  required
                />
              </div>
              {/* error message */}
              <div className="mb-3 text-danger">{errorMessage}</div>
              {/* submit button */}
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
