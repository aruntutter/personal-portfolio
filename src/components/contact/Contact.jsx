import "./Contact.css";
import { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isSending, setIsSending] = useState(false); // Track sending state

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true); // Disable button and show "Sending..."

    const formData = new FormData(event.target);
    formData.append("access_key", "8f4bd115-73e6-42ef-b880-57e88cdfa57d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setShowPopup(true); // Show success popup
        event.target.reset(); // Reset form fields

        setTimeout(() => setShowPopup(false), 3600000); // Hide popup after 3s
      } else {
        console.log("Error", res);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSending(false); // Re-enable the button
    }
  };

  return (
    <section className="contact">
      <h2 className="contact-h2">CONTACT</h2>
      <p className="contact-p">
        Have a question or an idea to share? I’m just a message away. Let’s
        collaborate and turn concepts into functional, engaging web experiences.
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

      <form className="contact-form" onSubmit={onSubmit}>
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
          <textarea
            placeholder="Message"
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <div className="btn">
          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>

      {/* Popup Card */}
      {showPopup && (
        <div className="popup-card">
          <button
            className="popup-close"
            onClick={() => setShowPopup(false)}
            aria-label="Close popup"
          >
            ×
          </button>
          <p>Message Sent!</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
