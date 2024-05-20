import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';

const MicrosoftComp = () => {
    // Sample job data for demonstration
    const jobs = [
        {
            id: 1,
            title: 'Software Engineer',
            company: 'Microsoft',
            location: 'Redmond, WA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu nunc sit amet dolor ultricies viverra.',
        },
        {
            id: 2,
            title: 'Product Manager',
            company: 'Microsoft',
            location: 'Seattle, WA',
            description: 'Nullam rutrum ultricies dolor, sit amet finibus enim suscipit eget. Proin a tortor in nisl hendrerit convallis id in est.',
        },
        {
            id: 3,
            title: 'Data Scientist',
            company: 'Microsoft',
            location: 'Bellevue, WA',
            description: 'Fusce fermentum nisi sit amet nibh malesuada, sed venenatis urna fermentum. Vestibulum id metus a elit eleifend vestibulum.',
        },
        {
            id: 4,
            title: 'Data Scientist',
            company: 'Microsoft',
            location: 'Bellevue, WA',
            description: 'Fusce fermentum nisi sit amet nibh malesuada, sed venenatis urna fermentum. Vestibulum id metus a elit eleifend vestibulum.',
        },
        {
            id: 5,
            title: 'Data Scientist',
            company: 'Microsoft',
            location: 'Bellevue, WA',
            description: 'Fusce fermentum nisi sit amet nibh malesuada, sed venenatis urna fermentum. Vestibulum id metus a elit eleifend vestibulum.',
        },
        {
            id: 6,
            title: 'Data Scientist',
            company: 'Microsoft',
            location: 'Bellevue, WA',
            description: 'Fusce fermentum nisi sit amet nibh malesuada, sed venenatis urna fermentum. Vestibulum id metus a elit eleifend vestibulum.',
        },
        {
            id: 7,
            title: 'Data Scientist',
            company: 'Microsoft',
            location: 'Bellevue, WA',
            description: 'Fusce fermentum nisi sit amet nibh malesuada, sed venenatis urna fermentum. Vestibulum id metus a elit eleifend vestibulum.',
        },
        {
            id: 8,
            title: 'Data Scientist',
            company: 'Microsoft',
            location: 'Bellevue, WA',
            description: 'Fusce fermentum nisi sit amet nibh malesuada, sed venenatis urna fermentum. Vestibulum id metus a elit eleifend vestibulum.',
        },
        {
            id: 9,
            title: 'Data Scientist',
            company: 'Microsoft',
            location: 'Bellevue, WA',
            description: 'Fusce fermentum nisi sit amet nibh malesuada, sed venenatis urna fermentum. Vestibulum id metus a elit eleifend vestibulum.',
        },
        {
            id: 10,
            title: 'Data Scientist',
            company: 'Microsoft',
            location: 'Bellevue, WA',
            description: 'Fusce fermentum nisi sit amet nibh malesuada, sed venenatis urna fermentum. Vestibulum id metus a elit eleifend vestibulum.',
        },
        // Add more job details here
    ];

    return (
        <div className="job-container grid grid-cols-5 mt-8">

            {jobs.map(job => (
                <div className="job-card" key={job.id}>
                    <div className="card-content">
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <p className="text-lg">{job.company}</p>
                        <p className="text-lg">{job.location}</p>
                        <p>{job.description}</p>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
      rounded mt-4 mx-auto'>Apply Now</button>
                        {/* You can add more details or buttons here */}
                    </div>
                </div>
            ))}
            <a href='/' className="flex items-center text-2xl back-link absolute left-0 top-24">
                <IoMdArrowRoundBack />
                <span className="font-bold ml-1">Back</span>
            </a>
        </div>
    );
};

export default MicrosoftComp;
