import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaBuilding, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

const AppleComp = () => {
    const jobs = [
        {
            id: 1,
            title: 'Software Engineer',
            company: 'Grameenphone',
            location: 'Dhaka, Bangladesh',
            description: 'Join Grameenphone as a Software Engineer to develop innovative solutions for our telecommunications network. Expertise in Java and Python is required.',
        },
        {
            id: 2,
            title: 'Product Manager',
            company: 'Banglalink',
            location: 'Dhaka, Bangladesh',
            description: 'As a Product Manager at Banglalink, you will oversee the development and launch of new telecommunication products. Experience in the telecom industry is a plus.',
        },
        {
            id: 3,
            title: 'Data Scientist',
            company: 'Robi Axiata Limited',
            location: 'Dhaka, Bangladesh',
            description: 'We are seeking a Data Scientist to analyze complex data sets and provide insights for product improvements. Proficiency in R and machine learning algorithms is essential.',
        },
        {
            id: 4,
            title: 'Mechanical Engineer',
            company: 'Walton',
            location: 'Gazipur, Bangladesh',
            description: 'Walton is looking for a Mechanical Engineer to design and develop mechanical systems for our electronics products. SolidWorks and AutoCAD experience is preferred.',
        },
        {
            id: 5,
            title: 'Electrical Engineer',
            company: 'Samsung Bangladesh',
            location: 'Dhaka, Bangladesh',
            description: 'Join our team as an Electrical Engineer to work on electrical systems for our cutting-edge products. Experience with PCB design and embedded systems is required.',
        },
        {
            id: 6,
            title: 'Quality Assurance Engineer',
            company: 'ACI Limited',
            location: 'Dhaka, Bangladesh',
            description: 'We are hiring a QA Engineer to ensure the quality and reliability of ACI products. Experience with automated testing tools and methodologies is essential.',
        },
        {
            id: 7,
            title: 'UI/UX Designer',
            company: 'Pathao',
            location: 'Dhaka, Bangladesh',
            description: 'Pathao is looking for a UI/UX Designer to create intuitive and engaging user interfaces for our software applications. Experience with Adobe XD and Sketch is preferred.',
        },
        {
            id: 8,
            title: 'Cybersecurity Engineer',
            company: 'Bangladesh Computer Council',
            location: 'Dhaka, Bangladesh',
            description: 'We are seeking a Cybersecurity Engineer to protect our infrastructure from cyber threats. Experience with network security and ethical hacking is required.',
        },
        {
            id: 9,
            title: 'Manufacturing Engineer',
            company: 'Bashundhara Group',
            location: 'Dhaka, Bangladesh',
            description: 'Bashundhara Group is hiring a Manufacturing Engineer to optimize our production processes and ensure efficient manufacturing. Lean manufacturing experience is a plus.',
        },
        {
            id: 10,
            title: 'Supply Chain Manager',
            company: 'Unilever Bangladesh',
            location: 'Dhaka, Bangladesh',
            description: 'Join Unilever Bangladesh as a Supply Chain Manager to oversee the procurement and logistics of materials for our production. Experience in supply chain management is required.',
        },
    ];

    const handleDetailsClick = (id) => {
        navigate(`/comp-details`);
    };
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

export default AppleComp;
