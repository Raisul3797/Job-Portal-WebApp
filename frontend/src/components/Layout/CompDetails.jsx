import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { TiDocumentText } from 'react-icons/ti';
import { FaCheckCircle } from 'react-icons/fa'; // Icon for requirements
import { AiOutlineBulb } from 'react-icons/ai'; // Icon for responsibilities
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const handlePayment = () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your apply has been submitted.",
        showConfirmButton: false,
        timer: 1500
    });
};

const CompDetails = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <div className="container company-details my-8">
            <LogoAndName name="BRAC Bank Ltd." />
            <Location location="Gulshan, Dhaka" />
            <JobDescription description="We are looking for a talented React Developer to join our 
            team as a Web Developer, where you'll leverage cutting-edge technologies to craft 
            responsive and scalable web applications. As a key member of our development team, 
            you will collaborate closely with designers and engineers to implement robust front-end
             interfaces and intuitive user experiences. Your role will involve translating design
             wireframes into efficient code, optimizing applications for speed and scalability, and 
             ensuring cross-browser compatibility. Proficiency in HTML, CSS, and JavaScript is essential,
              with experience in modern frameworks like React or Angular. Bring your creativity and 
              problem-solving skills to innovate and drive our projects forward in this exciting role." />
            <Requirements requirements={['3+ years of experience in React', 'Strong proficiency in HTML, CSS', 
                'Experience with Redux']} />
            <Responsibilities responsibilities={['Develop new user-facing features', 
                'Build reusable components and libraries', 
                'Optimize applications for maximum speed and scalability']} />
            <ApplyButton />
            <div className="text-center mt-8">
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

const LogoAndName = ({ name }) => (
    <div className="logo-and-name mb-6">
        <img src="./src/assets/spotify.png" className="company-logo mb-4" alt="Company Logo" />
        <h1 className="company-name font-semibold text-4xl">{name}</h1>
    </div>
);

const Location = ({ location }) => (
    <div className="location mb-6">
        <div className="flex items-center mb-2">
            <IoLocationOutline className="text-3xl mr-3 text-blue-500" />
            <h2 className='text-2xl font-semibold'>Location</h2>
        </div>
        <p className='text-xl'>{location}</p>
    </div>
);

const JobDescription = ({ description }) => (
    <div className="job-description mb-6">
        <div className="flex items-center mb-2">
            <TiDocumentText className="text-3xl mr-3 text-blue-500" />
            <h2 className='text-2xl font-semibold'>Job Description</h2>
        </div>
        <p className='text-justify'>{description}</p>
    </div>
);

const Requirements = ({ requirements }) => (
    <div className="requirements mb-6">
        <div className="flex items-center mb-2">
            <FaCheckCircle className="text-3xl mr-3 text-green-500" />
            <h2 className='text-2xl font-semibold'>Requirements</h2>
        </div>
        <ul className="list-disc list-inside">
            {requirements.map((requirement, index) => (
                <li key={index} className='text-xl'>{requirement}</li>
            ))}
        </ul>
    </div>
);

const Responsibilities = ({ responsibilities }) => (
    <div className="responsibilities mb-6">
        <div className="flex items-center mb-2">
            <AiOutlineBulb className="text-3xl mr-3 text-yellow-500" />
            <h2 className='text-2xl font-semibold'>Responsibilities</h2>
        </div>
        <ul className="list-disc list-inside">
            {responsibilities.map((responsibility, index) => (
                <li key={index} className='text-xl'>{responsibility}</li>
            ))}
        </ul>
    </div>
);

const ApplyButton = () => (
    <div className="apply-button">
        <button onClick={handlePayment} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors duration-300">Apply Now</button>
    </div>
);

export default CompDetails;
