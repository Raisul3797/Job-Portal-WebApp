import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { SiLamborghini, SiTesla } from "react-icons/si";
import { Link } from "react-router-dom";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Gulshan, Dhaka",
      openPositions: 10,
      icon: <FaMicrosoft />,
      path: "/microsoft-jobs",
    },
    {
      id: 2,
      title: "Tesla",
      location: "Tongi, Gazipur",
      openPositions: 5,
      icon: <SiTesla />,
      path: "/tesla-jobs",
    },
    {
      id: 3,
      title: "Apple",
      location: "Street 10 Uttara, Dhaka",
      openPositions: 20,
      icon: <FaApple />,
      path: "/apple-jobs",
    },
    {
      id: 4,
      title: "Lamborghini",
      location: "Street 10 Uttara, Dhaka",
      openPositions: 12,
      icon: <SiLamborghini />,
      path: "/lamborghini-jobs",
    },
    {
      id: 5,
      title: "Android",
      location: "Street 10 Uttara, Dhaka",
      openPositions: 20,
      icon: <IoLogoAndroid />,
      path: "/android-jobs",
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3 className="font-semibold text-4xl">Top Companies</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button><Link to={element.path}>Open Positions {element.openPositions}</Link></button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
