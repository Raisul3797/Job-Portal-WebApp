import React, { useState, useEffect } from 'react';
import { BsToggleOn } from "react-icons/bs";

const Settings = () => {
  // State to store settings data
  const [settingsData, setSettingsData] = useState(null);

  // Simulated function to fetch settings data from a database
  const fetchSettingsData = () => {
    // Replace this with your actual database retrieval logic
    // Simulating an asynchronous fetch operation
    setTimeout(() => {
      // Sample settings data fetched from the database
      const dataFromDatabase = {
        theme: '',
        notifications: true,
        language: 'English',
        // Add more settings as needed
      };
      // Set the fetched data to the state
      setSettingsData(dataFromDatabase);
    }, 1000); // Simulate a delay of 1 second (1000 milliseconds)
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchSettingsData();
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  return (
    <div className="flex justify-end p-4">
      <div className="w-80 bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Settings</h1>
        {settingsData ? (
          <div className="settings-details">
            <div className="settings-detail">
              <h2 className="font-bold text-xl">Theme:</h2>
              <p className='text-4xl'><BsToggleOn /></p>
              <p className="text-lg">{settingsData.theme}</p>
            </div>
            <div className="settings-detail">
              <h2 className="font-bold text-xl">Notifications:</h2>
              <p className="text-lg">{settingsData.notifications ? 'Enabled' : 'Disabled'}</p>
            </div>
            <div className="settings-detail">
              <h2 className="font-bold text-xl">Language:</h2>
              <p className="text-lg">{settingsData.language}</p>
            </div>
            {/* Add more settings details here */}
          </div>
        ) : (
          <p>Loading settings data...</p>
        )}
      </div>
    </div>
  );
};

export default Settings;
