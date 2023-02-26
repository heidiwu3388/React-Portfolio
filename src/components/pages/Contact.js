// import dependencies
import React from 'react';

// import images
import contactBackground from "../../images/contactBackground.jpg";
console.log(contactBackground);


// define styles for 'Contact' component
const styles = {
  container : {
      backgroundImage: `url(${contactBackground})`,
  },
  contactForm: {
    backgroundColor:"rgb(18, 35, 153)",
    maxWidth:"700px",
    boxShadow: "15px 15px 10px rgba(0,0,0,0.5)",
  },
};

// define component 'Contact' and export it as default
export default function Contact() {

  return (
    <div className="contain-fluid p-5" style={styles.container}>
        {/* title */}
        <div className="row" >
          <div className="col-12 d-flex justify-content-start">
            <h1 className='py-3 text-white'>
              Contact
            </h1>
          </div>
        </div>
        {/* contact form */}
        <div className="row p-5" style={styles.contactForm}>
          <form>
            {/* name */}
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label text-white">Name:</label>
              <input type="text" className="form-control" id="inputName"/>
            </div>
            {/* email */}
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label text-white">Email address:</label>
              <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com"/>
            </div>
            {/* message */}
            <div className="mb-3">
              <label htmlFor="inputMessage" className="form-label text-white">Message:</label>
              <textarea className="form-control" id="inputMessage" rows="3"></textarea>
            </div>
            {/* submit button */}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    </div>
  );
}
