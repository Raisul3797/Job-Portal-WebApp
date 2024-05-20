import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Swal from 'sweetalert2';
// import axios from 'axios'

const PremiumJobs = () => {
    // Sample job data for demonstration
    const jobs = [
        {
            id: 1,
            title: 'Software Engineer',
            company: 'Tech Corp',
            location: 'New York, USA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu nunc sit amet dolor ultricies viverra.',
            logo: 'url_to_company_logo_1', // Add the URL to the company logo image
        },
        {
            id: 2,
            title: 'Data Analyst',
            company: 'Data Solutions Ltd.',
            location: 'London, UK',
            description: 'Nullam rutrum ultricies dolor, sit amet finibus enim suscipit eget. Proin a tortor in nisl hendrerit convallis id in est.',
            logo: 'url_to_company_logo_2', // Add the URL to the company logo image
        },
        {
            id: 3,
            title: 'UX/UI Designer',
            company: 'Design Studio Inc.',
            location: 'San Francisco, USA',
            description: 'Fusce fermentum nisi sit amet nibh malesuada, sed venenatis urna fermentum. Vestibulum id metus a elit eleifend vestibulum.',
            logo: 'url_to_company_logo_3', // Add the URL to the company logo image
        },
        {
            id: 4,
            title: 'Marketing Manager',
            company: 'Digital Marketing',
            location: 'Sydney, Australia',
            description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sit amet quam vitae nisi bibendum fermentum.',
            logo: 'url_to_company_logo_4', // Add the URL to the company logo image
        },
    ];

    const handlePayment = async () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Payment has been saved successfully!",
            showConfirmButton: false,
            timer: 1500
          });
    }

    // const handlePayment = async () => {
    //     try {
    //         await axios.post('http://localhost:8000/bkash-checkout', {
    //             amount: 100, 
    //             callbackURL: 'http://localhost:8000/bkash-callback', 
    //             orderID: '12345', 
    //             reference: '12345',
    //         })
    //         .then ((resposne) => {
    //             console.log(resposne);
    //             window.location.href = resposne?.data
    //         })
    //         .catch ((err) => {
    //             console.log(err)
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // Function to handle the payment process
    // const handlePayment = async () => {
    //     try {
    //         const response = await fetch('/create-bkash-payment', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ amount: 100 }), // Set the payment amount here
    //         });

    //         const data = await response.json();

    //         if (data.paymentURL) {
    //             window.location.href = data.paymentURL;
    //         } else {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Payment Failed',
    //                 text: data.error,
    //             });
    //         }
    //     } catch (error) {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Error',
    //             text: 'Success!',
    //         });
    //     }
    // };

    return (
        <div className="job-container w-3/4 mx-auto shadow-2xl p-10 rounded-lg">
            <a href='/' className="flex items-center text-2xl back-link absolute left-0 top-24">
                <IoMdArrowRoundBack />
                <span className="font-bold ml-1">Back</span>
            </a>
            {jobs.map(job => (
                <div className="job-card" key={job.id}>
                    <div className="card-content space-y-2">
                        <div className="logo">
                            {/* Display the company logo */}
                            <div className="h-20 w-20" ><img src="./src/assets/linkedin.png" alt="" /></div>
                        </div>
                        <h3 className='text-3xl'>{job.title}</h3>
                        <p><strong>Company:</strong> {job.company}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                        <p><strong>Descriptions:</strong> {job.description}</p>
                    </div>
                </div>
            ))}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto" onClick={handlePayment}>
                Pay Now
            </button>
        </div>
    );
};

export default PremiumJobs;
