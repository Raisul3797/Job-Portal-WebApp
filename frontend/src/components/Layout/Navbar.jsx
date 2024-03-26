import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
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

  return (
    <nav className={isAuthorized ? "navbarShow bg-blue-700" : "navbarHide"}>
      <div className="container py-4">

        <a href="/" className='flex items-center gap-2 text-2xl font-bold text-black'>
          <img width="48" height="48" src="https://img.icons8.com/color/48/portal.png" alt="portal" />
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 
            via-cyan-500 to-sky-600'>JobHuntBD</span></a>

        <ul className={!show ? "menu" : "show-menu menu"}>
          <li>
            <Link to={"/"} onClick={() => setShow(false)}>
              <span className="font-bold">Home</span>
            </Link>
          </li>
          <li>
            <Link to={"/job/getall"} onClick={() => setShow(false)}>
              <span className="font-bold">All Jobs</span>
            </Link>
          </li>
          <li>
            <Link to={"/applications/me"} onClick={() => setShow(false)}>
              <span className="font-bold ">
                {user && user.role === "Employer"
                  ? "Applicant's Application"
                  : "My Applications"}
              </span>
            </Link>
          </li>
          <li>
            <Link to={"/About"} onClick={() => setShow(false)}>
              <span className="font-bold">About</span>
            </Link>
          </li>
          {user && user.role === "Employer" ? (
            <>
              <li>
                <Link to={"/job/post"} onClick={() => setShow(false)}>
                  <span className="font-bold">Post Job</span>
                </Link>
              </li>
              <li>
                <Link to={"/job/me"} onClick={() => setShow(false)}>
                  <span className="font-bold">View Your Jobs</span>
                </Link>
              </li>
              <li>
                <Link to={"/About"} onClick={() => setShow(false)}>
                  <span className="font-bold">About</span>
                </Link>
              </li>
            </>
          ) : (
            <>
            
            </>
          )}

          <button className="rounded" onClick={handleLogout}><span className="font-bold text-slate-400
          ">Logout</span></button>
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
