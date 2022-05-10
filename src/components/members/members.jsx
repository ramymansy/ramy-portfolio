import React from "react";
import "./members.css";
import Member1 from "../props/001.png";
import Member2 from "../props/002.png";
import Member3 from "../props/003.png";
import Member4 from "../props/004.png";
import Member5 from "../props/005.png";
import Member6 from "../props/006.png";
import Member7 from "../props/007.png";
import Member8 from "../props/008.png";
import Member9 from "../props/009.png";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Members</h1>
      <div className="member-list">
        <div className="member member-1">
          <div className="member-img">
            <img src={Member1} alt="img" />
          </div>
          <div className="member-info">
            <h1 className="name">Terrell Grimes</h1>
            <h3 className="position">Photographer</h3>
            <h4 className="about">
              Ramy provides amazing web development services, he's the most
              professional person I have ever worked with, I would recommend him
              to anyone looking to get a professionalism.
            </h4>
          </div>
        </div>

        <div className="member member-2">
          <div className="member-img">
            <img src={Member2} alt="img" />
          </div>
          <div className="member-info">
            <h1 className="name">Lonny Corry</h1>
            <h3 className="position">Project Manager</h3>
            <h4 className="about">
              He does an excellent job, always positive to find the most
              suitable solution, ramy is one of the professional web developers
              who provide great services.
            </h4>
          </div>
        </div>

        <div className="member member-3">
          <div className="member-img">
            <img src={Member3} alt="img" />
          </div>
          <div className="member-info">
            <h1 className="name">Max Chole</h1>
            <h3 className="position">CEO, Designer</h3>
            <h4 className="about">
              Ramy is very professional, always delivers high-quality results,
              and is always there to help, Look forward to working with him on
              other projects.
            </h4>
          </div>
        </div>

        <div className="member member-4">
          <div className="member-img">
            <img src={Member4} alt="img" />
          </div>
          <div className="member-info">
            <h1 className="name">Amir Ennabi</h1>
            <h3 className="position">Sales Manager</h3>
            <h4 className="about">
              Ramy worked on many projects for us and has always exceeded our
              expectations, he's dedicated and talented, and we delight to work
              with him always.
            </h4>
          </div>
        </div>

        <div className="member member-5">
          <div className="member-img">
            <img src={Member5} alt="img" />
          </div>
          <div className="member-info">
            <h1 className="name">Kenton Marquardt</h1>
            <h3 className="position">Art Director</h3>
            <h4 className="about">
              I know I can count on his services if I need to get my project
              done quickly and with the best possible result, I always look
              forward to working with him!
            </h4>
          </div>
        </div>

        <div className="member member-6">
          <div className="member-img">
            <img src={Member6} alt="img" />
          </div>
          <div className="member-info">
            <h1 className="name">Rayan Hammes</h1>
            <h3 className="position">Motion Graphic Animator</h3>
            <h4 className="about">
              I was a real pleasure to work with and look forward to working
              with him again, he’s definitely the kind of developer you can
              trust with a project from start to finish.
            </h4>
          </div>
        </div>

        <div className="member member-7">
          <div className="member-img">
            <img src={Member7} alt="img" />
          </div>
          <div className="member-info">
            <h1 className="name">Keshaun Robel</h1>
            <h3 className="position">CEO, Designer</h3>
            <h4 className="about">
              He's very professional, always delivers high-quality results, and
              is always there to help. Look forward to working with Ramy on
              other projects.
            </h4>
          </div>
        </div>

        <div className="member member-8">
          <div className="member-img">
            <img src={Member8} alt="img" />
          </div>
          <div className="member-info">
            <h1 className="name">Casper Paucek</h1>
            <h3 className="position">Project Manager</h3>
            <h4 className="about">
              Excellent developer to work with, Always positive to find the most
              appropriate solution. Ramy is one of the professional web
              development developers that provides awesome services.
            </h4>
          </div>
        </div>

        <div className="member member-9">
          <div className="member-img">
            <img src={Member9} alt="img" />
          </div>
          <div className="member-info">
            <h1 className="name">Coy Johns</h1>
            <h3 className="position">Sales Manager</h3>
            <h4 className="about">
              Ramy worked on a handful of projects for us and has always
              exceeded our expectations. Ramy is dedicated, talented and we a
              delight to work with..
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
