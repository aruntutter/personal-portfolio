import React from "react";
import "./Contact.css";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="h2">CONTACT</h2>
      <p className="p">
        For any questions or inquiries about my Services, Please don't hesitate
        to reach out to me. I'd be happy to assist you.
      </p>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/arunkumarr-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/aruntutter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/ByteOops"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/arun_tutter/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100012953448827"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <input
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Subject"
            type="text"
            id="subject"
            name="subject"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Message"
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
