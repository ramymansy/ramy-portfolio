import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Message from "../../img/message.png";

const Contact = () => {
  const formRef = useRef();

  const [done, setDone] = useState(false);

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
      <div className="container">
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">
              <span>Let's</span> discuss your project
            </h1>
            <p className="c-desc">
              <b>
                What’s your <span>story</span>?
              </b>
              <br />
              I'm Always available for freelancing if the right project comes
              along me.
            </p>
            <div className="c-info">
              <p className="touch">
                Get in <span className="touchSpan">touch</span>.
              </p>
              <button className="c-whatsapp">
                <FaWhatsapp className="c-icon" />
                <a
                  href="https://api.whatsapp.com/send?phone=201123862211"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  WhatsApp Chat
                </a>
              </button>
            </div>
          </div>
          <div className="c-right">
            <img src={Message} alt="message" className="messagePhoto" />
            <form ref={formRef} onSubmit={sendEmail}>
              <input type="text" placeholder="Name" name="user_name" required />
              <input
                type="text"
                placeholder="Subject"
                name="user_subject"
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
              <textarea rows="5" placeholder="Message . . ." name="message" />
              <button type="submit">
                <AiOutlineMail className="c-icon" />
                Send Message
              </button>
              {done && <p className="thanks">Successfully Sent</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

