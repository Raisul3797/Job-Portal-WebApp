import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";
import { IoMdArrowRoundBack } from "react-icons/io";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();

  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/job/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJob(res.data.job);
      })
      .catch((error) => {
        navigateTo("/notfound");
      });
  }, []);

  if (!isAuthorized) {
    navigateTo("/login");
  }

  const handleNavItemClick = () => {
    setShow(false);
    closeResourcesDropdown(); // Close the dropdown menu
  };

  return (
    <section className="jobDetail page">
      <div className="container relative">
        <h3 className="font-semibold text-4xl">Job Details</h3>
        <Link to={"/job/getall"} onClick={handleNavItemClick} className="flex items-center text-2xl back-link absolute left-0 top-24">
          <IoMdArrowRoundBack />
          <span className="font-bold ml-1">Back</span>
        </Link>
        <div className="banner">
          <p>
            Title: <span> {job.title}</span>
          </p>
          <p>
            Category: <span>{job.category}</span>
          </p>
          <p>
            Country: <span>{job.country}</span>
          </p>
          <p>
            City: <span>{job.city}</span>
          </p>
          <p>
            Location: <span>{job.location}</span>
          </p>
          <p>
            Description: <span>{job.description}</span>
          </p>
          <p>
            Job Posted On: <span>{job.jobPostedOn}</span>
          </p>
          <p>
            Salary:{" "}
            {job.fixedSalary ? (
              <span>{job.fixedSalary}</span>
            ) : (
              <span>
                {job.salaryFrom} - {job.salaryTo}
              </span>
            )}
          </p>
          {user && user.role === "Employer" ? (
            <></>
          ) : (
            <Link className="rounded" to={`/application/${job._id}`}>
              <span className="font-bold">Apply Now</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
