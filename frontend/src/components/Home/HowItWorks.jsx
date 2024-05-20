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
              To create an account on <b>JobHuntBD</b>, typically you'd visit the website, click on the 
              "Sign Up" or "Create Account" button, fill out the required information such as your 
              name, email address, password, and sometimes your resume, and then verify your email 
              to activate your account.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <Link to={"/job/post"} className="text-xl">Find a Job/Post a Job</Link>
              {/* <p>Find a Job/Post a Job</p> */}
              <p>
              To post a job on <b>JobHuntBD</b>, you'd usually log in to your employer account, navigate 
              to the "Post a Job" or similar section, fill out details about the job such as title, 
              description, requirements, and location, then submit the posting for review and 
              approval by the portal's administrators before it goes live for candidates to view 
              and apply.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <Link to={"/applications/me"} className="text-xl">Apply For Job/Recruit Suitable Candidates</Link>
              {/* <p>Apply For Job/Recruit Suitable Candidates</p> */}
              <p>
              To apply for a job on <b>JobHuntBD</b>, you typically log in to your candidate account, search for 
              jobs based on your preferences, review the job descriptions, and then submit your application 
              by either uploading your resume and cover letter or filling out an online application form
               provided by the employer, ensuring to follow any specific instructions they've outlined for
               the application process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
