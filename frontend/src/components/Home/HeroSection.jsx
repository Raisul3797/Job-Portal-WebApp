import React, { useState, useEffect } from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [employers, setEmployers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [jobSeekers, setJobSeekers] = useState([]);
  const [companies, setCompanies] = useState([]);

  const [showEmployers, setShowEmployers] = useState(false);
  const [showJobs, setShowJobs] = useState(false);
  const [showCompanies, setShowCompanies] = useState(false);
  const [showJobSeekers, setShowJobSeekers] = useState(false);

  useEffect(() => {
    fetch('./src/MERN_JOB_SEEKING_WEBAPP.users.json')
      .then(response => response.json())
      .then(data => {
        setEmployers(data);
        setJobSeekers(data); // Reuse employers data for job seekers
      })
      .catch(error => console.error('Error fetching employer data:', error));

    fetch('./src/MERN_JOB_SEEKING_WEBAPP.jobs.json')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error('Error fetching jobs data:', error));

    // Generate sample companies data
    setCompanies([
      { id: 1, name: "Tech Solutions", industry: "IT", location: "New York" },
      { id: 2, name: "Health Plus", industry: "Healthcare", location: "Los Angeles" },
      { id: 3, name: "Eco Energy", industry: "Renewable Energy", location: "San Francisco" },
      { id: 4, name: "FinTech Corp", industry: "Finance", location: "Chicago" },
      { id: 5, name: "AutoDrive", industry: "Automotive", location: "Detroit" },
      { id: 6, name: "BioLife", industry: "Biotechnology", location: "Boston" },
      { id: 7, name: "Green Energy", industry: "Renewable Energy", location: "Denver" },
      { id: 8, name: "EduTech", industry: "Education", location: "Austin" },
      { id: 9, name: "MediCare", industry: "Healthcare", location: "Houston" },
      { id: 10, name: "AgriGrowth", industry: "Agriculture", location: "Des Moines" },
      { id: 11, name: "RetailHub", industry: "Retail", location: "Seattle" },
      { id: 12, name: "CyberSecure", industry: "Cybersecurity", location: "San Diego" },
      { id: 13, name: "LogiTrans", industry: "Logistics", location: "Memphis" },
      { id: 14, name: "RealEstatePro", industry: "Real Estate", location: "Phoenix" },
      { id: 15, name: "FashionForward", industry: "Fashion", location: "New York" },
      { id: 16, name: "TourismExperts", industry: "Tourism", location: "Orlando" },
      { id: 17, name: "Foodies", industry: "Food & Beverage", location: "San Francisco" },
      { id: 18, name: "Sportify", industry: "Sports", location: "Miami" },
      { id: 19, name: "SpaceTech", industry: "Aerospace", location: "Houston" },
      { id: 20, name: "AI Innovators", industry: "Artificial Intelligence", location: "San Jose" }
    ]);
  }, []);

  const handleToggle = (type) => {
    setShowEmployers(type === "employers");
    setShowJobs(type === "jobs");
    setShowCompanies(type === "companies");
    setShowJobSeekers(type === "jobSeekers");
  };

  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
      onClick: () => handleToggle("jobs"),
    },
    {
      id: 2,
      title: companies.length.toString(),
      subTitle: "Companies",
      icon: <FaBuilding />,
      onClick: () => handleToggle("companies"),
    },
    {
      id: 3,
      title: "10,001", //jobSeekers.length.toString()
      subTitle: "Job Seekers",
      icon: <FaUsers />,
      // onClick: () => handleToggle("jobSeekers"),
    },
    {
      id: 4,
      title: '5,920', //employers.length.toString()
      subTitle: "Employers",
      icon: <FaUserPlus />,
      // onClick: () => handleToggle("employers"),
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
              to Get Your New Job
            </h1>
            <p>
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
          {details.map((element) => (
            <div className="card" key={element.id} onClick={element.onClick}>
              <div className="icon">{element.icon}</div>
              <div className="content">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
        {showJobs && (
  <div className="jobs-list pl-10 common-subtitle">
    <h2 className="mb-5 p-6 font-bold text-2xl text-center">List of Jobs</h2>
    <ul className="p-8 space-y-2 grid grid-cols-5 mx-auto w-3/4 shadow-inner">
      {jobs.map(job => (
        <li className="space-y-2 company-card bg-slate-200" key={job._id.$oid}>
          <div><span className="font-bold pb-6">Title:</span> {job.title}</div>
          <div><span className="font-bold pb-6">Country:</span> {job.country}</div>
          <div><span className="font-bold pb-6">Location:</span> {job.location}</div>
          <Link className="" to={`/application/${job._id}`}>
            <button className="mt-4 px-2 py-2 bg-blue-500 text-white rounded font-bold">Apply Now</button>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}

{showCompanies && (
  <div className="companies-list pl-10 common-subtitle">
    <h2 className="mb-5 p-6 font-bold text-2xl text-center">List of Companies</h2>
    <ul className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
      {companies.map(company => (
        <li className="company-card bg-slate-200" key={company.id}>
          <h3>{company.name}</h3>
          <p><span className="font-bold">Industry:</span> {company.industry}</p>
          <p><span className="font-bold">Location:</span> {company.location}</p>
          <Link to="{`/company/${company.id}`}">
            <div className="text-center">
              <button className="mt-2">Details</button>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}

{showJobSeekers && (
  <div className="job-seekers-list pl-10 common-subtitle">
    <h2 className="mb-5 p-6 font-bold text-2xl text-center">List of Job Seekers</h2>
    <ul className="p-8 space-y-2 grid grid-cols-5 mx-auto w-3/4 shadow-inner">
      {jobSeekers.map(jobSeeker => (
        <li className="company-card bg-slate-300" key={jobSeeker._id.$oid}>
          <div><span className="font-bold pb-6">Name:</span> {jobSeeker.name}</div>
          <div><span className="font-bold pb-6">Email:</span> {jobSeeker.email}</div>
          <div><span className="font-bold pb-6">Phone:</span> {jobSeeker.phone.$numberLong || jobSeeker.phone}</div>
        </li>
      ))}
    </ul>
  </div>
)}

{showEmployers && (
  <div className="employers-list pl-10 common-subtitle">
    <h2 className="mb-5 p-6 font-bold text-2xl text-center">List of Employers</h2>
    <ul className="p-8 space-y-2 grid grid-cols-5 mx-auto w-3/4 shadow-inner">
      {employers.map(employer => (
        <li className="company-card bg-slate-300" key={employer._id.$oid}>
          <div><span className="font-bold pb-6">Name:</span> {employer.name}</div>
          <div><span className="font-bold pb-6">Email:</span> {employer.email}</div>
          <div><span className="font-bold pb-6">Role:</span> {employer.role}</div>
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
