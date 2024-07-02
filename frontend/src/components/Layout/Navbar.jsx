import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowDropDown } from "react-icons/md";
import { FaArrowRightToBracket, FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();
  const resourcesRef = useRef(null);
  const userMenuRef = useRef(null);

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

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleNavItemClick = () => {
    setShow(false);
    setShowResources(false); // Close the resources dropdown
    setShowUserMenu(false); // Close the user menu
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
        setShowResources(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={isAuthorized ? "navbarShow bg-blue-700" : "navbarHide"}>
      <div className="container py-4 flex items-center justify-center">
        <a href="/" className='flex items-center gap-2 text-2xl font-bold text-black'>
          <img width="56" height="56" src="https://img.icons8.com/color/48/portal.png" alt="portal" />
          <span className='text-white text-3xl'>JobHuntBD</span>
        </a>

        <ul className={!show ? "menu" : "show-menu menu"}>
          <li>
            <Link to={"/"} onClick={handleNavItemClick}>
              <span className="font-bold nav-item hover:text-blue-300">Home</span>
            </Link>
          </li>
          <li>
            <Link to={"/job/getall"} onClick={handleNavItemClick}>
              <span className="font-bold nav-item hover:text-blue-300">All Jobs</span>
            </Link>
          </li>
          <li>
            <Link to={"/applications/me"} onClick={handleNavItemClick}>
              <span className="font-bold nav-item hover:text-blue-300">
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
                  <span className="font-bold nav-item hover:text-blue-300">Post Job</span>
                </Link>
              </li>
              <li>
                <Link to={"/job/me"} onClick={handleNavItemClick}>
                  <span className="font-bold nav-item hover:text-blue-300">View Your Jobs</span>
                </Link>
              </li>
            </>
          )}

          {/* Resources dropdown menu - show only for job seekers */}
          {user && user.role === "Job Seeker" && (
            <li
            ref={resourcesRef}
              onClick={toggleResourcesDropdown}
              className=""
            >
              <span className="font-bold cursor-pointer text-white text-xl mb-0 nav-item flex items-center justify-center hover:text-blue-300"> Career Resources<MdArrowDropDown /></span>
              <ul className={`absolute bg-slate-600 border border-gray-200 py-2 px-2 w-56 ${showResources ? "block" : "hidden"}`}>
                <li className="text-blue">
                  <Link to={"/cv-tips"} onClick={handleNavItemClick}>
                    <span className="font-bold hover:text-blue-500">CV Tips</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/interview-qs"} onClick={handleNavItemClick}>
                    <span className="font-bold hover:text-blue-500">Interview Preparation</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/skill-dev"} onClick={handleNavItemClick}>
                    <span className="font-bold hover:text-blue-500 hover:under">Skill Development</span>
                  </Link>
                </li>
              </ul>
            </li>
          )}


          {/* Place the About item here to ensure visibility for both roles */}
          <li>
            <Link to={"/About"} onClick={handleNavItemClick}>
              <span className="font-bold nav-item hover:text-blue-300">About</span>
            </Link>
          </li>

          <li ref={userMenuRef} className="" onClick={toggleUserMenu}>
            <span className="font-bold cursor-pointer text-white text-xl nav-item flex">
              {user && user.role === "Job Seeker" ? (
                <img className="h-14 w-14 rounded-full" src="./src/assets/Raisul.jpg" alt="Job Seeker" />
              ) : user && user.role === "Employer" ? (
                <img className="h-14 w-14 rounded-full" src="./src/assets/alamin.jpg" alt="Employer" />
              ) : (
                <FaRegCircleUser className="h-14 w-14 rounded-full" />
              )}
            </span>
            <ul className={`absolute bg-slate-600 border border-gray-200 py-2 px-2 w-56 mt-3 ${showUserMenu ? "block" : "hidden"}`}>
              <li className="text-black">
                <Link to={"/my-profile"} onClick={handleNavItemClick}>
                  <span className="font-bold text-white hover:text-blue-300">Profile</span>
                </Link>
              </li>
              <li>
                <Link to={"/settings"} onClick={handleNavItemClick}>
                  <span className="font-bold text-white hover:text-blue-300">Settings</span>
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>
                  <span className="font-bold cursor-pointer text-white text-xl nav-item flex items-center gap-3 hover:text-blue-300">Logout<FaArrowRightToBracket /></span>
                </button>
              </li>
            </ul>
          </li>

          {/* Logout button */}
          {/* <li>
            <button className="rounded" onClick={handleLogout}>
              <span className="font-bold text-slate-400 nav-item">Logout</span>
            </button>
          </li> */}
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );

};

export default Navbar;
