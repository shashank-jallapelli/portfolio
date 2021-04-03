import * as React from "react";
import '../stylesheets/common/custom.scss';
import '../stylesheets/contact.scss';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="main-content">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12">
                    <h2>Get In Touch</h2>
                    <div className="form">
                    <form id="contact-form">
                        <input type="text" name="Name" required placeholder="Full Name" />
                        <input type="email" name="Email" required placeholder="Email" />
                        <textarea name="Message" id="message" required cols="30" rows="10" placeholder="Message"></textarea>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;