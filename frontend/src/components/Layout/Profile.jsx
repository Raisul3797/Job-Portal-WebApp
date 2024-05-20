import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from 'react-icons/fi';

const Profile = () => {
  // State to store profile data
  const [profileData, setProfileData] = useState(null);

  // Simulated function to fetch profile data from a database
  const fetchProfileData = () => {
    // Replace this with your actual database retrieval logic
    // Simulating an asynchronous fetch operation
    setTimeout(() => {
      // Sample profile data fetched from the database
      const dataFromDatabase = {
        _id: '65facb7f50648961d5d358d2',
        name: 'Raisul Islam',
        email: 'raisul@gmail.com',
        phone: '1775308562',
        password: '$2b$10$uhaC/CQsFgfSq13iynmfL.3palvIJ4CzHw8NV8JDtnqIm.E1paRP6',
        role: 'Employer',
        // Add more profile details as needed
      };
      // Set the fetched data to the state
      setProfileData(dataFromDatabase);
    }, 1000); // Simulate a delay of 1 second (1000 milliseconds)
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchProfileData();
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-heading font-bold text-2xl text-blue-600">My Profile</h1>
        {profileData ? (
          <div className="profile-details">
            <div className="profile-detail">
              <h2 className="detail-heading font-bold text-2xl">ID:</h2>
              <p className="detail-value text-xl">{profileData._id}</p>
            </div>
            <div className="profile-detail">
              <h2 className="detail-heading font-bold text-2xl">Name:</h2>
              <p className="detail-value text-xl">{profileData.name}</p>
            </div>
            <div className="profile-detail">
              <h2 className="detail-heading font-bold text-2xl">Email:</h2>
              <p className="detail-value text-xl">{profileData.email}</p>
            </div>
            <div className="profile-detail">
              <h2 className="detail-heading font-bold text-2xl">Phone:</h2>
              <p className="detail-value text-xl">{profileData.phone}</p>
            </div>
            <div className='flex justify-evenly mt-3'>
              <h2 className=''><FaFacebookF className="icon" style={{ color: '#3b5998' }} /></h2>
              <h2><FaTwitter className="icon" style={{ color: '#1da1f2' }} /></h2>
              <h2><FiInstagram className="icon" style={{ color: '#c13584' }} /></h2>
              <h2><FaLinkedinIn className="icon" style={{ color: '#0e76a8' }} /></h2>
            </div>
            {/* Add more profile details here */}
          </div>
        ) : (
          <p>Loading profile data...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
