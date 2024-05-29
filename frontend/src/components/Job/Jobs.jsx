import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import { FiSearch } from "react-icons/fi";
import Button from '@material-ui/core/Button';

const Jobs = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);  
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/job/getall`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs || []); // Make sure we get the array from the response
      });
  }, []);

  const filteredItems = jobs.filter((job) => job.title.toLowerCase().indexOf(query.toLowerCase()) !== -1  );

  console.log(filteredItems)

  return (
    <section className="jobs page">
      <div className="container">
        <h1 className="font-semibold text-4xl">All Available Jobs</h1>
        {/* searching */}
        <form>
          <div className='flex'>
            <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 
                    focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 '>
              <input type="text" name="title" id="title" placeholder='Search here...' className='block border-0 bg-transparent 
                        py-2 pl-8 pr-56 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'
                onChange={handleInputChange}
                value={query}
              />
              <FiSearch className='absolute mt-2.5 ml-2 text-gray-400' />
            </div>
            <button type='submit' className='bg-blue-500 py-2 px-8 text-white md:rounded-s-none rounded'>Search</button>
          </div>
        </form>

        <div className="banner">
          {filteredItems.map((element) => {
            return (
              <div className="card rounded-lg" key={element._id}>
                <p>{element.title}</p>
                <p>{element.category}</p>
                <p>{element.country}</p>
                <Link to={`/job/${element._id}`}><Button className="">Job Details</Button></Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
