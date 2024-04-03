import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };

  const toggleResourcesDropdown = () => {
    setShowResources(!showResources);
  };

  const closeResourcesDropdown = () => {
    setShowResources(false);
  };

  const handleNavItemClick = () => {
    setShow(false);
    closeResourcesDropdown(); // Close the dropdown menu
  };

  return (
    <nav className={isAuthorized ? "navbarShow bg-blue-700" : "navbarHide"}>
      <div className="container py-4">

        <a href="/" className='flex items-center gap-2 text-2xl font-bold text-black'>
          <img width="56" height="56" src="https://img.icons8.com/color/48/portal.png" alt="portal" />
          <span className='text-white text-3xl'>JobHuntBD</span>
        </a>

        <ul className={!show ? "menu" : "show-menu menu"}>
          <li>
            <Link to={"/"} onClick={handleNavItemClick}>
              <span className="font-bold nav-item">Home</span>
            </Link>
          </li>
          <li>
            <Link to={"/job/getall"} onClick={handleNavItemClick}>
              <span className="font-bold nav-item">All Jobs</span>
            </Link>
          </li>
          <li>
            <Link to={"/applications/me"} onClick={handleNavItemClick}>
              <span className="font-bold nav-item">
                {user && user.role === "Employer"
                  ? "Applicant's Application"
                  : "My Applications"}
              </span>
            </Link>
          </li>
          {user && user.role === "Employer" && (
            <>
              <li>
                <Link to={"/job/post"} onClick={handleNavItemClick}>
                  <span className="font-bold nav-item">Post Job</span>
                </Link>
              </li>
              <li>
                <Link to={"/job/me"} onClick={handleNavItemClick}>
                  <span className="font-bold nav-item">View Your Jobs</span>
                </Link>
              </li>
            </>
          )}

          {/* Resources dropdown menu - show only for job seekers */}
          {user && user.role === "Job Seeker" && (
  <li
    onClick={toggleResourcesDropdown}
    className=""
  >
    <span className="font-bold cursor-pointer text-white text-xl nav-item flex"> Career Resources<MdArrowDropDown /></span>
    <ul className={`absolute bg-slate-600 border border-gray-200 py-2 px-2 w-56 ${showResources ? "block" : "hidden"}`}>
      <li className="text-black">
        <Link to={"/cv-tips"} onClick={handleNavItemClick}>
          <span className="font-bold">CV Tips</span>
        </Link>
      </li>
      <li>
        <Link to={"/interview-qs"} onClick={handleNavItemClick}>
          <span className="font-bold">Interview Preparation</span>
        </Link>
      </li>
      <li>
        <Link to={"/skill-dev"} onClick={handleNavItemClick}>
          <span className="font-bold">Skill Development</span>
        </Link>
      </li>
    </ul>
  </li>
)}


          {/* Place the About item here to ensure visibility for both roles */}
          <li>
            <Link to={"/About"} onClick={handleNavItemClick}>
              <span className="font-bold nav-item">About</span>
            </Link>
          </li>
          <li> {/* This is the solution */}
            <button className="rounded" onClick={handleLogout}>
              <span className="font-bold text-slate-400 nav-item">Logout</span>
            </button>
          </li>
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );

};

export default Navbar;
