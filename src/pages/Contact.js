// import dependencies
import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import images
import contactBackground from "../assets/images/contactBackground.jpg";

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
  // define state variable
  const [isSubmitting, setIsSubmitting] = useState(false); // disable submit button when submitting
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // define ref variable
  const contactForm = useRef();
  
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
  
  // prevent form submission (real submission will be handled in next stage)
  function handleSubmit(e) {
    e.preventDefault();
    // disable submit button
    setIsSubmitting(true);
    // send email
    emailjs.sendForm('service_2bpu4x2', 'template_fusqr3n', contactForm.current, 'MReoIMdizU_-UULVc')
    .then((result) => {
        console.log(result.text);
        toast.success('You message has been sent to Heidi!', {
          closeButton: true,
          autoClose: false,
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar: true,
        });
        // reset form
        setName("");
        setEmail("");
        setMessage("");
        // enable submit button
        setIsSubmitting(false);
      }, (error) => {
        console.log(error.text);
        toast.success(`Failed to send your message: ${error.text}`, {
          closeButton: true,
          autoClose: false,
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar: true,
        });
        // reset form
        setName("");
        setEmail("");
        setMessage("");
        // enable submit button
        setIsSubmitting(false);
      });
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
        {/* infomation popup */}
        <ToastContainer />
        {/* title */}
        <div className="row" >
          <div className="col-12 d-flex flex-column align-items-center">
            <h1 className='text-white'>
              Contact
            </h1>
            <p className='text-white'>
              email me at
            </p>
            <h2 className='text-white'>
              heidiwu3388@yahoo.com
            </h2>
            <p className='text-white'>
              or
            </p>
            <p className='text-white'>
              fill in the following form
            </p>
          </div>
        </div>
        {/* contact form */}
        <div className="row d-flex justify-content-center" >
          <div className="col-12 p-5" style={styles.contactForm}>
            <form ref={contactForm} onSubmit={handleSubmit}>
              {/* name */}
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label text-white">Your name:</label>
                <input
                  name="name" 
                  value={name}
                  onBlur={validateName}
                  onChange={e => setName(e.target.value)}
                  type="text" 
                  className="form-control" 
                  id="inputName"
                  required
                />
              </div>
              {/* email */}
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label text-white">Your email address:</label>
                <input
                  name="email"
                  value={email}
                  onBlur={validateEmail}
                  onChange={e => setEmail(e.target.value)}
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
                  value={message}
                  onBlur={validateMessage}
                  onChange={e => setMessage(e.target.value)}
                  className="form-control" 
                  id="inputMessage" 
                  rows="3"
                  required
                />
              </div>
              {/* error message */}
              <div className="mb-3 text-danger">{errorMessage}</div>
              {/* submit button */}
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
