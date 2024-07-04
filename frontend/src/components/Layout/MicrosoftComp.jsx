import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaBuilding, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

const MicrosoftComp = () => {
    const jobs = [
        { id: 1, title: 'Software Engineer', company: 'BRAC IT Services Ltd.', location: 'Dhaka, Bangladesh', description: 'We are seeking a talented Software Engineer with expertise in Java and Spring Boot. You will be responsible for developing high-performance applications and ensuring their scalability.' },
        { id: 2, title: 'Product Manager', company: 'Grameenphone', location: 'Dhaka, Bangladesh', description: 'As a Product Manager, you will lead cross-functional teams to design, build, and roll-out products that deliver the company’s vision and strategy. Experience in the telecommunications industry is a plus.' },
        { id: 3, title: 'Data Scientist', company: 'Robi Axiata Limited', location: 'Chattogram, Bangladesh', description: 'We are looking for a Data Scientist who can analyze large amounts of raw information to find patterns and use them to optimize our business operations. Proficiency in Python and machine learning is required.' },
        { id: 4, title: 'Front-End Developer', company: 'Pathao', location: 'Dhaka, Bangladesh', description: 'Join our team as a Front-End Developer and help us create stunning user interfaces. Proficiency in React and a good eye for design are essential.' },
        { id: 5, title: 'UI/UX Designer', company: 'bKash', location: 'Dhaka, Bangladesh', description: 'We are looking for a creative UI/UX Designer to join our team. You will be responsible for designing user-friendly interfaces for our mobile and web applications.' },
        { id: 6, title: 'DevOps Engineer', company: 'Shohoz', location: 'Dhaka, Bangladesh', description: 'Shohoz is looking for a skilled DevOps Engineer to manage and improve our cloud infrastructure. Experience with AWS and Kubernetes is required.' },
        { id: 7, title: 'QA Engineer', company: 'Telenor Health', location: 'Dhaka, Bangladesh', description: 'As a QA Engineer, you will be responsible for ensuring the quality and reliability of our health tech products. Experience with automated testing tools is a plus.' },
        { id: 8, title: 'Backend Developer', company: 'Chaldal', location: 'Dhaka, Bangladesh', description: 'We need a Backend Developer to join our team and help build robust backend systems for our e-commerce platform. Proficiency in Node.js and MongoDB is preferred.' },
        { id: 9, title: 'Mobile App Developer', company: 'Sheba.xyz', location: 'Dhaka, Bangladesh', description: 'Sheba.xyz is looking for a Mobile App Developer to create and maintain mobile applications for our services. Experience with Flutter or React Native is required.' },
        { id: 10, title: 'IT Support Specialist', company: 'Banglalink', location: 'Dhaka, Bangladesh', description: 'We are hiring an IT Support Specialist to provide technical support and manage our IT infrastructure. Strong troubleshooting skills and experience with network management are necessary.' },
    ];
    
 
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    const handleDetailsClick = (id) => {
        navigate(`/comp-details`);
    };

    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
            {jobs.map(job => (
                <div className="job-card bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105" key={job.id}>
                    <div className="card-content p-6">
                        <h3 className="text-2xl text-blue-500 font-bold mb-2">{job.title}</h3>
                        <div className="flex items-center text-lg mb-2">
                            <FaBuilding className="text-blue-500 mr-2" />
                            <p>{job.company}</p>
                        </div>
                        <div className="flex items-center text-lg mb-4">
                            <FaMapMarkerAlt className="text-red-500 mr-2" />
                            <p>{job.location}</p>
                        </div>
                        <p className="text-gray-700 mb-4 text-justify">{job.description}</p>
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
                <button
                    onClick={handleBackClick}
                    className="btn btn-secondary px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 flex items-center justify-center"
                >
                    <IoMdArrowRoundBack className="mr-2" />
                    Back
                </button>
            </div>
        </div>
    );
};

export default MicrosoftComp;
