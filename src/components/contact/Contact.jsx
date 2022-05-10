import React from "react";
import "./contact.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://api.whatsapp.com/send?phone=201123862211"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>whatsapp</h2>
        </a>

        <a href="mailto:codna.dev@outlook.com" className="contact instagram">
          <MdOutlineAlternateEmail className="icon" />
          <h2>Email</h2>
        </a>
      </div>
    </div>
  );
};

export default Contact;
