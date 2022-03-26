import "./contact.css";
import {
  WhatsApp,
  Email,
  Facebook,
  Twitter,
  YouTube,
  Instagram,
  GitHub,
} from "@mui/icons-material";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xs6re0k",
        "template_5hixe7h",
        formRef.current,
        "98YCKyaRILRHwAfsw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <WhatsApp className="c-icon" />
              +2 011 2386 2211
            </div>
            <div className="c-info-item">
              <Email className="c-icon" />
              codna.dev@outlook.com
            </div>
          </div>
          <div className="c-social">
            <Facebook className="facebook" />
            <Twitter className="twitter" />
            <YouTube className="youtube" />
            <Instagram className="instagram" />
            <GitHub className="github" />
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={sendEmail}>
            <input
              style={{ backgroundColor: darkMode && "white" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "white" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "white" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "white" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
