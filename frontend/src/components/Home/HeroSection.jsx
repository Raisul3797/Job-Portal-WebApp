import React, { useState, useEffect } from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const [employers, setEmployers] = useState([]);
  const [showEmployers, setShowEmployers] = useState(false);

  useEffect(() => {
    fetch('./src/MERN_JOB_SEEKING_WEBAPP.users.json')
      .then(response => response.json())
      .then(data => {
        setEmployers(data);
      })
      .catch(error => {
        console.error('Error fetching employer data:', error);
      });
  }, []);

  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: employers.length.toString(),
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];

  return (
    <>
      <div className="heroSection">
      <div className="container">
          <div className="title">
            <h1 className="bg-clip-text text-5xl font-bold">
              The <br />
              Greatest Opportunity <br />
              to Get Your New Job</h1>
            <p className="">
              Embark on a journey towards career excellence. Sign up for free, create your profile,
              and let <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 
            via-cyan-500 to-sky-600">JobHuntBD</span> be your guide to a fulfilling career. Your next adventure awaits!
            </p>
          </div>
          <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id} onClick={() => {
                if (element.subTitle === "Employers" || "Job Seekers") {
                  setShowEmployers(!showEmployers);
                }
              }}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
        {showEmployers && (
          <div className="employers-list pl-10 shadow-lg rounded-lg">
            <h2 className="mb-5 p-6 font-bold text-2xl text-center">List of Employers</h2>
            <ul className="p-8 space-y-2 grid grid-cols-5 mx-auto w-3/4 shadow-inner">
              {employers.map(employer => (
                <li className="" key={employer._id.$oid}>
                  <div><span className="font-bold pb-6">Name:</span> {employer.name}</div>
                  <div><span className="font-bold pb-6">Email:</span> {employer.email}</div>
                  <div><span className="font-bold pb-6">Phone:</span> {employer.phone.$numberLong || employer.phone}</div>
                </li>
              ))}
            </ul>
          </div>


        )}
      </div>
    </>
  );
};

export default HeroSection;
