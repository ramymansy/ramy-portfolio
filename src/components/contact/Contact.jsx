import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineMail,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { SiYoutubemusic } from "react-icons/si";

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
            <h1 className="c-title">Let's discuss your project</h1>
            <p className="c-desc">
              <b>What’s your story?</b>
              <br />
              Get in touch. Always available for freelancing if the right
              project comes along me.
            </p>
            <div className="c-info">
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
              <button className="c-mail">
                <AiOutlineMail className="c-icon" />
                <a href="mailto:codna.dev@outlook.com">Send Mail</a>
              </button>
            </div>
            <div className="c-social">
              <BsFacebook className="facebook" />
              <AiFillTwitterCircle className="twitter" />
              <SiYoutubemusic className="youtube" />
              <AiFillInstagram className="instagram" />
              <BsGithub className="github" />
            </div>
          </div>
          <div className="c-right">
            <form ref={formRef} onSubmit={sendEmail}>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="Subject" name="user_subject" />
              <input type="email" placeholder="Email" name="user_email" />
              <textarea rows="5" placeholder="Message . . ." name="message" />
              <button>Send Message</button>
              {done && <p className="thanks">Successfully Sent</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
