import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaBuilding, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';

const handleDetailsClick = (id) => {
    Navigate(`/comp-details`);
};

const TeslaComp = () => {
    const jobs = [
        {
            id: 1,
            title: 'Software Engineer',
            company: 'Tesla',
            location: 'Fremont, CA',
            description: 'Join Tesla as a Software Engineer to innovate and develop cutting-edge technology for our electric vehicles. Expertise in Python and C++ is required.',
        },
        {
            id: 2,
            title: 'Product Manager',
            company: 'Tesla',
            location: 'Palo Alto, CA',
            description: 'As a Product Manager at Tesla, you will oversee the development and launch of new automotive products. Experience in the automotive industry is a plus.',
        },
        {
            id: 3,
            title: 'Data Scientist',
            company: 'Tesla',
            location: 'Palo Alto, CA',
            description: 'We are seeking a Data Scientist to analyze complex data sets and provide insights for product improvements. Proficiency in R and machine learning algorithms is essential.',
        },
        {
            id: 4,
            title: 'Mechanical Engineer',
            company: 'Tesla',
            location: 'Fremont, CA',
            description: 'Tesla is looking for a Mechanical Engineer to design and develop mechanical systems for our vehicles. SolidWorks and AutoCAD experience is preferred.',
        },
        {
            id: 5,
            title: 'Electrical Engineer',
            company: 'Tesla',
            location: 'Palo Alto, CA',
            description: 'Join our team as an Electrical Engineer to work on electrical systems for our cutting-edge vehicles. Experience with PCB design and embedded systems is required.',
        },
        {
            id: 6,
            title: 'Quality Assurance Engineer',
            company: 'Tesla',
            location: 'Fremont, CA',
            description: 'We are hiring a QA Engineer to ensure the quality and reliability of Tesla products. Experience with automated testing tools and methodologies is essential.',
        },
        {
            id: 7,
            title: 'UI/UX Designer',
            company: 'Tesla',
            location: 'Palo Alto, CA',
            description: 'Tesla is looking for a UI/UX Designer to create intuitive and engaging user interfaces for our software applications. Experience with Adobe XD and Sketch is preferred.',
        },
        {
            id: 8,
            title: 'Cybersecurity Engineer',
            company: 'Tesla',
            location: 'Palo Alto, CA',
            description: 'We are seeking a Cybersecurity Engineer to protect our vehicles and infrastructure from cyber threats. Experience with network security and ethical hacking is required.',
        },
        {
            id: 9,
            title: 'Manufacturing Engineer',
            company: 'Tesla',
            location: 'Fremont, CA',
            description: 'Tesla is hiring a Manufacturing Engineer to optimize our production processes and ensure efficient manufacturing of our vehicles. Lean manufacturing experience is a plus.',
        },
        {
            id: 10,
            title: 'Supply Chain Manager',
            company: 'Tesla',
            location: 'Fremont, CA',
            description: 'Join Tesla as a Supply Chain Manager to oversee the procurement and logistics of materials for our production. Experience in supply chain management and SAP is required.',
        },
    ];

   

    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
            {jobs.map(job => (
                <div className="job-card bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105" key={job.id}>
                    <div className="card-content p-6">
                        <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                        <div className="flex items-center text-lg mb-2">
                            <FaBuilding className="text-blue-500 mr-2" />
                            <p>{job.company}</p>
                        </div>
                        <div className="flex items-center text-lg mb-4">
                            <FaMapMarkerAlt className="text-red-500 mr-2" />
                            <p>{job.location}</p>
                        </div>
                        <p className="text-gray-700 text-justify mb-4">{job.description}</p>
                        <button
                            onClick={() => handleDetailsClick(job.id)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full flex items-center justify-center"
                        >

                            <FaInfoCircle className="mr-2" />
                            Details
                        </button>
                    </div>
                </div>
            ))}
            <div className="text-center col-span-full mt-8">
                <a href='/' className="btn btn-secondary px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 flex items-center justify-center">
                    <IoMdArrowRoundBack className="mr-2" />
                    Back
                </a>
            </div>
        </div>
    );
};

export default TeslaComp;
