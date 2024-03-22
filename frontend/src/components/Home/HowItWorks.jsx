import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3 className="font-semibold text-4xl">How JobHuntBD Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus to={"/register"}/>
              <Link to={"/register"} className="text-xl">Create Account</Link>
              {/* <p>Create Account</p> */}
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, culpa.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <Link to={"/job/post"} className="text-xl">Find a Job/Post a Job</Link>
              {/* <p>Find a Job/Post a Job</p> */}
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, culpa.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <Link to={"/applications/me"} className="text-xl">Apply For Job/Recruit Suitable Candidates</Link>
              {/* <p>Apply For Job/Recruit Suitable Candidates</p> */}
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, culpa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
