import React from "react";
import "./qualifications.css";

const Qualifications = () => {
  return (
    <div>
      <span className="quali-text">My Qualifications</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html"></div>
          <h1>html</h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1>css</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>javascript</h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1>react.js</h1>
        </div>
        <div className="qualification">
          <div className="content kotlin"></div>
          <h1>NEXT.js</h1>
        </div>
        <div className="qualification">
          <div className="content bootstrap"></div>
          <h1>bootstrap</h1>
        </div>
        <div className="qualification">
          <div className="content c-plus-plus"></div>
          <h1>Tailwind Css</h1>
        </div>
        <div className="qualification">
          <div className="content c-sharp"></div>
          <h1>Material UI</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
