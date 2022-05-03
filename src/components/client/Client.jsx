import React from "react";
import "./client.css";

const Client = ({ img, quoteContent, quoteAuthor, jobTitle }) => {
  return (
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
  );
};

export default Client;
