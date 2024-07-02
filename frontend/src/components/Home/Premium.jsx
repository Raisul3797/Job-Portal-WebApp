import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Swal from 'sweetalert2';
import { SiTesla } from 'react-icons/si';
import { FaApple, FaMicrosoft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { jobsData } from '../../utils/data'; // Assuming you have a data file containing job information

const Premium = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelect = (packageId) => {
    setSelectedPackage(packageId);
  };

  const handleApplyButton = () => {
    if (selectedPackage === null) {
      Swal.fire({
        icon: 'error',
        title: 'Please select a package',
      });
    } else {
      // Assuming you have a function to handle the purchase and apply logic
      purchaseAndApply(selectedPackage);
    }
  };

  const purchaseAndApply = (packageId) => {
    // Here you would implement the logic to handle the purchase and apply process
    // const selectedJobs = jobsData.filter((job) => job.packageId === packageId);

    // For demonstration, let's just log the selected jobs
    console.log('Selected Jobs:', selectedJobs);

    // You can then implement the logic to apply these jobs to the user
    // For example, you might update the user's profile with the selected jobs

    Swal.fire({
      icon: 'success',
      title: 'Jobs successfully purchased and applied!',
    });
  };

  const packages = [
    {
      id: 1,
      title: 'Package 1',
      price: '50 BDT',
      jobs: 5,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: 'Package 2',
      price: '40 BDT',
      jobs: 4,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: 'Package 3',
      price: '60 BDT',
      jobs: 6,
      icon: <FaApple />,
    },
  ];

  return (
    <div id='premium-jobs' className="companies">
      <div className="container">
        <h3 className="font-semibold text-4xl">Premium Categories</h3>
        <div className="banner">
          {packages.map((pack) => (
            <div className="card" key={pack.id}>
              <div className="content">
                <div className="icon">{pack.icon}</div>
                <div className="text">
                  <p>{pack.title}</p>
                  <p>Price: {pack.price}</p>
                  <p>Number of Jobs: {pack.jobs}</p>
                </div>
              </div>
              <Button onClick={() => handlePackageSelect(pack.id)}><Link to='/premium-jobs'>Select</Link></Button>
            </div>
          ))}
        </div>
        <button onClick={handleApplyButton} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pay to get Package
        </button>
      </div>
    </div>
  );
};

export default Premium;
