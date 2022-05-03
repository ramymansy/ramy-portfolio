import React from "react";
import "./client.css";
import Tilt from "react-vanilla-tilt";

const Client = ({ img, quoteContent, quoteAuthor, jobTitle }) => {
  return (
    <Tilt
      className="tilt"
      options={{
        max: 25,
        speed: 1200,
        glare: true,
        "max-galre": 1,
      }}
    >
      <div className="cl">
        <div className="author">
          <div className="author-img">
            <img src={img} alt="img" />
          </div>
          <div className="author-title">
            <h4 className="name">{quoteAuthor}</h4>
            <h5 className="job">{jobTitle}</h5>
          </div>
        </div>
        <div className="author-content">
          <p className="content">{quoteContent}</p>
        </div>
      </div>
    </Tilt>
  );
};

export default Client;
