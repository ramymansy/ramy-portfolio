import React from "react";
import "./clients.css";
import Client from "../client/Client";
import { clients } from "../../data";

const Clients = () => {
  return (
    <div className="cls" id="clients">
      <h1 className="cls-title">
        Check What's My Clients
        <br />
        Say About Me!
      </h1>
      <div className="cls-items">
        {clients.map((item) => (
          <Client
            key={item.id}
            img={item.img}
            quoteContent={item.quoteContent}
            quoteAuthor={item.quoteAuthor}
            jobTitle={item.jobTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
