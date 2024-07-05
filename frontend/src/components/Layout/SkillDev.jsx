import React from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

const resources = [
  {
    title: "Coursera",
    description:
      "Coursera offers online courses from universities and colleges on various topics, including programming, data science, business, and more.",
    link: "https://www.coursera.org/",
  },
  {
    title: "Udemy",
    description:
      "Udemy provides a wide range of online courses taught by industry experts, covering topics such as web development, digital marketing, and personal development.",
    link: "https://www.udemy.com/",
  },
  {
    title: "Codecademy",
    description:
      "Codecademy offers interactive coding lessons in various programming languages, making it easy for beginners to learn coding skills.",
    link: "https://www.codecademy.com/",
  },
  {
    title: "LinkedIn Learning",
    description:
      "LinkedIn Learning offers video courses taught by industry experts on topics such as leadership, project management, and software development.",
    link: "https://www.linkedin.com/learning/",
  },
  {
    title: "Skillshare",
    description:
      "Skillshare provides online classes and workshops on creative topics, including design, photography, and illustration.",
    link: "https://www.skillshare.com/",
  },
];

const youtubeVideos = [
  {
    title: "How to Learn Anything Quickly - Josh Kaufman",
    videoId: "w82a1FT5o88",
  },
  {
    title: "The Skill of Self Confidence - Dr. Ivan Joseph",
    videoId: "w-HYZv6HzAs",
  },
  {
    title: "The Power of Vulnerability - Brené Brown",
    videoId: "iCvmsMzlF7o",
  },
  {
    title: "The Puzzle of Motivation - Dan Pink",
    videoId: "rrkrvAUbU9Y",
  },
  {
    title: "Grit: The Power of Passion and Perseverance - Angela Lee Duckworth",
    videoId: "H14bBuluwB8",
  },
];

const SkillDev = () => {
  return (
    <div className="container mx-auto py-4">
      <div>
        <h1 className='text-3xl font-bold text-center'>Top Courses in <span className='text-blue-500'>Career Development</span></h1>
      <div className="text-center my-8 py-6">
        <Link to="/course" className="btn btn-primary px-6 py-4 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go to Courses
        </Link>
      </div>
      </div>
      <h2 className="text-center text-3xl font-bold my-8">Skill Development Resources</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <div key={index} className="card border  p-4 bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <h3 className="text-3xl text-blue-500 font-bold">{resource.title}</h3>
            <p className="text-gray-700">{resource.description}</p>
            <a
              href={resource.link}
              className="text-blue-600 underline mt-2 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore
            </a>
          </div>
        ))}
      </div>
      <h2 className="text-center text-3xl font-bold my-8">Essential YouTube Videos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {youtubeVideos.map((video, index) => (
          <div key={index} className="col-lg-6">
            <YouTube videoId={video.videoId} />
            <p className="font-bold mb-4">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillDev;
